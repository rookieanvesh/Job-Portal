import { IconSearch, IconMapPin, IconRecharging } from "@tabler/icons-react";

const searchFields = [
  { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
  { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
  { title: "Skills", icon: IconRecharging, options: ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python", "Java", "Ruby", "PHP", "SQL", "MongoDB", "PostgreSQL", "Git", "API Development", "Testing and Debugging", "Agile Methodologies", "DevOps", "AWS", "Azure", "Google Cloud"] },
]
const profiles = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    about: "Passionate software engineer with expertise in full-stack development and cloud technologies.",
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "MongoDB"],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Google",
        location: "Bangalore",
        startDate: "2020-01",
        endDate: "Present",
        description: "Leading development of cutting-edge technologies and shaping the future of the internet."
      },
      {
        title: "Software Engineer",
        company: "Amazon",
        location: "Hyderabad",
        startDate: "2017-06",
        endDate: "2019-12",
        description: "Worked on e-commerce platform development and optimization."
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        issueDate: "2021-05",
        certificateId: "AWS-123456"
      },
      {
        name: "Google Cloud Professional Cloud Developer",
        issuer: "Google Cloud",
        issueDate: "2022-03",
        certificateId: "GCP-789012"
      }
    ]
  },
  // Add more profile objects here...
];

const talents = [
  {
    name: "Jane Smith",
    role: "UX Designer",
    company: "Zomato",
    topSkills: ["UI/UX Design", "Figma", "Adobe XD", "User Research"],
    about: "Creative UX designer with a passion for creating intuitive and engaging user experiences.",
    expectedCTC: "30 LPA",
    location: "Gurgaon",
    image: "https://example.com/jane-smith.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Data Scientist",
    company: "Amazon",
    topSkills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    about: "Experienced data scientist specializing in machine learning and predictive modeling.",
    expectedCTC: "45 LPA",
    location: "Hyderabad",
    image: "https://example.com/mike-johnson.jpg"
  },
  {
    name: "Emily Brown",
    role: "Product Manager",
    company: "Flipkart",
    topSkills: ["Product Strategy", "Market Analysis", "Agile Methodologies"],
    about: "Strategic product manager with a focus on driving product development and growth.",
    expectedCTC: "40 LPA",
    location: "Mumbai",
    image: "https://example.com/emily-brown.jpg"
  },
  {
    name: "David Lee",
    role: "Frontend Developer",
    company: "Paytm",
    topSkills: ["HTML", "CSS", "JavaScript", "React"],
    about: "Frontend developer with expertise in building responsive and user-friendly web applications.",
    expectedCTC: "35 LPA",
    location: "Delhi",
    image: "https://example.com/david-lee.jpg"
  },
  {
    name: "Sarah Wilson",
    role: "Backend Developer",
    company: "Myntra",
    topSkills: ["Java", "Spring Boot", "RESTful APIs"],
    about: "Backend developer with a focus on building scalable and efficient server-side applications.",
    expectedCTC: "38 LPA",
    location: "Bangalore",
    image: "https://example.com/sarah-wilson.jpg"
  },

  // Add more talent objects here...
]

export default { searchFields, profiles, talents };
