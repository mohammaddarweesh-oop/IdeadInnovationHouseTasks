// const mark = prompt("Enter Your Mark ");

// const markCheckerWithIf = (mark) => {
//   if (mark >= 95 && mark <= 100) {
//     console.log("A+");
//   } else if (mark >= 80 && mark <= 90) {
//     console.log("A");
//   } else if (mark >= 70 && mark <= 79) {
//     console.log("B+");
//   } else if (mark >= 60 && mark <= 69) {
//     console.log("C");
//   } else if (mark >= 50 && mark <= 59) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// };

// const markCheckerWithSwich = (mark) => {
//   switch (true) {
//     case mark >= 95 && mark <= 100:
//       console.log("A+");
//       break;
//     case mark >= 80 && mark < 95:
//       console.log("A");
//       break;
//     case mark >= 70 && mark < 80:
//       console.log("B+");
//       break;
//     case mark >= 60 && mark < 70:
//       console.log("C");
//       break;
//     case mark >= 50 && mark < 60:
//       console.log("D");
//       break;
//     case mark >= 0 && mark <= 49:
//       console.log("F");
//     default:
//       console.log("Falied");
//   }
// };

// const switch1 = (val) => {
//   switch (val) {
//     case 1:
//       console.log("Cool");
//       break;

//     default:
//       console.log("def");
//       break;
//   }
// };

// const stringMethods = (str) => {
//   console.log(str.toUpperCase());
// };

// stringMethods("mohammad");

// console.log("mosa".includes("sa"));
// console.log("hello World".replace("hello", "hi"));
// console.log("hello World hello Java".replaceAll("hello", "hi"));
// console.log("    mohammad@example.com     ");
// console.log("    mohammad@example.com     ".trim());
// console.log("    mohammad@example.com     ".trim().indexOf("moh"));

// console.log("mohammad".indexOf("mohammad"));
// console.log(Math.floor(Math.random() * 14) + 1);

// ==================== Task Solution ===========================

let arr = ["mohammad", "ahmad", "sami", ["sara", "salma", "wedad"]];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j].toUpperCase());
    }
  } else {
    console.log(arr[i].toUpperCase());
  }
}

console.log("============================================");

function printUppercase(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printUppercase(item);
    } else {
      console.log(item.toUpperCase());
    }
  });
}

printUppercase(arr);
