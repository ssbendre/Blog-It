

function login(){
    let un = document.querySelector("#name").value;
    let ps = document.querySelector("#pass").value;
    console.log(un.length);
    console.log(ps.length);
    let msg1 = un.length;
    let msg2 = ps.length;

    if(msg1 == 0 || msg2 == 0)
    {
        document.querySelector("#sname").innerHTML = "**Username field is empty!";
        document.querySelector("#spass").innerHTML = "**Password field is empty!";
        return false;
    }
    else if(msg1 >= 20 || msg2 >= 20)
    {
        document.querySelector("#sname").innerHTML = "**Username should be less then 20 charchters!";
         document.querySelector("#spass").innerHTML = "**Password should be less then 20 characters!";
        
    }
    

    document.querySelector("#name").value = "";
    document.querySelector("#pass").value = "";
  
}


