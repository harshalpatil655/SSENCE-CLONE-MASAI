
let mensdata=JSON.parse(localStorage.getItem("productsmen"))|| [];



let data=[{brand:"EDWARD CUMING",name:"EDWARD CUMING",price:3370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221470M192012_1/edward-cuming-ssense-exclusive-black-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"SSENSE Exclusive Gray Shirt",price:340,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192013_1/edward-cuming-ssense-exclusive-gray-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Off-White Viscose Shirt",price:2720,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192003_1/edward-cuming-off-white-viscose-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Cotton Jacket",price:250,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M180030_1/essentials-tan-cotton-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Nylon Jacket",price:625,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202050_1/essentials-tan-nylon-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Black Nylon Jacket",price:895,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202047_1/essentials-black-nylon-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Black Cotton Vest",price:150,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M185005_1/essentials-black-cotton-vest.jpg"},
	{brand:"RICK OWENS",name:"Beige Relaxed Hoodie",price:115,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202008_1/essentials-beige-relaxed-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Beige Relaxed Crewneck Sweatshirt",price:100,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M204010_1/essentials-beige-relaxed-crewneck-sweatshirt.jpg"},
	{brand:"RICK OWENS",name:"Gray Cotton Hoodie",price:110,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202036_1/essentials-gray-cotton-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Tan Cotton Hoodie",price:315,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202037_1/essentials-tan-cotton-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Taupe Cotton Lounge Pants",price:225,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M190038_1/essentials-taupe-cotton-lounge-pants.jpg"},
	{brand:"RICK OWENS",name:"Black Fleece Lounge Pants",price:135,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M190000_1/essentials-black-fleece-lounge-pants.jpg"},
	{brand:"DRIES VAN NOTEN",name:"SSENSE Exclusive Grey Cotton Blazer",price:820,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221358M195013_1/dries-van-noten-ssense-exclusive-grey-cotton-blazer.jpg"},
	{brand:"RHUDE",name:"SSENSE Exclusive Pink Button-Up Shirt",price:606,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221923M192029_1/rhude-ssense-exclusive-pink-button-up-shirt.jpg"},
	{brand:"RHUDE",name:"SSENSE Exclusive Green Neon Shirt",price:1705,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221923M192024_1/rhude-ssense-exclusive-green-neon-shirt.jpg"},
	{brand:"CASABLANCA",name:"Yellow Cotton Shirt",price:835,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221195M192037_1/casablanca-yellow-cotton-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"EDWARD CUMING",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221470M192012_1/edward-cuming-ssense-exclusive-black-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"SSENSE Exclusive Gray Shirt",price:340,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192013_1/edward-cuming-ssense-exclusive-gray-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Off-White Viscose Shirt",price:270,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192003_1/edward-cuming-off-white-viscose-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Cotton Jacket",price:800,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M180030_1/essentials-tan-cotton-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Nylon Jacket",price:200,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202050_1/essentials-tan-nylon-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Black Nylon Jacket",price:570,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202047_1/essentials-black-nylon-jacket.jpg"},
	{brand:"RICK OWENS",name:"Gray Cotton Hoodie",price:320,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202036_1/essentials-gray-cotton-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Tan Cotton Hoodie",price:715,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202037_1/essentials-tan-cotton-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Taupe Cotton Lounge Pants",price:425,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M190038_1/essentials-taupe-cotton-lounge-pants.jpg"},
	{brand:"RICK OWENS",name:"Black Fleece Lounge Pants",price:135,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M190000_1/essentials-black-fleece-lounge-pants.jpg"},
	{brand:"DRIES VAN NOTEN",name:"SSENSE Exclusive Grey Cotton Blazer",price:1190,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221358M195013_1/dries-van-noten-ssense-exclusive-grey-cotton-blazer.jpg"},
	{brand:"RHUDE",name:"SSENSE Exclusive Pink Button-Up Shirt",price:606,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221923M192029_1/rhude-ssense-exclusive-pink-button-up-shirt.jpg"},
	{brand:"RHUDE",name:"SSENSE Exclusive Green Neon Shirt",price:705,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221923M192024_1/rhude-ssense-exclusive-green-neon-shirt.jpg"},
	{brand:"CASABLANCA",name:"Yellow Cotton Shirt",price:815,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221195M192037_1/casablanca-yellow-cotton-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"EDWARD CUMING",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221470M192012_1/edward-cuming-ssense-exclusive-black-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"SSENSE Exclusive Gray Shirt",price:340,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192013_1/edward-cuming-ssense-exclusive-gray-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Off-White Viscose Shirt",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192003_1/edward-cuming-off-white-viscose-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Cotton Jacket",price:150,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M180030_1/essentials-tan-cotton-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Off-White Viscose Shirt",price:370,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221470M192003_1/edward-cuming-off-white-viscose-shirt.jpg"},
	{brand:"EDWARD CUMING",name:"Tan Cotton Jacket",price:770,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M180030_1/essentials-tan-cotton-jacket.jpg"},
	{brand:"EDWARD CUMING",name:"Black Nylon Jacket",price:220,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202047_1/essentials-black-nylon-jacket.jpg"},
	{brand:"RICK OWENS",name:"Gray Cotton Hoodie",price:510,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202036_1/essentials-gray-cotton-hoodie.jpg"},
	{brand:"RICK OWENS",name:"Tan Cotton Hoodie",price:435,image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.0/221161M202037_1/essentials-tan-cotton-hoodie.jpg"},
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
		
		mid.append(div);

		div.addEventListener("click",()=>{
			arr.push({brand,name,price,image})
			hulk(arr)
		})
		
	});
}

	function hulk(arr){
		console.log(arr)
	
		localStorage.setItem("productsmen",JSON.stringify(arr));
	
		window.location.href="Menspurchase.html"
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
