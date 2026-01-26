import { motion } from 'framer-motion';
import { FiMapPin, FiZap } from 'react-icons/fi';
import { GiStoneWall } from 'react-icons/gi';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
import { MdOutlineWaterDrop, MdOutlineLandscape } from 'react-icons/md';

const InfrastructureConcepts = () => {
  // Integrated concept sections: each combines value proposition with its images
  const conceptSections = [
    {
      id: 'entry-gate',
      title: 'Entry & Gate System',
      icon: <FiMapPin className="w-8 h-8" />,
      description: 'First impression that establishes luxury positioning',
      valueImpact: 'Justifies premium lot pricing through immediate perceived value',
      elements: [
        'Modern architectural cover on exit side, open on entrance with integrated lighting',
        'Creates dramatic arrival moment that sets property apart',
        'Larger gates placed in stone wall or large cairn construction',
        'Sloped landscaping creates natural integration with site',
        'Stone massing provides permanence and luxury positioning'
      ],
      images: [
        { 
          src: '/images/infrastructure/entry-gate-modern-cover.png', 
          alt: 'Modern entry gate with integrated lighting', 
          caption: 'Entry Gate System',
          description: 'Modern but different shape cover on exit side, open on entrance side with integrated lighting'
        },
        { 
          src: '/images/infrastructure/entry-archway-stone-water.png', 
          alt: 'Modern entrance archway with stone walls', 
          caption: 'Entrance Archway',
          description: 'Contemporary archway with natural stone walls and water feature'
        }
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'roundabout',
      title: 'Roundabout Water Feature',
      icon: <HiOutlineArrowPathRoundedSquare className="w-8 h-8" />,
      description: 'Focal point at entry or first intersection',
      valueImpact: 'Creates memorable landmark that differentiates from standard developments',
      elements: [
        'Round raised stone form with integrated water feature',
        'Strategic landscaping creates year-round visual interest',
        'Serves as wayfinding element and gathering point',
        'Water feature adds movement and luxury touch'
      ],
      images: [
        { 
          src: '/images/infrastructure/roundabout-water-feature.png', 
          alt: 'Roundabout with water feature and landscaping', 
          caption: 'Roundabout Water Feature',
          description: 'Round raised stone form with water and landscaping at entry intersection'
        }
      ],
      color: 'from-amber-500 to-stone-500'
    },
    {
      id: 'lighting',
      title: 'Integrated Lighting System',
      icon: <FiZap className="w-8 h-8" />,
      description: 'Architectural LED lighting throughout',
      valueImpact: 'Professional lighting elevates perceived quality and security value',
      elements: [
        'Solar LED lamp posts for sustainable, low-maintenance lighting',
        'Outdoor architectural LED pole lights for key features',
        'Integrated lighting in entry cover and gate systems',
        'Tree uplighting and pathway illumination creating premium atmosphere'
      ],
      images: [
        { 
          src: '/images/infrastructure/lighting-night-pathway-bollards.png', 
          alt: 'Illuminated pathway at night with bollard lights', 
          caption: 'Integrated Night Lighting',
          description: 'Tree uplighting and pathway illumination creating premium atmosphere'
        },
        { 
          src: '/images/infrastructure/lighting-street-modern-minimalist.png', 
          alt: 'Modern minimalist street light', 
          caption: 'Architectural LED Lighting',
          description: 'Contemporary street light design for premium aesthetic'
        },
        { 
          src: '/images/infrastructure/lighting-pathway-illuminated.png', 
          alt: 'Modern bollard lights along pathway', 
          caption: 'Pathway Lighting System',
          description: 'Tall bollard lights with warm LED illumination'
        }
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'amphitheatre',
      title: 'Water-Integrated Amphitheatre',
      icon: <MdOutlineWaterDrop className="w-8 h-8" />,
      description: 'Refined outdoor gathering space',
      valueImpact: 'Adds unique amenity that increases lot desirability and justifies premium',
      elements: [
        'Much more refined than standard amphitheatre design',
        'Natural boulders integrated with sandstone steps',
        'Creates flexible outdoor event and gathering space',
        'Water integration adds sensory dimension and cooling effect'
      ],
      images: [
        { 
          src: '/images/infrastructure/amphitheatre-water-steps.png', 
          alt: 'Water-integrated amphitheatre with steps', 
          caption: 'Water-Integrated Amphitheatre',
          description: 'Refined amphitheatre using natural boulders along with sandstone steps'
        }
      ],
      color: 'from-stone-500 to-amber-400'
    },
    {
      id: 'landscape',
      title: 'Landscape Integration',
      icon: <MdOutlineLandscape className="w-8 h-8" />,
      description: 'Natural materials and thoughtful grading',
      valueImpact: 'Mature, integrated landscape reduces long-term costs while increasing value',
      elements: [
        'Sloped landscaping around gates and entry features',
        'Natural boulder integration throughout',
        'Sandstone steps and native stone materials',
        'Xeriscape approach for low maintenance and sustainability'
      ],
      images: [
        { 
          src: '/images/infrastructure/landscape-cairn-signage.png', 
          alt: 'Landscape with stone cairn and signage', 
          caption: 'Natural Stone Integration',
          description: 'Larger gates placed in stone wall or large cairn with sloped landscaping'
        },
        { 
          src: '/images/infrastructure/landscape-tree-water-feature.png', 
          alt: 'Landscape with tree and water feature', 
          caption: 'Premium Landscape Feature',
          description: 'Mature tree integrated with water feature and natural materials'
        }
      ],
      color: 'from-amber-500 to-stone-500'
    }
  ];

  const keyBenefits = [
    {
      benefit: 'First Impression Value',
      description: 'Entry sequence creates immediate premium positioning that justifies lot price',
      impact: 'High'
    },
    {
      benefit: 'Differentiation',
      description: 'Unique infrastructure elements set development apart from standard projects',
      impact: 'High'
    },
    {
      benefit: 'Long-term Value',
      description: 'Quality materials and integrated systems reduce maintenance and increase durability',
      impact: 'Medium'
    },
    {
      benefit: 'Community Asset',
      description: 'Amphitheatre and gathering spaces create community value beyond individual lots',
      impact: 'Medium'
    },
    {
      benefit: 'Security & Safety',
      description: 'Integrated lighting and gate systems enhance security perception and actual safety',
      impact: 'High'
    },
    {
      benefit: 'Sustainability',
      description: 'Solar lighting and xeriscape approach reduce operational costs and environmental impact',
      impact: 'Medium'
    }
  ];

  const implementationPriorities = [
    {
      phase: 'Phase 1: Entry Foundation',
      items: [
        'Entry cover structure with integrated lighting',
        'Roundabout water feature at primary intersection',
        'Initial gate system and stone wall/cairn construction'
      ],
      timeline: 'Foundation for all other elements'
    },
    {
      phase: 'Phase 2: Landscape Integration',
      items: [
        'Sloped landscaping around gates and entry',
        'Natural boulder placement and integration',
        'Sandstone step installation for amphitheatre'
      ],
      timeline: 'Builds on Phase 1 foundation'
    },
    {
      phase: 'Phase 3: Amenity Completion',
      items: [
        'Water-integrated amphitheatre completion',
        'Full lighting system installation',
        'Final landscape refinement and plantings'
      ],
      timeline: 'Final polish and value realization'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Development Community Design Guide
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 mb-4">
            Entry, landscape, and infrastructure elements that justify premium lot pricing
          </p>
          <p className="text-sm text-stone-400 max-w-3xl">
            Strategic infrastructure investments that create immediate perceived value, 
            differentiate the development, and establish luxury positioning from first arrival.
          </p>
        </div>

        {/* Complete Design Concept Plans - Show First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-16"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-white">Complete Design Concept Plans</h2>
            <p className="text-sm text-stone-400 mt-1">Palermo Development Community Design Guide</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                src: '/images/infrastructure/concept-rendering-overall.png', 
                alt: 'Overall infrastructure concept rendering', 
                caption: 'Complete Infrastructure Concept',
                description: 'Comprehensive rendering showing entry gate, roundabout, and landscape integration'
              }
            ].map((image, idx) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-stone-700 bg-stone-950 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement?.parentElement;
                      if (parent) {
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'flex items-center justify-center h-full text-stone-500 text-sm p-4';
                        errorDiv.textContent = 'Image not available';
                        if (target.parentElement) {
                          target.parentElement.replaceChild(errorDiv, target);
                        }
                      }
                    }}
                  />
                </div>
                <div className="p-4 bg-stone-900/90">
                  <p className="text-sm font-semibold text-white mb-1">{image.caption}</p>
                  <p className="text-xs text-stone-300">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Individual Concept Sections - Integrated Value Props + Images */}
        <div className="space-y-12 mb-16">
          {conceptSections.map((section, sectionIdx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIdx * 0.1 }}
              className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
            >
              {/* Section Header with Value Proposition */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-amber-300">{section.icon}</div>
                  <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
                </div>
                <p className="text-lg text-stone-300 mb-4 italic">{section.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wide mb-3">
                      Key Elements
                    </h3>
                    <ul className="space-y-2">
                      {section.elements.map((element, idx) => (
                        <li key={idx} className="flex items-start text-sm text-stone-200">
                          <span className="text-amber-300 mr-2 mt-1">•</span>
                          <span>{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wide mb-2">
                      Value Impact
                    </h3>
                    <p className="text-sm text-stone-200">{section.valueImpact}</p>
                  </div>
                </div>
              </div>

              {/* Associated Images */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Visual Concepts</h3>
                <div className={`grid gap-6 ${
                  section.images.length === 1 
                    ? 'grid-cols-1' 
                    : section.images.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1 md:grid-cols-3'
                }`}>
                  {section.images.map((image, imgIdx) => (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + sectionIdx * 0.1 + imgIdx * 0.05 }}
                      className="relative overflow-hidden rounded-xl border border-stone-700 bg-stone-950 group"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement?.parentElement;
                            if (parent) {
                              const errorDiv = document.createElement('div');
                              errorDiv.className = 'flex items-center justify-center h-full text-stone-500 text-sm p-4';
                              errorDiv.textContent = 'Image not available';
                              if (target.parentElement) {
                                target.parentElement.replaceChild(errorDiv, target);
                              }
                            }
                          }}
                        />
                      </div>
                      <div className="p-4 bg-stone-900/90">
                        <p className="text-sm font-semibold text-white mb-1">{image.caption}</p>
                        <p className="text-xs text-stone-300">{image.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Justification Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Value Justification Framework</h2>
          <p className="text-stone-300 mb-8 max-w-3xl">
            These infrastructure elements directly justify premium lot pricing through 
            immediate perceived value, long-term durability, and differentiation from 
            standard developments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((item, idx) => (
              <motion.div
                key={item.benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + idx * 0.03 }}
                className="bg-stone-900/60 border border-stone-700/60 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">{item.benefit}</h4>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    item.impact === 'High' 
                      ? 'bg-amber-500/20 text-amber-300' 
                      : 'bg-stone-600/20 text-stone-300'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-stone-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Strategy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Implementation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {implementationPriorities.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95 + idx * 0.1 }}
                className="bg-stone-900/80 border border-stone-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-sm text-stone-200">
                      <span className="text-amber-300 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs text-stone-400 italic mt-4 pt-4 border-t border-stone-700">
                  {phase.timeline}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meeting Talking Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-xl p-8"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Meeting Talking Points</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                Why These Elements Justify Premium Lot Pricing
              </h3>
              <ul className="space-y-2 text-stone-200">
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">→</span>
                  <span>
                    <strong>Immediate Perceived Value:</strong> Entry sequence creates first impression 
                    that establishes luxury positioning before buyers even see individual lots
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">→</span>
                  <span>
                    <strong>Differentiation:</strong> Unique infrastructure elements (amphitheatre, 
                    integrated water features, architectural lighting) set this development apart 
                    from standard projects
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">→</span>
                  <span>
                    <strong>Long-term Value:</strong> Quality materials (stone, sandstone, natural boulders) 
                    and integrated systems reduce maintenance costs while increasing durability and appeal
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">→</span>
                  <span>
                    <strong>Community Asset:</strong> Amphitheatre and gathering spaces create value 
                    beyond individual lots, enhancing overall development desirability
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-amber-500/20">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                Developer Investment ROI
              </h3>
              <p className="text-stone-200 mb-3">
                These infrastructure investments directly support premium lot pricing by:
              </p>
              <ul className="space-y-2 text-stone-200">
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">•</span>
                  <span>Creating immediate visual impact that justifies higher lot prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">•</span>
                  <span>Reducing buyer objections through perceived quality and luxury positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">•</span>
                  <span>Differentiating from competitors with unique, memorable features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-300 mr-2 mt-1">•</span>
                  <span>Building long-term value through quality materials and integrated systems</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfrastructureConcepts;
