window.onload = (event) => {
    let username = sessionStorage.getItem('email');

    if (username == "undefined" || username == "" || username == null) {
        window.location.replace("login.html");

    } else {
        document.getElementById('username').innerHTML = username;
        console.log("PAGE LOADED SUCCESSFULLY");
    }

    $.ajax({
        type: "Get",
        url: "http://localhost:3000/post_db",
        dataType: "json",
        success: function(data) {


            var div = "";
            for (var i in data) {
                var likeId = "l" + data[i].id;
                div += `<br><div class="row " id="${data[i].id}">
        <div class="col-6">
          <div class="card" >
            <img class="image" alt="..." src="${data[i].image}" />
            <div class="card-body">
              <h5>${data[i].blogTitle}</h5>
            
              <p class="blog-data" style="color: gray;font-size: 14px;font-weight: 100;">
              ${data[i].blogData.slice(0,200)}... <button onclick="Readmore(${data[i].id})"  
              style="outline: none;border: none;text-decoration: none;text-transform: none;background-color: white;">
             <b>Read more..</b>
            </button>  </p>
           
              <span>
                <div class="row">
                  <div class="col-3 p-0">

                    <button onclick="LikeMe(${data[i].id})" class="fa fa-thumbs-o-up fa-2x" 
                      style="outline: none;border: none;text-decoration: none;text-transform: none;background-color: white;">
                      <span  id="${likeId}">${data[i].like} </span>
                    </button>
              
                  
                  </div>
                  <div class="row ">
                  <div class="col p-0 d-flex justify-content-end align-items-end">
                  <label><b>Date : </b></label><span>  ${data[i].timestamp}</span>
                  </div>
                  </div>  
                
            </div>
        </span>
           
        <br><br>

            </div>
 </div>
           </div>

      </div>`


            }
            document.getElementById('container1').innerHTML = div;

        }
    });


};


function Add() {
    window.location = "addpost.html";
}


let LikeMe = function(id) {
    var btnElement = "l" + id;
    console.log(btnElement)
    var LikeCount = parseInt(document.getElementById(btnElement).innerText);
    ++LikeCount;
    document.getElementById(btnElement).innerText = LikeCount;

    var likes = JSON.stringify({ "like": LikeCount });


    $.ajax({
        type: "PATCH",
        url: "http://localhost:3000/post_db/" + id,
        async: true,
        processData: false,
        data: likes,
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
        },
        error: function() {
            alert(":x: Comment Failed");
        },
    });


}


function Readmore(id) {
    sessionStorage.setItem('blogId', id);
    window.location = "readmore.html";
}

var logout = function() {
    sessionStorage.removeItem('email');
    window.location.replace('login.html');

}