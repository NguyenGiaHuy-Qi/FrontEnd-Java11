function max(){
    let input = parseInt(prompt("Nhập số phần tử của mảng: "));
    let arr = [];
    for(let i = 0;i < input;i++){
        arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
    }
    if(input == 0 || arr.length == 0){
        alert("Mảng không có phần tử nào");
    }else if(!Array.isArray(arr)){
        alert("Dữ liệu không hợp lệ");
    }else{
        let max = arr[0];
        for(let i = 1;i < arr.length;i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        alert("max:" + max +" "+ "position:" + arr.indexOf(max));
    }
}
max();