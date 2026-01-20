import { motion } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiUsers, FiZap, FiShield, FiHome } from 'react-icons/fi';

const ExecutiveSummary = () => {
  const keyPoints = [
    '5,000 SF conditioned living area with the Palermo concept plan.',
    'Target sale price $10M; target lot $2M; build target $7.0-7.5M.',
    'Baseline construction $6.0M with a 70/30 hard vs finish split.',
    'Mid garage/mail room option $625K included in build target.',
    'All-cash equity, no bank debt, SPV holds land and project capital.',
    'Return of capital + preferred return, then 50/50 backend split.'
  ];

  const valueProps = [
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'SPV Firewall',
      description: 'Liability isolated with land + capital owned by the SPV.'
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      title: 'Budget-Ready Design',
      description: 'Palermo concept aligned to $1,200/SF baseline build.'
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: 'Finish Discipline',
      description: 'Itemized allowances for cabinetry, stone, fixtures, and millwork.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Low-Complexity Tech',
      description: 'CCT lighting, hidden speakers, automated shading, white-noise zones.'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Aligned Incentives',
      description: 'Makergy earns promote only after investor capital return + pref.'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Project Summary</h1>
        <p className="text-xl text-slate-400 mb-12">
          Makergy Project One - design-forward luxury residence with disciplined build economics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Investment Thesis</h3>
            <p className="text-slate-300 leading-relaxed">
              Deliver a $10M luxury residence using an all-cash SPV structure, budget-aligned design,
              and tightly scoped finishes that protect margin and reduce lender risk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Execution Objective</h3>
            <p className="text-slate-300 leading-relaxed">
              Lock the Palermo plan, finalize bids, and deliver within a $7.0-7.5M build target
              while preserving the design intent and $10M exit strategy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Key Highlights</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.03, duration: 0.2 }}
                className="flex items-start"
              >
                <FiCheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Value Drivers</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.slice(0, 3).map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + index * 0.05, duration: 0.2, type: 'spring', stiffness: 400, damping: 30 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-150 text-center"
                >
                  <div className="text-purple-400 mb-3 flex justify-center">{prop.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{prop.title}</h4>
                  <p className="text-slate-400 text-sm">{prop.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl" style={{ margin: '0 auto' }}>
              {valueProps.slice(3).map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.2, type: 'spring', stiffness: 400, damping: 30 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-150 text-center"
                >
                  <div className="text-purple-400 mb-3 flex justify-center">{prop.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{prop.title}</h4>
                  <p className="text-slate-400 text-sm">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Project Economics Snapshot</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">$9.0-9.5M</p>
              <p className="text-sm text-slate-400 mt-2">All-in target cost</p>
              <p className="text-xs text-slate-500 mt-1">Build + lot</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">$10M</p>
              <p className="text-sm text-slate-400 mt-2">Target sale price</p>
              <p className="text-xs text-slate-500 mt-1">Luxury exit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">All-cash</p>
              <p className="text-sm text-slate-400 mt-2">Equity structure</p>
              <p className="text-xs text-slate-500 mt-1">No bank debt</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.2 }}
          className="mt-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Deal Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col items-center text-center w-full">
              <FiShield className="w-8 h-8 text-purple-400 mb-3" />
              <p className="text-sm text-slate-400 mb-2">SPV Ownership</p>
              <p className="text-sm text-slate-300">Land + capital held in Project One SPV</p>
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <FiTrendingUp className="w-8 h-8 text-green-400 mb-3" />
              <p className="text-sm text-slate-400 mb-2">Return Priority</p>
              <p className="text-sm text-slate-300">Investors receive capital + pref first</p>
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <FiUsers className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-sm text-slate-400 mb-2">Backend Split</p>
              <p className="text-sm text-slate-300">50/50 promote after pref hurdle</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Design Concept</h3>
          <p className="text-slate-400">
            Palermo plan set and concept imagery are available in the design scope section.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExecutiveSummary;
