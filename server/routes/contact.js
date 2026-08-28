import express from "express";
import rateLimit from "express-rate-limit";
import Message from "../models/Message.js";
import { sendContactMail } from "../mailer.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 12,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: "Too many messages. Please try again later." }
});

function validate(body) {
  const errors = [];
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email is required.");
  if (message.length < 5) errors.push("Message must be at least 5 characters.");

  return { errors, data: { name, email, message, fileName: String(body.fileName || "").trim() } };
}

router.post("/", contactLimiter, async (req, res) => {
  const { errors, data } = validate(req.body || {});

  if (errors.length > 0) {
    return res.status(400).json({ ok: false, message: errors.join(" ") });
  }

  try {
    const saved = await Message.create({
      ...data,
      userAgent: req.get("user-agent") || ""
    });

    try {
      await sendContactMail(saved);
    } catch (mailError) {
      console.error("[contact] mail failed:", mailError.message);
    }

    return res.status(201).json({
      ok: true,
      message: "Message sent successfully!",
      id: saved._id
    });
  } catch (error) {
    console.error("[contact] save failed:", error);
    return res.status(500).json({ ok: false, message: "Could not save your message. Please try again." });
  }
});

router.get("/", async (_req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50).lean();
    return res.json({ ok: true, count: messages.length, messages });
  } catch (error) {
    console.error("[contact] list failed:", error);
    return res.status(500).json({ ok: false, message: "Could not load messages." });
  }
});

export default router;
