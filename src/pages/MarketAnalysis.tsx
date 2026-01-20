import { motion } from 'framer-motion';
import { FiTarget, FiDollarSign, FiMapPin, FiShield } from 'react-icons/fi';
import AnimatedLineChart from '../components/AnimatedLineChart';
import AnimatedDonutChart from '../components/AnimatedDonutChart';

const MarketAnalysis = () => {
  const capitalDeployment = [
    { phase: 'Precon', value: 5 },
    { phase: 'Site', value: 20 },
    { phase: 'Shell', value: 50 },
    { phase: 'Interiors', value: 75 },
    { phase: 'Systems', value: 90 },
    { phase: 'Close', value: 100 },
  ];

  const costAllocation = [
    { name: 'Hard Costs', value: 70, color: '#8b5cf6' },
    { name: 'Interior Finish', value: 30, color: '#06b6d4' },
  ];

  const costBreakdown = [
    { name: 'Hard Costs', percent: '70%', amount: '$4.2M' },
    { name: 'Interior Finish', percent: '30%', amount: '$1.8M' },
  ];

  const feasibilityControls = [
    {
      title: 'All-cash equity',
      detail: 'No lender draw risk and flexible construction pacing.'
    },
    {
      title: 'Budget-aligned plan',
      detail: 'Palermo concept mapped to $1,200/SF baseline.'
    },
    {
      title: 'Scope clarity',
      detail: 'Finish allowances and tech scope itemized.'
    },
    {
      title: 'SPV risk isolation',
      detail: 'Land and capital ring-fenced from operating entities.'
    }
  ];

  const riskMatrix = [
    {
      title: 'Site & Civil',
      color: 'from-yellow-600 to-amber-600',
      items: ['Hillside excavation', 'Retaining + drainage', 'Waterproofing scope', 'Geotech validation']
    },
    {
      title: 'Cost & Schedule',
      color: 'from-blue-600 to-cyan-600',
      items: ['Subcontractor bids', 'Long-lead windows/doors', 'Finish lead times', 'Contingency planning']
    },
    {
      title: 'Design & Scope',
      color: 'from-green-600 to-emerald-600',
      items: ['Finish package lock', 'MEP integration', 'Garage/mail room scope', 'Tech simplification']
    },
    {
      title: 'Market & Exit',
      color: 'from-purple-600 to-indigo-600',
      items: ['Comparable sales', 'Buyer demand', 'Listing strategy', 'Timing the exit']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Feasibility & Exit</h1>
        <p className="text-xl text-slate-400 mb-4">
          Cost discipline and premium positioning to support a $10M sale
        </p>
        <p className="text-lg text-slate-500 mb-12">
          Focus: <span className="text-purple-400 font-semibold">budget alignment</span> and
          <span className="text-green-400 font-semibold ml-2">controlled scope</span> across design, site, and systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <FiTarget />, label: 'Target Sale Price', value: '$10M', detail: 'Luxury exit' },
            { icon: <FiDollarSign />, label: 'Build Target', value: '$7.0-7.5M', detail: 'All-in construction' },
            { icon: <FiMapPin />, label: 'Lot Target', value: '$2M', detail: 'Acquisition goal' },
            { icon: <FiShield />, label: 'Structure', value: 'All-cash', detail: 'No bank debt' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-150"
            >
              <div className="text-purple-400 mb-3">{item.icon}</div>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
              <p className="text-xs text-green-400 mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Illustrative Capital Deployment</h3>
          <p className="text-sm text-slate-500 mb-6">Percent of budget deployed by phase (illustrative).</p>
          <AnimatedLineChart
            series={[
              {
                name: 'Capital Deployed',
                data: capitalDeployment.map((d, i) => ({
                  x: i,
                  y: d.value,
                  label: d.phase
                })),
                color: '#8b5cf6'
              }
            ]}
            height={320}
            responsive={true}
            showPoints={true}
            showGrid={true}
            yAxisLabel="Capital Deployed (%)"
          />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Base Build Allocation</h3>
            <div className="flex justify-center items-center mb-6">
              <AnimatedDonutChart
                data={costAllocation}
                width={320}
                height={320}
                innerRadius={60}
                outerRadius={100}
                padAngle={0.015}
                cornerRadius={6}
                showLabels={true}
                showValues={true}
                animationDuration={1.5}
              />
            </div>

            <div className="space-y-2 px-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                <span className="text-xs text-slate-400 font-semibold">CATEGORY</span>
                <span className="text-xs text-slate-400 font-semibold">BASELINE</span>
              </div>
              {costBreakdown.map((segment, idx) => (
                <div key={idx} className="flex justify-between items-center py-1.5 hover:bg-slate-800/30 rounded px-2 transition-colors duration-150">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-300">{segment.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {segment.percent} | {segment.amount}
                  </span>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-semibold">BASE BUILD TOTAL</span>
                  <span className="text-xs text-purple-400 font-bold">$6.0M</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Feasibility Controls</h3>
            <div className="space-y-4">
              {feasibilityControls.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/60">
                  <p className="text-sm font-semibold text-purple-400 mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {riskMatrix.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-150"
            >
              <div className={`bg-gradient-to-r ${section.color} text-white text-sm font-semibold px-3 py-1 rounded-md inline-block mb-4`}>
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketAnalysis;
