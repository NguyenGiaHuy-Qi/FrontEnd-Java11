function chuyendoi(){
    let input = prompt("Nhập chuỗi: ");
    if(input.trim() == ""){
        return "Mảng không có phần tử nào";
    }else if(!input.includes(",")){
        return "Dữ liệu không hợp lệ";
    }else{
        let arr = input.split(",").map(item => item.trim());
        let newarr = arr.map(x => x.split("-").reverse().join("/"));
        console.log(newarr);
        return newarr;
}
}
chuyendoi();