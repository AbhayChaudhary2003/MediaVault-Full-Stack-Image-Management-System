# MediaVault — Full-Stack Image Management System

MediaVault is a full-stack web application that allows users to submit information through a frontend form and upload images to the cloud using **ImageKit**. The backend handles the API requests and stores the uploaded image URL along with user data.

## 🚀 Features

* User form with image upload
* REST API for handling form data
* Cloud image storage using ImageKit
* Database integration
* Image URL storage and retrieval
* API testing with Postman

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript / React
**Backend:** Node.js, Express.js
**Database:** MongoDB
**Cloud Storage:** ImageKit
**Tools:** Postman, Git, GitHub

## ⚙️ Workflow

```text
Frontend Form
      ↓
REST API
      ↓
Node.js + Express
      ↓
ImageKit → Image URL
      ↓
MongoDB → User Data + Image URL
```

## 🔧 Setup

```bash
git clone https://github.com/your-username/MediaVault.git
cd MediaVault
npm install
npm start
```

Configure your **MongoDB** and **ImageKit** credentials in the `.env` file.

## 👨‍💻 Author

**Abhay Chaudhary**
