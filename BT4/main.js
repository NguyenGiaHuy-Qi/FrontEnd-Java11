function isprime(){
    let arr = [];
    let input = parseInt(prompt("Nhập số phần tử của mảng: "));
    for(let i = 0;i < input;i++){
        arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
    }
    if(input == 0 || arr.length == 0){
        alert("Mảng không có phần tử nào");
    }
    if(!Array.isArray(arr)){
        alert("Dữ liệu không hợp lệ");
    }else{
        let result = arr.filter(item => {
            if(item < 2){
                return false;
            }
            for(let i = 2;i <= Math.sqrt(item);i++){
                if(item % i == 0){
                    return false;
                }
            }
            return true;
        });
        console.log(result);
    }
}
isprime();