# Allocam - Omegle Substitute

Allocam is a real-time video chat platform designed as a substitute for Omegle, specifically tailored for users. It provides a seamless and secure way for users to connect with strangers through video conversations.

## Features

- **Random Video Chats:** Connect with random users from the allotalk.in community through live video chats.
- **Anonymous Interaction:** Maintain your privacy by engaging in anonymous conversations without revealing personal information.
- **Filter Options:** Customize your experience by applying filters based on interests, language, or region to match with like-minded individuals.
- **Moderation Controls:** Enjoy a safe environment with built-in moderation features to prevent inappropriate content and behavior.
- **Responsive Design:** Allocam is designed to work seamlessly across various devices, ensuring a user-friendly experience on desktops, tablets, and smartphones.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codernotme/allocam.git
   cd allocam
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
### Setup MongoDB
1. Install MongoDB on your system if you haven't already.
2. Start MongoDB service.
3. Ensure MongoDB is running on the default port (27017).

### Running the Server
1. Start the server:
   ```bash
   npm start
   ```
2. The server will be running at `http://localhost:8080`.

### Usage
1. Open your web browser and navigate to `http://localhost:8080`.
2. Start a video chat session by clicking on the appropriate buttons/options provided on the website.

### Server Configuration
The server runs on port 8080 by default. You can change this by modifying the PORT variable in server.js file.

#### Tech Stack
1. Node.js
2. Express.js
3. MongoDB
4. Mongoose
5. WebRTC
6. Socket.IO

### Folder Structure
```csharp
Allocam/
│
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
│
├── server/
│   ├── controller/
│   ├── database/
│   ├── model/
│   ├── routes/
│   ├── services/
│   └── views/
│
├── server.js
│
└── readme.md
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
