function checkstring(){
    let input = prompt("Nhập chuỗi: ");
    if(input.trim() == ""){
        return "Mảng không có phàn tử nào";
    }
    if(!input.includes(",")){
        return "Dữ liệu không hợp lệ";
    }
    let arr = input.split(",").map(item => item.trim());
    const result = arr.filter(item => item.includes("@") && item.includes(".") && !item.includes(" "));
}
console.log(checkstring());