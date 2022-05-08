

let womendata=JSON.parse(localStorage.getItem("products"))|| [];




let data=[
{brand:"MAISON MARGIELA",name:"Black Wool Midi Dress",price:1655,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221168F054010_1/maison-margiela-black-wool-midi-dress.jpg"},
{brand:"GUCCI",name:"Green Viscose Mini Dress",price:3225,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/222451F052001_1/gucci-green-viscose-mini-dress.jpg"},
{brand:"MAISON MARGIELA",name:"Black Nylon Jacket",price:850,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221168F063003_1/maison-margiela-black-nylon-jacket.jpg"},
{brand:"GIVENCHY",name:"White Tulle Trench Coat",price:2270,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/181278F067001_1/givenchy-white-tulle-trench-coat.jpg"},
{brand:"THE ROW",name:"Black Brixton Tank Top",price:290,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221359F111005_1/the-row-black-brixton-tank-top.jpg"},
{brand:"PETER DO",name:"Beige Silk Shirt",price:975,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221462F109002_1/peter-do-beige-silk-shirt.jpg"},
{brand:"GIA STUDIOS",name:"White Nylon Sleeveless Turtleneck",price:330,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221749F099004_1/gia-studios-white-nylon-sleeveless-turtleneck.jpg"},
{brand:"GIA STUDIOS",name:"Black Wool Sleeveless Turtleneck",price:325,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221749F099002_1/gia-studios-black-wool-sleeveless-turtleneck.jpg"},
{brand:"S MAX MARA",name:"Black Hoyo Trousers",price:400,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221447F087012_1/s-max-mara-black-hoyo-trousers.jpg"},
{brand:"MAIDEN NAME",name:"SSENSE Exclusive Black Dolores T-Shirt",price:265,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221938F110002_1/maiden-name-ssense-exclusive-black-dolores-t-shirt.jpg"},
{brand:"MAIDEN NAME",name:"SSENSE Exclusive Yellow Ashely T-Shirt",price:385,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221938F110000_1/maiden-name-ssense-exclusive-yellow-ashely-t-shirt.jpg"},
{brand:"ACNE STUDIOS",name:"Purple Linen Rib Knit Tank Top",price:270,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221129F111005_1/acne-studios-purple-linen-rib-knit-tank-top.jpg"},
{brand:"MAIDEN NAME",name:"SSENSE Exclusive Green Masha Camisole",price:595,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221938F111001_1/maiden-name-ssense-exclusive-green-masha-camisole.jpg"},
{brand:"MAIDEN NAME",name:"SSENSE Exclusive Beige Sonia Tank Top",price:725,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221938F111006_1/maiden-name-ssense-exclusive-beige-sonia-tank-top.jpg"},
{brand:"MAIDEN NAME",name:"SSENSE Exclusive Brown Samantha Mini Skirt",price:425,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221938F090001_1/maiden-name-ssense-exclusive-brown-samantha-mini-skirt.jpg"},
{brand:"PARTOW",name:"White Dante Lounge Pants",price:925,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402F086006_1/partow-white-dante-lounge-pants.jpg"},
{brand:"PRAYING",name:"SSENSE Exclusive Pink Statues Baby T-Shirt",price:55,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221810F110000_1/praying-ssense-exclusive-pink-statues-baby-t-shirt.jpg"},
{brand:"PRAYING",name:"SSENSE Exclusive White Do It Short Dress",price:140,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221810F052001_1/praying-ssense-exclusive-white-do-it-short-dress.jpg"},
{brand:"PRAYING",name:"White Corinthians Shorts",price:100,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221810F088002_1/praying-white-corinthians-shorts.jpg"},
{brand:"PRAYING",name:"White Cropped Butterfly Camisole",price:95,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221810F111001_1/praying-white-cropped-butterfly-camisole.jpg"},
{brand:"MAISIE WILEN",name:"White Bedrock Bloomer Shorts",price:450,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221810F088002_1/praying-white-corinthians-shorts.jpg"},
{brand:"MAISIE WILEN",name:"Red Faved Tank Top",price:140,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221370F111012_1/maisie-wilen-red-faved-tank-top.jpg"},
{brand:"MAISIE WILEN",name:"Pink & Green Slinky T-Shirt",price:230,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221370F110004_1/maisie-wilen-pink-and-green-slinky-t-shirt.jpg"},
{brand:"MAISIE WILEN",name:"Pink Pop Hoodie",price:290,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221370F097001_1/maisie-wilen-pink-pop-hoodie.jpg"},
{brand:"MAISIE WILEN",name:"Black Pop Hoodie",price:325,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221370F097000_1/maisie-wilen-black-pop-hoodie.jpg"},
{brand:"JACQUEMUS",name:"SSENSE Exclusive Beige Graphic T-Shirt",price:180,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221553F110013_1/jacquemus-ssense-exclusive-beige-graphic-t-shirt.jpg"},
{brand:"MAISIE WILEN",name:"White Collage T-Shirt",price:85,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221586F110003_1/kijun-white-collage-t-shirt.jpg"},
{brand:"KIJUN",name:"SSENSE Exclusive Green Mini Diamond Dress",price:420,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221586F054000_1/kijun-ssense-exclusive-green-mini-diamond-dress.jpg"},
{brand:"ACNE STUDIOS",name:"Green Shirred Stretch Ankle Boots",price:870,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212971F113000_1/amy-crookes-green-shirred-stretch-ankle-boots.jpg"},
{brand:"KARA",name:"SSENSE Exclusive Silver & Green Crystal Mesh",price:445,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221493F048003_1/kara-ssense-exclusive-silver-and-green-crystal-mesh-bag.jpg"},
{brand:"MAISIE WILEN",name:"Gold Crystal Mesh Bag",price:780,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221493F048023_1/kara-gold-crystal-mesh-bag.jpg"},
{brand:"KARA",name:"Black Crystal Fringe Micro Tote",price:330,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221493F046008_1/kara-black-crystal-fringe-micro-tote.jpg"},
{brand:"KARA",name:"SSENSE Exclusive White Crystal Mesh",price:345,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221493F048014_1/kara-ssense-exclusive-white-crystal-mesh-crossbody-bag.jpg"},
{brand:"ACNE STUDIOS",name:"Multicolor Menagerie Couture Mini Skirt",price:460,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221720F090010_1/moschino-multicolor-menagerie-couture-mini-skirt.jpg"},
{brand:"KIJUN",name:"Orange Kellogg's Edition Cotton Shorts",price:555,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221720F088005_1/moschino-orange-kelloggs-edition-cotton-shorts.jpg"},
{brand:"KIJUN",name:"Blue Viscose Bodysuit",price:985,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221471F358002_1/stella-mccartney-blue-viscose-bodysuit.jpg"},
{brand:"ACNE STUDIOS",name:"Off-White Leather Tank Top",price:910,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221820F111000_1/ambush-off-white-leather-tank-top.jpg"},
{brand:"MAISIE WILEN",name:"Black Pop Hoodie",price:325,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221370F097000_1/maisie-wilen-black-pop-hoodie.jpg"},
{brand:"JACQUEMUS",name:"SSENSE Exclusive Beige Graphic T-Shirt",price:180,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221553F110013_1/jacquemus-ssense-exclusive-beige-graphic-t-shirt.jpg"},
{brand:"MAISIE WILEN",name:"White Collage T-Shirt",price:85,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221586F110003_1/kijun-white-collage-t-shirt.jpg"},];

let mid=document.getElementById("mid");

let arr=[];


function zoom(data){
    data.forEach(({brand,name,price,image})=>{

    

        let div=document.createElement("div");
        div.setAttribute("class","zoho");
        
    
        let img=document.createElement("img");
        img.src=`${image}`;
    
        let bran=document.createElement("p");
        bran.innerText=`${brand}`;
        
        let title=document.createElement("p");
        title.innerText=`${name}`;
    
        let pri=document.createElement("p");
        pri.innerText=`${price}`;
    
        div.append(img,bran,title,pri);
        
        
        mid.append(div)
        div.addEventListener("click",()=>{
            arr.push({brand,name,price,image})
            hulk(arr)
        })    
    });
}

function hulk(arr){
    console.log(arr)

    localStorage.setItem("products",JSON.stringify(arr));

    window.location.href="Womenspurchase.html"
}




document.getElementById("sortlh").addEventListener("click",()=>{
    sortlow(data)
})


    function sortlow(data){
        data.sort(function(a,b) {
            return a.price-b.price;
        })
        mid.innerHTML=null;
        zoom(data)
    }
    
zoom(data);




document.getElementById("sorthl").addEventListener("click",()=>{
    sorthigh(data)
})


    function sorthigh(data){
        data.sort(function(a,b) {
            return b.price-a.price;
        })
        mid.innerHTML=null;
        zoom(data)
    }
    
zoom(data);