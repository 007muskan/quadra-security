import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    service: String,
    address: String,
    pincode: String,
    date: String,
    timeSlot: String,
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
