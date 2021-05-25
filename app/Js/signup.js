function signup(){
    let un = document.querySelector("#name").value;
<<<<<<< HEAD
    if(un==""||ml==""||ph==""||ps==""||cps==""){
        document.querySelector("#name").placeholder = "**Username field is empty!";
        document.querySelector("#mail").placeholder = "**Mail_ID field is empty!";
        document.querySelector("#phone").placeholder = "**Mobile No. field is empty!";
        document.querySelector("#pass").placeholder = "**Password field is empty!";
        document.querySelector("#cpass").placeholder = "**Confirm Password field is empty!";
        return false;
        
    }
    if((un.lenght <= 2)||(un.lenght > 20)){
        document.querySelector("#name").placeholder = "**Username should be between 2-20!";
=======
    if(un==""){
        document.querySelector("#sname").innerHTML = "**Username field is empty!";
        return false;
    }
    if((un.lenght <= 2)||(un.lenght > 20)){
        document.querySelector("#sname").innerHTML = "**Username should be between 2-20!";
>>>>>>> c07b4eace3b1579cb34c01040faca3f02819ad3d
        return false;
    }



    let ml = document.querySelector("#mail").value;
    if(ml==""){
<<<<<<< HEAD
        document.querySelector("#smail").placeholder = "**Mail_ID field is empty!";
        return false;
    }
    if(ml.indexOf('@') <= 0){
        document.querySelector("#smail").placeholder = "**Invalid pattern!";
        return false;
    }



    // function validateEmail(email) {
    //     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    //   }
      
    //   function validate() {
    //     const $result = $("#result");
    //     const email = $("#mail").val();
    //     $result.text("");
      
    //     if (validateEmail(email)) {
    //       $result.text(email + " is valid :)");
    //     //   $result.css("color", "green");
    //     // } else {
    //     //   $result.text(email + " is not valid :(");
    //     //   $result.css("color", "red");
    //     // }
    //     return false;
    //   }
      
    //   $("#validate").on("click", validate);


=======
        document.querySelector("#smail").innerHTML = "**Mail_ID field is empty!";
        return false;
    }
    if(ml.indexOf('@') <= 0){
        document.querySelector("#smail").innerHTML = "**Invalid pattern!";
        return false;
    }
>>>>>>> c07b4eace3b1579cb34c01040faca3f02819ad3d
   // if((ml.charAt(ml.lenght-4)!='.') && (ml.charAt(ml.lenght-3)!='.')) {
    //    document.querySelector("#smail").innerHTML = "**Invalid position!";
      //  return false;
    //}




    let ph = document.querySelector("#phone").value;
    if(ph==""){
<<<<<<< HEAD
        document.querySelector("#sphone").placeholder = "**Mobile No. field is empty!";
        return false;
    }
    if(isNaN(ph)){
        document.querySelector("#sphone").placeholder = "**Please enter only digits!";
=======
        document.querySelector("#sphone").innerHTML = "**Mobile No. field is empty!";
        return false;
    }
    if(isNaN(ph)){
        document.querySelector("#sphone").innerHTML = "**Please enter only digits!";
>>>>>>> c07b4eace3b1579cb34c01040faca3f02819ad3d
        return false;
    }
    //if(ph.lenght!=10){
      //  document.querySelector("#sphone").innerHTML = "**Please enter 10 digits No.!";
    //    return false;
    //}



    let ps = document.querySelector("#pass").value;
    if(ps==""){
<<<<<<< HEAD
        document.querySelector("#spass").placeholder = "**Password field is empty!";
        return false;
    }
    if((un.lenght <= 6)||(un.lenght > 15)){
        document.querySelector("#sname").placeholder = "**Username should be between 6-15!";
=======
        document.querySelector("#spass").innerHTML = "**Password field is empty!";
        return false;
    }
    if((un.lenght <= 6)||(un.lenght > 15)){
        document.querySelector("#sname").innerHTML = "**Username should be between 6-15!";
>>>>>>> c07b4eace3b1579cb34c01040faca3f02819ad3d
        return false;
    }
   


    let cps = document.querySelector("#cpass").value;
    if(cps==""){
<<<<<<< HEAD
        document.querySelector("#scpass").placeholder = "**Confirm Password field is empty!";
        return false;
    }
    if(ps != cps){
        document.querySelector("#scpass").placeholder = "**Confirm Password field is empty!";
=======
        document.querySelector("#scpass").innerHTML = "**Confirm Password field is empty!";
        return false;
    }
    if(ps != cps){
        document.querySelector("#scpass").innerHTML = "**Confirm Password field is empty!";
>>>>>>> c07b4eace3b1579cb34c01040faca3f02819ad3d
        return false;
    }
 

    
    document.querySelector("#name").value = "";
    document.querySelector("#mail").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#cpass").value = "";
  
}