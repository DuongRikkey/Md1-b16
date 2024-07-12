// Bài 6: Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// function name1(chuoi) {
//     let number = chuoi.split('')
//     number.sort((a, b) => a - b)
//     let conlection = number.join('');
//     return conlection;
// }
// let chuoi = "123222761"
// console.log(name1(chuoi))


// function Dem(input) {

// }
let input = prompt("Mời bạn nhập zô");
let arr = input.split("")
let arr2 = []
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (!arr2.includes(temp)) {

        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === temp) {
                count++;
                arr2.push(temp)
            }
        }
        console.log(`${temp} xuất hiện ${count} lần`)
    }
}