const Employee= [
    {
      "id": 1,
      "email": "cliff1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete UI Design",
          "description": "Design dashboard UI using Tailwind",
          "date": "2025-01-10",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Login Bug",
          "description": "Resolve authentication issue",
          "date": "2025-01-05",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write API Docs",
          "description": "Document all REST APIs",
          "date": "2025-01-12",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "roy2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create React Components",
          "description": "Build reusable components",
          "date": "2025-01-08",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Styles",
          "description": "Improve mobile responsiveness",
          "date": "2025-01-06",
          "category": "UI",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Optimize Code",
          "description": "Remove unused code",
          "date": "2025-01-11",
          "category": "Optimization",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "mark3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database Backup",
          "description": "Take weekly DB backup",
          "date": "2025-01-07",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Query Optimization",
          "description": "Optimize slow SQL queries",
          "date": "2025-01-04",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Migration Task",
          "description": "Migrate old tables",
          "date": "2025-01-09",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "jason4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Test Payment Flow",
          "description": "Check payment gateway integration",
          "date": "2025-01-06",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Bug Reporting",
          "description": "Report UI bugs",
          "date": "2025-01-03",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Automation Script",
          "description": "Create test automation script",
          "date": "2025-01-11",
          "category": "Automation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "raj5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Server Monitoring",
          "description": "Monitor server performance",
          "date": "2025-01-09",
          "category": "DevOps",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy Update",
          "description": "Deploy latest build",
          "date": "2025-01-05",
          "category": "Deployment",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Fix Server Error",
          "description": "Resolve production crash",
          "date": "2025-01-12",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ]

const Admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];               



 export const setLocalStorage = (Employee, Admin) => {
  localStorage.setItem('Employee', JSON.stringify(Employee))
  localStorage.setItem('Admin', JSON.stringify(Admin))
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('Employee'))
  const admin = JSON.parse(localStorage.getItem('Admin')) // ✅ fixed case

  return { employee, admin }   // ✅ return object
}

