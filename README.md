# Inventory Management System - README

This project is an Inventory Management System built using React.js for the frontend. It allows Managers to add or remove inventory items, and Assistants can view the inventory. The system includes visual infographics as charts and tables to represent the available inventory and its details.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Inventory Management System is a web application that allows users with different roles (Manager and Assistant) to interact with the inventory data. Managers can add new items or remove existing ones, while Assistants can only view the inventory details. The system includes a visual chart to represent the quantity of each item in the inventory.

## Features

- User Management:
  - Managers can add and remove inventory items.
  - Assistants can view inventory details.
- Visual Infographics:
  - A bar chart to represent the quantity of each item in the inventory.
- Authentication (Basic):
  - Login functionality to differentiate between Manager and Assistant.
  - Passwords are stored as plain text (for simplicity, in a real-world scenario, use secure authentication methods).
- Responsive Design:
  - The application is designed to be responsive and work well on various devices.

## Installation

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Open a terminal in the project directory and run the following command to install the required dependencies:

```bash
npm install
```

## Usage

1. After installing the dependencies, start the development server with the following command:

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. You will be redirected to the Home page, where you can access the Manager or Assistant dashboard based on your role.

4. For demonstration purposes, you can log in as a Manager with the credentials:
   - Username: manager
   - Password: managerpassword

   Or log in as an Assistant with the credentials:
   - Username: assistant
   - Password: assistantpassword

## Deployment

The frontend application can be deployed using services like Vercel, Netlify, AWS, or others. To deploy:

1. Build the production version of the React app:

```bash
npm run build
```

2. Deploy the contents of the `build` folder to your preferred hosting platform.

## Backend (Optional)

The backend implementation for this project is optional. If you want to build the backend using Node.js and Express.js to perform CRUD operations and integrate with a database, please refer to the backend documentation provided in the `backend/README.md` file.

## Bonus Features (Optional)

For the optional bonus features such as Assistant's item request, secure authentication, and integration with OpenAI/Chat GPT, please refer to the documentation provided in the `bonus_features/README.md` file.

## Contributing

Contributions to this project are welcome! If you find any issues or have improvements to suggest, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
