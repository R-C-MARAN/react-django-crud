import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileCards() {

    const [students, setStudents] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        axios.get("https://react-django-crud.onrender.com/api/students/")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <div className="row" >
                {students.map(student => (
                    <div key={student.id} className="col-md-3 mb-4 " style={{ width: '280px' }} >
                        <div className="card shadow-sm h-100" >

                            <div className="row g-0 align-items-center">

                                {/* LEFT SIDE - IMAGE */}
                                <div className="col-md-4 text-center p-2 position-relative">
                                    <img
                                        src={
                                            student.photo
                                                ? student.photo.startsWith("http")
                                                    ? student.photo
                                                    : `https://react-django-crud.onrender.com/api/students/${student.photo}`
                                                : "/default-avatar.png"
                                        }
                                        alt={student.firstname}
                                        className="rounded-circle img-fluid"
                                        style={{ objectFit: "cover", borderRadius: "50%", width: "80px", height: "80px", cursor: "pointer" }}

                                        onClick={() =>
                                            setSelectedImage(
                                                student.photo.startsWith("http")
                                                    ? student.photo
                                                    : `http://localhost:8000${student.photo}`
                                            )
                                        }
                                    />

                                    {student.is_registered && (
                                        <span
                                            className="position-absolute bg-success rounded-circle"
                                            style={{
                                                width: "18px",
                                                height: "18px",
                                                bottom: "13px",
                                                right: "10%",
                                                border: "2px solid white"
                                            }}
                                        ></span>
                                    )}
                                </div>

                                {/* RIGHT SIDE - CONTENT */}
                                <div className="col-md-8">
                                    <div className="card-body p-0 ">
                                        <h5 className="card-title mb-2">
                                            {student.firstname} {student.lastname}
                                        </h5>

                                        <p className="mb-1">
                                            {student.rollno}
                                        </p>

                                        {/* <p className="mb-1">
                                             {student.department}
                                        </p> */}

                                        <p className="mb-1">
                                            {student.programme}
                                        </p>

                                        {/* <p className="text-muted">{student.email}</p> */}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                ))}
            </div>
            {selectedImage && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-transparent border-0">
                            <div className="modal-body text-center">
                                <img
                                    src={selectedImage}
                                    alt="Full"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}
