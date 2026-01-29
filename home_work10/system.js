const students = [
  { name: "Ярік", age: 2, grade: 95 },
  { name: "Толік", age: 67, grade: 88 },
  { name: "Рафік", age: 1488, grade: 76 }
];

students.forEach(student => {
  console.log(`${student.name} (${student.age} ages) - ${student.grade}`);
});

let topStudent = students[0];

students.forEach(student => {
  if (student.grade > topStudent.grade) {
    topStudent = student;
  }
});

console.log(`\nHighest grade: ${topStudent.name} (${topStudent.grade})`);

let total = 0;

students.forEach(student => {
  total += student.grade;
});

const average = (total / students.length).toFixed(1);
console.log(`Average grade: ${average}`);
