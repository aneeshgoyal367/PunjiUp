let eml = document.getElementById("email-id");
let pswd = document.getElementById("password");
let flag=1;
function alerts(){
    if(eml.value=="" && pswd.value==""){
        alert("Please Enter Email and Password!");
        flag=0;
    }else if(eml.value=="" && pswd.value!=""){
        alert("Please Enter Email");
        flag=0;
    }else if(eml.value!="" && pswd.value==""){
        alert("Please Enter Password");
        flag=0;
    }else{
        flag=1;
    }
    if(flag)
       return true;
    return false;
}