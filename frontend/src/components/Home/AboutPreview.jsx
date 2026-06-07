import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const AboutPreview = () => {
  const features = [
    "Coaching from 5th to 12th Standard",
    "Experienced & Dedicated Faculty",
    "Daily Tests & Doubt Solving Sessions",
    "Board Exam & Competitive Preparation",
    "Separate Boys & Girls Hostel",
    "Modern Infrastructure & Smart Classes"
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-gold font-semibold uppercase tracking-wide">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
              Excellence in Education Since 2010
            </h2>
            <p className="text-gray-600 mb-6">
              Chatrapati Gurukul is a premier coaching center and hostel dedicated to nurturing young minds 
              from 5th to 12th standard. With a focus on holistic development, we provide quality 
              education, state-of-the-art infrastructure, and separate hostel facilities for boys and girls.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={18} className="text-accent-gold" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-accent-gold transition">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://as2.ftcdn.net/v2/jpg/07/49/40/01/1000_F_749400130_1CSPUXYKrk4JDR76KZ4l9ootcazxvUdX.jpg" 
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-gold rounded-xl p-4 shadow-xl">
              <div className="text-primary-dark font-bold text-2xl">5000+</div>
              <div className="text-primary-dark text-sm">Students Trained</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview;