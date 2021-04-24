// 1: tạo thư mục qly source code .git
// git init (một lần duy nhất trong 1 folder)
// 2: kiểm tra sự thay đổi của folder
// git status
// 3: lưu trữ sự thay đổi (lưu trữ tạm thời vào cache)
// git add 'tenfile' (lưu sự thay đổi 1 file)
// git add '.' (lưu tất cả sự thay đổi)
// 4: Commit vào repository (lưu vào git)
// git commit -m "lưu file buoi1"

// If you're not ever use Git, config following instructions
// git config --global user.email "huathuque@gmail.com"
// git config --global user.name "Que Hua"

// git init
// tạo file mới
// git add . (lưu file mới)
// git commit -m "message" (đóng gói lưu trữ cho phiên làm việc)
// git push (sync github cloud)

// Crtl + ~ : Mở Terminal nhanh
// 1 - Khai báo biến (dynamic type)
// var a = 5
// let b = 10
// const c = 15
// c = 10
// console.log(c)

// 2 - Kiểu dữ liệu
// let a
// console.log(a)

// let a = 10
// console.log(typeof(typeof(a)))

// 3: object
// mutable (giá trị có thể gán lại), immutable (ngược lại)
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// } 
// Lồng vào nhau thì thêm object
// const teo = {
//     name : {
//         a : "a"
//     }
//     age : 10
// } 
// hoặc 
// console.log(teo.name.a)
// hoặc
// console.log(teo['name.a'])

// 4: Array
// Iterator: cách duyệt dữ liệu theo index

// const arrNames = ["tèo","tí","tủn"]
// console.log(arrNames[0])
// => "tèo"

// 5: Operators - toán từ
// a hoặc b là toán tử
// a + b gọi là biểu thức
// let a = 5
// let b = 10
// let c = a + b

// tăng 1 giá trị a
// a = a + 1
// a++
// a = a - (-1)
// ++a

// let a = 5
// let b = 10
// let c = a++ - b++ - --a - --b + --b - --a + a-- + b--
// console.log(a, b ,c)
// 5 - 10 - --a - --b + --b - --a + a-- + b-- (a=6,b=11)
// 6 - 11 - 5 - 10 + --b - --a + a-- + b-- (a=5,b=10)
// 6 - 11 - 5 - 10 + 9 - 4 + a-- + b-- (a=4,b=10)
// 6 - 11 - 5 - 10 + 9 - 3 + 4 + 10 (a=3,b=8)
// 6 - 11 - 5 + 9 = -2

// 6 : Function
// function showname(name){
//     console.log(name)
// }
// function tinhtong(a , b){
//     return a + b
// }
// showname("Teo")
// const ketqua = tinhtong (5 , 4)
// console.log(ketqua)
// => Teo & 9

// gọi biến ko tồn tại
// function showname(name){
//     console.log(name)
// }
// function tinhtong(a , b){
//     return a + b
// }
// console.log(showname("Teo"))
// => undefined

// có return
// function showname(name){
//     console.log(name)
//     return
// }
// function tinhtong(a , b){
//     return a + b
// }
// console.log(showname("Teo"))
// => undefined

// có return
// function tinhtong(a , b){
//     return a + b
// }
// let a
// console.log(showname("Teo"))
// const ketqua = tinhtong(5,a)
// console.log(ketqua)

// 7: Object method
// const teo = {
//     name : "nguyen van a",
//     age : 10,
//     showInfo : function info(){
//         console.log("Ten : " + this.name + " , Tuoi : " + this.age)
//     }
// }
// teo.showInfo()
// (): tượng trưng cho việc thực thi---

// 8 : Các phép so sánh
// let a = 5
// let b = 10
// chỉ có 6 giá trị bằng false: false, null, '', Nan, undefined, 0 (tham khảo: https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// if(-1){
//     console.log("A lon hon b")
// }else{
//     console.log("A be hon hoac bang B")
// }
// =? TRUE

// let a = 5
// let b = 6
// // a > b = 1
// // a < b = -1
// // a == b = 0
// Toán tử ba ngôi
// bieuthuc ? true : false
// if(a > b){
//     console.log(1)
// }else if(a < b){
//     console.log(-1)
// }else if(a == b){
//     console.log(0)
// }

let a = 5
let b = 5
a > b ? console.log("A lon hon B") : console.log("a be hon hoac bang b")