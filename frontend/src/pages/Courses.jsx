import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import SectionTitle from '../components/UI/SectionTitle'
import Card from '../components/UI/Card'
import { CheckCircle } from 'lucide-react'
import API_BASE_URL from '../config/api'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/courses`).then(res => setCourses(res.data))
  }, [])

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Courses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive programs designed for academic excellence and competitive success
          </motion.p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card key={course.id} delay={idx * 0.1}>
                <div className="p-6">
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-1">{course.name}</h3>
                  <p className="text-accent-gold font-semibold mb-3">{course.grades}</p>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-primary-dark mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-accent-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses;