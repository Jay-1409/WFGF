# Google Apps Script Web App

This is a deployed Google Apps Script Web App available at:  
📎 **[Launch Web App](https://script.google.com/macros/s/AKfycbwPjcDlaMkwH3iqghBptJuhtdEVeSkFJeESnaYS0Pa-ZD0tgJWAap7-sscKwswi1jG_ng/exec)**

## ✨ Overview

This Google Apps Script project serves as a web endpoint for [briefly explain what it does — e.g., handling form submissions, providing a backend for a Google Sheet, generating data, etc.].

## 🚀 Deployment

This web app is deployed as a **Google Apps Script Web App** using the `doGet()` or `doPost()` function.

## 📂 Structure

- `Code.gs`: Main script file where core logic resides.
- `doGet(e)` / `doPost(e)`: Webhook endpoint that processes incoming HTTP GET or POST requests.
- [Optionally add HTML files, if any, like `Index.html`, `Style.html`, etc.]

## 🛠️ How to Use

### Access the Web App

You can access the web app by visiting:  
👉 [https://script.google.com/macros/s/AKfycbwPjcDlaMkwH3iqghBptJuhtdEVeSkFJeESnaYS0Pa-ZD0tgJWAap7-sscKwswi1jG_ng/exec](https://script.google.com/macros/s/AKfycbwPjcDlaMkwH3iqghBptJuhtdEVeSkFJeESnaYS0Pa-ZD0tgJWAap7-sscKwswi1jG_ng/exec)

### Example Usage

- You can send a `GET` request directly via browser or tools like Postman.
- Example `GET` request:
  ```
  https://script.google.com/macros/s/AKfycbwPjcDlaMkwH3iqghBptJuhtdEVeSkFJeESnaYS0Pa-ZD0tgJWAap7-sscKwswi1jG_ng/exec?name=Jay
  ```

- Example `POST` request using `fetch`:
  ```javascript
  fetch("https://script.google.com/macros/s/AKfycbwPjcDlaMkwH3iqghBptJuhtdEVeSkFJeESnaYS0Pa-ZD0tgJWAap7-sscKwswi1jG_ng/exec", {
    method: "POST",
    body: JSON.stringify({ name: "Jay" }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
  ```

## 🔐 Permissions

Depending on the features used, this script might require permissions such as:
- Accessing Google Sheets
- Sending emails
- Reading form responses

Ensure you are signed in with a Google account that has the necessary permissions.

## 📜 License

This project is licensed under the MIT License – feel free to use and modify as needed.
