import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Hero from '../components/UI/Hero'
import SectionTitle from '../components/UI/SectionTitle'
import Card from '../components/UI/Card'
import AboutPreview from '../components/Home/AboutPreview'
import CoursesPreview from '../components/Home/CoursesPreview'
import HostelPreview from '../components/Home/HostelPreview'
import StatsSection from '../components/Home/StatsSection'
import FAQSection from '../components/Home/FAQSection'
import API_BASE_URL from '../config/api'
import { ArrowRight, Star } from 'lucide-react'

const Home = () => {
  const [testimonials, setTestimonials] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    // Use the API_BASE_URL from config
    const fetchData = async () => {
      try {
        console.log('Fetching from:', API_BASE_URL);
        
        const [testimonialsRes, resultsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/testimonials`),
          axios.get(`${API_BASE_URL}/api/results`)
        ]);
        
        setTestimonials(testimonialsRes.data.slice(0, 3));
        setResults(resultsRes.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [])

  return (
    <>
      <Hero />
      <AboutPreview />
      <CoursesPreview />
      <HostelPreview />
      <StatsSection />
      
      {/* Results Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Results" 
            subtitle="Proven track record of academic excellence"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">{result.percentage}</div>
                  <div className="text-2xl font-bold text-primary-dark">Year {result.year}</div>
                  <div className="text-gray-600 mt-2">Passing Percentage</div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm text-gray-500">Top Performers</div>
                    {result.toppers?.map((topper, i) => (
                      <div key={i} className="text-primary-dark font-medium">{topper}</div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/results" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-accent-gold transition">
              View All Results <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="What Parents Say" 
            subtitle="Trusted by thousands of parents and students"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={testimonial.id} delay={idx * 0.1}>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Parent of {testimonial.parentOf}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-accent-gold transition">
              Read More Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section> */}
      
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join VidyaGyan Institute today and give your child the best education possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="bg-gradient-to-r from-yellow-400 to-amber-600 text-primary-dark font-semibold px-10 py-4 rounded-full inline-flex items-center gap-2 hover:shadow-lg transition-all">
              Get Admission Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home;