import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import axios from 'axios'
import API_BASE_URL from '../../config/api'
import { Users, BookOpen, Trophy, Award } from 'lucide-react'

const StatsSection = () => {
  const [stats, setStats] = useState({})
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/stats`)
        setStats(response.data)
      } catch (error) {
        console.error('Error fetching stats:', error)
        // Fallback data
        setStats({ students: "2000+", courses: "6+", faculty: "5+", selection: "1000+" })
      }
    }
    fetchStats()
  }, [])

  const statItems = [
    { icon: Users, value: stats.students || "2000+", label: "Students Trained" },
    { icon: BookOpen, value: stats.courses || "6+", label: "Courses Offered" },
    { icon: Award, value: stats.faculty || "5+", label: "Expert Faculty" },
    { icon: Trophy, value: stats.selection || "1000+", label: "Selections" },
  ]

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-yellow-400 to-amber-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-12 h-12 mx-auto mb-3 text-primary-dark" />
              <div className="text-3xl md:text-4xl font-bold text-primary-dark">
                {item.value}
              </div>
              <div className="text-primary-dark/80 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection