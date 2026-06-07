import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { CheckCircle, Wifi, Dumbbell, Gamepad2, Shield, Utensils } from 'lucide-react'
import API_BASE_URL from '../config/api'

const BoysHostel = () => {
  const [hostelData, setHostelData] = useState(null)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/hostel/boys`).then(res => setHostelData(res.data))
  }, [])

  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi", desc: "24/7 internet connectivity" },
    { icon: Dumbbell, name: "Gym Facility", desc: "Modern equipment for fitness" },
    { icon: Gamepad2, name: "Recreation Room", desc: "Indoor games & entertainment" },
    { icon: Shield, name: "24/7 Security", desc: "CCTV surveillance & guards" },
    { icon: Utensils, name: "Nutritious Meals", desc: "Healthy & hygienic food" },
  ]

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Boys Hostel</motion.h1>
          <motion.p className="text-gray-300">A home away from home with modern amenities and security</motion.p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark">Comfortable & Secure Living</h2>
              <p className="text-gray-600">
                Our boys hostel provides a safe, comfortable, and conducive environment for focused studying. 
                With modern amenities, nutritious meals, and 24/7 security, we ensure students feel at home.
              </p>
              <div className="grid gap-4">
                {hostelData && (
                  <>
                    <div className="flex justify-between py-2 border-b"><span className="font-semibold">Capacity:</span><span>{hostelData.capacity} Students</span></div>
                    <div className="flex justify-between py-2 border-b"><span className="font-semibold">Room Types:</span><span>{hostelData.rooms}</span></div>
                  </>
                )}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800" alt="Boys Hostel Room" className="w-full h-80 object-cover" />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16">
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">Amenities & Facilities</h3>
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

export default BoysHostel;