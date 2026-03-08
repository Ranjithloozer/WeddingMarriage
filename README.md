 Prabha & Empty Wedding Website

A premium, full-stack wedding invitation and management system designed for the celebration on **December 4, 2026**. This project features a cinematic guest experience and a private administrative dashboard for RSVP management.

 Features

Guest Experience
* Cinematic Hero Section: High-end visual intro with custom "Three Rings" animations.
* Live RSVP Counter:Real-time display of confirmed guests using MongoDB aggregation.
* Success Modal & QR Generation: Automated unique QR code generation for guest entry upon successful RSVP.
* Interactive Itinerary: Smoothly animated timeline and event details using **AOS** and **Framer Motion**.
* Multimedia Integration: Built-in music player and parallax journey sections.

  Administrative Tools
* Hidden Admin Dashboard: Accessible via secret keyboard shortcut (`Ctrl + Shift + A`) or hidden footer triggers (5-click secret).
* Guest Management: Real-time table view of all RSVPs, headcounts, and special song requests.
* Live Database Sync: Direct connection to **MongoDB Atlas** for data persistence.

Tech Stack

 Frontend
* React.js (Functional Components & Hooks)
* Tailwind CSS(Premium styling)
* Framer Motion (Advanced UI animations)
* AOS (Scroll animations)
* Lucide React (Modern iconography)
* QRCode.react (SVG QR Generation)

 Backend
* Node.js & Express (REST API)
* MongoDB Atlas (Cloud Database)
* Mongoose (Data Modeling)
* CORS & Dotenv (Security and configuration)

🛠️ Installation & Setup

To run this project locally, follow these steps:

### 1. Prerequisites
Make sure you have **Node.js** and **Git** installed on your machine.

### 2. Clone the Repository
```bash
git clone [https://github.com/Ranjithloozer/MarriageWedding.git](https://github.com/Ranjithloozer/MarriageWedding.git)
cd MarriageWedding


3. Install Dependencies
Install packages for both the frontend and the backend.

For Frontend (Root Folder):

Bash
npm install
npm install framer-motion aos lucide-react qrcode.react
For Backend (In your backend folder):

Bash
# Navigate to your server/backend folder
npm install express mongoose cors dotenv
4. Environment Configuration
Create a .env file in your backend folder:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
5. Running the Application
Open two terminals:

Terminal 1 (Backend):

Bash
node server.js
Terminal 2 (Frontend):

Bash
npm start
