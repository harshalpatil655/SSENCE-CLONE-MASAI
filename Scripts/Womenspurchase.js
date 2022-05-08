

let womendata=JSON.parse(localStorage.getItem("products"));




let arr2=JSON.parse(localStorage.getItem("bagproducts"))|| [];
let arr3=JSON.parse(localStorage.getItem("wishlistproducts"))|| [];

console.log(womendata);


let middle_div=document.getElementById("mhs");


womendata.forEach(({image,name,brand,price})=>{

    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=image;

    let nam=document.getElementById("name");
    nam.innerText=name;

    let bran=document.getElementById("brand");
    bran.innerText=brand;

    let pri=document.getElementById("price");
    pri.innerText=price;


    div.append(img);

    let proData={
        image:image,
        name:name,
        brand:brand,
        price:price
    }
middle_div.append(div);

let butn=document.getElementById("one");

butn.addEventListener("click",()=>{
   
    hola(proData)
})

let butn2=document.getElementById("two");

butn2.addEventListener("click",()=>{
   
    hola3(proData)
})

})



function hola(proData){
    
    arr2.push(proData);
    localStorage.setItem("bagproducts",JSON.stringify(arr2));

}

function hola3(proData){
   
    arr3.push(proData);
    localStorage.setItem("wishlistproducts",JSON.stringify(arr3));

}





