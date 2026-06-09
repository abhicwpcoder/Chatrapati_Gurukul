import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Trophy, TrendingUp, Award } from 'lucide-react'
import API_BASE_URL from '../config/api'

const Results = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/results`).then(res => setResults(res.data))
  }, [])

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">आमचे निकाल</h1>
          <p className="text-gray-300">वर्षानुवर्षे सातत्यपूर्ण शैक्षणिक गुणवत्ता</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="gold-gradient p-6 text-center">
                  <Trophy className="w-12 h-12 mx-auto text-primary-dark mb-2" />
                  <div className="text-4xl font-bold text-primary-dark">{result.percentage}</div>
                  <div className="text-primary-dark/80">उत्तीर्णतेची टक्केवारी</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-dark text-center mb-4">वर्ष {result.year}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>एकूण विद्यार्थी:</span>
                      <span className="font-semibold">{result.totalStudents}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>उत्तीर्ण विद्यार्थी:</span>
                      <span className="font-semibold">{result.passed}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                      <Award size={18} className="text-accent-gold" /> टॉप परफॉर्मर्स
                    </h4>
                    {result.toppers.map((topper, i) => (
                      <p key={i} className="text-gray-600">{topper}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
          >
            <TrendingUp className="w-12 h-12 text-accent-gold mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary-dark mb-2">सातत्यपूर्ण वाढ</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              आमचे विद्यार्थी बोर्ड परीक्षा आणि स्पर्धा परीक्षांमध्ये सातत्याने उत्कृष्ट निकाल मिळवतात.

या यशोगाथेचा भाग होण्यासाठी आमच्यात सामील व्हा.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Results;