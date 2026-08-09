# Service Booking Web App

A simple web application built with HTML, CSS, and JavaScript[cite: 1, 3, 4]. Users can browse services, add them to a cart, skip items, and submit a booking form[cite: 1, 3].

---

## What I Learned

Building this project helped me learn web development step-by-step and practice fixing common bugs[cite: 2].

### JavaScript & DOM Basics

* **Selecting Elements:** Used `document.getElementById()` to select elements and change text or visibility[cite: 3].
* **Click Events:** Used `addEventListener()` to handle button clicks[cite: 3].
* **Updating HTML:** Used `insertRow()` and `innerHTML` to display cart items dynamically[cite: 3].

### Logic & Arrays

* **Storing Data:** Kept service details organized inside an array of objects[cite: 3].
* **Loops:** Used a `for` loop to calculate the total price of items in the cart[cite: 3].
* **Cycling Items:** Used the modulo operator `(index + 1) % services.length` to keep cycling through services endlessly[cite: 3].

### Mistakes & Problem Solving

* **Matching HTML & JS:** Learned that if an `id` in JavaScript does not match the HTML, `getElementById()` returns `null` and breaks event listeners[cite: 1, 3].
* **Following Requirements:** Realized the importance of matching required button labels like **"Add to Cart"** instead of guessing names like "Add Item"[cite: 1].
* **Proper HTML Structure:** Learned to keep interactive buttons inside proper containers instead of wrapping them in text tags like `<p>`[cite: 1].

---

## How to Run

1. Clone or download this project.
2. Open `index.html` in your web browser.
