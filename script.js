const services = [
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

const serviceTitle = document.getElementById("service-title");
const serviceNameLabel = document.getElementById("service-name-label");
const servicePrice = document.getElementById("service-price");
const serviceImg = document.getElementById("service-img");
const cartTableBody = document.getElementById("cart-table-body");
const emptyMsg = document.getElementById("empty-msg");
const totalPriceEl = document.getElementById("total-price");
const bookingMsg = document.getElementById("booking-msg");
const msgText = document.getElementById("msg-text");

function renderCurrentService() {
  const current = services[currentServiceIndex];
  serviceTitle.innerText = current.name;
  serviceNameLabel.innerText = current.name;
  servicePrice.innerText = `₹${current.price.toFixed(2)}`;
  serviceImg.src = current.img;
  serviceImg.alt = current.name;
}

function renderCart() {
  cartTableBody.innerHTML = "";
  if (addedServices.length === 0) {
    emptyMsg.style.display = "block";
    totalPriceEl.innerText = "₹0";
    return;
  }

  emptyMsg.style.display = "none";
  let total = 0;

  addedServices.forEach((item, index) => {
    total += item.price;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price.toFixed(2)}</td>
    `;
    cartTableBody.appendChild(row);
  });

  totalPriceEl.innerText = `₹${total.toFixed(2)}`;
}

document.getElementById("add-btn").addEventListener("click", () => {
  addedServices.push(services[currentServiceIndex]);
  renderCart();
  nextService();
});

document.getElementById("skip-btn").addEventListener("click", () => {
  nextService();
});

function nextService() {
  currentServiceIndex = (currentServiceIndex + 1) % services.length;
  renderCurrentService();
}

document.getElementById("book-now-btn").addEventListener("click", () => {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  bookingMsg.style.display = "flex";

  if (!name || !email || !phone) {
    bookingMsg.className = "booking-status-msg error";
    msgText.innerText = "Please fill out all fields to book";
    return;
  }

  if (addedServices.length === 0) {
    bookingMsg.className = "booking-status-msg error";
    msgText.innerText = "Add the items to the cart to book";
    return;
  }

  bookingMsg.className = "booking-status-msg success";
  msgText.innerText = "Thank you for contacting, we will get back to you soon";
});

renderCurrentService();
renderCart();
