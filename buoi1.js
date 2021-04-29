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

// Crtl + ~ : Mở Terminal nhanh shorthand
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

// 3: object {}
// Cách duyệt dữ liệu theo key - không được gọi là iterator
// + mutable (thông thường là kiểu dữ liệu nguyên thủy, giá trị có thể gán lại)
// + immutable (ngược lại, object, array)
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// Lồng vào nhau thì thêm object
// const teo = {
//     name : {
//         a : "Nguyen Van Teo"
//     },
//     age : 10
// } 
// // hoặc 
// console.log(teo.name.a)
// hoặc
// console.log(teo['name.a']) - cách này có thể duyệt tất cả các key

// 4: Arraylist
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
// a++ - gán rồi mới tăng
// a = a - (-1)
// ++a - tăng cùng lúc gán

// let a = 5
// let b = 10
// let c = a++ - b++ - --a - --b + --b - --a + a-- + b--
// console.log(a, b ,c)

// 5 - 10 - --a - --b + --b - --a + a-- + b-- (a = 6, b = 11)
// 6 - 11 - 5 - 10 + --b - --a + a-- + b-- (a = 5, b = 10)
// 6 - 11 - 5 - 10 + 9 - 4 + a-- + b-- (a = 4, b = 9)
// 6 - 11 - 5 - 10 + 9 - 4 + 4 + 9 (a = 3, b = 8)
// 6 - 11 - 5 - 10 + 9 + 9 = -26 + 24 = -2

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
// const ketqua = tinhtong(5,a)
// console.log(ketqua)

// 7: Object method - có lồng thêm phương thức thì gọi là object method
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
// chỉ có 6 giá trị bằng false: false, null, '', NaN, undefined, 0 (tham khảo: https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// if(-1){
//     console.log("A lon hon B")
// }else{
//     console.log("A be hon hoac bang B")
// }
// =? TRUE

// let a = 5
// let b = 6
// // a > b = 1
// // a < b = -1
// // a == b = 0
// if(a > b){
//     console.log(1)
// }else if(a < b){
//     console.log(-1)
// }else if(a == b){
//     console.log(0)
// }

// Toán tử ba ngôi
// bieuthuc ? true : false
// let a = 5
// let b = 5
// a > b ? console.log("A lon hon B") : console.log("a be hon hoac bang b")

// 9: vòng lặp for
// const arrNames = ["teo","ti","tun","tuan"]
// for(let i = 0 ; i < arrNames.length ; i++){
//     console.log(arrNames[i])
// }
// i là input

// viet 1 phuong thuc kiem tra so nguyen to
// số input là số nguyên tố, số input không là số nguyên tố

// let parameter = "Hứa Thụ Trí";
// parameter = "Hứa Thụ Quế";

// function vietTenBe(tenNguoi) {
//     console.log(tenNguoi);
// }

// vietTenBe("Hứa Thụ Quế 11111");
// vietTenBe("Hứa Thụ Trí 22222");
// vietTenBe(parameter);

// function kiemTraSoNguyenTo(number){
//     let count = 0
//     if (number < 2){
//         console.log("khong phai so nguyen to")
//         return
//     }

//     for (let i = 2 ; i <= number ; i++){
//         if (number % i == 0){
//             count++
//         }
//     }

//     if (count == 1){
//         console.log("la so nguyen to")
//     }else{
//         console.log("khong phai la so nguyen to")
//     }
// }

// kiemTraSoNguyenTo(3)

// 10 - For of - chỉ sử dụng cho array, không dùng cho object
// dùng để lấy value
// const arrNames = ['Tân','Bình','An']

// for (const value of arrNames){
//     console.log(value)
// }

// 11 - For in
// const teo = {
//     name : 'Tèo',
//     age : 10
// }
// for (const key in teo) {
//     console.log(key)
// }

// Cách viết ngắn gọn cho Lesson 12 For...in
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
//         if (typeof object[key] === 'object'){
//             getkey(object[key])
//         }        
//     }
// }
// getkey(apartment)

// 12 - Array Method
// const arrNumbers = [4,1,2,5,10,9]
// Thêm phần tử cuối mảng
// arrNumbers.push(11)
// console.log(arrNumbers)
// Xóa phần tử cuối
// arrNumbers.pop()
// console.log(arrNumbers)
// Thêm phần tử ở đầu
// arrNumbers.unshift(15)
// console.log(arrNumbers)
// Xóa phần tử ở đâu
// arrNumbers.shift()
// console.log(arrNumbers)
// Xóa phần tử ở giữa
// arrNumbers.splice(position,amount)
// arrNumbers.splice(1,4)
// console.log(arrNumbers)
// Thêm phần tử ở giữa
// arrNumbers.splice(position,không xóa ghi '0',các số muốn thêm vào)
// arrNumbers.splice(1,0,20,21)
// console.log(arrNumbers)
// splice có thể thay thế các cái trên nhưng đòi hỏi tính logic hơn
// Lấy phần tử theo vị trí (tạo mới chứ không thêm xóa sửa cũ)
// arrNumbers.slice(start position, end position)

// 13 - Higher order function - truyển function vào function (callback) (ngôn ngữ khác gọi là interface)
// function nhan2(number){
//     return number * 2
// }

// function tinhTong(arr,func){
//     let result = 0
//     for (const value of arr){
//         result += value
//     }
//     return func(result)
// }

// console.log(tinhTong([1,2],nhan2))

//14 - Hàm map - sử dụng cho Undo
// thay đổi giá trị phần tử trong mảng
// không thay đổi length của mảng
// tạo ra mảng mới chứa sự thay đổi này
// Nhân đôi giá trị trong mảng
// const arrNumbers = [1,2,3,4,5]
// const newArrNumbers = arrNumbers.map(function(number , index){
//     return number * 2
// })
// console.log(newArrNumbers)
// tham số index không sử dụng có thể xóa khỏi hàm map cũng được
// map thay thế thằng phía trên, viết nhanh hơn.
// Quản lý tập trung

//15 - Filter
// dữ liệu mảng có thể gọi filter
// không cần khởi tạo filter
// không chỉnh sửa phần tử

// const arrNames = ['An','Bình','Chương']
// const newArrNames = arrNames.filter(function(name){
//     if (name.length >= 3){
//         return true
//     }
//     return false
// })
// console.log(newArrNames)

// // Ví dụ
// const arrPersons = [
//     {id : 1 , name : 'Tèo' , age : 20},
//     {id : 2 , name : 'Tủn' , age : 25},
//     {id : 3 , name : 'Hoa' , age : 22},
//     {id : 4 , name : 'Tuấn' , age : 21},
//     {id : 5 , name : 'Lan' , age : 26},
// ]

// const filterArrPersons = arrPersons.filter(function(person){
//     if (person.age < 25){
//         return true;
//     }
//     return false;
// }).map(function(object){
//     return object.name
// })

// console.log(filterArrPersons)

// // yêu cầu: in ra mảng person dưới 25t, chỉ lấy name.

//16 - Hàm reduce - gộp

// tham số thứ 2: truyền giá trị ban đầu
// số thì để 0
// object hoặc array thì để rỗng
// accumulator: biến tích lũy
// const arrNums = [1,2,3,4,5]

// const newArrNums = arrNums.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
//     // biến tích lũy (dựa vào cái này để chạy) + giá trị hiện tại (dùng để check điều kiện)
//     // Lần 1:
//     // accumulator : 0 (Value) - giá trị khởi tạo ban đầu
//     // currentValue : 1 (Value) - giá trị đầu tiên
//     // return 5
//     // Lần 2:
//     // accumulator : 5 (Value)
//     // currentValue : 2 (Value)
//     // return 7
//     // Lần 3:
//     // accumulator : 7 (Value)
//     // currentValue : 3 (Value)
// },0)

// console.log(newArrNums)

// // Ví dụ
// const arrPersons = [
//     {id : 1 , name : 'Tèo' , age : 20},
//     {id : 2 , name : 'Tủn' , age : 25},
//     {id : 3 , name : 'Hoa' , age : 22},
//     {id : 4 , name : 'Tuấn' , age : 21},
//     {id : 5 , name : 'Lan' , age : 26},
// ]

// const newArrPersons = arrPersons.reduce(function(accumulator, currentValue){
//     if (currentValue.age < 25){
//         accumulator.push(currentValue.name);
//     }
//     return accumulator
// },[])
// console.log(newArrPersons)

// // yêu cầu: in ra mảng person dưới 25t, chỉ lấy name.

//Bài tập khó:

function countOccurrences(arr) {

}
countOccurrences(["a", "b", "c", "b", "a", "a"]);
// {a : 3, b : 2, c : 1}