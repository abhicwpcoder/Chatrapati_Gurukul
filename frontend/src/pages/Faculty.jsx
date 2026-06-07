import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import SectionTitle from '../components/UI/SectionTitle'
import Card from '../components/UI/Card'
import { Award, GraduationCap, Clock } from 'lucide-react'
import API_BASE_URL from '../config/api'

const Faculty = () => {
  const [faculty, setFaculty] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/faculty`).then(res => setFaculty(res.data))
  }, [])

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
          <p className="text-gray-300">Meet our experienced and dedicated team of educators</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, idx) => (
              <Card key={teacher.id} delay={idx * 0.1}>
                <div className="p-6 text-center">
                  <img src={teacher.image} alt={teacher.name} className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-accent-gold" />
                  <h3 className="text-xl font-bold text-primary-dark">{teacher.name}</h3>
                  <p className="text-accent-gold font-semibold">{teacher.subject}</p>
                  <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
                    <Award size={14} /> <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock size={14} /> <span>{teacher.experience} Experience</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">{teacher.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty;