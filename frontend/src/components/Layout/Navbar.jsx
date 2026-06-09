import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/courses', name: 'Courses' },
    { path: '/boys-hostel', name: 'Boys Hostel' },
    { path: '/girls-hostel', name: 'Girls Hostel' },
    { path: '/faculty', name: 'Faculty' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/results', name: 'Results' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/contact', name: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-dark/95 backdrop-blur-md shadow-xl' : 'bg-primary-dark'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="./images/Logo.png" alt="Logo" className="w-8 h-8 text-accent-gold" />
            <span className="text-xl font-bold text-white">
              छत्रपती<span className="text-accent-gold">गुरुकुल</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-white hover:text-accent-gold transition-colors duration-300 font-medium ${
                    isActive ? 'text-accent-gold border-b-2 border-accent-gold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary-dark/95 backdrop-blur-md shadow-xl overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-white hover:text-accent-gold transition-colors py-2 ${
                      isActive ? 'text-accent-gold' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar;