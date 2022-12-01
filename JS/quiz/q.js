function checkVoucher() {
    var x = document.forms["checkout"]["voucher"].value; // form id is 'checkout' and element id is 'voucher'
    if (x.length != 7) { // here 7 is the hypothetical voucher length
        alert("Please enter a valid voucher code");
        return false;
    }
    return true;
    
}

function checkPrice(price){
    if (price > 250){
        return price * 0.8;
    }
    else if (price > 100){
        return price * 0.9;
    }
    else{
        return price;
    }
}

shoes = new Array();
socks = new Array();
teabags = new Array();
// add elements for arrays e.g:
shoes.push("prada");
localStorage.setItem("newCategory", shoes);
localStorage.setItem("OtherCategory", socks);
localStorage.setItem("newCategory", teabags);


let cart = new Array(); 
sessionStorage.setItem("cart", cart);
// add items while still on the tab
shopping = true;
while (looking){
    
    // add item
    let item = ""; // new item to be added
    var shop = sessionStorage.getItem("cart");
    for (i = 0; i < shop; i+=1){
        if (item == shop[i]){
            alert("This item is already in the cart");
            break;
        }

    }
}



