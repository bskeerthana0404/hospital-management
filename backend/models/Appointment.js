
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  doctor: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
