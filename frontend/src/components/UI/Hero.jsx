import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-DEFAULT to-primary-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-gold rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent-gold/20 rounded-full mb-6"
            >
              <span className="text-accent-gold font-semibold">Since 2010 | CBSE Affiliated</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Shape Your Future with{' '}
              <span className="text-accent-gold">Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg mb-8"
            >
              Best Coaching Institute for Classes 5th to 12th with Separate Hostel Facilities for Boys & Girls. 
              Join 5000+ successful students.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-gradient-to-r from-yellow-400 to-amber-600 text-primary-dark font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-all">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link to="/courses" className="border-2 border-accent-gold text-accent-gold px-8 py-3 rounded-full font-semibold hover:bg-accent-gold hover:text-primary-dark transition-all">
                View Courses
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { icon: Award, value: "5000+", label: "Students Trained", color: "from-yellow-400 to-orange-500" },
              { icon: Users, value: "25+", label: "Expert Faculty", color: "from-blue-400 to-cyan-500" },
              { icon: BookOpen, value: "6+", label: "Courses", color: "from-green-400 to-emerald-500" },
              { icon: Award, value: "1000+", label: "Selections", color: "from-purple-400 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-3 text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`} />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;