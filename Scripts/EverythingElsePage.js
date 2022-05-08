
let otherdata=JSON.parse(localStorage.getItem("productsothers"))|| [];


let data=[{brand:"CHARLES JEFFREY LOVERBOY",name:"SSENSE Exclusive Kids Multicolor Logo",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221101M000069_1/charles-jeffrey-loverboy-ssense-exclusive-kids-multicolor-logo-sweater.jpg"},
{brand:"ERL",name:"Kids Blue Denim Patchwork Shirt",price:305,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221260M703002_1/erl-kids-blue-denim-patchwork-shirt.jpg"},
{brand:"THE ANIMALS OBSERVATORY",name:"Kids White Logo Sneakers",price:570,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221848M704012_1/the-animals-observatory-kids-red-logo-buffalo-lounge-pants.jpg"},
{brand:"MM6 MAISON MARGIELA",name:"Tan Cotton Jacket",price:250,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221188M707001_1/mm6-maison-margiela-kids-white-logo-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Tan Nylon Jacket",price:200,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221194M000022_1/meme-kids-black-kane-balloon-trousers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Black Kane Balloon Trousers",price:220,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713007_1/moncler-enfant-kids-black-nylon-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Multicolor First Classic Glitter Rain Boots",price:150,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221087M000036_1/hunter-multicolor-first-classic-glitter-rain-boots.jpg"},
{brand:"RICK OWENS",name:"Kids Red Logo Baseball Cap",price:115,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713004_1/moncler-enfant-kids-red-logo-baseball-cap.jpg"},
{brand:"RICK OWENS",name:"Kids Black Voyage T-Shirt",price:100,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701037_1/moncler-enfant-kids-black-junzo-jacket.jpg"},
{brand:"RICK OWENS",name:"Baby Red Horseferry Logo T-Shirt",price:110,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221376M692006_1/burberry-baby-red-horseferry-logo-t-shirt.jpg"},
{brand:"RICK OWENS",name:"Kids Pink & Green Down Genichi Vest",price:115,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701035_1/moncler-enfant-kids-pink-and-green-down-genichi-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Pink Down Vanier Vest",price:125,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701013_1/canada-goose-kids-kids-pink-down-vanier-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Black 574 Little Kids Sneakers",price:135,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"DRIES VAN NOTEN",name:"Kids Green Balloons Long Sleeve T-Shirt",price:1190,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M703007_1/weekend-house-kids-kids-green-balloons-long-sleeve-t-shirt.jpg"},
{brand:"RHUDE",name:"Kids Green Merino Wool Beanie",price:606,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M713002_1/weekend-house-kids-kids-green-merino-wool-beanie.jpg"},
{brand:"RHUDE",name:"Kids Beige Checks Teddy Coat",price:705,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212895M701000_1/the-campamento-kids-beige-checks-teddy-coat.jpg"},
{brand:"CASABLANCA",name:"Kids Black 574 Little Kids Sneakers",price:715,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Red Down Vanier Vest",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701011_1/canada-goose-kids-kids-red-down-vanier-vest.jpg"},
{brand:"EDWARD CUMING",name:"Kids Off-White Terry Check Bucket Hat",price:340,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221902M713015_1/wynken-kids-off-white-terry-check-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Kids Navy Towel Logo Polo",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221895M703004_1/the-campamento-kids-navy-towel-logo-polo.jpg"},
{brand:"EDWARD CUMING",name:"Kids Brown Organic Cotton Overcoat",price:250,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221884M701000_1/repose-ams-kids-brown-organic-cotton-overcoat.jpg"},
{brand:"CHARLES JEFFREY LOVERBOY",name:"SSENSE Exclusive Kids Multicolor Logo",price:495,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221101M000069_1/charles-jeffrey-loverboy-ssense-exclusive-kids-multicolor-logo-sweater.jpg"},
{brand:"ERL",name:"Kids Blue Denim Patchwork Shirt",price:758,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221260M703002_1/erl-kids-blue-denim-patchwork-shirt.jpg"},
{brand:"THE ANIMALS OBSERVATORY",name:"Kids White Logo Sneakers",price:570,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221848M704012_1/the-animals-observatory-kids-red-logo-buffalo-lounge-pants.jpg"},
{brand:"MM6 MAISON MARGIELA",name:"Tan Cotton Jacket",price:232,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221188M707001_1/mm6-maison-margiela-kids-white-logo-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Tan Nylon Jacket",price:975,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221194M000022_1/meme-kids-black-kane-balloon-trousers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Black Kane Balloon Trousers",price:820,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713007_1/moncler-enfant-kids-black-nylon-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Multicolor First Classic Glitter Rain Boots",price:195,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221087M000036_1/hunter-multicolor-first-classic-glitter-rain-boots.jpg"},
{brand:"RICK OWENS",name:"Kids Red Logo Baseball Cap",price:510,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713004_1/moncler-enfant-kids-red-logo-baseball-cap.jpg"},
{brand:"RICK OWENS",name:"Kids Black Voyage T-Shirt",price:800,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701037_1/moncler-enfant-kids-black-junzo-jacket.jpg"},
{brand:"RICK OWENS",name:"Baby Red Horseferry Logo T-Shirt",price:190,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221376M692006_1/burberry-baby-red-horseferry-logo-t-shirt.jpg"},
{brand:"RICK OWENS",name:"Kids Pink & Green Down Genichi Vest",price:175,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701035_1/moncler-enfant-kids-pink-and-green-down-genichi-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Pink Down Vanier Vest",price:525,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701013_1/canada-goose-kids-kids-pink-down-vanier-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Black 574 Little Kids Sneakers",price:535,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"DRIES VAN NOTEN",name:"Kids Green Balloons Long Sleeve T-Shirt",price:139,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M703007_1/weekend-house-kids-kids-green-balloons-long-sleeve-t-shirt.jpg"},
{brand:"RHUDE",name:"Kids Green Merino Wool Beanie",price:206,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M713002_1/weekend-house-kids-kids-green-merino-wool-beanie.jpg"},
{brand:"RHUDE",name:"Kids Beige Checks Teddy Coat",price:925,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212895M701000_1/the-campamento-kids-beige-checks-teddy-coat.jpg"},
{brand:"CASABLANCA",name:"Kids Black 574 Little Kids Sneakers",price:625,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Red Down Vanier Vest",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701011_1/canada-goose-kids-kids-red-down-vanier-vest.jpg"},
{brand:"EDWARD CUMING",name:"Kids Off-White Terry Check Bucket Hat",price:740,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221902M713015_1/wynken-kids-off-white-terry-check-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Kids Navy Towel Logo Polo",price:440,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221895M703004_1/the-campamento-kids-navy-towel-logo-polo.jpg"},
{brand:"EDWARD CUMING",name:"Kids Brown Organic Cotton Overcoat",price:410,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221884M701000_1/repose-ams-kids-brown-organic-cotton-overcoat.jpg"},
{brand:"CHARLES JEFFREY LOVERBOY",name:"SSENSE Exclusive Kids Multicolor Logo",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221101M000069_1/charles-jeffrey-loverboy-ssense-exclusive-kids-multicolor-logo-sweater.jpg"},
{brand:"ERL",name:"Kids Blue Denim Patchwork Shirt",price:170,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221260M703002_1/erl-kids-blue-denim-patchwork-shirt.jpg"},
{brand:"THE ANIMALS OBSERVATORY",name:"Kids White Logo Sneakers",price:570,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221848M704012_1/the-animals-observatory-kids-red-logo-buffalo-lounge-pants.jpg"},
{brand:"MM6 MAISON MARGIELA",name:"Tan Cotton Jacket",price:285,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221188M707001_1/mm6-maison-margiela-kids-white-logo-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Tan Nylon Jacket",price:200,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221194M000022_1/meme-kids-black-kane-balloon-trousers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Black Kane Balloon Trousers",price:235,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713007_1/moncler-enfant-kids-black-nylon-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Multicolor First Classic Glitter Rain Boots",price:585,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221087M000036_1/hunter-multicolor-first-classic-glitter-rain-boots.jpg"},
{brand:"RICK OWENS",name:"Kids Red Logo Baseball Cap",price:155,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M713004_1/moncler-enfant-kids-red-logo-baseball-cap.jpg"},
{brand:"RICK OWENS",name:"Kids Black Voyage T-Shirt",price:470,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701037_1/moncler-enfant-kids-black-junzo-jacket.jpg"},
{brand:"RICK OWENS",name:"Baby Red Horseferry Logo T-Shirt",price:880,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221376M692006_1/burberry-baby-red-horseferry-logo-t-shirt.jpg"},
{brand:"RICK OWENS",name:"Kids Pink & Green Down Genichi Vest",price:915,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221815M701035_1/moncler-enfant-kids-pink-and-green-down-genichi-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Pink Down Vanier Vest",price:425,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701013_1/canada-goose-kids-kids-pink-down-vanier-vest.jpg"},
{brand:"RICK OWENS",name:"Kids Black 574 Little Kids Sneakers",price:735,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"DRIES VAN NOTEN",name:"Kids Green Balloons Long Sleeve T-Shirt",price:190,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M703007_1/weekend-house-kids-kids-green-balloons-long-sleeve-t-shirt.jpg"},
{brand:"RHUDE",name:"Kids Green Merino Wool Beanie",price:690,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212896M713002_1/weekend-house-kids-kids-green-merino-wool-beanie.jpg"},
{brand:"RHUDE",name:"Kids Beige Checks Teddy Coat",price:765,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/212895M701000_1/the-campamento-kids-beige-checks-teddy-coat.jpg"},
{brand:"CASABLANCA",name:"Kids Black 574 Little Kids Sneakers",price:215,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221402M707068_1/new-balance-kids-black-574-little-kids-sneakers.jpg"},
{brand:"EDWARD CUMING",name:"Kids Red Down Vanier Vest",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221824M701011_1/canada-goose-kids-kids-red-down-vanier-vest.jpg"},
{brand:"EDWARD CUMING",name:"Kids Off-White Terry Check Bucket Hat",price:345,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221902M713015_1/wynken-kids-off-white-terry-check-bucket-hat.jpg"},
{brand:"EDWARD CUMING",name:"Kids Navy Towel Logo Polo",price:372,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221895M703004_1/the-campamento-kids-navy-towel-logo-polo.jpg"},
{brand:"EDWARD CUMING",name:"Kids Brown Organic Cotton Overcoat",price:255,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221884M701000_1/repose-ams-kids-brown-organic-cotton-overcoat.jpg"},
];

let mid=document.getElementById("mid");

let arr=[];

function zoom(data){
    data.forEach(({brand,name,price,image})=>{

    

        let div=document.createElement("div");
        div.setAttribute("class","zoho")
    
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

    localStorage.setItem("productsothers",JSON.stringify(arr));

    window.location.href="EverthingPurchase.html"
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