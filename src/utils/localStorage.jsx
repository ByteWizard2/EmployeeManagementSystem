localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete Project Report",
        "taskDescription": "Prepare the final report for the project.",
        "taskDate": "2025-03-10",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Attend Team Meeting",
        "taskDescription": "Discuss the project updates with the team.",
        "taskDate": "2025-03-05",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the latest pull requests.",
        "taskDate": "2025-03-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs reported in testing.",
        "taskDate": "2025-03-07",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Ensure the new feature has proper test coverage.",
        "taskDate": "2025-03-09",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Add new API details to the documentation.",
        "taskDate": "2025-03-08",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy to Staging",
        "taskDescription": "Deploy the latest version to the staging server.",
        "taskDate": "2025-03-10",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Monitor Performance",
        "taskDescription": "Check the system logs for performance issues.",
        "taskDate": "2025-03-11",
        "category": "Monitoring",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Sandeep",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create UI Mockups",
        "taskDescription": "Design new UI components for the dashboard.",
        "taskDate": "2025-03-06",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Improve UX Flow",
        "taskDescription": "Analyze and improve the user experience.",
        "taskDate": "2025-03-07",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskSummary": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for better performance.",
        "taskDate": "2025-03-12",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Set Up CI/CD Pipeline",
        "taskDescription": "Automate the deployment process.",
        "taskDate": "2025-03-13",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Perform a security audit for the application.",
        "taskDate": "2025-03-14",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = ()=>{
  const employees= JSON.parse(localStorage.getItem('employees')) 

  const admin= JSON.parse(localStorage.getItem('admin')) 
  
  return{employees,admin}
  
}


