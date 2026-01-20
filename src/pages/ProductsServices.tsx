import { motion } from 'framer-motion';
import { FiHome, FiLayers, FiZap } from 'react-icons/fi';

const ProductsServices = () => {
  const scopeBlocks = [
    {
      name: 'Core Shell + Structure',
      icon: <FiHome className="w-8 h-8" />,
      color: 'border-slate-600',
      features: [
        'Hillside site work, foundation, and waterproofing',
        'TimberStrand framing with structural beam spans',
        'Exterior envelope: roofing, veneer stone, stucco',
        'Drywall level 4 smooth wall',
        'Primary glazing package + multi-slide openings'
      ]
    },
    {
      name: 'Interior Finish Package',
      icon: <FiLayers className="w-8 h-8" />,
      color: 'border-purple-600',
      features: [
        'Cabinetry, countertops, and stone/tile scope',
        'Wood ceiling, flooring, and wallcoverings',
        'Tadelakt primary shower + heated bench',
        'Trim, doors, and hardware package',
        'Mineral paint, closets, and shower glass'
      ]
    },
    {
      name: 'Technology + Lifestyle',
      icon: <FiZap className="w-8 h-8" />,
      color: 'border-blue-600',
      features: [
        'AV system with hidden high-quality speakers',
        'CCT lighting and simple scene control',
        'Automated shading and white-noise zones',
        'Elevator and comfort system integration',
        'Sound-proofing focus for key rooms'
      ]
    }
  ];

  const openItems = [
    { title: 'Exterior systems', description: 'Windows/doors, veneer stone, stucco, roofing, skylights' },
    { title: 'Site + civil', description: 'Excavation, retaining, drainage, waterproofing, driveway/pavers' },
    { title: 'Mechanical systems', description: 'HVAC zoning, ERV/radiant options, insulation, gypcrete' },
    { title: 'Electrical scope', description: 'Service size, lighting control, generator/backup, heated floors' },
    { title: 'Plumbing/mechanical rough-in', description: 'Beyond fixture allowances, trim, testing' },
    { title: 'Permits + soft costs', description: 'Engineering, fees, insurance, contingency' }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Design & Scope</h1>
        <p className="text-xl text-slate-400 mb-12">
          Palermo concept with disciplined scope across shell, finishes, and technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {scopeBlocks.map((block, index) => (
            <motion.div
              key={block.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-slate-900 border-2 ${block.color} rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-150`}
            >
              <div className="text-purple-400 mb-4">{block.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{block.name}</h3>
              <ul className="space-y-3">
                {block.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <span className="text-purple-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Design Reference</h3>
              <p className="text-sm text-slate-400">Palermo plan set and concept imagery</p>
            </div>
            <a
              href="/docs/palermo-plan-011326.pdf"
              className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              Download plan PDF
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/palermo-1.jpeg', alt: 'Palermo exterior view' },
              { src: '/images/palermo-2.jpeg', alt: 'Palermo interior concept' },
              { src: '/images/palermo-3.jpeg', alt: 'Palermo elevation study' }
            ].map((image, idx) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05, duration: 0.2 }}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Open Scope Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.03, duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-150"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductsServices;
