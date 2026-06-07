import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Shield, Wifi, Flower2, Users, Utensils, Heart } from 'lucide-react'
import API_BASE_URL from '../config/api'

const GirlsHostel = () => {
  const [hostelData, setHostelData] = useState(null)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/hostel/girls`).then(res => setHostelData(res.data))
  }, [])

  const amenities = [
    { icon: Shield, name: "Lady Wardens", desc: "24/7 female supervision" },
    { icon: Wifi, name: "High-Speed WiFi", desc: "Uninterrupted connectivity" },
    { icon: Flower2, name: "Yoga Room", desc: "Wellness & meditation" },
    { icon: Users, name: "Common Room", desc: "Social & recreational space" },
    { icon: Utensils, name: "Nutritious Food", desc: "Healthy meals" },
    { icon: Heart, name: "Medical Support", desc: "Regular health checkups" },
  ]

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Girls Hostel</motion.h1>
          <motion.p className="text-gray-300">Safe, secure, and empowering environment for girls</motion.p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800" alt="Girls Hostel Room" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark">Empowering Young Women</h2>
              <p className="text-gray-600">
                Our girls' hostel provides a nurturing environment with all modern amenities, 
                ensuring safety and comfort. With lady wardens and strict security protocols, 
                parents can have complete peace of mind.
              </p>
              {hostelData && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between py-2"><span className="font-semibold">Capacity:</span><span>{hostelData.capacity} Students</span></div>
                  <div className="flex justify-between py-2"><span className="font-semibold">Room Types:</span><span>{hostelData.rooms}</span></div>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16">
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">Facilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {amenities.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <item.icon className="w-12 h-12 mx-auto text-accent-gold mb-3" />
                  <h4 className="font-bold text-primary-dark mb-1">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GirlsHostel;