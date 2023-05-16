// Kiem tra ma tour
function checkma(){
    var regt=/^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/
    var i=document.getElementById("matour").value
    if(i==""){
        document.getElementById("tbma").innerHTML="*Bat buoc nhap"
        return false
    }
    if(regt.test(i)){
        document.getElementById("tbma").innerHTML=""
        return true; 
    }
        document.getElementById("tbma").innerHTML="*Ma tour theo mau: XXX-XXX-00-0000"
        return false
}
//kiem tra hanh trinh
function checkhanhtrinh(){
    var d=document.getElementById("hanhtrinh").value
    if(d==""){
        document.getElementById("tbhanhtrinh").innerHTML="*Bat buoc nhap"
        return false;
    }
     document.getElementById("tbhanhtrinh").innerHTML=""
     return true;   
}
//kiem tra ngay khoi hanh
function checkngay(){
    var a=document.getElementById("ngaykhoihanh").value
    if(a==""){
        document.getElementById("tbngay").innerHTML="*Bat buoc nhap"
        return false;
    }
    document.getElementById("tbngay").innerHTML=""
    return true;
}
// kiem tra thoi gian di
function checkthoigiandi(){
    var b=document.getElementById("thoigian").value
    if(b==""){
        document.getElementById("tbthoigian").innerHTML="*Bat buoc nhap"
        return false;
    }
    document.getElementById("tbthoigian").innerHTML=""
    return true;
}
// kiem tra gia
function checkgia(){
    var c=document.getElementById("gia").value
    if(c==""){
        document.getElementById("tbgia").innerHTML="*Bat buoc nhap"
        return false;
    }
    document.getElementById("tbgia").innerHTML=""
    return true;
}
