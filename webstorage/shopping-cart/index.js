// Get the cart contents from localStorage or initialize an empty array
let cartContents = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update the cart display
function updateCartDisplay() {
  let cartDisplay = document.getElementById("cart");
  cartDisplay.innerHTML = "";
  if (cartContents.length === 0) {
    cartDisplay.innerHTML = "<p>Your cart is empty</p>";
  } else {
    let itemList = document.createElement("ul");
    cartDisplay.appendChild(itemList);
    for (let item of cartContents) {
      let listItem = document.createElement("li");
      listItem.innerHTML = item;
      itemList.appendChild(listItem);
    }
    }
    //
}

// Update the cart display initially
updateCartDisplay();

// Add an item to the cart and update the cart display
document.getElementById("add-item").addEventListener("click", function () {
  let newItem = prompt("Enter an item to add to your cart:");
  if (newItem) {
    cartContents.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartContents));
    updateCartDisplay();
  }
});
