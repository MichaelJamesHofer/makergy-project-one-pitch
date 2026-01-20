import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiTarget, FiUsers } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import { BiBookOpen } from 'react-icons/bi';

const HomePage = () => {
  const sections = [
    {
      icon: <IoRocketOutline className="w-8 h-8" />,
      title: 'Project Summary',
      description: 'Thesis, deal structure, and key metrics',
      link: '/executive-summary',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Budget & Returns',
      description: 'All-in costs, allowances, and promote structure',
      link: '/financial-projections',
      color: 'from-amber-500 to-stone-500'
    },
    {
      icon: <BiBookOpen className="w-8 h-8" />,
      title: 'Design & Scope',
      description: 'Palermo concept, finish package, and tech scope',
      link: '/products-services',
      color: 'from-stone-500 to-amber-400'
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Investment Terms',
      description: 'All-cash equity, SPV structure, 50/50 split',
      link: '/funding-request',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const metrics = [
    { label: 'Target Sale Price', value: '$10M', subtext: 'Luxury exit' },
    { label: 'All-in Target', value: '$7.0-7.5M', subtext: 'Land + build' },
    { label: 'Build Target', value: '$5.0-6.0M', subtext: 'Construction budget' },
    { label: 'Lot Target', value: '$2M', subtext: 'Acquisition goal' }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-14"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent">
          Makergy Project One
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-3xl mx-auto px-4">
          Investor pitch for a 5,000 SF design-forward residence with a $10M target sale, all-cash equity (no bank debt),
          and a $7.0-7.5M all-in budget (including a $2M lot) driven by a $5.0-6.0M build plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.2 }}
              className="bg-stone-900/80 border border-stone-800 rounded-lg p-6"
            >
              <p className="text-3xl font-bold text-amber-300">{metric.value}</p>
              <p className="text-sm text-stone-300 mt-1">{metric.label}</p>
              <p className="text-xs text-stone-500 mt-1">{metric.subtext}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="mb-16"
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Design Preview</h2>
            <p className="text-sm text-stone-400">Palermo concept imagery + plan set</p>
          </div>
          <a
            href="/docs/palermo-plan-011326.pdf"
            className="text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
          >
            View plan PDF
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
                className="h-64 w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {sections.map((section, index) => {
          const lastRowCount = sections.length % 3;
          const lastRowStart = sections.length - (lastRowCount || 3);
          let layoutClass = 'lg:col-span-2';

          if (lastRowCount === 1 && index === lastRowStart) {
            layoutClass = 'lg:col-span-2 lg:col-start-3';
          }

          if (lastRowCount === 2) {
            if (index === lastRowStart) {
              layoutClass = 'lg:col-span-2 lg:col-start-2';
            }
            if (index === lastRowStart + 1) {
              layoutClass = 'lg:col-span-2 lg:col-start-4';
            }
          }

          const cardBody = (
            <div
              className={`relative overflow-hidden rounded-xl border border-stone-800 bg-stone-900/80 p-8 transition-all duration-150 ${section.disabled ? 'opacity-75 cursor-default' : 'hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/20 group'}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.color} ${section.disabled ? 'opacity-10' : 'opacity-0 group-hover:opacity-20'} transition-opacity duration-150`}
              />

              <div className="relative z-10">
                <div className="mb-4 text-amber-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-stone-300">
                  {section.description}
                </p>

                <div className="mt-4 flex items-center text-amber-300 text-sm">
                  <span>{section.disabled ? 'Coming soon' : 'Explore'}</span>
                  {!section.disabled && (
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );

          return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, duration: 0.2 }}
            whileHover={section.disabled ? undefined : { scale: 1.01 }}
            className={layoutClass}
          >
            {section.disabled ? cardBody : <Link to={section.link}>{cardBody}</Link>}
          </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="text-center mt-16"
      >
        <Link to="/executive-summary">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-150 transform hover:scale-[1.02]">
            Start with Project Summary
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
