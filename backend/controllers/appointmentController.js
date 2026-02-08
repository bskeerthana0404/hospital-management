import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, email, date, doctor } = req.body;

    if (!name || !email || !date || !doctor) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({ name, email, date, doctor });
    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
};

// 👇 ADD THIS function
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};

