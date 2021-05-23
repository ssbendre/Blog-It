function login(){
    let un = document.querySelector("#name").value;
    if(un=="")
    {
        document.querySelector("#sname").innerHTML = "**Username field is empty!";
        return false;
    }
    if((un.lenght <= 2)||(un.lenght > 20))
    {
        document.querySelector("#sname").innerHTML = "**Username should be between 2-20!";
        return false;
    }
   
    let ps = document.querySelector("#pass").value;
    if(ps=="")
    {
        document.querySelector("#spass").innerHTML = "**Password field is empty!";
        return false;
    }
    if((un.lenght <= 6)||(un.lenght > 15))
    {
        document.querySelector("#sname").innerHTML = "**Username should be between 6-15!";
        return false;
    }
   
 
    
    document.querySelector("#name").value = "";
    document.querySelector("#pass").value = "";
  
}