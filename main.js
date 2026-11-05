class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    return sum / this.grades.length;
  }
  getGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    if (avg >= 50) return "E";
    return "F";
  }
  getResult() {
    let avg = this.getAverage();
    if (avg >= 50 && this.attendance >= 75) return "ناجح";
    return "يحتاج مراجعة";
  }
}

let studentsList = [
  new Student(1, "Ahmed", [80, 85, 90], 90),
  new Student(2, "Sara", [60, 65, 70], 85),
  new Student(3, "Omar", [42, 45, 47], 80),
  new Student(4, "Laila", [40, 48, 44], 60),
];

studentsList.forEach((s) => {
  let avg = s.getAverage();
  console.log(s.name + " | " + avg.toFixed(2) + " | " + s.getGrade(avg) + " | " + s.getResult());
});

let struggling = studentsList.filter((s) => {
  let a = s.getAverage();
  return a >= 40 && a <= 49;
});

let grace = struggling.map((s) => s.getAverage() + 5);

let total = grace.reduce((a, v) => a + v, 0);
let avgGrace = struggling.length === 0 ? 0 : total / struggling.length;

console.log(struggling.map((s) => s.name));
console.log(grace);
console.log(avgGrace.toFixed(2));