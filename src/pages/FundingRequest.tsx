import { motion } from 'framer-motion';
import { FiDollarSign, FiTarget, FiTrendingUp, FiShield, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import AnimatedDonutChart from '../components/AnimatedDonutChart';

const FundingRequest = () => {
  // Force rebuild - updated pricing values
  const equityUse = [
    { category: 'Land acquisition', amount: 2_500_000, color: '#c9a873' },
    { category: 'Construction + finishes', amount: 5_000_000, color: '#8d6b4f' },
    { category: 'Soft costs + contingency', amount: 0, color: '#a9825a' },
  ];

  const totalEquity = equityUse.reduce((sum, item) => sum + item.amount, 0);
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);

  const investmentTerms = [
    'All-cash equity, no bank debt or draw risk',
    'Project One SPV owns land and project capital',
    'Return of capital + 20% preferred return target',
    '100% residual profit to Makergy after pref hurdle',
    'Makergy acts as manager and design-build contractor'
  ];

  const milestones = [
    { phase: 'Phase 1', target: 'Funding close + SPV activation (T0)', status: 'target' },
    { phase: 'Phase 2', target: 'Design lock + permitting (T0-T6)', status: 'target' },
    { phase: 'Phase 3', target: 'Site work + foundation (T6-T9)', status: 'target' },
    { phase: 'Phase 4', target: 'Shell + envelope (T9-T15)', status: 'target' },
    { phase: 'Phase 5', target: 'Interiors + systems (T15-T21)', status: 'target' },
    { phase: 'Phase 6', target: 'Commission + list + sale (T22-T24, target Q4 2027)', status: 'target' },
  ];

  const dealHighlights = [
    { metric: 'Target Sale', value: '$10M', timeline: 'Premium exit' },
    { metric: 'Equity Structure', value: 'All-cash', timeline: 'No bank debt' },
    { metric: 'Residual Profit', value: '100% Makergy', timeline: 'After capital + pref' },
    { metric: 'Risk Isolation', value: 'SPV', timeline: 'Liability firewall' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Investment Terms</h1>
        <p className="text-lg sm:text-xl text-stone-300 mb-6 text-center">
          All-cash equity structure supporting a $10M luxury exit
        </p>
        <p className="text-sm text-stone-400 mb-12 text-center">
          Delivery target: Q4 2027. Best-case schedule is ~24 months from funding with in-house decision velocity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { icon: <FiDollarSign className="w-12 h-12" />, value: '$5M', label: 'Build Target' },
            { icon: <FiTarget className="w-12 h-12" />, value: '$7.5M', label: 'All-in Target' },
            { icon: <FiMapPin className="w-12 h-12" />, value: '$2.5M', label: 'Lot Target' },
            { icon: <IoRocketOutline className="w-12 h-12" />, value: '$10M', label: 'Sale Target' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{card.value}</h3>
                  <p className="text-sm text-stone-300">{card.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-2 text-center">Use of Equity (Illustrative)</h3>
            <p className="text-xs text-stone-500 text-center mb-6">Targets aligned to the $7.5M all-in total.</p>
            <div className="flex justify-center items-center">
              <AnimatedDonutChart
                data={equityUse.map(item => ({
                  name: item.category,
                  value: item.amount,
                  color: item.color
                }))}
                width={360}
                height={360}
                innerRadius={70}
                outerRadius={120}
                padAngle={0.015}
                cornerRadius={6}
                showLabels={false}
                showValues={false}
                animationDuration={1.5}
              />
            </div>
            <div className="mt-6 space-y-2">
              {equityUse.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 border border-stone-700/60 rounded-lg p-3 bg-stone-900/60">
                  <div>
                    <p className="text-sm text-stone-200">{item.category}</p>
                    <p className="text-xs text-stone-500">
                      {((item.amount / totalEquity) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-amber-300">{formatCurrency(item.amount)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Investment Terms</h3>
            <ul className="space-y-4">
              {investmentTerms.map((term, idx) => (
                <li key={idx} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-200">{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Execution Milestones</h3>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                className="flex items-center justify-between p-4 bg-stone-900/60 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-4 bg-amber-300" />
                  <div>
                    <p className="text-sm text-stone-400">{milestone.phase}</p>
                    <p className="text-white font-semibold">{milestone.target}</p>
                  </div>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-amber-900/30 text-amber-300">
                  Target
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
              className="bg-stone-900/80 border border-stone-800 rounded-xl p-6 text-center hover:border-amber-400/40 hover:shadow-md hover:shadow-amber-500/10 transition-all duration-150"
            >
              <FiTrendingUp className="w-8 h-8 text-amber-300 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-stone-400 mt-1">{item.metric}</p>
              <p className="text-xs text-stone-500 mt-1">{item.timeline}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.3 }}
          className="bg-gradient-to-r from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-8"
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
                <div className="text-amber-300 mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{reason.title}</h4>
                  <p className="text-sm text-stone-400">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default FundingRequest;
