const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

require("dotenv").config();

const Mentor = require("./Models/Mentor");
const Student = require("./Models/Student");

const mani = express();

const PORT = process.env.PORT;
const DB_URL= process.env.DB_URL;

mani.use(bodyparser.json());


mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));
mani.post("/mentor",async (req,res)=>{
    try {
        const mentor =new Mentor(req.body);
        await mentor.save();
        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
});

mani.post("/student",async (req,res)=>{
    try {
        const student =new Student(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

mani.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });
      students.forEach((student) => {
        student.cMentor = mentor._id;
        student.save();
      });
      mentor.students = [
        ...mentor.students,
        ...students.map((student) => student._id),
      ];
      await mentor.save();
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  mani.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
    try {
      const student = await Student.findById(req.params.studentId);
      const nMentor = await Mentor.findById(req.params.mentorId);
  
      if (student.cMentor) {
        student.pMentor.push(student.cMentor);
      }
  
      student.cMentor = nMentor._id;
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  mani.get("/mentor/:mentorId/students", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId).populate(
        "students"
      );
      res.send(mentor.students);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  mani.get("/student/:studentId/pMentor", async (req, res) => {
    try {
      const student = await Student.findById(req.params.studentId).populate(
        "pMentor"
      );
      res.send(student.pMentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });

mani.listen(PORT,()=>{
    console.log(`server running in the port- ${PORT}`);
})