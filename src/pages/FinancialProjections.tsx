import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiMapPin, FiShield } from 'react-icons/fi';
import AnimatedDonutChart from '../components/AnimatedDonutChart';

const FinancialProjections = () => {
  const sourcesSummary = [
    { label: 'Equity (all-cash)', value: '$7.5M', note: 'Targeted capital, no bank debt' },
    { label: 'Debt', value: '$0', note: 'No lender draw risk' },
  ];

  const usesBreakdown = [
    { item: 'Land acquisition', value: '$2.0M', note: 'Target lot price' },
    { item: 'Build (detailed below)', value: '$5.5M', note: 'Includes soft costs, garage, systems, furnishings, and landscape' },
    { item: 'All-in total', value: '$7.5M', note: 'Aligned to target cap' },
  ];

  const buildTargetTotal = 5_500_000;
  const salePrice = 10_000_000;
  const sellingCosts = 200_000;
  const netProceeds = salePrice - sellingCosts;
  const equityCapital = 7_500_000;
  const preferredReturnRate = 0.2;
  const preferredReturn = equityCapital * preferredReturnRate;
  const remainingAfterCapital = netProceeds - equityCapital;
  const remainingAfterPref = remainingAfterCapital - preferredReturn;
  const investorSplit = remainingAfterPref * 0.5;
  const makergySplit = remainingAfterPref * 0.5;
  const developmentFee = equityCapital * 0.04;
  const gcFee = buildTargetTotal * 0.06;
  const investorTotal = equityCapital + preferredReturn + investorSplit;
  const investorProfit = investorTotal - equityCapital;
  const investorRoi = (investorProfit / equityCapital) * 100;
  const makergyTotal = makergySplit + developmentFee + gcFee;
  const formatUsd = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);

  const buildCategories = [
    { name: 'Precon + permits', amount: 260000, color: '#c9a873' },
    { name: 'Site + civil', amount: 445000, color: '#b18d66' },
    { name: 'Structure + envelope', amount: 1440000, color: '#8d6b4f' },
    { name: 'MEP systems', amount: 850000, color: '#a9825a' },
    { name: 'Interior finishes', amount: 1150000, color: '#d2b07f' },
    { name: 'Technology + vertical', amount: 340000, color: '#b99b7c' },
    { name: 'Garage + mail room', amount: 625000, color: '#9a7a60' },
    { name: 'Landscape + outdoor', amount: 250000, color: '#c4a57a' },
    { name: 'Furnishings + staging', amount: 140000, color: '#d9c2a0' },
  ];

  const roomBudgets = [
    {
      room: 'Whole House + Site (Shared Infrastructure)',
      total: 2_995_000,
      items: [
        { label: 'Precon + permits + engineering', amount: 260000 },
        { label: 'Excavation, retaining, drainage, waterproofing', amount: 445000 },
        { label: 'Framing + structural beams', amount: 500000 },
        { label: 'Exterior envelope (stone, stucco, cladding)', amount: 260000 },
        { label: 'Roofing + waterproofing', amount: 180000 },
        { label: 'Glazing package + exterior doors', amount: 320000 },
        { label: 'Insulation + drywall level 4', amount: 210000 },
        { label: 'MEP rough-in + equipment', amount: 820000 },
      ],
    },
    {
      room: 'Entry + Foyer',
      total: 90_000,
      items: [
        { label: 'Custom entry door', amount: 9000 },
        { label: 'Wood veneer paneling', amount: 40000 },
        { label: 'Wallcovering + art lighting', amount: 15000 },
        { label: 'Heated stone flooring', amount: 18000 },
        { label: 'Bench + concealed storage', amount: 8000 },
      ],
    },
    {
      room: 'Living + Dining',
      total: 200_000,
      items: [
        { label: 'Fireplace + leather wrap', amount: 52000 },
        { label: 'Wood ceiling detail', amount: 24000 },
        { label: 'Flooring allocation', amount: 32000 },
        { label: 'Lighting layers', amount: 18000 },
        { label: 'Built-ins + media concealment', amount: 30000 },
        { label: 'Acoustic drapery + treatments', amount: 20000 },
        { label: 'Trim + doors + paint allocation', amount: 24000 },
      ],
    },
    {
      room: 'Kitchen + Pantry',
      total: 450_000,
      items: [
        { label: 'Cabinetry + pantry millwork', amount: 240000 },
        { label: 'Appliances', amount: 85000 },
        { label: 'Countertops', amount: 80000 },
        { label: 'Sink + filtration + fixtures', amount: 20000 },
        { label: 'Lighting + custom hardware', amount: 15000 },
        { label: 'Trim + paint allocation', amount: 10000 },
      ],
    },
    {
      room: 'Primary Suite',
      total: 190_000,
      items: [
        { label: 'Primary closet upgrade', amount: 50000 },
        { label: 'Bath cabinetry allocation', amount: 20000 },
        { label: 'Tadelakt shower finish', amount: 15000 },
        { label: 'Heated shower bench', amount: 4000 },
        { label: 'Stone/tile package', amount: 40000 },
        { label: 'Plumbing fixtures allocation', amount: 30000 },
        { label: 'Flooring + paint allocation', amount: 20000 },
        { label: 'Shower glass + lighting', amount: 11000 },
      ],
    },
    {
      room: 'Guest Suites',
      total: 120_000,
      items: [
        { label: 'Bath tile + fixtures allocation', amount: 50000 },
        { label: 'Bath cabinetry allocation', amount: 20000 },
        { label: 'Closet systems', amount: 5000 },
        { label: 'Carpet + pad', amount: 6000 },
        { label: 'Trim + paint allocation', amount: 20000 },
        { label: 'Shower glass allocation', amount: 5000 },
        { label: 'Casework + lighting', amount: 14000 },
      ],
    },
    {
      room: 'Library Lounge',
      total: 100_000,
      items: [
        { label: 'Custom millwork + shelving', amount: 30000 },
        { label: 'Flooring allocation', amount: 15000 },
        { label: 'Lighting + controls', amount: 10000 },
        { label: 'Wallcovering + finishes', amount: 15000 },
        { label: 'Acoustic treatments + seating', amount: 20000 },
        { label: 'Trim + paint allocation', amount: 10000 },
      ],
    },
    {
      room: 'Outdoor Living + Landscape',
      total: 250_000,
      items: [
        { label: 'Stone/paver patios', amount: 80000 },
        { label: 'Outdoor lighting', amount: 30000 },
        { label: 'Overhangs + exterior carpentry', amount: 40000 },
        { label: 'Xeriscape planting', amount: 60000 },
        { label: 'Water feature allowance', amount: 40000 },
      ],
    },
    {
      room: 'Garage + Mail Room',
      total: 625_000,
      items: [
        { label: 'Slab + structure shell', amount: 300000 },
        { label: 'Walls, doors, and exterior finishes', amount: 200000 },
        { label: 'Rough-ins + storage build-out', amount: 125000 },
      ],
    },
    {
      room: 'Technology + Vertical Transport',
      total: 340_000,
      items: [
        { label: 'Hidden AV + speakers', amount: 250000 },
        { label: 'Motorized blinds', amount: 60000 },
        { label: 'Elevator', amount: 30000 },
      ],
    },
    {
      room: 'Furnishings + Staging',
      total: 140_000,
      items: [
        { label: 'Living + dining', amount: 60000 },
        { label: 'Primary suite', amount: 30000 },
        { label: 'Guest suites', amount: 20000 },
        { label: 'Library lounge', amount: 15000 },
        { label: 'Outdoor living', amount: 15000 },
      ],
    },
  ];

  const underwritingNeeds = [
    'Comparable sales and price/SF benchmarks for $10M exit',
    'Final GC bids with trade coverage and schedule',
    'Permitting timeline, entitlement status, and impact fees',
    'Sitework scope: retaining, drainage, waterproofing, and access',
    'Lead times for glazing, stone, and specialty finishes',
  ];

  const returnWaterfall = [
    {
      step: 'Gross sale price',
      amount: salePrice,
      remaining: salePrice,
      tone: 'text-stone-200'
    },
    {
      step: 'Selling costs (capped $200K)',
      amount: sellingCosts,
      remaining: netProceeds,
      tone: 'text-stone-400'
    },
    {
      step: 'Return of capital to investors',
      amount: equityCapital,
      remaining: remainingAfterCapital,
      tone: 'text-amber-300'
    },
    {
      step: 'Preferred return (20% of capital)',
      amount: preferredReturn,
      remaining: remainingAfterPref,
      tone: 'text-amber-200'
    },
    {
      step: 'Residual profit available for split',
      amount: remainingAfterPref,
      remaining: 0,
      tone: 'text-stone-200'
    }
  ];

  const splitSummary = [
    { label: 'Investor residual share (50%)', amount: investorSplit },
    { label: 'Makergy residual share (50%)', amount: makergySplit },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Budget & Returns</h1>
        <p className="text-lg sm:text-xl text-stone-300 mb-4">
          Targeting a $10M exit with a $5.0-6.0M build plan and a $7.0-7.5M all-in budget (including a $2M lot)
        </p>
        <p className="text-base sm:text-lg text-stone-400 mb-12">
          All-cash equity, no bank debt, and a 20% preferred return before the 50/50 backend split.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Target Sale Price', value: '$10M', icon: <FiTrendingUp /> },
            { label: 'Build Target', value: '$5.0-6.0M', icon: <FiDollarSign /> },
            { label: 'All-in Target', value: '$7.0-7.5M', icon: <FiMapPin /> },
            { label: 'Capital Structure', value: 'All-cash', icon: <FiShield /> },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-900/80 border border-stone-800 rounded-lg p-6"
            >
              <div className="text-amber-300 mb-3">{metric.icon}</div>
              <p className="text-sm text-stone-300">{metric.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Sources</h3>
            <p className="text-sm text-stone-400 mb-6">
              All-cash equity structure with capital sized to cover land + construction + premium scope.
            </p>
            <div className="space-y-4">
              {sourcesSummary.map((source) => (
                <div key={source.label} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-stone-400">{source.label}</p>
                    <p className="text-xs text-stone-500">{source.note}</p>
                  </div>
                  <p className="text-lg font-semibold text-amber-300">{source.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Uses</h3>
            <div className="space-y-3">
              {usesBreakdown.map((use) => (
                <div key={use.item} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-stone-200">{use.item}</p>
                    <p className="text-xs text-stone-500">{use.note}</p>
                  </div>
                  <p className="text-sm font-semibold text-stone-200">{use.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Build Cost Breakdown ($5.5M Target)</h3>
              <p className="text-sm text-stone-400">Complete build cost allocation across categories.</p>
            </div>
            <p className="text-sm text-amber-300 font-semibold">Total: {formatUsd(buildTargetTotal)}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <AnimatedDonutChart
                data={buildCategories.map((item) => ({
                  name: item.name,
                  value: item.amount,
                  color: item.color,
                }))}
                width={360}
                height={360}
                innerRadius={70}
                outerRadius={120}
                padAngle={0.015}
                cornerRadius={6}
                showLabels={false}
                showValues={false}
                animationDuration={1.4}
              />
            </div>
            <div className="space-y-3">
              {buildCategories.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4 border border-stone-700/60 rounded-lg p-3 bg-stone-900/60">
                  <div>
                    <p className="text-sm text-stone-200">{item.name}</p>
                    <p className="text-xs text-stone-500">{((item.amount / buildTargetTotal) * 100).toFixed(1)}%</p>
                  </div>
                  <p className="text-sm font-semibold text-amber-300">{formatUsd(item.amount)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Room-by-Room Allocation</h3>
          <p className="text-sm text-stone-400 mb-6">
            Interactive breakdown of room allocations that sum to the $5.5M build target.
          </p>
          <div className="space-y-4">
            {roomBudgets.map((room, idx) => (
              <details
                key={room.room}
                className="group rounded-lg border border-stone-700/60 bg-stone-900/60 p-4"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-200">{room.room}</p>
                    <p className="text-xs text-stone-500">{room.items.length} line items</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-stone-500">{((room.total / buildTargetTotal) * 100).toFixed(1)}%</span>
                    <span className="text-sm font-semibold text-amber-300">{formatUsd(room.total)}</span>
                  </div>
                </summary>
                <div className="mt-4 space-y-2">
                  {room.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 border-b border-stone-800 pb-2">
                      <span className="text-sm text-stone-300">{item.label}</span>
                      <span className="text-sm text-stone-200">{formatUsd(item.amount)}</span>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Underwriting Items To Lock</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center max-w-4xl mx-auto">
            {underwritingNeeds.map((item, idx) => {
              const isLastOdd = underwritingNeeds.length % 2 === 1 && idx === underwritingNeeds.length - 1;

              return (
                <div
                  key={item}
                  className={`flex items-start gap-3 bg-stone-900/60 border border-stone-700/60 rounded-lg p-4 w-full max-w-lg ${isLastOdd ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
                >
                  <span className="text-amber-300">•</span>
                  <p className="text-sm text-stone-300">{item}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="bg-gradient-to-r from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Return Structure (Base Case $10M Sale)</h3>
              <p className="text-sm text-stone-400">
                Assumes $7.5M equity, $200K capped selling costs, and a 20% preferred return before the 50/50 split.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-400">Investor ROI</p>
              <p className="text-lg font-semibold text-amber-300">{investorRoi.toFixed(1)}%</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-700">
                  <th className="py-3 text-stone-400">Waterfall Step</th>
                  <th className="py-3 text-stone-400 text-right">Distribution</th>
                  <th className="py-3 text-stone-400 text-right">Remaining Cash</th>
                </tr>
              </thead>
              <tbody>
                {returnWaterfall.map((row) => (
                  <tr key={row.step} className="border-b border-stone-800 last:border-b-0">
                    <td className={`py-3 text-sm ${row.tone}`}>{row.step}</td>
                    <td className={`py-3 text-right text-sm ${row.tone}`}>{formatUsd(row.amount)}</td>
                    <td className="py-3 text-right text-sm text-stone-200">{formatUsd(row.remaining)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mb-6">
            Preferred return is calculated as 20% of $7.5M = $1.5M. Residual profit after pref is split 50/50.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 justify-items-center">
            {splitSummary.map((row) => (
              <div key={row.label} className="bg-stone-900/60 border border-stone-700/60 rounded-lg p-4 text-center w-full max-w-md">
                <p className="text-sm text-stone-400">{row.label}</p>
                <p className="text-xl font-semibold text-amber-300">{formatUsd(row.amount)}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-stone-900/60 border border-stone-700/60 rounded-lg p-4">
              <p className="text-sm text-stone-400">Investor total cash-out</p>
              <p className="text-2xl font-bold text-amber-300">{formatUsd(investorTotal)}</p>
              <p className="text-xs text-stone-500">Capital + pref + residual split</p>
            </div>
            <div className="text-center bg-stone-900/60 border border-stone-700/60 rounded-lg p-4">
              <p className="text-sm text-stone-400">Investor net profit</p>
              <p className="text-2xl font-bold text-amber-200">{formatUsd(investorProfit)}</p>
              <p className="text-xs text-stone-500">Meets 20% pref + upside</p>
            </div>
            <div className="text-center bg-stone-900/60 border border-stone-700/60 rounded-lg p-4">
              <p className="text-sm text-stone-400">Makergy total capture</p>
              <p className="text-2xl font-bold text-stone-200">{formatUsd(makergyTotal)}</p>
              <p className="text-xs text-stone-500">Backend + 4% dev + 6% GC fee</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinancialProjections;
