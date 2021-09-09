var express = require('express')
var router = express.Router()
import { getStudent, getStudents, postStudent, updateStudent, deleteStudent} from '../action/students.js'

router.get('/', getStudents())

router.get('/student/id/:id', getStudent())

router.post('/', postStudent())

router.put('/update/id/:id', updateStudent())

router.delete('/delete/id/:id', deleteStudent())

router.get('/search/:keyword', searchStudent())

module.exports = router