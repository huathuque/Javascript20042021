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
// // x = 10 + 18 - ++b - ++a (a = 9, b = 19)
// // x = 9 + 19 - 20 - 10 (a = 10, b = 20)
// // x = 9 + 19 - 20 - 10 = 28 - 30 = -2
// console.log(x,a,b)

// Lesson 8 - Function
// function getBoxVolume(w, h ,l){
//     return w * h * l
// }
// const result = getBoxVolume(10, 20, 30)
// console.log(result)

// Lesson 9 - Object Moethod
// const rectangle = {
//     w : 10,
//     h : 20,
    
// }

// Lesson 10 - Các phép so sánh
// var a = [1, 2]
// var b = [1, 2]
// // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// a === b ? console.log('A lon hon B') : console.log('A be hon hoac bang B')
// Tự giải thích: Dạng chuỗi hoặc mảng thì phép so sánh đều cho ra kết quả false như nhau

// Lesson 11 - Vòng lặp for
// var a = [1,2,4,8,16]
// for(let i = 0 ; i < a.length ; i++){
//     console.log(a[i])
// }

// Lesson 12 - For...of
// Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
// function multiply(arr) {
//     if (Array.isArray(arr)){
//         let result = 1
//         for (const value of arr){
//             result *=value
//         }
//         return result
//     }else{
//         return "Giá trị không phải là mảng"
//     }
// }
// console.log(multiply([2, 3, 4])); // expect: 24

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
//     arr.splice(arr.length - n, n)
// }
// console.log(removeEnd([2 , 3 , 1 , 8 , 9 , 7], 3 ))

// lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng
// function removeEnd(arr,n){
//     return arr.slice(0,n)
// }
// console.log(removeEnd([1 , 2 , 3, 4, 5, 6], 5 ))