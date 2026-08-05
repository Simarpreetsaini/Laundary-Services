# Service Booking Web Application

A clean, responsive, and interactive frontend web application built with HTML, CSS, and Vanilla JavaScript. The application allows users to browse through service offerings, add or skip items dynamically, and complete a service booking form with real-time UI validation feedback.

---

## 🌟 Features

- **Dynamic Service Navigation:** Browse available services one by one using **Add Item** and **Skip Item** actions.
- **Interactive Cart System:** 
  - Automatically calculates the total price of selected services.
  - Generates an itemized list dynamically.
  - Displays a clean "No Items Added" fallback view when the cart is empty.
- **Header & Navigation:**
  - Modern centered navigation menu links.
  - Styled user pill display with an inline SVG exit/logout icon.
- **Dynamic Booking Validation:**
  - In-page dynamic feedback messages (success/error states) directly below the submit button.
  - Requires all user details (Name, Email, Phone) and at least one cart item before booking confirmation.

---

## 📁 Project Structure

```text
├── index.html       # Application HTML layout and UI components
├── style.css        # Responsive styling and custom UI elements
├── script.js        # Core logic, cart handling, and form validation
└── images/          # Service images directory