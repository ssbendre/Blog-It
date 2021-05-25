var row=1;
var entry= document.getElementById("entry");
entry.addEventListener("click",displayDetails);



function displayDetails(){
    var title=document.getElementById("title").value;
    var author=document.getElementById("author").value;
    var category=document.getElementById("category").value;

// if (title != "" || author || !category){
//     alert("Please fill all Boxes");
//     return;
// }
var display=document.getElementById("display");
var newRow = display.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);


cell1.innerHTML = title;
cell2.innerHTML = author;
cell3.innerHTML = category;


row++;
let text ="Your post is Added Successfully";
let span = document.getElementById('message');
let m = document.getElementById('para').cloneNode();
m.innerHTML=text;
span.appendChild(m);






// 
}


