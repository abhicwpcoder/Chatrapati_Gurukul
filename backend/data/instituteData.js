const instituteData = {
  courses: [
    { id: 1, name: "Mathematics", grades: "5th-12th", description: "Comprehensive math training from basics to advanced", icon: "📐", features: ["Daily Practice", "Weekend Tests", "Doubt Sessions"] },
    { id: 2, name: "Physics", grades: "9th-12th", description: "Conceptual physics with practical approach", icon: "⚡", features: ["Lab Sessions", "Problem Solving", "Numerical Practice"] },
    { id: 3, name: "Chemistry", grades: "9th-12th", description: "In-depth chemistry for board & competitive exams", icon: "🧪", features: ["Periodic Table Mastery", "Reaction Charts", "Mock Tests"] },
    { id: 4, name: "Biology", grades: "9th-12th", description: "Complete biology for medical aspirants", icon: "🧬", features: ["Diagrams Practice", "Theory Coverage", "NEET Focus"] },
    { id: 5, name: "Science", grades: "5th-8th", description: "Foundation science for young minds", icon: "🔬", features: ["Experiments", "Interactive Learning", "Projects"] },
    { id: 6, name: "English", grades: "5th-12th", description: "Grammar, literature & communication skills", icon: "📖", features: ["Vocabulary Building", "Writing Skills", "Spoken English"] }
  ],
  faculty: [
    { id: 1, name: "Dr. Rajesh Kumar", subject: "Mathematics", experience: "15+ Years", qualification: "Ph.D. Mathematics", image: "https://randomuser.me/api/portraits/men/1.jpg", bio: "Former IIT professor with excellence in teaching" },
    { id: 2, name: "Prof. Sunita Sharma", subject: "Physics", experience: "12+ Years", qualification: "M.Sc. Physics", image: "https://randomuser.me/api/portraits/women/2.jpg", bio: "Expert in making physics easy and interesting" },
    { id: 3, name: "Dr. Ankit Verma", subject: "Chemistry", experience: "10+ Years", qualification: "Ph.D. Chemistry", image: "https://randomuser.me/api/portraits/men/3.jpg", bio: "NEET and JEE specialist with proven track record" },
    { id: 4, name: "Ms. Priya Singh", subject: "Biology", experience: "8+ Years", qualification: "M.Sc. Botany", image: "https://randomuser.me/api/portraits/women/4.jpg", bio: "Medical entrance expert with 1000+ selections" }
  ],
  gallery: [
    { id: 1, url: "https://images.pexels.com/photos/11445244/pexels-photo-11445244.jpeg", title: "Smart Classroom", category: "classroom" },
    { id: 2, url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600", title: "Library Session", category: "library" },
    { id: 3, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600", title: "Laboratory", category: "lab" },
    { id: 4, url: "https://images.unsplash.com/photo-1562774053-701939374585?w=600", title: "Hostel Room", category: "hostel" },
    { id: 5, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", title: "Sports Day", category: "event" }
  ],
  results: [
    { id: 1, year: "2024", totalStudents: 250, passed: 245, percentage: "98%", toppers: ["Rahul Sharma - 98.6%", "Priya Patel - 97.8%"] },
    { id: 2, year: "2023", totalStudents: 220, passed: 212, percentage: "96.4%", toppers: ["Amit Kumar - 97.5%", "Neha Gupta - 96.8%"] },
    { id: 3, year: "2022", totalStudents: 200, passed: 190, percentage: "95%", toppers: ["Vikash Singh - 96.2%", "Sneha Reddy - 95.8%"] }
  ],
  testimonials: [
    { id: 1, name: "Rahul Sharma", parentOf: "Class 10 Student", rating: 5, text: "The faculty is amazing! My son improved from 65% to 92% in just 6 months.", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 2, name: "Mrs. Sunita Gupta", parentOf: "Class 12 Student", rating: 5, text: "Best coaching institute in town. Hostel facilities are excellent and secure.", image: "https://randomuser.me/api/portraits/women/6.jpg" }
  ],
  faq: [
    { question: "What is the admission process?", answer: "Fill the enquiry form, attend a counseling session, submit documents, and pay fees." },
    { question: "Do you provide hostel facilities?", answer: "Yes, separate hostels for boys and girls with 24/7 security and nutritious meals." },
    { question: "What are the batch sizes?", answer: "Small batch sizes of 20-25 students for personalized attention." },
    { question: "Do you prepare for competitive exams?", answer: "Yes, we prepare for JEE, NEET, Olympiads, and other competitive exams." }
  ],
  stats: { students: "5000+", faculty: "25+", courses: "6+", selection: "1000+" },
  boysHostel: { 
    capacity: 100, 
    rooms: "2/3/4 sharing", 
    amenities: ["WiFi", "Study Tables", "Gym", "Recreation Room", "24/7 Security", "Healthy Meals", "AC Rooms", "Regular Health Checkups"],
    fee: "₹4500-6000/month"
  },
  girlsHostel: { 
    capacity: 80, 
    rooms: "2/3 sharing", 
    amenities: ["WiFi", "Study Tables", "Yoga Room", "Common Room", "Lady Wardens", "Nutritious Food", "AC Rooms", "Medical Facilities"],
    fee: "₹4500-5500/month"
  }
};

export default instituteData;