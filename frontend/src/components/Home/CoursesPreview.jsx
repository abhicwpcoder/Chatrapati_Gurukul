import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../UI/Card'
import SectionTitle from '../UI/SectionTitle'
import axios from 'axios'
import { ArrowRight } from 'lucide-react'
import API_BASE_URL from '../../config/api'

const CoursesPreview = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/courses`).then(res => setCourses(res.data.slice(0, 4)))
  }, [])

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Our Courses" 
          subtitle="Comprehensive curriculum designed for academic excellence"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <Card key={course.id} delay={idx * 0.1}>
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{course.name}</h3>
                <p className="text-sm text-accent-gold font-semibold mb-2">{course.grades}</p>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <Link to="/courses" className="text-primary-dark font-medium text-sm hover:text-accent-gold transition inline-flex items-center gap-1">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/courses" className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-3 rounded-full hover:bg-primary transition">
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesPreview;