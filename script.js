let services = [
  {
    id: 1,
    name: "Dry Cleaning",
    price: 200,
    img: "images/dry-cleaning.jpg",
  },
  {
    id: 2,
    name: "Leather & Suede Cleaning",
    price: 999,
    img: "images/leather-cleaning.jpg",
  },
  {
    id: 3,
    name: "Ironing",
    price: 30,
    img: "images/ironing.jpg",
  },
  {
    id: 4,
    name: "Wedding Dress Cleaning",
    price: 2400,
    img: "images/wedding-dress.jpg",
  },
  {
    id: 5,
    name: "Wash And Fold",
    price: 140,
    img: "images/wash-and-fold.jpg",
  },
  {
    id: 6,
    name: "Stain Removal",
    price: 500,
    img: "images/stain-removal.jpg",
  },
];

let currentServiceIndex = 0;
let addedServices = [];

let serviceTitle = document.getElementById("service-title");
let serviceName = document.getElementById("service-name-label");
let servicePrice = document.getElementById("service-price");
let serviceImg = document.getElementById("service-img");

let cartTable = document.getElementById("cart-table-body");
let emptyMsg = document.getElementById("empty-msg");
let totalPrice = document.getElementById("total-price");

let bookingMsg = document.getElementById("booking-msg");
let msgText = document.getElementById("msg-text");

function showService() {
  let service = services[currentServiceIndex];

  serviceTitle.innerHTML = service.name;
  serviceName.innerHTML = service.name;
  servicePrice.innerHTML = "₹" + service.price;
  serviceImg.src = service.img;
}

function showCart() {
  cartTable.innerHTML = "";

  if (addedServices.length == 0) {
    emptyMsg.style.display = "block";
    totalPrice.innerHTML = "₹0";
    return;
  }

  emptyMsg.style.display = "none";

  let total = 0;

  for (let i = 0; i < addedServices.length; i++) {
    let item = addedServices[i];

    total = total + item.price;

    let row = document.createElement("tr");

    row.innerHTML =
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      item.name +
      "</td>" +
      "<td>₹" +
      item.price +
      "</td>";

    cartTable.appendChild(row);
  }

  totalPrice.innerHTML = "₹" + total;
}

function nextService() {
  currentServiceIndex++;

  if (currentServiceIndex == services.length) {
    currentServiceIndex = 0;
  }

  showService();
}

document.getElementById("add-btn").addEventListener("click", function () {
  addedServices.push(services[currentServiceIndex]);

  showCart();

  nextService();
});

document.getElementById("skip-btn").addEventListener("click", function () {
  nextService();
});

document.getElementById("book-now-btn").addEventListener("click", function () {
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  bookingMsg.style.display = "flex";

  if (name == "" || email == "" || phone == "") {
    bookingMsg.className = "booking-status-msg error";
    msgText.innerHTML = "Please fill all details.";

    return;
  }

  if (addedServices.length == 0) {
    bookingMsg.className = "booking-status-msg error";
    msgText.innerHTML = "Please add at least one service.";

    return;
  }

  bookingMsg.className = "booking-status-msg success";
  msgText.innerHTML = "Booking completed successfully.";
});

showService();
showCart();
