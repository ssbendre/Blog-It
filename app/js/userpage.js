
var contents = [];



var json = [];
window.onload = (event) => {

    var data = JSON.parse(localStorage.getItem('userpage'));

    //  $.getJSON('userpage.json', function (data) {
    //      for (var i in data) {

    //         let map = { "image": data[i]["image"], "like": data[i]['like'], 'card-text': data[i]["card-text"], 'card-title': data[i]["card-title"] };
    //     json.push(map);
    //  }
    //      localStorage.setItem('userpage', JSON.stringify(json));


    // }); // Get data from JSON file
    console.log(data);


    let username = localStorage.getItem('email');

    if (username == "undefined" || username == "" || username == null) {
        window.location.replace("login.html");

    }
    else {
        document.getElementById('username').innerHTML = username;
        console.log("PAGE LOADED SUCCESSFULLY");
    }
   
    var parent = document.getElementById('parent');
    var itm = document.getElementById("cards");
    for (var i in data) {


        console.log(i);
      
        let cln = itm.cloneNode(true);
        cln.childNodes[1].src = data[i]["image"];
      

        cln.childNodes[3].childNodes[3].innerText = data[i]["card-text"];
        //   console.log(cln.childNodes[3].childNodes[0].innerText = data[i]["card-title"])

        cln.childNodes[3].childNodes[1].innerText = data[i]["card-title"];

        cln.childNodes[3].childNodes[5].childNodes[1].childNodes[1].childNodes[1].innerText = data[i]["like"];
        cln.childNodes[3].childNodes[5].childNodes[1].childNodes[7].innerText= i;
        console.log(cln.childNodes[3].childNodes[5].childNodes[1].childNodes[7]);

        // Append the cloneddiv element to div with 
        parent.append(cln);
        
    }
    itm.style.display = 'none';
   



};





let LikeMe = function (btnElement) {
    /**   console.log(btnElement.childNodes[0]);*/
  
    let LikeCounter = btnElement.childNodes[0].nodeValue;
    let LikeCount = parseInt(LikeCounter);
    LikeCount++;
    btnElement.childNodes[0].nodeValue = LikeCount;

    var data = JSON.parse(localStorage.getItem('userpage'));
    let index =  btnElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    console.log(index);
    data[index]['like']=LikeCount;
    localStorage.setItem('userpage', JSON.stringify(data));


}

var logout= function(){
    localStorage.removeItem('email');
   window.location.replace('login.html');
    
}


let commentHere = function (btnElementComment) {
    const commentBox =
      btnElementComment.parentElement.parentElement.parentElement
.childNodes[2];
console.log(commentBox);
    let newElement = commentBox.childNodes[0].cloneNode(true);
    // lets access teh input box
    const inputElem =
      btnElementComment.parentElement.parentElement.childNodes[1].childNodes[0];
    newElement.childNodes[0].innerHTML = inputElem.value;
    // clear the input
    inputElem.value = "";
    // add the new element to comment box
    commentBox.insertBefore(newElement, commentBox.firstChild);
  };