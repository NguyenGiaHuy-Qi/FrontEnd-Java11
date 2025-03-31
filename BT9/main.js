let input;
let totalodd = 0;
let totaleven = 0;
while(true){
    input = parseInt(prompt("Nhập số phần tử cho mảng(10-20): "));
    if(isNaN(input) || input <= 0){
        alert("Dữ liệu không hợp lệ");
    }else if(input < 10 || input > 20){
        alert("Nhập số phần tử từ 10 đến 20");
    }else{
        let arr = [];
        for(let i = 0;i < input;i++){
            arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
        }
        for(let i = 0;i < arr.length;i++){
            if(arr[i] % 2 == 0){
                totaleven += arr[i];
            }else{
                totalodd += arr[i];
            }
        }
        break;
    }
}
console.log("TotalOdd: " + totalodd);
console.log("TotalEven: " + totaleven);