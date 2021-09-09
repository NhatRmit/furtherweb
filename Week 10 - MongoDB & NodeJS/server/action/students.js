import Student from '../models/students.js'

export default getStudent = (req, res) => {
    Student.findById({_id: req.params.id}, function(err, student) {
        res.send(student)
    })
}

export default getStudents = (req, res) => {
    Student.find({}, function(err, students) {
        res.send(students)
    })
}

export default postStudent = (req, res) => {
    Student.create(req.body, function(err, student){
        res.send(student)
    })
}

export default updateStudent = (req, res) => {
    Student.findOneAndUpdate({ _id: req.body.id }, {name: req.body.name}, function(err, student){
        res.send(student)
    })
}

export default deleteStudent = (req, res) => {
    Student.deleteOne({_id: req.params.id}, function(err, result) {
        res.send(result)
    })
}

export default searchStudent = (req, res) => {
    Student.find({name: req.params.keyword}, function(err, result) {
        res.send(result)
    })
}