// api/booking.js
import sendgrid from "@sendgrid/mail";
import { google } from "googleapis";

const {
  SENDGRID_API_KEY,
  SENDER_EMAIL,
  RECIPIENT_EMAIL,
  SHEET_ID,
  GOOGLE_SERVICE_EMAIL,
  GOOGLE_PRIVATE_KEY
} = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY);

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function appendToSheet(row) {
  if (!SHEET_ID || !GOOGLE_SERVICE_EMAIL || !GOOGLE_PRIVATE_KEY) return;
  const auth = new google.auth.JWT(
    GOOGLE_SERVICE_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A:F", // adjust if your sheet/tab name is different
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row]
    }
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  try {
    // Accept JSON payload
    const body = req.headers["content-type"] && req.headers["content-type"].includes("application/json")
      ? req.body
      : req.body || {};

    // Honeypot check
    if (body.hp && String(body.hp).trim() !== "") {
      return res.status(200).json({ status: "ignored", reason: "honeypot" });
    }

    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim() || "N/A";
    const service = (body.service || "").trim();
    const message = (body.message || "").trim() || "";

    if (!name || !phone || !service) {
      return res.status(400).json({ status: "error", message: "Missing required fields" });
    }

    // Send email using SendGrid
    const msg = {
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      subject: `New Booking Request — ${service}`,
      html: `
        <h3>New booking request</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message)}</p>
        <hr>
        <p>Received on: ${new Date().toLocaleString()}</p>
      `
    };

    await sendgrid.send(msg);

    // Append to Google Sheet
    const timestamp = new Date().toLocaleString();
    await appendToSheet([timestamp, name, phone, email, service, message]);

    return res.status(200).json({ status: "success", message: "Booking sent" });
  } catch (err) {
    console.error("booking error:", err);
    // if SendGrid returns an error object, include helpful info for logs (but not in production response)
    return res.status(500).json({ status: "error", message: "internal_error" });
  }
}
