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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Results</h1>
          <p className="text-gray-300">Consistent academic excellence year after year</p>
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
                  <div className="text-primary-dark/80">Pass Percentage</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-dark text-center mb-4">Year {result.year}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>Total Students:</span>
                      <span className="font-semibold">{result.totalStudents}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Students Passed:</span>
                      <span className="font-semibold">{result.passed}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                      <Award size={18} className="text-accent-gold" /> Top Performers
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
            <h3 className="text-2xl font-bold text-primary-dark mb-2">Consistent Growth</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our students consistently achieve outstanding results in board exams and competitive tests.
              Join us to be a part of this success story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Results;