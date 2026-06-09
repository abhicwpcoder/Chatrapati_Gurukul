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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">वसतिगृहाच्या सुविधा</h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            बाहेरगावच्या विद्यार्थ्यांसाठी सुरक्षित, आरामदायक आणि घरगुती वातावरण.
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
                src="./images/boys_hostel.jpeg" 
                alt="Boys Hostel"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">मुलांचे वसतिगृह</h3>
              <p className="text-gray-600 mb-4">आधुनिक सोयीसुविधांनी युक्त प्रशस्त खोल्या, चोवीस तास सुरक्षा आणि पौष्टिक जेवण.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["एसी खोल्या", "अभ्यासाचे टेबल", "वायफाय", "जिम", "मनोरंजन", "सुरक्षा"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{item}</span>
                ))}
              </div>
              <Link to="/boys-hostel" className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-darkGold transition">
                मुलांच्या वसतिगृहाचा शोध घ्या <ArrowRight size={16} />
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
                src="./images/boys_hostel.jpeg" 
                alt="Girls Hostel"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">मुलींचे वसतिगृह</h3>
              <p className="text-gray-600 mb-4">महिला वॉर्डन, आधुनिक सुविधा आणि पौष्टिक अन्नासह सुरक्षित वातावरण.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["एसी खोल्या", "अभ्यासाचे टेबल", "वायफाय", "योगा कक्ष", "सामान्य कक्ष", "महिला वॉर्डन"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{item}</span>
                ))}
              </div>
              <Link to="/girls-hostel" className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-darkGold transition">
                मुलींच्या वसतिगृहाचा शोध घ्या <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HostelPreview;