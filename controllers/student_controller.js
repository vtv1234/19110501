const students = require('../models/students');

const id_valid = ['19110501', '19110042', '19110491'];

const getAllStudents = (request, response) => {
    console.log(`'${request.method}' | http://localhost:5000${request.url}`);
    response.status(200).json(students.mygroup);
};
const addStudent = (request, response) => {
    console.log(`'${request.method}' | http://localhost:5000/19110501${request.url}`);
    if ((request.body.id != undefined) && (students.mygroup.length < 3) && (id_valid.includes(request.body.id)) &&
        (students.mygroup.find(data => data.id == parseInt(request.body.id)) == undefined)) {
        const student = {
            id: request.body.id,
            name: request.body.name
        };
        students.mygroup.push(student);
        return response.status(201).json(student);
    }
    response.status(400).json("Not valid");
};
const getStudent = (request, response) => {
    console.log(`'${request.method}' | http://localhost:5000/19110501${request.url}`);
    const student = students.mygroup.find(data => data.id == parseInt(request.params.id));
    if (student != undefined) {
        return response.status(200).json(student);
    }
    response.status(400).json({ error: 'not valid' });
};
const sendMessage = (request, response) => {
    console.log(`'${request.method}' | http://localhost:5000/message${request.url}`);
    if (request.params.id == undefined) {
        return response.render('message', { mygroup: students.mygroup });
    } else if (id_valid.includes(request.params.id)) {
        for (const student of students.mygroup) {
            if (student.id == request.params.id) {
                return response.render('message', { mygroup: [student] });
            }
        }
    }
    response.render('message', { mygroup: [] });
};

module.exports = { getAllStudents, addStudent, getStudent, sendMessage };