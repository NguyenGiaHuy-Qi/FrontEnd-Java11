let input = parseInt(prompt("Nhập số phần tử của mảng: "));
let arr = [];
for(let i = 0;i < input;i++){
    arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
}
if(input == 0){
    alert("Mảng không có phần tử nào");
}else if(isNaN(input)){
    alert("Dữ liệu không hợp lệ");
}else{
    for(let i = 0;i < arr.length;i++){
        if(arr[i] >= 10){
            console.log(arr[i]);
        }
    }
}
