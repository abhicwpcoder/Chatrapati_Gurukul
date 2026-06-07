import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Star, Quote } from 'lucide-react'
import API_BASE_URL from '../config/api'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/testimonials`).then(res => setTestimonials(res.data))
  }, [])

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student & Parent Testimonials</h1>
          <p className="text-gray-300">Hear what our community says about us</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 relative"
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100" />
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.parentOf}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-block gold-gradient rounded-full p-4">
              <div className="bg-white rounded-full px-8 py-3">
                <p className="text-primary-dark font-semibold">5000+ Happy Students & Parents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials;