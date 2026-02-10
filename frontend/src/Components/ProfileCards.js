import React, { useEffect } from "react";
import axios from "axios";


export default function ProfileCards(){

const [students, setStudents] = React.useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/students/')
        .then(res => { 
            setStudents(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}, []);

return(
        <div> 
        {students.map(student => (
            <div key={student.id}>
                <img src={student.photo} alt={student.firstname} />
                <h2>{student.firstname}</h2>
                <h2>{student.rollno}</h2>
                <h2>{student.department}</h2>
                <h2>{student.programme}</h2>
            </div>
        ))}
        </div>
)
}
