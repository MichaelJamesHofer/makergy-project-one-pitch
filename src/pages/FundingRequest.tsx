import { motion } from 'framer-motion';
import { FiDollarSign, FiTarget, FiTrendingUp, FiShield, FiCheckCircle } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import AnimatedDonutChart from '../components/AnimatedDonutChart';

const FundingRequest = () => {
  const equityUse = [
    { category: 'Land acquisition', amount: 2.0, percentage: 22, color: '#8b5cf6' },
    { category: 'Core build', amount: 6.0, percentage: 65, color: '#3b82f6' },
    { category: 'Premium scope + contingency', amount: 1.25, percentage: 13, color: '#06b6d4' },
  ];

  const investmentTerms = [
    'All-cash equity, no bank debt or draw risk',
    'Project One SPV owns land and project capital',
    'Return of capital + preferred return first',
    '50/50 backend split after pref hurdle',
    'Makergy acts as manager and design-build contractor',
    'Investor veto rights on major decisions (sale, debt, replacement)'
  ];

  const milestones = [
    { phase: 'Phase 1', target: 'Design + BIM lock, finish package alignment', status: 'upcoming' },
    { phase: 'Phase 2', target: 'Permitting + subcontractor bids', status: 'upcoming' },
    { phase: 'Phase 3', target: 'SPV close + funding schedule', status: 'upcoming' },
    { phase: 'Phase 4', target: 'Groundbreak + shell delivery', status: 'upcoming' },
    { phase: 'Phase 5', target: 'Interiors + tech commissioning', status: 'upcoming' },
    { phase: 'Phase 6', target: 'Listing + exit execution', status: 'upcoming' },
  ];

  const dealHighlights = [
    { metric: 'Target Sale', value: '$10M', timeline: 'Premium exit' },
    { metric: 'Equity Structure', value: 'All-cash', timeline: 'No bank debt' },
    { metric: 'Promote Split', value: '50/50', timeline: 'After capital + pref' },
    { metric: 'Risk Isolation', value: 'SPV', timeline: 'Liability firewall' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Investment Terms</h1>
        <p className="text-xl text-slate-400 mb-12 text-center">
          All-cash equity structure supporting a $10M luxury exit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <FiDollarSign className="w-12 h-12" />, value: '$7.0-7.5M', label: 'Build Target' },
            { icon: <FiTarget className="w-12 h-12" />, value: '$2M', label: 'Lot Target' },
            { icon: <IoRocketOutline className="w-12 h-12" />, value: '$10M', label: 'Sale Target' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-800/50 rounded-xl p-8 text-center"
            >
              <div className="text-purple-400 mx-auto mb-4">{card.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{card.value}</h3>
              <p className="text-slate-400">{card.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-2 text-center">Use of Equity (Illustrative)</h3>
            <p className="text-xs text-slate-500 text-center mb-6">Targets aligned to the $9.25M all-in midpoint.</p>
            <div className="flex justify-center items-center">
              <AnimatedDonutChart
                data={equityUse.map(item => ({
                  name: item.category,
                  value: item.percentage,
                  color: item.color
                }))}
                width={360}
                height={360}
                innerRadius={70}
                outerRadius={120}
                padAngle={0.015}
                cornerRadius={6}
                showLabels={true}
                showValues={true}
                animationDuration={1.5}
              />
            </div>
            <div className="mt-6 space-y-2">
              {equityUse.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm text-slate-400">
                  <span>{item.category}</span>
                  <span>${item.amount}M</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Investment Terms</h3>
            <ul className="space-y-4">
              {investmentTerms.map((term, idx) => (
                <li key={idx} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Execution Milestones</h3>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-4 bg-blue-400" />
                  <div>
                    <p className="text-sm text-slate-400">{milestone.phase}</p>
                    <p className="text-white font-semibold">{milestone.target}</p>
                  </div>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-900/50 text-blue-400">
                  Upcoming
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {dealHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-150"
            >
              <FiTrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-slate-400 mt-1">{item.metric}</p>
              <p className="text-xs text-slate-500 mt-1">{item.timeline}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.3 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Why This Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <FiShield />, title: 'No bank debt', desc: 'Eliminates lender draw risk and accelerates execution.' },
              { icon: <FiTrendingUp />, title: 'Defined budget', desc: 'Hard/finish split and allowances scoped early.' },
              { icon: <FiTarget />, title: 'Clear exit', desc: 'Target $10M sale with premium design positioning.' },
              { icon: <IoRocketOutline />, title: 'Aligned incentives', desc: 'Promote only after investor capital return.' },
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start">
                <div className="text-purple-400 mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{reason.title}</h4>
                  <p className="text-sm text-slate-400">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Align on Terms?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Confirm the equity structure, finalize scope, and move into the SPV close.
          </p>
          <a
            href="mailto:invest@makergy.com?subject=Makergy%20Project%20One%20Investment%20Discussion"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-150 transform hover:scale-[1.02]"
          >
            Schedule Investment Discussion
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FundingRequest;
