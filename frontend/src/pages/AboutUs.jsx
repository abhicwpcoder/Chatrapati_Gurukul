import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const AboutUs = () => {
  const values = [
    { icon: Target, title: "Mission", desc: "प्रत्येक विद्यार्थ्याला दर्जेदार शिक्षण आणि सर्वांगीण विकास प्रदान करणे." },
    { icon: Eye, title: "Vision", desc: "भविष्यातील नेत्यांना घडवणारी भारतातील अग्रगण्य शैक्षणिक संस्था बनणे." },
    { icon: Heart, title: "Core Values", desc: "उत्कृष्टता, सचोटी, नावीन्य आणि विद्यार्थी-केंद्रित दृष्टिकोन." },
  ]

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">छत्रपती गुरुकुल बद्दल</h1>
          <p className="text-gray-300">2024 पासून तरुण मनांना सक्षम बनवत आहे.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">आमचा उत्कृष्टतेचा प्रवास</h2>
              <p className="text-gray-600 mb-4">
                शिक्षणात परिवर्तन घडवण्याच्या दूरदृष्टीने छत्रपती गुरुकुलची स्थापना 2024 साली झाली.

                केवळ 2 विद्यार्थ्यांपासून सुरुवात करून, आज आम्ही 100 हून अधिक यशस्वी विद्यार्थ्यांसह एक अग्रगण्य संस्था म्हणून नावारूपाला आलो आहोत.
              </p>
              <p className="text-gray-600 mb-6">
                आम्ही इयत्ता 5 वी ते 10 वी पर्यंत सर्वसमावेशक शिकवणी देतो, ज्यामध्ये संकल्पनांची स्पष्टता आणि परीक्षेच्या तयारीवर लक्ष केंद्रित केले जाते. मुला-मुलींसाठी असलेल्या आमच्या स्वतंत्र वसतिगृह सुविधांमुळे सुरक्षित आणि पोषक शैक्षणिक वातावरण सुनिश्चित होते.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["अनुभवी प्राध्यापक वर्ग", "आधुनिक पायाभूत सुविधा", "सिद्ध झालेले परिणाम", "सर्वांगीण विकास"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-accent-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="./images/broucher.jpeg" alt="About Us" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-accent-gold rounded-xl p-4">
                <div className="text-3xl font-bold text-primary-dark">2+</div>
                <div className="text-primary-dark">उत्कृष्टतेची वर्षे</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <item.icon className="w-12 h-12 mx-auto text-accent-gold mb-3" />
                <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;