import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import BoysHostel from './pages/BoysHostel'
import GirlsHostel from './pages/GirlsHostel'
import Faculty from './pages/Faculty'
import Gallery from './pages/Gallery'
import Results from './pages/Results'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/boys-hostel" element={<BoysHostel />} />
          <Route path="/girls-hostel" element={<GirlsHostel />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<Results />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  )
}

export default App;