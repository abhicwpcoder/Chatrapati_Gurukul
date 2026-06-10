const instituteData = {
  courses: [
    { id: 1, name: "Mathematics", grades: "5th-10th", description: "मूलभूत ते प्रगत स्तरापर्यंतचे सर्वसमावेशक गणित प्रशिक्षण", icon: "📐", features: ["रोजचा सराव", "आठवड्याच्या शेवटी चाचण्या", "शंका सत्रे"] },
    { id: 5, name: "Science", grades: "5th-8th", description: "तरुण मनांसाठी पायाभूत विज्ञान", icon: "🔬", features: ["प्रयोग", "संवादात्मक शिक्षण", "प्रकल्प"] },
    { id: 6, name: "English", grades: "5th-10th", description: "व्याकरण, साहित्य आणि संवाद कौशल्ये", icon: "📖", features: ["शब्दसंग्रह वाढवणे", "लेखन कौशल्ये", "बोलचालची इंग्रजी"] }
  ],
  faculty: [
    { id: 1, name: "प्रा. सतिश घुंबरे सर", subject: "English", experience: "13+ Years", qualification: "M.A. English, B.Ed.", image: "https://chatrapati-gurukul.onrender.com/Images/satish.jpeg", bio: "Englishprofessor with excellence in teaching" },
    { id: 2, name: "प्रा. मधुर घुंबरे सर", subject: "Mathematics", experience: "4+ Years", qualification: "M.Sc. Mathematics, B.Ed.", image: "https://chatrapati-gurukul.onrender.com/Images/madhur.jpeg", bio: "Expert in making physics easy and interesting" },
    { id: 3, name: "प्रा. अपूर्वा देशमुख मॅडम", subject: "Biology", experience: "5+ Years", qualification: "M.Sc. Botany, B.Ed.", image: "https://chatrapati-gurukul.onrender.com/Images/deshmukh.jpeg", bio: "NEET specialist with proven track record and Medical entrance expert" },
  ],
  gallery: [
    { id: 1, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0033.jpg.jpeg", title: "Smart Classroom", category: "classroom" },
    { id: 2, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0029.jpg.jpeg", title: "Library Session", category: "library" },
    { id: 3, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0030.jpg.jpeg", title: "Laboratory", category: "lab" },
    { id: 4, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0032.jpg.jpeg", title: "Hostel Room", category: "hostel" },
    { id: 5, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0039.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 6, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250630-WA0003.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 7, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250602-WA0040.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 8, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250712-WA0000.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 9, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250712-WA0001.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 10, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250713-WA0003.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 11, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250721-WA0001.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 12, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250713-WA0005.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 13, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250713-WA0006.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 14, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250721-WA0002.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 15, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250803-WA0004.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 16, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20250815-WA0012.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 17, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0019.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 18, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0022.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 19, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0027.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 20, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0076.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 21, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0079.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 22, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0094.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 23, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0095.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 24, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0099.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 25, url: "https://chatrapati-gurukul.onrender.com/images/IMG-20260319-WA0107.jpg.jpeg", title: "Sports Day", category: "event" }
  ],
  results: [
    { id: 1, year: "2024", totalStudents: 250, passed: 245, percentage: "98%" },
    { id: 2, year: "2023", totalStudents: 220, passed: 212, percentage: "96.4%"},
    { id: 3, year: "2022", totalStudents: 200, passed: 190, percentage: "95%" }
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
  stats: { students: "100+", faculty: "5+", courses: "6+", selection: "+" },
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

// , toppers: ["Rahul Sharma - 98.6%", "Priya Patel - 97.8%"]
// , toppers: ["Amit Kumar - 97.5%", "Neha Gupta - 96.8%"] 
// , toppers: ["Vikash Singh - 96.2%", "Sneha Reddy - 95.8%"]