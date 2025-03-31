function isprime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2;i <= Math.sqrt(n);i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
let input;
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
            if(isprime(arr[i]) && arr[i] % 2 != 0){
                console.log(arr[i]);
            }
        }
        break;
    }
}