import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { X } from 'lucide-react'
import API_BASE_URL from '../config/api'

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/gallery`).then(res => setGallery(res.data))
  }, [])

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-gray-300">Glimpses of our campus, classrooms, and activities</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg group"
                onClick={() => setSelectedImage(item.url)}
              >
                <img src={item.url} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                <div className="p-3 bg-white">
                  <p className="text-primary-dark font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-sm capitalize">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-accent-gold" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Full size" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}
    </div>
  )
}

export default Gallery;