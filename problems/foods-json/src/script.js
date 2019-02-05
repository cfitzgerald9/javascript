fetch("http://localhost:8088/foods")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(foods => {
            console.log(foods)
            fetch(`https://world.openfoodfacts.org/api/v0/product/${foods.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    foods.ingredients = productInfo.product.ingredients_text_en
                    console.log(foods.ingredients)
                    document.querySelector("#foodList").innerHTML +=
                    `<section> 
                        <div id="nameID">${foods.name}</div>
                        <div id= "catFood"> ${foods.category}</div> 
                        <div id ="ethFood">${foods.ethnicity}</div>
                        <div id ="idFood">${foods.ingredients}</div>
                    </section>`
                })
        })
    })
