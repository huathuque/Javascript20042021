// Lesson 1 - Khai báo biến
// let x = 5
// let y = 7
// let z = x + y
// let u = x - y
// let d = x * y
// let g = x / y
// let k = x % y
// console.log(z)
// console.log(u)
// console.log(d)
// console.log(g)
// console.log(k)

// Lesson 2 - Kiểu dữ liệu
// var company = "ABC Bakery"
// var phonenumber = 289516467
// var tax = null
// var directors = ['Kao Sieu Luc', 'Kao Hui San']

// Lesson 3 - Object
// const Nhi = {
//     firstAndLastName : "Tat Que Nhi",
//     Height : "5f10inch",
//     age : 25,
// }
// console.log(Nhi)

// Lesson 4 - Arraylist
// const listAnimal = [
//     {name : 'Pig', age : 10},
//     {name : 'Dog', age : 6}
// ]
// console.log(listAnimal[0])

// Lesson 5 - Toán tử Operator
// var a = 10
// var h = 20

// var s = 0.5 * a * h
// console.log(s)

// Lesson 6 - Gán phép tính
// var a = 10
// var x = --a + a++
// // x = 9 + a++ (a = 9)
// // x = 9 + 9 (a = 10)
// console.log(x,a)

// var a = 10
// var b = 18
// var x = a-- + b++ - ++b - ++a
// x = 10 + 18 - ++b - ++a (a = 9, b = 19)
// x = 9 + 19 - 20 - 10 (a = 10, b = 20)
// x = 9 + 19 - 20 - 10 = 28 - 30 = -2
// console.log(x,a,b)

// Lesson 8 - Function
// function getBoxVolume(w, h ,l){
//     return w * h * l
// }
// const result = getBoxVolume(10, 20, 30)
// console.log(result)

// Lesson 9 - Object Method
// const rectangle = {
//     w : 10,
//     h : 20,
//     getWidth : function(){
//         console.log(this.w)
//     },
//     getHeight : function(){
//         console.log(this.h)
//     },
//     getArea : function(){
//         console.log(this.h * this.w)
//     }
// }

// rectangle.getWidth()
// rectangle.getHeight()
// rectangle.getArea()

// Lesson 10 - Các phép so sánh
// var a = [1, 2]
// var b = [1, 2]
// // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// a === b ? console.log('A lon hon B') : console.log('A be hon hoac bang B')
// Tự giải thích: Dạng chuỗi hoặc mảng thì phép so sánh đều cho ra kết quả false như nhau
// Thầy giải thích: 
// chuỗi so với chuỗi, so sánh mảng đều so sánh vùng nhớ => luôn cho ra kết quả false
// hoặc chuỗi thì sẽ so sánh ký tự đầu
// hoặc chuỗi so với số thì so theo dạng số

// Lesson 11 - Vòng lặp for
//hoặc
// var a = [1,2,4,8,16]
// for(let i = a.length - 1 ; i >= 0 ; i--){
//     console.log(a[i])
// }

// for(let i = a.length ; i >= 1 ; i--){
//     console.log(a[i-1])
// }
// another example: 
// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
//   }

// another example: 
// run i runs from 0 to 9
// for(let i = 9 ; i >= 0 ; i--){
//     console.log(i)
// }

// Viết function trả về tích các số từ start đến end, không tính end
// Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
// function calculate(start, end) {
//     for(let i = start ; i < end ; i++){
//         console.log(i)
//     }
    
//  }

// console.log(calculate(2,5)) // không biết làm

// Lesson 12 - For...of
// Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
// function multiply(arr) {
//     if (Array.isArray(arr)){
//         let result = 1
//         for (const value of arr){
//             result = result * value (1 nhân với giá trị trong mảng)
//             result *= value
//         }
//         return result
//     }else{
//         return "Giá trị không phải là mảng"
//     }
// }
// console.log(multiply([2, 3, 4])); // expect: 24

// kiểu dữ liệu nguyên thủy không có object
// check xem (arr) có phải là mảng không?
// function multiply(arr){
//     if (Array.isArray(arr)){
// }else{
//     return "Giá trị không phải là mảng"
// }
// = phép gán
// == phép so sánh về giá trị
// === phép so sánh về kiểu dữ liệu (strict equal - chặt chẽ)

// Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
// Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// }

// function getkey(object){
//     for (const key in object){
//         console.log(key)
//         for (const keyBedroom in object[key]){
//             console.log(keyBedroom)
//             for (const keyBed in object[key][keyBedroom]){
//                 console.log(keyBed)
//             }
//         }
//     }
// }

// getkey(apartment)

// Lesson 13 - Array Method
// Trừ 3 giá trị cuối
// function removeEnd(arr,n){
//     arr.splice(-n, n)
//     return arr
// }
// console.log(removeEnd([2 , 3 , 1 , 8 , 9 , 7], 3 ))

// lấy 5 phần tử đầu tiên của mảng.
// Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng
// function removeEnd(arr,n){
//     return arr.slice(0,n)
// }
// console.log(removeEnd([1 , 2 , 3, 4, 5, 6], 5 ))

// Lesson 14 - Callback tham số
// Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
// Khai báo 1 biến result có giá trị là 1 empty array
// Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
// Trả về result array
// function transform(numbers, callback) {
//     const newArr = []
//     for (const value of numbers){
//         newArr.push(callback(value)) //chỗ này chưa hiểu khúc callback(value)
//     }
//     return newArr
// }

// function double(num) {
//   return num * 2;
// }

// var output = transform([2, 4, 6], double);
// console.log(output);
// Expect: [4, 8, 12]

// Lesson 15 - Map
// Ví dụ 1: 
// Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
// Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
// Khai báo tripple function ở đây
// var numbers = [10, 5, 8];
// var triplenumbers = numbers.map(function(number, index){
//     return number * 3
// })
// console.log(triplenumbers)

// Ví dụ 2:
// Make an array of strings of the names
// function namesOnly(arr) {
//     const newArr = arr.map(function(person){
//       return person.name
//     })
//     console.log(newArr)
// }

// namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ])
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

