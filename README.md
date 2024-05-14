# Frontend Application (Angular)

This project is an Angular-based frontend application designed to interact with the NestJS backend. It includes separate login and registration interfaces for Managers and Administrators, as well as dedicated home pages for each role.

## Prerequisites

Before starting, make sure you have [Node.js](https://nodejs.org/) and the Angular CLI installed. If you do not have the Angular CLI installed, you can install it via npm:

```bash
npm install -g @angular/cli
```

This project was built with Angular version 17.x or later.

## Getting Started

To get the frontend server running locally, follow these steps:

## 1. Clone the Repository

Clone the frontend repository to your local machine:

```bash
git clone [URL to your frontend repository]
cd [frontend repository name]
```

### 2. Install Dependencies

Navigate to the cloned directory and run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Serve the Application

Start the development server by running:

```bash
ng serve
```

This will compile the application and serve it on `http://localhost:4200`. The app will automatically reload if you change any of the source files.

## Navigating the Application

The application includes several routes, tailored for different user roles:

- Manager Login:
  - URL: `http://localhost:4200/login/Manager`
  - Description: Login interface for managers.
- Administrator Login:

  - URL: `http://localhost:4200/login/Administrator`
  - Description: Login interface for administrators.

- Manager Register:

  - URL: `http://localhost:4200/register/Manager`
  - Description: Registration interface for new managers.

- Administrator Register:
  - URL: `http://localhost:4200/register/Administrator`
  * Description: Registration interface for new administrators.

* Manager Home Page:

  - Accessed after successful login by a manager.

* Administrator Home Page:
  - Accessed after successful login by an administrator.
