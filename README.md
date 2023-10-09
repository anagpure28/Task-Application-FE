## TASK APPLICATION FRONTEND

  Deployed link - https://frontend-kt8dxfa15-anagpure28.vercel.app/

# Task Management Frontend

This is a React-based user interface for managing tasks. It allows users to list tasks, add tasks, edit tasks, and delete tasks. The frontend communicates with the backend RESTful API to perform these operations. Axios is used to make HTTP requests to the backend.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Getting Started

 # Clone the repository:

    git clone https://github.com/yourusername/task-management-frontend.git


## Getting Started

# Clone the repository:

   https://github.com/anagpure28/Task-Application-FE.git
   

1. Install dependencies:
  
        npm install

2. Create a .env file in the root directory with the following content:

        REACT_APP_API_URL = https://task-application1.onrender.com  

   Adjust the PORT and MONGODB_URI values as needed.

3. Start the application:

        npm start
   
4. The API should now be running. You can access it at http://localhost:3000.

# Features

    List Tasks: View a list of tasks fetched from the backend.

    Add Task: Create a new task using a form.

    Edit Task: Edit an existing task using a form.

    Delete Task: Delete a task from the list.

    Validation: Input fields are validated, and error feedback is provided for any validation errors.

# Project Structure

    src/components/: Contains React components for the application.
    src/pages/: Contains various pages of the application.
    src/App.js: Main application component.
    src/index.js: Entry point of the application.
    
# Customize

  You can customize the application by modifying the React components, styles, and other files in the src/ directory. Update the Axios requests in the service files to match your backend API endpoints.

# Contributing

  Contributions are welcome! Please read the Contributing Guidelines for more details.
