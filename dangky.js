function checkten(){
    var regt = /^[A-Z0-9]{3,16}$/
    var t = document.getElementById("txtten").value;
    if(t==""){
        document.getElementById("er1").innerHTML="*Bắt buộc nhập"
        return false
    }
    if(regt.test(t))
    {
        document.getElementById("er1").innerHTML="";
        return true;
    }else{
        document.getElementById("er1").innerHTML="Ít nhất 3 ký tự, tối đa 16, 1 chữ cái đầu viết hoa và số ";
        return false;
    }
}
function checkmk(){
    var pss = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    var y = document.getElementById("txtmk").value;
    if(y==""){
        document.getElementById("er2").innerHTML="*Không được bỏ trống"
        return false
    }if(pss.test(y))
    {
        document.getElementById("er2").innerHTML="";
        return true
    }else{
        document.getElementById("er2").innerHTML="Tối thiểu tám ký tự, ít nhất một chữ cái và một số (Nên sử dụng thêm các ký tự đặc biệt)"
        return false;
    }
}
function checkmail(){
    var em = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var m = document.getElementById("txtmail").value;
    if(m==""){
        document.getElementById("er4").innerHTML="*Không được bỏ trống"
        return false
    }if(em.test(m)){
        document.getElementById("er4").innerHTML="";
        return true;
    }else{
        document.getElementById("er4").innerHTML="Email sai"
        return false;
    }
}