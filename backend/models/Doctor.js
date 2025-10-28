import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  image: String,
});

export default mongoose.model("Doctor", doctorSchema);
