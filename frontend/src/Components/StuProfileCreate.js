import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StuProfileCreate() {

  const [showForm, setShowForm] = useState(false);

  const [profiledata, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    photo: null,
    department: "",
    programme: "",
    rollno: "",
    batch: "",
    aadarno: "",
    is_registered: false,
    age: "",
    dateofbirth: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setProfileData({ ...profiledata, [name]: checked });
    } else if (type === "file") {
      setProfileData({ ...profiledata, [name]: files[0] });
    } else {
      setProfileData({ ...profiledata, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(profiledata).forEach(key => {
      formData.append(key, profiledata[key]);
    });

    try {
      await axios.post(
        "https://react-django-crud.onrender.com/api/students/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Student Created Successfully");
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-3">

      <button className="btn btn-primary" onClick={() => setShowForm(true)}>
        Create Student
      </button>

      {showForm && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Create Student Profile</h5>
                <button className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">

                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label>First Name</label>
                      <input type="text" name="firstname" className="form-control"
                        value={profiledata.firstname}
                        onChange={handleChange} required />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Last Name</label>
                      <input type="text" name="lastname" className="form-control"
                        value={profiledata.lastname}
                        onChange={handleChange} required />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Email</label>
                      <input type="email" name="email" className="form-control"
                        value={profiledata.email}
                        onChange={handleChange} required />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Photo</label>
                      <input type="file" name="photo" className="form-control"
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Department</label>
                      <input type="text" name="department" className="form-control"
                        value={profiledata.department}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Programme</label>
                      <input type="text" name="programme" className="form-control"
                        value={profiledata.programme}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Roll No</label>
                      <input type="number" name="rollno" className="form-control"
                        value={profiledata.rollno}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Batch</label>
                      <input type="text" name="batch" className="form-control"
                        value={profiledata.batch}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Aadar No</label>
                      <input type="text" name="aadarno" className="form-control"
                        value={profiledata.aadarno}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Age</label>
                      <input type="number" name="age" className="form-control"
                        value={profiledata.age}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Date of Birth</label>
                      <input type="date" name="dateofbirth" className="form-control"
                        value={profiledata.dateofbirth}
                        onChange={handleChange} />
                    </div>

                    <div className="col-md-6 mb-3  form-check" style={{marginTop:"30px", paddingLeft:"35px"}}>
                      <input type="checkbox" name="is_registered"
                        className="form-check-input"
                        checked={profiledata.is_registered}
                        onChange={handleChange} />
                      <label className="form-check-label">Is Registered</label>
                    </div>

                  </div>

                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary"
                    onClick={() => setShowForm(false)}>
                    Close
                  </button>

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
