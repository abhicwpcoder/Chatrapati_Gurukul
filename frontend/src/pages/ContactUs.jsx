import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import API_BASE_URL from '../config/api'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Get in touch with us for any queries about admissions, courses, or hostel facilities
          </motion.p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary-dark">Address</h4>
                      <p className="text-gray-600 text-sm">Aryanandi Chauk, Karegaon Road, Parbhani(431401)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary-dark">Phone</h4>
                      <p className="text-gray-600">+91 8308403750</p>
                      <p className="text-gray-600">+91 8308979096</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-accent-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary-dark">Email</h4>
                      <p className="text-gray-600">info@chatrapatigurukul.co.in</p>
                      <p className="text-gray-600">admissions@chatrapatigurukul.co.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-accent-gold mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-primary-dark">Working Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h3>
                {submitted && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="gold-gradient text-primary-dark font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.782406263071!2d77.2094789755486!3d28.579058475718224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f4c0d4f5c1%3A0x8f5e8a1b5e3a8f7!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Institute Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs;