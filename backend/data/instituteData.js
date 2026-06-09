const instituteData = {
  aboutPreview: {
    url: "https://chatrapati-gurukul.onrender.com/Images/Broucher.jpeg",
    title: "Excellence in Education Since 2010",
    description: "Chatrapati Gurukul is a premier coaching center and hostel dedicated to nurturing young minds from 5th to 12th standard. With a focus on holistic development, we provide quality education, state-of-the-art infrastructure, and separate hostel facilities for boys and girls."
  },
  courses: [
    { id: 1, name: "Mathematics", grades: "5th-12th", description: "मूलभूत ते प्रगत स्तरापर्यंतचे सर्वसमावेशक गणित प्रशिक्षण", icon: "📐", features: ["रोजचा सराव", "आठवड्याच्या शेवटी चाचण्या", "शंका सत्रे"] },
    { id: 2, name: "Physics", grades: "9th-12th", description: "व्यावहारिक दृष्टिकोनासह संकल्पनात्मक भौतिकशास्त्र", icon: "⚡", features: ["प्रयोगशाळा सत्रे", "समस्या निराकरण", "संख्यात्मक सराव"] },
    { id: 3, name: "Chemistry", grades: "9th-12th", description: "बोर्ड आणि स्पर्धा परीक्षांसाठी सखोल रसायनशास्त्र", icon: "🧪", features: ["आवर्त सारणी प्राविण्य", "प्रतिक्रिया तक्ते", "नमुना चाचण्या"] },
    { id: 4, name: "Biology", grades: "9th-12th", description: "वैद्यकीय शिक्षण घेऊ इच्छिणाऱ्यांसाठी संपूर्ण जीवशास्त्र", icon: "🧬", features: ["आकृत्यांचा सराव", "सैद्धांतिक व्याप्ती", "नीट विशेष"] },
    { id: 5, name: "Science", grades: "5th-8th", description: "तरुण मनांसाठी पायाभूत विज्ञान", icon: "🔬", features: ["प्रयोग", "संवादात्मक शिक्षण", "प्रकल्प"] },
    { id: 6, name: "English", grades: "5th-12th", description: "व्याकरण, साहित्य आणि संवाद कौशल्ये", icon: "📖", features: ["शब्दसंग्रह वाढवणे", "लेखन कौशल्ये", "बोलचालची इंग्रजी"] }
  ],
  faculty: [
    { id: 1, name: "Dr. Rajesh Kumar", subject: "Mathematics", experience: "15+ Years", qualification: "Ph.D. Mathematics", image: "https://randomuser.me/api/portraits/men/1.jpg", bio: "Former IIT professor with excellence in teaching" },
    { id: 2, name: "Prof. Sunita Sharma", subject: "Physics", experience: "12+ Years", qualification: "M.Sc. Physics", image: "https://randomuser.me/api/portraits/women/2.jpg", bio: "Expert in making physics easy and interesting" },
    { id: 3, name: "Dr. Ankit Verma", subject: "Chemistry", experience: "10+ Years", qualification: "Ph.D. Chemistry", image: "https://randomuser.me/api/portraits/men/3.jpg", bio: "NEET and JEE specialist with proven track record" },
    { id: 4, name: "Ms. Priya Singh", subject: "Biology", experience: "8+ Years", qualification: "M.Sc. Botany", image: "https://randomuser.me/api/portraits/women/4.jpg", bio: "Medical entrance expert with 1000+ selections" }
  ],
  gallery: [
    { id: 1, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0033.jpg.jpeg", title: "Smart Classroom", category: "classroom" },
    { id: 2, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0029.jpg.jpeg", title: "Library Session", category: "library" },
    { id: 3, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0030.jpg.jpeg", title: "Laboratory", category: "lab" },
    { id: 4, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0032.jpg.jpeg", title: "Hostel Room", category: "hostel" },
    { id: 5, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0039.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 6, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250630-WA0003.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 7, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250602-WA0040.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 8, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250712-WA0000.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 9, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250712-WA0001.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 10, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250713-WA0003.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 11, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250721-WA0001.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 12, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250713-WA0005.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 13, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250713-WA0006.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 14, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250721-WA0002.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 15, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250803-WA0004.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 16, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20250815-WA0012.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 17, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0019.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 18, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0022.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 19, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0027.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 20, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0076.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 21, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0079.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 22, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0094.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 23, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0095.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 24, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0099.jpg.jpeg", title: "Sports Day", category: "event" },
    { id: 25, url: "https://chatrapati-gurukul.onrender.com/Images/IMG-20260319-WA0107.jpg.jpeg", title: "Sports Day", category: "event" }
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
  stats: { students: "2000+", faculty: "5+", courses: "6+", selection: "1000+" },
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