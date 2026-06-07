import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Shield, Wifi, Coffee, ArrowRight } from 'lucide-react'

const HostelPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Hostel Facilities</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Safe, comfortable, and homely environment for outstation students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Boys Hostel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" 
                alt="Boys Hostel"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Boys Hostel</h3>
              <p className="text-gray-600 mb-4">Spacious rooms with modern amenities, 24/7 security, and nutritious meals.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["AC Rooms", "Study Tables", "WiFi", "Gym", "Recreation", "Security"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{item}</span>
                ))}
              </div>
              <Link to="/boys-hostel" className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-darkGold transition">
                Explore Boys Hostel <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Girls Hostel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600" 
                alt="Girls Hostel"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Girls Hostel</h3>
              <p className="text-gray-600 mb-4">Safe and secure environment with lady wardens, modern facilities, and healthy food.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["AC Rooms", "Study Tables", "WiFi", "Yoga Room", "Common Room", "Lady Wardens"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{item}</span>
                ))}
              </div>
              <Link to="/girls-hostel" className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-darkGold transition">
                Explore Girls Hostel <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HostelPreview;