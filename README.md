![Screenshot 2025-03-10 210030](https://github.com/user-attachments/assets/b748e608-9540-4475-b302-bb9edbc64a78)# 🍔 Foody.com

A full-stack food delivery web application built using the **MERN stack** that allows users to browse, filter, and order dishes, while providing admin functionality for managing items and orders.

## 📂 Folder Structure
```
├── admin
├── backend
├── frontend
```

## 🚀 Features

### **Frontend**
- 🏠 **Landing Page:** Includes a Navbar, Header, and Food Filter option to filter dishes based on user preferences.
- ![Screenshot 2025-03-10 210030](https://github.com/user-attachments/assets/7c5a9d9d-8712-4f23-84ca-ffd524875dfb)
- ![Screenshot 2025-03-10 210400](https://github.com/user-attachments/assets/5dae5cb8-083a-4906-9061-706d7af78269)
- ![Screenshot 2025-03-10 210625](https://github.com/user-attachments/assets/0d6762a7-d1c8-40d3-9e56-da12870ad7da)



- 🍽️ **Food Section:** Users can add multiple dishes to their cart.
- ![Screenshot 2025-03-10 210527](https://github.com/user-attachments/assets/89b1b1f1-35f6-4605-b3f7-22fbe0d5aeb2)

- 🛒 **Cart Page:** Displays selected items, calculates total price, and enables easy checkout.
- ![Screenshot 2025-03-10 210948](https://github.com/user-attachments/assets/c4309c2a-710e-430f-ae65-946e7f1636d8)
- 📋 **Order Section:** Users enter their address details and proceed to checkout.
- ![Screenshot 2025-03-10 211109](https://github.com/user-attachments/assets/970099f3-5e82-4eff-992c-e642686f942b)


- 📜 **My Orders Section:** Users can view all their previous orders in this section.
- ![Screenshot 2025-03-10 211744](https://github.com/user-attachments/assets/35b3fd93-10da-40af-9d61-eb3a3bdcbdb8)


- 🔒 **Authentication:** Users must sign up and log in to place orders. JWT tokens are used to manage authentication.
- ![Screenshot 2025-03-10 210710](https://github.com/user-attachments/assets/44ec39ce-03ba-41ac-b134-13c9bc159b59)
- ![Screenshot 2025-03-10 210752](https://github.com/user-attachments/assets/793c6a4d-c524-430d-8f51-42e4e8a80144)



### **Admin Section**
- ➕ **Add Items:** Admins can add new food items with attributes like **image**, **name**, **description**, **category**, and **price**.
- ![Screenshot 2025-03-10 211856](https://github.com/user-attachments/assets/4a100f6d-76c7-4b81-9c43-530b60004992)

- 📄 **View Items:** Admins can see and remove any item from the list of all added food items.
- ![Screenshot 2025-03-10 211941](https://github.com/user-attachments/assets/27589d14-3cad-4ae4-b7db-6c7fb6435af3)

- 📦 **Orders Management:** Admins can view a complete list of orders placed by users.
- ![Screenshot 2025-03-10 212119](https://github.com/user-attachments/assets/a2bbf885-9bcf-4667-b5bb-baca6baf626d)


### **Backend**
- 🔐 Uses **bcrypt** to encrypt user passwords securely.
- 🖼️ Uses **Multer** to handle image uploads, saving them locally and in **MongoDB Atlas**.
- ✅ Uses **Validator** to ensure all input fields are correctly validated.

## 🛠️ Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt.js
- **File Uploads:** Multer

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amarsarkar007/foody.com.git
   cd foody.com
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install

   # Admin
   cd ../admin
   npm install
   ```


4. **Run the application**
   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd ../frontend
   npm start

   # Start the admin panel
   cd ../admin
   npm start
   ```

## 💡 Future Enhancements
- 📱 Mobile app version
- 📍 Real-time order tracking
- 🛠️ Additional payment options
- ⭐ User reviews & rating system

## 🤝 Contributing
Contributions are welcome! Fork the repo, create a branch, and submit a PR.

## 📜 License
This project is licensed under the MIT License.

