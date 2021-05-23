function signup(){
    let un = document.querySelector("#name").value;
    if(un==""){
        document.querySelector("#sname").innerHTML = "**Username field is empty!";
        return false;
    }
    if((un.lenght <= 2)||(un.lenght > 20)){
        document.querySelector("#sname").innerHTML = "**Username should be between 2-20!";
        return false;
    }



    let ml = document.querySelector("#mail").value;
    if(ml==""){
        document.querySelector("#smail").innerHTML = "**Mail_ID field is empty!";
        return false;
    }
    if(ml.indexOf('@') <= 0){
        document.querySelector("#smail").innerHTML = "**Invalid pattern!";
        return false;
    }
   // if((ml.charAt(ml.lenght-4)!='.') && (ml.charAt(ml.lenght-3)!='.')) {
    //    document.querySelector("#smail").innerHTML = "**Invalid position!";
      //  return false;
    //}




    let ph = document.querySelector("#phone").value;
    if(ph==""){
        document.querySelector("#sphone").innerHTML = "**Mobile No. field is empty!";
        return false;
    }
    if(isNaN(ph)){
        document.querySelector("#sphone").innerHTML = "**Please enter only digits!";
        return false;
    }
    //if(ph.lenght!=10){
      //  document.querySelector("#sphone").innerHTML = "**Please enter 10 digits No.!";
    //    return false;
    //}



    let ps = document.querySelector("#pass").value;
    if(ps==""){
        document.querySelector("#spass").innerHTML = "**Password field is empty!";
        return false;
    }
    if((un.lenght <= 6)||(un.lenght > 15)){
        document.querySelector("#sname").innerHTML = "**Username should be between 6-15!";
        return false;
    }
   


    let cps = document.querySelector("#cpass").value;
    if(cps==""){
        document.querySelector("#scpass").innerHTML = "**Confirm Password field is empty!";
        return false;
    }
    if(ps != cps){
        document.querySelector("#scpass").innerHTML = "**Confirm Password field is empty!";
        return false;
    }
 

    
    document.querySelector("#name").value = "";
    document.querySelector("#mail").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#cpass").value = "";
  
}