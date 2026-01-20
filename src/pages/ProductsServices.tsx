import { motion } from 'framer-motion';
import { FiHome, FiLayers, FiZap } from 'react-icons/fi';

const ProductsServices = () => {
  const scopeBlocks = [
    {
      name: 'Core Shell + Structure',
      icon: <FiHome className="w-8 h-8" />,
      color: 'border-stone-700',
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
      color: 'border-amber-500',
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
      color: 'border-stone-500',
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

  const designDNA = [
    'Arrival sequence with recessed garage doors, integrated lighting, and a custom entry door with meaning',
    'Sandstone/native stone + fire-treated wood palette with large glass spans',
    'Surprise approach moments inspired by unfolding spatial journeys',
    'Cross-breezes, overhangs, and sun/wind studies to control climate exposure',
    'One-level living if feasible, with ADA-width doors and wide halls',
    'Hidden AV, acoustic treatments, and user-friendly systems throughout'
  ];

  const architecturalElements = [
    'Custom entry door, stone doorbell, and address marker',
    'Glass spans with multi-slide openings to outdoor zones',
    'Triple-pane wood interior windows with blind pockets',
    'Skylights where ROI supports the experience',
    'Integrated architecture + landscape lighting plan',
    'Overhangs and sheltering for outdoor living',
    'Wind control and natural curvature in plan',
    'Floor-to-ceiling windows evaluated vs ROI (+$700 per opening)',
  ];

  const systemsIntegration = [
    'HVAC strategy for high desert: zoning, ERV, radiant evaluation',
    'Sound proofing and acoustic fabrics where ROI supports',
    'Security system, hidden AV, and clean wiring runs',
    'Recessed cans (4" max) with integrated lighting channels',
    'Switch plates and hardware aligned to material palette',
    'Integrated vents in wood/stone with custom detailing',
  ];

  const programTargets = [
    '3 bedrooms / 3.5 baths with a dedicated library lounge',
    'Primary suite with tadelakt shower, heated bench, and curated closet',
    'Garage with two storage rooms + stand-up crawl storage',
    'Outdoor living zones (climate-controlled + open-air)',
    'No outdoor refrigerator; built-ins only if ROI supports'
  ];

  const interiorStandards = [
    'Wide-board engineered wood floors with refined transitions',
    'Level 5 drywall or clay plaster walls with mineral paint',
    'Floor-to-ceiling wood doors with kerfed wood jambs',
    'Integrated vents and lighting plates coordinated with millwork',
    'Recessed cans, integrated lighting, and layered scenes',
    'Custom hardware and boutique switch plate details',
  ];

  const landscapeElements = [
    'Xeriscape planting plan with low-maintenance seasonal color',
    'Natural boulders and a dry or continuous water feature',
    'Outdoor lighting integrated into architecture + landscape',
    'Pool/reflecting water feature evaluated as $150K ROI decision',
    'Paver strategy for frost conditions and drainage',
    'Fencing/CCR compliance and safety planning for grade changes',
  ];

  const roomHighlights = [
    {
      room: 'Entry',
      items: [
        'Vestibule/foyer with delineated arrival moment',
        'Heated stone floor tying exterior to interior',
        'Custom bench + hidden closet wall for guests',
        'Stone/wood ceiling or wallcovering focal treatment',
        'Primary art placement (Entry, Living, Primary)',
      ]
    },
    {
      room: 'Powder',
      items: [
        'Curved ceiling or room envelope',
        'Sculptural wood carved sink + wall faucet',
        'Toto/Moen washlet decisions with recessed power',
        'Statement light fixture with backlit mirror',
      ]
    },
    {
      room: 'Living',
      items: [
        'Wood ceiling with optional acoustic fabric treatment',
        'Hidden TV or view-first focal decision',
        'Conversational furniture layout with luxe materials',
        'Drapery for acoustics + light control',
        'Integrated charging and AV concealment',
      ]
    },
    {
      room: 'Kitchen',
      items: [
        'Inset cabinetry, dovetail joinery, and custom hardware',
        'High-performance sink package with filtration',
        'Stone + wood island with integrated foot rail detail',
        'Sweepovac + custom drawer dividers and accessory storage',
        'Island cutting board + tray pocket details',
      ]
    },
    {
      room: 'Library Lounge',
      items: [
        'Quiet lounge with acoustic control and layered lighting',
        'Integrated shelving and concealed storage',
        'Soft surfaces for comfort and sound control',
      ]
    },
    {
      room: 'Guest Suites',
      items: [
        'Ensuite bedrooms with consistent finish language',
        'Closet systems in secondary bedrooms',
        'Shower glass and fixture continuity',
      ]
    },
    {
      room: 'Primary Suite',
      items: [
        'Tadelakt shower with heated bench + curated fixtures',
        'Stone or wood ceiling detail as focal element',
        'Closet system upgrade and concealed storage',
        'Acoustic comfort and white-noise zone option',
      ]
    },
    {
      room: 'Outdoor Living',
      items: [
        'Climate-controlled exterior zone with overhangs',
        'Paver or stone surfaces with frost strategy',
        'Fireplace integration in stone or architectural mass',
        'AV and lighting designed for discreet performance',
      ]
    },
    {
      room: 'Garage + Back-of-House',
      items: [
        'Two storage rooms (gear/tools + seasonal storage)',
        'Stand-up crawl storage with mechanical access',
        'Recessed garage doors tied to approach sequence',
      ]
    }
  ];

  const valueEngineering = [
    'Floor-to-ceiling glass ($700 more per opening) weighed against ROI',
    'Exotic stone slabs evaluated as ROI-sensitive upgrade',
    'Lap/reflection pool treated as optional scope ($150K)',
    'Acoustic drapery and fabric ceiling choices costed before lock',
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Design & Scope</h1>
        <p className="text-xl text-stone-300 mb-12">
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
              className={`relative bg-stone-900/80 border-2 ${block.color} rounded-xl p-8 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-150`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-amber-300">{block.icon}</div>
                <h3 className="text-2xl font-bold text-white">{block.name}</h3>
              </div>
              <ul className="space-y-3">
                {block.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-stone-200">
                    <span className="text-amber-300 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Design DNA</h3>
            <ul className="space-y-3">
              {designDNA.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Program + Layout</h3>
            <ul className="space-y-3">
              {programTargets.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Architectural Elements</h3>
            <ul className="space-y-3">
              {architecturalElements.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Systems + Integration</h3>
            <ul className="space-y-3">
              {systemsIntegration.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Interior Standards</h3>
            <ul className="space-y-3">
              {interiorStandards.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Landscape + Outdoor</h3>
            <ul className="space-y-3">
              {landscapeElements.map((item) => (
                <li key={item} className="flex items-start text-sm text-stone-200">
                  <span className="text-amber-300 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Room-by-Room Priorities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roomHighlights.map((room) => (
              <div key={room.room} className="bg-stone-900/60 border border-stone-700/60 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{room.room}</h4>
                <ul className="space-y-2">
                  {room.items.map((item) => (
                    <li key={item} className="flex items-start text-sm text-stone-200">
                      <span className="text-amber-300 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Value Engineering + ROI Decisions</h3>
          <ul className="space-y-3">
            {valueEngineering.map((item) => (
              <li key={item} className="flex items-start text-sm text-stone-200">
                <span className="text-amber-300 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Design Reference</h3>
              <p className="text-sm text-stone-400">Palermo plan set and concept imagery</p>
            </div>
            <a
              href="/docs/palermo-plan-011326.pdf"
              className="text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              Download Concept Plan - Rev. 0.1
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
                className="relative overflow-hidden rounded-xl border border-stone-800 bg-stone-900/80"
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
                className="bg-stone-900/80 border border-stone-800 rounded-lg p-6 hover:border-amber-400/50 hover:shadow-md hover:shadow-amber-500/20 transition-all duration-150"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-stone-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductsServices;
