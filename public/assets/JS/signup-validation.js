let eml = document.getElementById("email-id");
let pswd = document.getElementById("password");
let cpswd = document.getElementById("c-password");
let flag=1;
function alerts(){
    if(eml.value=="" || pswd.value=="" || cpswd.value==""){
        alert("Please Enter Required Field");
        flag=0;
    }else if(pswd.value!=cpswd.value){
        alert("Enter Same Password");
        flag=0;
    }
    else{
        flag=1;
    }
    if(flag)
       return true;
    return false;
}