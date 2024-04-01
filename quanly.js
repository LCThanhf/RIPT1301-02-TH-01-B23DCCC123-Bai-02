
let students = [];

let tempStudentData = {};

function displayStudents() {
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = '';
  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.studentId}</td>
        <td>${student.name}</td>
        <td>${student.dob}</td>
        <td>${student.performance}</td>
        <td>${student.address}</td>
        <td>${student.phone}</td>
        <td>${student.email}</td>
        <td>${student.class}</td>
        <td>
          <button onclick="editStudent(${index})">Sửa</button>
          <button onclick="deleteStudent(${index})">Xóa</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function addStudent() {
  const studentId = prompt('Enter student ID:');
  const name = prompt('Enter student name:');
  const dob = prompt('Enter student date of birth (YYYY-MM-DD):');
  const performance = prompt('Enter student performance (Tốt/Khá/Trung Bình):');
  const address = prompt('Enter student address:');
  const phone = prompt('Enter student phone number:');
  const email = prompt('Enter student email:');
  const classValue = prompt('Enter student class:');

  const newStudent = { studentId, name, dob, performance, address, phone, email, class: classValue };
  students.push(newStudent);
  displayStudents();
}

function editStudent(index) {
  const student = students[index];
  tempStudentData = { ...student };

  const studentId = prompt('Enter new student ID:', student.studentId);
  if (studentId !== null) tempStudentData.studentId = studentId;

  const name = prompt('Enter new student name:', student.name);
  if (name !== null) tempStudentData.name = name;

  const dob = prompt('Enter new student date of birth (YYYY-MM-DD):', student.dob);
  if (dob !== null) tempStudentData.dob = dob;

  const performance = prompt('Enter new student performance (Tốt/Khá/Trung Bình):', student.performance);
  if (performance !== null) tempStudentData.performance = performance;

  const address = prompt('Enter new student address:', student.address);
  if (address !== null) tempStudentData.address = address;

  const phone = prompt('Enter new student phone number:', student.phone);
  if (phone !== null) tempStudentData.phone = phone;

  const email = prompt('Enter new student email:', student.email);
  if (email !== null) tempStudentData.email = email;

  const classValue = prompt('Enter new student class:', student.class);
  if (classValue !== null) tempStudentData.class = classValue;

  const confirmation = confirm('Do you want to save changes?');
  if (confirmation) {
    students[index] = { ...tempStudentData };
    displayStudents();
  } else {
    tempStudentData = {}; 
  }
}

function deleteStudent(index) {
  const confirmation = confirm('Are you sure you want to delete this student?');
  if (confirmation) {
    students.splice(index, 1);
    displayStudents();
  }
}

displayStudents();

document.getElementById('addStudentBtn').addEventListener('click', addStudent);
