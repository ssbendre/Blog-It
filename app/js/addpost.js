// $(document).ready(function(){
//   console.log( $('.content').richText());
// console.log( $( "#testform" ).serialize() )
//   $( "#testform" ).submit(function( event ) {
//       event.preventDefault();
//     // Send the data using post
//     $.post( "http://localhost:3000/post_db", $( "#testform" ).serialize() )
//     .done(function() {
//       window.location = "userpage.html";
//   });

//   });
// });

function AddPost() {
    $('.content').unRichText();

    var content = document.getElementById('text1').value;
    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var imageURL = document.getElementById('imageURL').value;
    var dt = new Date();
    var time = new Date().toDateString() + "  " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    var data = {

        "image": imageURL,
        "blogTitle": title,
        "blogData": content,
        "like": 0,
        "comments": [],
        "category": category,
        "timestamp": time
    };
    $.post("http://localhost:3000/post_db", data).done(function() {
        window.location = "userpage.html";
    });
}


window.onload = (event) => {
    let username = sessionStorage.getItem('email');

    if (username == "undefined" || username == "" || username == null) {
        window.location.replace("login.html");

    } else {
        document.getElementById('username').innerHTML = username;
        console.log("PAGE LOADED SUCCESSFULLY");
    }
};