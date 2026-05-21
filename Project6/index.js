
fetch("https://dummyjson.com/products").then((res)=>{

    return res.json()
}).then((data)=>{

   console.log(data.products);

   let body= document.querySelector("body");

    data.products.map((a)=>{

    body.innerHTML+=`<div style ="border:1px solid black;
       width:250px;
       padding:10px;
       margin:10px; 
       border-radius:10px ; 
       box-shadow:0 4px 8px rgba(0,0,0,2); 
       transition:3s">
       <img src="${a.thumbnail} " width="100%">

        <h2>${a.title}</h2>

        <h3>${a.price}</h3>
    

        <button onclick="addToCart(${a.id})"> Add To Cart </button>

        </div>


    `;
   });

       window.allP=data.products

   });

  
  let cart=[]
function addToCart(id){
    console.log(id);
    // console.log(window);
     let data=   window.allP.find((a)=>{
            return a.id==id
        })
        cart.push(data)
        // console.log(data,"data");
        localStorage.setItem("item",JSON.stringify(cart))
           
}
   