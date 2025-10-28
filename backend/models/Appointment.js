/*import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  date: String,
  time: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
*/
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  doctor: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
