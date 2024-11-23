import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullName = (event) => {setfullName(event.target.value)}
  const handleImage = (event) => {setImage (event.target.value)}
  const handlePhone = (event) => {setPhone (event.target.value)}
  const handleEmail = (event) => {setEmail (event.target.value)}
  const handleProgram = (event) => {setProgram (event.target.value)}
  const handleGraduationYear = (event) => {setGraduationYear (event.target.value)}
  const handleGraduated = (event) => {setGraduated (event.target.checked)}


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          {/* <p>{fullName}</p> */}
          <label>
            Full Name
            <input value={fullName} onChange={handleFullName} name="fullName" type="text" placeholder="Full Name" />
          </label>
          {/* <p>{image}</p> */}
          <label>
            Profile Image
            <input value={image} onChange={handleImage} name="image" type="url" placeholder="Profile Image" />
          </label>
          {/* <p>{phone}</p> */}
          <label>
            Phone
            <input value={phone} onChange={handlePhone}  name="phone" type="tel" placeholder="Phone" />
          </label>
          {/* <p>{email}</p> */}
          <label>
            Email
            <input value={email} onChange={handleEmail}  name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
        {/* <p>{program}</p> */}
          <label>
            Program
            <select              value={program} onChange={handleProgram}  name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>
          {/* <p>{graduationYear}</p> */}
          <label>
            Graduation Year
            <input value={graduationYear} onChange={handleGraduationYear} 
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>
          {/* <p>{graduated ? "yes" :"no"}</p> */}
          <label>
            Graduated
            <input checked={graduated} onChange={handleGraduated}  name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
