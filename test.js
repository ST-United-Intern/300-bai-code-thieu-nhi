//ARRAY-CHECK-09: Kiểm tra mảng có tăng dần không.
const isIncreasingNumberList = [1, 1];

isIncreasingNumberList.sort((arr, index) => {
  if (arr > index) {
    console.log("true");
  } else {
    console.log("false");
  }
});
//ARRAY-CHECK-10: Kiểm tra mảng có giảm dần không

const isDereasingNumberList = [8, 1];

isDereasingNumberList.sort((arr, index) => {
  if (arr < index) {
    console.log("true");
  } else {
    console.log("false");
  }
});

//ARRAY-FIND-01: Tìm số dương nhỏ nhất trong mảng
const numbers = [5, 4, 7, -1, 8, 7, 3];

const findMinPositive = numbers.reduce(function (arr, index) {
  return arr < index && arr >= 0 ? arr : index;
});
console.log(`số nguyên dương nhỏ nhất là: ${findMinPositive}`);

let array = [5, 4, 7, 2, 8, 12, 7, 3];
//ARRAY-FIND-03: Tìm số dương chẵn đầu tiên trong mảng
const nums = [3, 5, 7, 4];

const findFirstPositiveEven = nums.find((value) => {
  if (value % 2 === 0 && value >= 0) {
    console.log(`Số nguyên dương chẵn đầu tiên trong mảng là: ${value}`);
  }
});

//ARRAY-FIND-04: Tìm số âm lẻ cuối cùng trong mảng
function check_odd_even(n) {
  let flag = 1;
  if (n % 2 == 0) flag = 0;
  return flag;
}

function findLastPositiveEven(array) {
  arrays.find((arr) => {
    arr < 0;
  });
  for (let i = array.length - 1; i >= 0; i--) {
    if (check_odd_even(array[i]) == 1) return array[i];
  }
}

let arrays = [-5, 4, 6, -7, 2, 8, -9];

console.log("Số lẻ cuối cùng: ", findLastPositiveEven(arrays));

//ARRAY-FIND-14: Tìm sản phầm đầu tiên có free ship
const productList = [
  { id: 1, name: "IPhone 5", isFreeShip: false },
  { id: 2, name: "IPhone X", isFreeShip: true },
  { id: 3, name: "IPhone 12 Pro", isFreeShip: true },
];

const findProductHavingFreeShip = productList.find((arr) => {
  return arr.isFreeShip === true;
});
console.log(findProductHavingFreeShip);

//ARRAY-CHECK-02: Kiểm tra có số lẻ và chia hết cho 3 không
const oddNumber = [3, 9, 2];

const hasOddNumberDivisibleBy3 = oddNumber.every((arr) => {
  return arr % 3 === 0;
});
console.log(`Mảng này có chia hết cho 3 không? : ${hasOddNumberDivisibleBy3}`);

//ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
const studentList = [
  { id: 1, name: "Alice", gender: "male" },
  { id: 2, name: "aliCE", gender: "female" },
  { id: 3, name: "Easy Frontend", gender: "male" },
];
const hasAlice = studentList.some((arr, i) => {
  const query = "alice".toLowerCase();
  if (query === arr.name.toLowerCase()) {
    return true;
  }
});
console.log(hasAlice);

// const productItems = [
//   { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
//   { id: 2, name: "Iphone 16 Pro Max", isFreeShip: false, price: 1500000 },
//   {
//     id: 3,
//     name: "Iphone 13 Pro Max",
//     isFreeShip: false,
//     price: 15000,
//   },
// ];
// const hasFreeShip = productItems.reduce((arr, index) => {
//   //   arr.isFreeShip === true;
//   return arr < index && arr >= 0 ? arr : index;
// });
// console.log(hasFreeShip);

function findSecondLargestNumber(n) {
  let flag = 0;
  let i = 0;
  while (i <= n) {
    if (Math.pow(i, 2) == n) {
      flag = 1;
      break;
    }
    i++;
  }
  return flag;
}

let array3 = [5, 4, 16, 2, 8, 7, 3];

for (let i = array3.length - 1; i >= 0; --i) {
  let x = array3[i];
  let check = findSecondLargestNumber(x);
  if (check == 1) {
    console.log(`Số chính phương cuối cùng là: ${array3[i]}`);
    break;
  }
}
