import Doctor from "../models/Doctor.js";

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const addDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, image } = req.body;
    const doctor = new Doctor({ name, specialization, experience, image });
    await doctor.save();
    res.json({ msg: "Doctor Added", doctor });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
