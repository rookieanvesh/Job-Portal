import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
  { title: "Job Title", icon: IconSearch, options: [
    'Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 
    'Marketing Specialist', 'Sales Executive', 'Content Writer', 'Customer Support',
    'DevOps Engineer', 'Business Analyst', 'HR Manager', 'Financial Analyst',
    'Network Administrator', 'Mobile App Developer', 'AI/ML Engineer', 'Blockchain Developer'
  ]},
  { title: "Location", icon: IconMapPin, options: [
    'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 
    'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore', 'Kochi', 'Gurgaon',
    'Noida', 'Remote'
  ]},
  { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert', 'Senior'] },
  { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship', 'Remote'] }
];

const jobList = [
  {
    jobTitle: "Software Engineer",
    company: "Google",
    applicants: 120,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "40 LPA",
    postedDaysAgo: 5,
    description: "Google is seeking a talented Software Engineer to join our team in Bangalore. You'll work on cutting-edge technologies and help shape the future of the internet."
  },
  {
    jobTitle: "Data Scientist",
    company: "Amazon",
    applicants: 85,
    experience: "Senior",
    jobType: "Full-Time",
    location: "Hyderabad",
    package: "52 LPA",
    postedDaysAgo: 3,
    description: "Amazon is looking for a Senior Data Scientist to drive data-driven decision making across our e-commerce platform."
  },
  {
    jobTitle: "UX Designer",
    company: "Zomato",
    applicants: 60,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Gurgaon",
    package: "28 LPA",
    postedDaysAgo: 7,
    description: "Zomato is hiring a UX Designer to enhance our food delivery app experience. Join us in revolutionizing how India eats!"
  },
  {
    jobTitle: "Content Manager",
    company: "Netflix",
    applicants: 45,
    experience: "Expert",
    jobType: "Remote",
    location: "Remote",
    package: "38 LPA",
    postedDaysAgo: 2,
    description: "Netflix is seeking a Content Manager to curate and manage our growing library of Indian content. Help us bring the best of Indian cinema to the world!"
  },
  {
    jobTitle: "AI Research Scientist",
    company: "Meta",
    applicants: 70,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "60 LPA",
    postedDaysAgo: 4,
    description: "Meta is looking for an AI Research Scientist to push the boundaries of artificial intelligence and machine learning."
  },
  {
    jobTitle: "Cloud Architect",
    company: "IBM",
    applicants: 55,
    experience: "Senior",
    jobType: "Full-Time",
    location: "Pune",
    package: "45 LPA",
    postedDaysAgo: 6,
    description: "IBM is hiring a Cloud Architect to design and implement robust cloud solutions for our enterprise clients."
  },
  {
    jobTitle: "Network Engineer",
    company: "Jio",
    applicants: 40,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Mumbai",
    package: "32 LPA",
    postedDaysAgo: 8,
    description: "Jio is seeking a Network Engineer to help build and maintain our cutting-edge telecom infrastructure."
  },
  {
    jobTitle: "Product Manager",
    company: "Flipkart",
    applicants: 90,
    experience: "Senior",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "48 LPA",
    postedDaysAgo: 1,
    description: "Flipkart is looking for a Senior Product Manager to lead our mobile app development team and drive user engagement."
  },
  {
    jobTitle: "Software Development Engineer",
    company: "Microsoft",
    applicants: 110,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Hyderabad",
    package: "42 LPA",
    postedDaysAgo: 4,
    description: "Microsoft is hiring a Software Development Engineer to work on our cloud services and help businesses transform digitally."
  },
  {
    jobTitle: "Frontend Engineer",
    company: "Pinterest",
    applicants: 65,
    experience: "Intermediate",
    jobType: "Remote",
    location: "Remote",
    package: "36 LPA",
    postedDaysAgo: 3,
    description: "Pinterest is seeking a Frontend Engineer to create beautiful and performant user interfaces for our platform."
  },
  {
    jobTitle: "Operations Manager",
    company: "Airbnb",
    applicants: 50,
    experience: "Senior",
    jobType: "Full-Time",
    location: "Delhi",
    package: "40 LPA",
    postedDaysAgo: 5,
    description: "Airbnb is looking for an Operations Manager to oversee our growing business in the Indian market."
  },
  {
    jobTitle: "Data Engineer",
    company: "Spotify",
    applicants: 75,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Mumbai",
    package: "34 LPA",
    postedDaysAgo: 2,
    description: "Spotify is hiring a Data Engineer to help us leverage big data to enhance our music recommendation systems."
  },
  {
    jobTitle: "Database Administrator",
    company: "Oracle",
    applicants: 40,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "50 LPA",
    postedDaysAgo: 7,
    description: "Oracle is seeking an experienced Database Administrator to manage and optimize our enterprise-level database systems."
  },
  {
    jobTitle: "Sales Manager",
    company: "Salesforce",
    applicants: 55,
    experience: "Senior",
    jobType: "Full-Time",
    location: "Gurgaon",
    package: "45 LPA",
    postedDaysAgo: 4,
    description: "Salesforce is looking for a dynamic Sales Manager to drive our CRM solutions in the Indian market."
  },
  {
    jobTitle: "Machine Learning Engineer",
    company: "Uber",
    applicants: 80,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "38 LPA",
    postedDaysAgo: 3,
    description: "Uber is hiring a Machine Learning Engineer to improve our ride-sharing algorithms and enhance user experience."
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Adobe",
    applicants: 70,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Noida",
    package: "32 LPA",
    postedDaysAgo: 6,
    description: "Adobe is seeking a creative UI/UX Designer to work on our suite of design tools and shape the future of digital creativity."
  },
  {
    jobTitle: "iOS Developer",
    company: "Apple",
    applicants: 95,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Hyderabad",
    package: "55 LPA",
    postedDaysAgo: 2,
    description: "Apple is looking for an expert iOS Developer to create innovative apps for our ecosystem of devices."
  }
];

export { dropdownData, jobList };