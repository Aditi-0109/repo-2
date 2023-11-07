// Require Mongoose
const mongoose = require("mongoose");



// Define a schema
const Schema = mongoose.Schema;
const express = require("express");
const app = express();
const PORT = 5000;
const DATABASE_URL = "mongodb+srv://schooluser:schoolpassword@school.jat13nj.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
 const StudentSchema = mongoose.model("Students", Student);
main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(DATABASE_URL);
}

 
  const StudentsSchema = new Schema({
    Name: { type: String, required: true },
    Enrollment: { type: String, required: true },

  });
  const Student = mongoose.model("Students", Student);
  const CoursesSchema = mongoose.model("Courses", Courses);

  CoursesSchema = new Schema({
    Course: { type: String, required: true },
    Enrollment: { type: String, required: true },

  });
  
  const EnrollmentSchema = mongoose.model("Courses", Enrollment);
  
EnrollmentSchema = new Schema({
    Enrollemnt:{type : true},
    CoursesEnroll:{type: true}
  });
  const Enrollment = mongoose.model("Enroll", Enrollment);
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.post("/Enrollment", async (req, res) => {
    const student = new Enroll({
      Enrollment: req.body.Enroll,
  
    });
  
    await Enrollment.save();
    res.status(200).send(Enroll._id);
  });
  