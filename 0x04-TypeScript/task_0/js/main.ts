// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create 2 students objects
const student1: Student = {
    firstName: "OG",
    lastName: "Stunna",
    age: 21,
    location: "Lagos",
};

const student2: Student = {
    firstName: "Big",
    lastName: "Confidence",
    age: 23,
    location: "Abuja",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table using innerHTML
const table = document.createElement('table');
table.innerHTML = studentsList.map(student => `
    <tr>
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    </tr>
  `).join('');
  document.body.appendChild(table);