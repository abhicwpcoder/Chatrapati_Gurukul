import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '../UI/SectionTitle'
import API_BASE_URL from '../../config/api'

const FAQSection = () => {
  const [faqs, setFaqs] = useState([])
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/faq`).then(res => setFaqs(res.data))
  }, [])

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers"
        />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <span className="font-semibold text-primary-dark text-left">{faq.question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-b-xl px-5 pb-5"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection;