const employees = [
  {
    id: 1,
    emailId: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the UI design for the company homepage.",
        taskDate: "2026-06-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsiveness issues in the navbar.",
        taskDate: "2026-05-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate legacy customer data to new database.",
        taskDate: "2026-05-25",
        category: "Database"
      }
    ]
  },
  {
    id: 2,
    emailId: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API Endpoint",
        taskDescription: "Develop REST API for user registration.",
        taskDate: "2026-06-06",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add test coverage for authentication module.",
        taskDate: "2026-06-07",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Document API endpoints and usage examples.",
        taskDate: "2026-05-30",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDescription: "Improve query execution time.",
        taskDate: "2026-05-20",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    emailId: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Research competitors and prepare a report.",
        taskDate: "2026-06-08",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with client.",
        taskDate: "2026-05-27",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for quarterly review.",
        taskDate: "2026-06-10",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Feedback Analysis",
        taskDescription: "Analyze customer feedback data.",
        taskDate: "2026-05-24",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Survey Campaign",
        taskDescription: "Conduct online customer survey.",
        taskDate: "2026-05-18",
        category: "Marketing"
      }
    ]
  },
  {
    id: 4,
    emailId: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Analyze website SEO performance.",
        taskDate: "2026-06-09",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog article for company website.",
        taskDate: "2026-05-26",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Prepare promotional email campaign.",
        taskDate: "2026-06-12",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad Performance Review",
        taskDescription: "Review social media ad metrics.",
        taskDate: "2026-05-21",
        category: "Advertising"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Keyword Research",
        taskDescription: "Identify high-ranking keywords.",
        taskDate: "2026-05-22",
        category: "SEO"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page Review",
        taskDescription: "Suggest improvements to landing page.",
        taskDate: "2026-06-11",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    emailId: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance and uptime.",
        taskDate: "2026-06-05",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy latest release to production.",
        taskDate: "2026-05-29",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backup Database",
        taskDescription: "Create weekly database backup.",
        taskDate: "2026-06-07",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Scan",
        taskDescription: "Run vulnerability assessment.",
        taskDate: "2026-05-23",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Configure CI/CD",
        taskDescription: "Set up automated deployment pipeline.",
        taskDate: "2026-05-19",
        category: "DevOps"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Container Optimization",
        taskDescription: "Optimize Docker container size.",
        taskDate: "2026-06-13",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Log Analysis",
        taskDescription: "Analyze application logs for errors.",
        taskDate: "2026-06-14",
        category: "Monitoring"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    emailId: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin)
  )
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin }
}