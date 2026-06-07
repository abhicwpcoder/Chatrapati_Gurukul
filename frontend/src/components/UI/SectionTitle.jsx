import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
        {title}
      </h2>
      <div className={`w-20 h-1 gold-gradient rounded-full ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle;