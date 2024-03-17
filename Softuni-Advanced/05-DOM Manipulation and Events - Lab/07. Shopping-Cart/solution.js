function solve() {
   let mainDiv = document.querySelector(".shopping-cart");
   let textArea = document.querySelector("textarea");
 
   mainDiv.addEventListener("click", handleProducts);
   mainDiv.addEventListener("click", handleCheckout);
   
   let productList = []
   let totalPrice = 0
 
   function handleProducts(e) {
     if (e.target.className == "add-product") {
       let productRow = e.target.parentElement.parentElement;
       let productName = productRow.children[1].children[0].textContent;
       let productPrice = Number(productRow.children[3].textContent);
 
       textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
       totalPrice += productPrice;
 
       if (!productList.find((x) => x == productName)) {
         productList.push(productName);
       }
     }
   }
 
   function handleCheckout(e) {
     if (e.target.className == "checkout") {
       textArea.value += `You bought ${productList.join(", ")} for ${totalPrice.toFixed(2)}.`;

       mainDiv.removeEventListener("click", handleProducts);
       mainDiv.removeEventListener("click", handleCheckout);
     }
   }
 }
 