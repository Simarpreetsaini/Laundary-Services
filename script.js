let services = [
  { name: "Dry Cleaning", price: 200, img: "images/dry-cleaning.jpg" },
  { name: "Leather Cleaning", price: 999, img: "images/leather-cleaning.jpg" },
  { name: "Ironing", price: 30, img: "images/ironing.jpg" },
  {
    name: "Wedding Dress Cleaning",
    price: 2400,
    img: "images/wedding-dress.jpg",
  },
  { name: "Wash And Fold", price: 140, img: "images/wash-and-fold.jpg" },
  { name: "Stain Removal", price: 500, img: "images/stain-removal.jpg" },
];

let index = 0;
let cart = [];

function updateService() {
  let item = services[index];
  document.getElementById("service-title").innerText = item.name;
  document.getElementById("service-name-label").innerText = item.name;
  document.getElementById("service-price").innerText = "₹" + item.price;
  document.getElementById("service-img").src = item.img;
}

function updateCart() {
  let table = document.getElementById("cart-table-body");
  let emptyMsg = document.getElementById("empty-msg");
  let totalText = document.getElementById("total-price");

  table.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    totalText.innerText = "₹0";
    return;
  }

  emptyMsg.style.display = "none";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
    let row = table.insertRow();
    row.innerHTML =
      "<td>" +
      (i + 1) +
      "</td><td>" +
      cart[i].name +
      "</td><td>₹" +
      cart[i].price +
      "</td>";
  }

  totalText.innerText = "₹" + total;
}

document
  .getElementById("add-to-cart-btn")
  .addEventListener("click", function () {
    cart.push(services[index]);
    updateCart();
    index = (index + 1) % services.length;
    updateService();
  });

document.getElementById("skip-btn").addEventListener("click", function () {
  index = (index + 1) % services.length;
  updateService();
});

document.getElementById("book-now-btn").addEventListener("click", function () {
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("booking-msg");
  let msgText = document.getElementById("msg-text");

  msg.style.display = "flex";

  if (name === "" || email === "" || phone === "") {
    msg.className = "booking-status-msg error";
    msgText.innerText = "Please fill all details.";
  } else if (cart.length === 0) {
    msg.className = "booking-status-msg error";
    msgText.innerText = "Please add at least one service.";
  } else {
    msg.className = "booking-status-msg success";
    msgText.innerText = "Booking completed successfully.";
  }
});

updateService();
updateCart();
