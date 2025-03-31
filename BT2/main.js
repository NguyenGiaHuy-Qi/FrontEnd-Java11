function checkstring(){
    let input = prompt("Nhập chuỗi: ");
    if(input.trim() == ""  || !input.includes(",")){
        return "Dữ liệu không hợp lệ";
    }
    let arr = input.split(",").map(item => item.trim());
    const result = arr.filter(item => item.length > 5)
    return result.length > 0 ? result : "Mảng không hợp lệ";
}
console.log(checkstring());