// 2. Mô tả

// Bài 1: Viết chương trình tạo hàm tính tổng 2 số
// function sum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }
// let x = sum(1, 2)

// console.log(x);
// console.log("Tong =", sum(2, 3))


// Bài 2: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn
// let num = +prompt("Mời bạn nhập vào")
// function P(r) {
//     Chuvi = 2 * Math.PI * r;

//     return Chuvi;
// }
// function S(r) {
//     Dientich = 2 * Math.PI * r * r
//     return Dientich;
// }
// let x = P(num)
// console.log(x);
// console.log("Chu vi là=", P(5))
// console.log("Dientichla=", S(5))
// Bài 3: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không?
// function check(test) {
//     return !isNaN(parseInt(test) && isFinite(parseInt(test)))

// }
// let test1 = "1"
// let test12 = "A"
// console.log(check(test1));
// console.log(check(test12));

// Bài 4: Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có phải nguyên dương không? Nếu đung trả vè true, sai trả về false
// function check(num) {
//     if (Number.isInteger(num) && num > 0) {
//         return true;
//     } else {
//         return false
//     }

// }
// let nhapso = parseFloat(prompt("Mời bạn nhập vào"))
// console.log("Kiemtra xem", check(nhapso))

// Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó

// function Robeo(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     return [a, b];

// } console.log("Sau khi đổi chỗ=", Robeo(2, 3))
// 3. Đánh giá

// Để hoàn thành bài thực hành, học viên cần:
// Đưa mã nguồn lên GitHub.

// Dán link của repository lên phần nộp bài trên hệ thống.
// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
// function Number1(a, b, c) {
//     if (a < b && a < c)
//         return a;
//     else if (b < a && b < c)
//         return b;
//     else {
//         return c;
//     }

// }
// let d = parseFloat(prompt("Mời bạn nhập số"))
// let e = parseFloat(prompt("Mời bạn nhập số"))
// let f = parseFloat(prompt("Mời bạn nhập số"))

// console.log("Số bé nhất in ra=", Number1(d, e, f))


// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không ?

//     (số nguyên tố là số nguyên dương chỉ có 2 ước là 1 và chính nó)
// function check(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {

//             return false;

//         }

//     }

//     return true;

// }
// console.log(check(131))







// Bài 3: Cho mảng sau:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Copy
// Viết hàm trả về tất cả các cặp số có tổng bằng 10

// function TENHAG(arr) {
//     let Total = [];
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 10) {
//                 Total.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return Total;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(TENHAG(arr));

// Bài 4: Cho người dùng nhập vào chuỗi kí tự.Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

// Input: “Hello World”

// Output:
// function Text(check) {
//     count = [];
// let input = prompt("Nhập chuỗi:")
// let arr = input.split("");
// let count = 0;
// let arr2 = [];
// for (let j = 0; j < arr.length; j++) {
//     let temp = arr[j]
//     if (!arr2.includes(temp)) {

//         count = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === temp) {
//                 count++;
//                 arr2.push(temp);
//             }

//         }
//         console.log(`${temp} xuất hiện ${count} lần`);
//     }




// }



// }


// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Thực thi hàm vừa khởi tạo
//
//


// function tinhgiaithua(n) {
//     if (n < 0) {
//         console.log("Không có giai thừa cho số âm")
//         return;
//     }
//     if (n === 0) {
//         console.log("Giai thừa của 0 là 1")
//         return 1;
//     }
//     var giaithua = 1;
//     for (var i = 2; i <= n; i++) {
//         giaithua *= i;
//     }
//     // console.log("Giai thừa của " + n + " là: " + giaithua);

//     // console.log("Giai thừa của " + n + "la :" factorial);
//     return giaithua;

// } console.log(tinhgiaithua(5));

// Bài 6: Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// function User(chuoi) {
//     let number = chuoi.split('');
//     number.sort((a, b) => a - b)
//     let conlect = number.join('')
//     return conlect
// }
// let chuoi = "455666666"
// console.log(User(chuoi));






// Bài 7: Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không
// function Năm(year) {
// function Xemnam(nam) {
//     if (nam % 4 === 0 && nam % 100 !== 0 || nam % 100 === 0) {
//         return true;
//     } else {
//         return false
//     }


// }
// let nam = parseInt(prompt("Mời bạn nhập năm"))
// if (Xemnam(nam)) {
//     console.log(nam + "là năm nhuận")
// } else {
//     console.log(nam + "là năm bthg")
// }
// 3. Đánh giá

// Để hoàn thành bài thực hành, học viên cần:
// Đưa mã nguồn lên GitHub.

// Dán link của repository lên phần nộp bài trên hệ thống.


// function ham(n1, n2) {
//     if (n1 > n2) {
//         alert(`Tham số ${n1} >${n2}`)

//     } else {
//         return n1 + n2
//     }

// }
// let x = ham(5, 4)
// let y = ham(3, 4)
// console.log(x);
// console.log(y);
// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.

// Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó.

// Trong phần của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.

// let A = ["Polaris", " Aldebaran", " Deneb", " Vega", " Altair", " Dubhe", "Regulus"]
// let B = ["Ursa Minor", " Tarurus", " Cygnus", " Lyra", " Aquila", " Ursa Major", " Leo"]

// function Star(startname) {
//     startname = startname.toLowerCase();
//     for (i = 0; i < A.length; i++) {
//         let Beo = A[i].toLowerCase();
//         if (Beo === startname) {
//             return B[i]


//         }
//     }
//     return null
// }
// console.log(Star("Polaris"));

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.

// function Ope(arr) {
//     let x = arr.reverse()
//     return x;
// }
// let arr = [1, 2, 3, 4];
// console.log(Ope(arr))
// return x;

let tem = ""
function Ope(n1, n2) {
    tem = n1;
    n2 = n1;
    n2 = tem;
    return [n1, n2]
}
console.log(Ope(3, 2))