let womendata=JSON.parse(localStorage.getItem("bagproducts"))

let show = document.getElementById("show")

var cartData=JSON.parse(localStorage.getItem("bagData")) || []

womendata.map(function(el,i){
    let mainBox=document.createElement("div")
    mainBox.setAttribute("id","mainBox")

    let box = document.createElement("div")
    box.setAttribute("id" ,"box")
  
    let boxFirstBox=document.createElement("div")
    boxFirstBox.setAttribute("id","boxFirstBox")

    let boxSecBox=document.createElement("div")
    boxSecBox.setAttribute("id","boxSecBox")

    box.append(boxFirstBox,boxSecBox)

    let image=document.createElement("img")
    image.src=el.image
    image.style="width:80%;height:180px;display:block;padding:15px"

    boxFirstBox.append(image)

    
    let brand = document.createElement("p")
    brand.innerText=el.brand

    let naam = document.createElement("p")
    naam.innerText=el.name

    let select=document.createElement("select")
    select.setAttribute("id","select")
        
        // var option2 = document.createElement("option")
        // option2.innerText="SELECT A SIZE"
        
        var option3= document.createElement("option")
        option3.innerText="XS-Only 1 remaining"
        
        var option4 = document.createElement("option")
        option4.innerText="S-Only 3 remaining"
        
        var option5 = document.createElement("option")
        option5.innerText="M-Only 2 remaining"
        
        var option6 = document.createElement("option")
        option6.innerText="L-Out of stock"
        
        var option7 = document.createElement("option")
        option7.innerText="XL-Only 2 remaining"
        
        var option8 = document.createElement("option")
        option8.innerText="XXL-Only 1 remaining"

        select.append(option7,option3,option4,option5,option6,option8)

    let wishlist = document.createElement("button")
    wishlist.innerText="Move To Wishlist"
    wishlist.setAttribute("id","wishlist")

    boxSecBox.append(brand,naam,select,wishlist)

    let box2= document.createElement("div")
    box2.setAttribute("id","box2")

    let total = document.createElement("p")
    total.innerText=`₹ ${el.price}.00`
    total.setAttribute("id","total")

    let remove = document.createElement("button")
    remove.innerText="Remove"
    remove.setAttribute("id","remove")
    remove.addEventListener("click",function(){
    removeFun(el ,i)
    })

    box2.append(total,remove)
    mainBox.append(box,box2)

    show.append(mainBox)

document.getElementById("btn").addEventListener("click",function(){
    btnFun(el)
})

})
function removeFun(el,i) {
    womendata.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(womendata));
    window.location.reload();

}

function  btnFun(el){
cartData.push(el)
localStorage.setItem("bagData",JSON.stringify(cartData))
window.location.href="/pranshu.html"
}


var grandTotal=document.getElementById('grandTotal')

let grandTotalBox1=document.createElement("div")
grandTotalBox1.setAttribute("id","grandTotalBox1")

let ttotal = document.createElement("p")
ttotal.innerText="Total"

let Shipping  = document.createElement("p")
Shipping.innerText="Shipping estimate"

let orderTotal  = document.createElement("h4")
orderTotal.innerText="Order Total"

grandTotalBox1.append(ttotal,Shipping,orderTotal)

let grandTotalBox2=document.createElement("div")
grandTotalBox2.setAttribute("id","grandTotalBox2")


    var sum = womendata.reduce(function (sum, el, index) {

        return sum + Number(el.price)
    }, 0)

let ttotalP=document.createElement("p")
ttotalP.innerText=`₹ ${sum}.00`

let ShippingText=document.createElement("p")
ShippingText.innerText="Calculated at Checkout"


let orderTotalP=document.createElement("h4")
orderTotalP.innerText=`₹ ${sum}.00`

grandTotalBox2.append(ttotalP,ShippingText,orderTotalP)

grandTotal.append(grandTotalBox1,grandTotalBox2)

