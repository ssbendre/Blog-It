$('document').ready(()=>{
let row=""
    $.ajax({
        url:"http://localhost:3000/blog_post_db",
        method:"GET",
        
        success:(x)=>{
           for(let i of x){
               row+=`
               <div align="center">
               <img src="${i.thumbnailUrl}">
               <br>
               <p>Description : ${i.title}</p>
               <p>Price : ${i.id}</p>
               <button>Add to Cart</button>
               </div>


               `
           }
           $('.container').html(row)

        }
    })

})