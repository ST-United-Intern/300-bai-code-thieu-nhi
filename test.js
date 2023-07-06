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

const nums2 = [3, 5, 7, 4];

const findLastPositiveEven = nums2.find((value) => {
  if (value % 2 === 0 && value >= 0 && value) {
    console.log(`Số nguyên dương chẵn đầu tiên trong mảng là: ${value}`);
  }
});
