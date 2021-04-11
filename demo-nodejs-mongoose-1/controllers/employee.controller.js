const { Employee } = require('../models');
const config = require('../config');


const create = async (req, res) => {
  console.log('create emp');

  const { empId, empName, empSalary } = req.body;

  let status;
  let message;

  try {
    const emp = new Employee({ empId, name: empName, salary: empSalary  });
    await emp.save();
    status = 200;
    message = 'Employee created successfully';
  } catch (err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request';
  }

  res.status(status).send({ message });
}

const getAll = async (req, res) => {
  let status;
  let message;

  const { filterByName } = req.query;
  
  console.log(filterByName);
  try {
    const query = {};
    if (filterByName) {
      query['name'] = filterByName;
    }
    message = await Employee.find(query);
    status = 200;
  } catch(err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request'
  }
  res.status(status).send({ message: message.map((emp) => ({
    empId: emp.empId,
    empSalary: emp.salary,
    empName: emp.name
  })) });
}



const getById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  let status;
  let message;

  try {
    const emp = await Employee.find({ empId: id });
    status = 200;
    message = emp;

  } catch(err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request!!!'
  }

  res.status(status).send({ message });
}

const deleteById = async (req, res) => {//delete by id
  console.log(req.params);
  const { id } = req.params;

  let status;
  let message;

  try {
    const emp = await Employee.deleteOne({ empId: id});
    status = 200;
    message = `Removed document with id:${id}.`;

  } catch(err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request!!!'
  }

  res.status(status).send({ message });
}


const sortById = async (req, res) => {//sort by id
  let status;
  let message;

  const { filterById } = req.query;
  
  console.log(filterById);
  try {
    const query = {};
    if (filterById) {
      query['empId'] = filterById;
    }
    message = await Employee.find().sort({empId:-1});
    status = 200;
  } catch(err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request'
  }
  res.status(status).send({ message: message.map((emp) => ({
    empId:emp.empId,
    name:emp.name,
    salary:emp.salary
  })) });
}


// const sortByName = async (req, res) => {//sort by name
//   let status;
//   let message;

//   const { filterByName } = req.query;
  
//   console.log(filterByName);
//   try {
//     const query = {};
//     if (filterByName) {
//       query['name'] = filterByName;
//     }
//     message = await Student.find().sort({name:1});
//     status = 200;
//   } catch(err) {
//     console.log('Some error occured', err);
//     console.log(err.stack);
//     status = 400;
//     message = 'Bad request'
//   }
//   res.status(status).send({ message: message.map((stu) => ({
//     roll_no:stu.roll_no,
//     classs:stu.classs,
//     name:stu.name,
//    subject:stu.subject
//   })) });
// }
// const updateByRollNo=async(req,res)=>{//update by roll_no
//     const { rollno } = req.params;
//     console.log("updating "+req.params)
//     let status;
//     let message;
//     const name=req.body.name;
//     const classs=req.body.classs;
//     const subject=req.body.subject;
//     try {
//       const stu = await Student.findOne({roll_no:rollno});
//       if(name)
//       stu.name=name;
//       if(classs)
//       stu.classs=classs;
//       if(subject)
//       stu.subject=subject;
//       await stu.save();
//       status = 200;
//       message = "Updated Student data of roll Number "+rollno;

//     } catch(err) {
//       console.log('Some error occured', err);
//       console.log(err.stack);
//       status = 400;
//       message = 'Bad request!!!'
//     }
  
//     res.status(status).send({ message });
//   }

//   const updateByName=async(req,res)=>{//update by name
//     const { name } = req.params;
//     console.log("updating "+req.params)
//     let status;
//     let message;
//     const roll_no=req.body.roll_no;
//     const classs=req.body.classs;
//     const subject=req.body.subject;
//     try {
//       const stu = await Student.findOne({name:name});
//       if(roll_no)
//       stu.roll_no=roll_no;
//       if(classs)
//       stu.classs=classs;
//       if(subject)
//       stu.subject=subject;
//       await stu.save();
//       status = 200;
//       message = "Updated Student data of Name "+name;

//     } catch(err) {
//       console.log('Some error occured', err);
//       console.log(err.stack);
//       status = 400;
//       message = 'Bad request!!!'
//     }
  
//     res.status(status).send({ message });
//   }

// module.exports = {//export all the above
//   create,
//     getAll,
//     getByRollNo,
//      deleteByRollNo,
//      deleteByName,
//      sortByName,
//      sortByRollNo,
//       updateByRollNo,
//       updateByName
// }

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  sortById
}