import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiMapPin, FiShield } from 'react-icons/fi';
import AnimatedLineChart from '../components/AnimatedLineChart';

const FinancialProjections = () => {
  const costRange = [
    { label: 'Low', build: 7.0, allIn: 9.0 },
    { label: 'Target', build: 7.25, allIn: 9.25 },
    { label: 'High', build: 7.5, allIn: 9.5 },
  ];

  const finishHighlights = [
    { item: 'Cabinetry', amount: '$300K', note: 'Jaymark quote $450K' },
    { item: 'Countertops', amount: '$100K', note: 'Including labor' },
    { item: 'Interior stone + tile', amount: '$90K', note: 'Including labor' },
    { item: 'Plumbing fixtures', amount: '$85K', note: 'Including install' },
    { item: 'Appliances', amount: '$85K', note: 'Allowance' },
    { item: 'Interior paint', amount: '$60K', note: 'Mineral-based paint' },
  ];

  const specialtyScope = [
    { item: 'AV system', amount: '$250K' },
    { item: 'Motorized blinds', amount: '$60K' },
    { item: 'Elevator', amount: '$30K' },
    { item: 'Garage/mail room (mid)', amount: '$625K' },
    { item: 'Furnishings', amount: '$140K' },
    { item: 'Landscaping', amount: '$150K-$500K' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Budget & Returns</h1>
        <p className="text-xl text-slate-400 mb-4">
          Targeting a $10M exit with a $7.0-7.5M build plan and $2M lot
        </p>
        <p className="text-lg text-slate-500 mb-12">
          All-cash equity, no bank debt, and a 50/50 backend split after return of capital + preferred return.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Target Sale Price', value: '$10M', icon: <FiTrendingUp /> },
            { label: 'Build Target', value: '$7.0-7.5M', icon: <FiDollarSign /> },
            { label: 'Lot Target', value: '$2M', icon: <FiMapPin /> },
            { label: 'Capital Structure', value: 'All-cash', icon: <FiShield /> },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6"
            >
              <div className="text-purple-400 mb-3">{metric.icon}</div>
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">All-in Cost Range</h3>
          <AnimatedLineChart
            series={[
              {
                name: 'Build Cost ($M)',
                data: costRange.map((d, i) => ({
                  x: i,
                  y: d.build,
                  label: d.label
                })),
                color: '#8b5cf6'
              },
              {
                name: 'All-in Cost ($M)',
                data: costRange.map((d, i) => ({
                  x: i,
                  y: d.allIn,
                  label: d.label
                })),
                color: '#10b981'
              }
            ]}
            height={320}
            responsive={true}
            showPoints={true}
            showGrid={true}
            yAxisLabel="Cost ($M)"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Budget Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 text-slate-400">Item</th>
                    <th className="py-3 text-slate-400 text-right">Budget</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Base build (5,000 SF @ $1,200)</td>
                    <td className="py-3 text-right text-green-400">$6.0M</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Garage/mail room (mid option)</td>
                    <td className="py-3 text-right text-green-400">$625K</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">AV + blinds + elevator</td>
                    <td className="py-3 text-right text-green-400">$340K</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Furnishings (fully furnished)</td>
                    <td className="py-3 text-right text-green-400">$140K</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Landscaping</td>
                    <td className="py-3 text-right text-green-400">$150K-$500K</td>
                  </tr>
                  <tr>
                    <td className="py-3">Contingency + soft costs</td>
                    <td className="py-3 text-right text-slate-400">TBD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Finish Allowance Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {finishHighlights.map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/60">
                  <p className="text-sm text-slate-400">{item.item}</p>
                  <p className="text-lg font-semibold text-white">{item.amount}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Specialty + Lifestyle Scope</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialtyScope.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/60">
                <p className="text-sm text-slate-400">{item.item}</p>
                <p className="text-lg font-semibold text-white">{item.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Return Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">Priority 1</p>
              <p className="text-sm text-slate-400 mt-2">Investor return of capital</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">Priority 2</p>
              <p className="text-sm text-slate-400 mt-2">Preferred return/hurdle</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">Then</p>
              <p className="text-sm text-slate-400 mt-2">50/50 backend split</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinancialProjections;
