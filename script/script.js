function Function() {
    let shop = `[
        {
        "image" : "product/shirt.png",
        "productName" : "LAGO NGA SHIRT",
        "price" : "₱ 150.00",
        "sold" : "12.1K",
        "ship" : "from Chai bebeng"
        },
         {
        "image" : "product/bikini.png",
        "productName" : "BIKINI NI LOLA",
        "price" : "₱ 50.00",
        "sold" : "1.5K",
        "ship" : "from chai inday"
        },
         {
        "image" : "product/bra.png",
        "productName" : "BRA NI KIRA",
        "price" : "₱ 69.00",
        "sold" : "1",
        "ship" : "from Antartica"
        },
         {
        "image" : "product/pants.png",
        "productName" : "pantalon ni johnny",
        "price" : "₱ 345.00",
        "sold" : "12.1K",
        "ship" : "from speedwagon"
        },
         {
        "image" : "product/hoodie.png",
        "productName" : "hoodie ni trixie",
        "price" : "₱ 235.00",
        "sold" : "345.2K",
        "ship" : "from tigupuson ko"
        },
         {
        "image" : "product/sando.png",
        "productName" : "sando ni ermats",
        "price" : "₱ 29.00",
        "sold" : "24K",
        "ship" : "from balay"
        },
         {
        "image" : "product/shoes.png",
        "productName" : "sapatos ni shane",
        "price" : "₱ 569.00",
        "sold" : "245K",
        "ship" : "from balay ni april"
        },
         {
        "image" : "product/skinny-jeans.png",
        "productName" : "skinny jeans ni penduko",
        "price" : "₱ 169.00",
        "sold" : "14K",
        "ship" : "from balay nakon"
        },
         {
        "image" : "product/skirt.png",
        "productName" : "skirt ni pretty",
        "price" : "₱ 119.00",
        "sold" : "7K",
        "ship" : "from balay ni shane"
        },
         {
        "image" : "product/socks.png",
        "productName" : "Medyas ni shaggy",
        "price" : "₱ 126.00",
        "sold" : "34K",
        "ship" : "from balay ni njead"
        },
         {
        "image" : "product/sweater.png",
        "productName" : "sweater ni trixie",
        "price" : "₱ 369.00",
        "sold" : "34K",
        "ship" : "from animekisa"
        },
         {
        "image" : "product/tat-pants.png",
        "productName" : "lago nga pants",
        "price" : "₱ 39.00",
        "sold" : "78K",
        "ship" : "from putlocker"
        },
         {
        "image" : "product/top-dress.png",
        "productName" : "dress ni crushy",
        "price" : "₱ 299.00",
        "sold" : "58K",
        "ship" : "from 1323movies"
        },
         {
        "image" : "product/underwear.png",
        "productName" : "underwear ni tito",
        "price" : "₱ 79.00",
        "sold" : "45K",
        "ship" : "from mainChinas"
        },
         {
        "image" : "product/shorts.png",
        "productName" : "shorts nga ikit",
        "price" : "₱ 19.00",
        "sold" : "45K",
        "ship" : "from my heart"
        }
    ]`
    
    var shop_parse = JSON.parse(shop);
    for(var i = 0; i<shop_parse.length; i++){
        document.getElementById("shop").innerHTML += `
        
        <a href="buy.html" class="shop-link">
        <div class="shop-card">
        <span class="rate">SALE!!!!!</span>
        <span class="rate">-70%</span>
            <img src="`+shop_parse[i].image+`" alt="">
            <div class="shop-text">
                <div class="shop-tag">
                    <p>`+shop_parse[i].productName+`</p>
                    <p>`+shop_parse[i].price+`</p>
                    <p>`+shop_parse[i].ship+`</p>
                </div>
            <div class="rating">
                <span>`+shop_parse[i].sold+` Sold</span>
                <br>
                <div>
                    <span>4.9</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </div>
    </div>
</a>
        `;
    }
    
}