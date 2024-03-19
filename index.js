import chalk from "chalk";

const wilders = [
  { name: "Aurélien", color: "#cccccc" },
  { name: "Chaymae", color: "#ffd1dc" },
  { name: "Michael", color: "#006994" },
  { name: "Yahn", color: "#7b481c" },
  { name: "Anne", color: "#f6cf57" },
];

for (let student of wilders) {
  console.log(chalk.hex(student.color)(student.name));
}
