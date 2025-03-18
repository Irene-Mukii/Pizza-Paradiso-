# 📸 Image Gallery App

## 📌 Overview  
The **Pizza Paradisso** is a simple yet powerful web application that allows users to **custom order, pay and track their pizza orders** easily. Built using a **Mongo DB**, it ensures seamless data storage, real-time updates, and ADMIN authentication for **extra functionalities like deleting orders, moving order process up or down and updating menus**.

## ✨ Features  
### ✅ User Features  
- **Custom Pizza Ordering:** Users can select and customize pizzas before placing an order.  
- **Secure Payment Integration:** Payments are handled via **PayPal** for a seamless checkout experience.  
- **Real-Time Order Tracking:** Users can track their order status as it moves through different stages.  

### 🔑 Admin Features  
- **Admin Authentication:** Simple **cookie-based authentication** for admins.  
- **Order Management:** Admins can **delete orders**, **update order statuses**, and **reorder process steps**.  
- **Menu Management:** Admins can **update pizza menus**, including adding and removing items.  

## 🛠 Tech Stack  
- **Frontend:** Next.js  
- **Backend:** Next.js API routes  
- **Database:** MongoDB  
- **Authentication:** Cookie sessions (Admin login credentials stored in `.env`)  
- **Payments:** PayPal integration  
- **Image Storage:** Cloudinary API  

## 🚀 Installation & Setup  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/Irene-Mukii/pizza-paradisso.git
cd pizza-paradisso
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up Environment Variables
```sh
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLOUDINARY_URL=your_cloudinary_api_url
PAYPAL_CLIENT_ID=your_paypal_client_id
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```
  
### 4️⃣ Run the application
```sh
npm run dev
```

## 🎯 Usage
### 🛒 User Workflow
1. Browse & Customize: Select pizzas and customize order preferences.
2. Place Order: Proceed to checkout and complete payment via PayPal.
3. Track Order: View real-time order status updates.
### 🔑 Admin Workflow
1. Login: Access the Admin Panel using the credentials stored in .env.local.
2. Manage Orders:
- Move order status up or down in the process.
- Delete orders if necessary.
3. Manage Menu:
- Update the menu by adding or removing pizzas.
- Upload images via Cloudinary API integration.

   
## 🔮 Future Enhancements

- Implement **user authentication & profiles** for personalized order history.
- Add **mobile push notifications** for real-time order updates.
- Improve **UI/UX with dynamic animations and themes**
  
## 📜 License

This project is open-source and available under the **MIT License**.  
🖼 Made with ❤️ by Irene Mukii


