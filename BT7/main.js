function skibidi(){
    let input = prompt("Nhập số phần tử vào mảng: ");
    let arr = [];
    for(let i = 0;i < input;i++){
        arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
    }
    if(input == 0 || arr.length == 0){
        return "Mảng không có phần tử nào";
    }
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }else{
        for(let i = 0;i < arr.length;i++){
            let powvalue = Math.pow(arr[i],2);
            if(powvalue % 2 == 0){
                console.log(powvalue);
            }
        }
    }
}
skibidi();