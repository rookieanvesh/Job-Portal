const companies = ["Google", "Amazon", "Zomato", "Netflix", "Meta", "Ibm",
  "Jio", "Flipkart", "Microsoft", "Pinterest", "abnb", "Spotify", "Oracle", "salesforce", "Uber", "adobe"
];

const jobCategories = [
  {
    name: "Software Engineering",
    desc: "Design, develop, and maintain software applications and systems.",
    jobs: 150
  },
  {
    name: "Data Science",
    desc: "Analyze and interpret complex data to help organizations make better decisions.",
    jobs: 120
  },
  {
    name: "Product Management",
    desc: "Oversee the development and strategy of products throughout their lifecycle.",
    jobs: 80
  },
  {
    name: "UX-UI Design",
    desc: "Create intuitive and visually appealing user interfaces for digital products.",
    jobs: 90
  },
  {
    name: "Marketing",
    desc: "Develop and implement strategies to promote products or services online.",
    jobs: 100
  },
  {
    name: "Sales",
    desc: "Build relationships with potential customers and close deals to generate revenue.",
    jobs: 130
  },
  {
    name: "Finance",
    desc: "Manage company finances, including planning, budgeting, and forecasting.",
    jobs: 140
  },
  {
    name: "Customer Support",
    desc: "Assist customers with inquiries, issues, and provide excellent service.",
    jobs: 110
  },
  {
    name: "Human Resources",
    desc: "Manage employee relations, recruitment, and organizational development.",
    jobs: 70
  }
];

const work = [
  {
    name: "Build Your Resume",
    desc: "Create a standout resume with your skills.",
  },
  {
    name: "Apply for Job",
    desc: "Find and apply for jobs that match your skills.",  },
  {
    name: "Get Hired",
    desc: "Connect with employers and start your new job.",  }
  // {
  //   name: "Prepare for Interview",
  //   desc: "Research the company and practice common questions.",
  // },
  // {
  //   name: "Follow Up",
  //   desc: "Send a thank you note and inquire about next steps.",
  // },
];

const testimonials = [
  {
    name: "Ethan Dolan",
    testimonial: "This platform helped me land my dream job at Google!",
    rating: 5,
  },
  {
    name: "Tanisha Rashinkar",
    testimonial: "I was impressed with the quality of job postings. Found my dream job!",
    rating: 4.7,
  },
  {
    name: "Mike Johnson",
    testimonial: "Great resource for job seekers. Found my current role through this site.",
    rating: 5,
  },
  {
    name: "Rudransh Sharma",
    testimonial: "I was able to find a job that matched my skills. Thanks!",
    rating: 4,
  }
];

export { companies, jobCategories, work, testimonials};

// Example usage:
// const softwareEngineering = getJobInfo("Software Engineering");
// console.log(softwareEngineering);
// 
// // In a React component:
// // <img className="h-8 w-8" src={`/Category/${softwareEngineering.name}.png`} alt={softwareEngineering.name} />
// // <div className="text-woodsmoke-100 text-xl font-semibold">{softwareEngineering.name}</div>
// // <div className="text-sm text-woodsmoke-300 text-center">{softwareEngineering.desc}</div>
// // <div className="text-coral-red-300 text-lg">{softwareEngineering.jobs} new jobs posted</div>