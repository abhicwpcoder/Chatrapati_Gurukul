import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const AboutUs = () => {
  const values = [
    { icon: Target, title: "Mission", desc: "To provide quality education and holistic development to every student." },
    { icon: Eye, title: "Vision", desc: "To become India's leading educational institute shaping future leaders." },
    { icon: Heart, title: "Core Values", desc: "Excellence, Integrity, Innovation, and Student-Centric Approach." },
  ]

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Chatrapati Gurukul</h1>
          <p className="text-gray-300">Empowering young minds since 2010</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Journey of Excellence</h2>
              <p className="text-gray-600 mb-4">
                Chatrapati Gurukul was founded in 2010 with a vision to transform education. 
                Starting with just 50 students, we have grown into a premier institution with 
                over 5000 successful students.
              </p>
              <p className="text-gray-600 mb-6">
                We offer comprehensive coaching from 5th to 12th standard, focusing on conceptual 
                clarity and exam preparation. Our separate hostel facilities for boys and girls 
                ensure a safe and conducive learning environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Experienced Faculty", "Modern Infrastructure", "Proven Results", "Holistic Development"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-accent-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://as2.ftcdn.net/v2/jpg/07/49/40/01/1000_F_749400130_1CSPUXYKrk4JDR76KZ4l9ootcazxvUdX.jpg" alt="About Us" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-accent-gold rounded-xl p-4">
                <div className="text-3xl font-bold text-primary-dark">14+</div>
                <div className="text-primary-dark">Years of Excellence</div>
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