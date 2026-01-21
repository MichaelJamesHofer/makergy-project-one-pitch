import { motion } from 'framer-motion';
import { FiCheckCircle, FiDollarSign, FiFileText, FiHome, FiShield, FiUsers } from 'react-icons/fi';

const DeveloperTermsOffer = () => {
  const asOfDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const parties = [
    {
      title: 'Seller',
      value: 'The Bellarossa and Palermo Development Fund, LLC',
      icon: <FiShield className="w-6 h-6" />,
    },
    {
      title: 'Buyer / Developer',
      value: '[Builder Entity]',
      icon: <FiUsers className="w-6 h-6" />,
    },
  ];

  const property = [
    {
      title: 'Parade Lot',
      value: 'Lot [11] (the Property)',
      icon: <FiHome className="w-6 h-6" />,
    },
    {
      title: 'Additional Lots',
      value: 'Reservation rights for up to two (2) additional lots as provided herein.',
      icon: <FiHome className="w-6 h-6" />,
    },
  ];

  const structurePoints = [
    'Installment payments with interest secured by a deed of trust.',
    'Performance-based purchase price true-up capped at $3,500,000 (exclusive of interest).',
  ];

  const paradeRequirements = [
    'Buyer shall construct a residence on the Property and enter and participate in the Parade of Homes, targeted for Fall 2027.',
    'Early sale of the residence does not excuse Parade participation; Buyer coordinates with any end purchaser.',
    'Failure to participate constitutes a material default.',
  ];

  const accMembers = [
    'Stephen Barbey',
    'Thomas J. Angstman',
    'DTJ Design - Chris Moore or assigns',
  ];

  const pricing = [
    {
      title: 'Base Lot Price',
      value: '$2,500,000',
      subtitle: 'Base purchase price',
      icon: <FiDollarSign className="w-7 h-7" />,
    },
    {
      title: 'Maximum Base + True-Up',
      value: '$3,500,000',
      subtitle: 'Exclusive of interest',
      icon: <FiFileText className="w-7 h-7" />,
    },
  ];

  const paymentStream = [
    '$150,000 non-refundable deposit due upon execution.',
    '$500,000 due upon recordation of the final subdivision plat; Seller conveys the Property and records a Seller Deed of Trust.',
    '$500,000 due six (6) months after plat recordation and every six (6) months thereafter until the Base Lot Price principal and all accrued interest are paid in full.',
  ];

  const profitDefinition = [
    'Base Lot Price principal',
    'Hard construction costs',
    'Direct site work',
    'Permits and impact fees',
    'Construction loan interest and fees',
    'Seller interest paid at 9%',
  ];

  const trueUpTiers = [
    '≤10% margin: No True-Up',
    '>10% and ≤12.5% margin: True-Up = 50% × (Profit − 10% of Total Cost)',
    '>12.5% and ≤15% margin: True-Up = 75% × (Profit − 12.5% of Total Cost)',
    '>15% margin: True-Up = 100% × (Profit − 15% of Total Cost)',
    'True-Up capped at $1,000,000.',
  ];

  const auditProcess = [
    'At sale closing, Buyer pays the full $1,000,000 True-Up (no audit required); or',
    'Buyer proposes a lesser True-Up, triggering a mandatory audit unless waived by Seller.',
    'If full $1,000,000 is not tendered, Buyer deposits $1,000,000 into escrow at closing; audit may complete post-closing.',
    'Audit scope is limited to sale price, Total Cost, Profit, margin, and correct True-Up calculation.',
  ];

  const additionalLots = [
    'Buyer may reserve up to two (2) additional lots.',
    'Upon a bona fide third-party offer, Buyer has ten (10) days to post a $500,000 non-refundable deposit per lot or Seller may sell freely.',
  ];

  const selfPerformedWork = [
    'Permitted at cost only; no profit, markup, overhead, or internal fees included in Total Cost.',
    'Actual cost is limited to direct labor, materials, equipment rental, third-party subcontract costs, and payroll taxes paid.',
    'Buyer maintains records supporting actual cost for review only in connection with the audit procedures.',
    'Any profit or overhead found in self-performed work is excluded from Total Cost and True-Up recalculates.',
    'Construction loan interest, Seller interest, and loan fees are governed elsewhere and not adjusted here.',
    'Seller knowledge of self-performed work does not approve inclusion of profit or markup in Total Cost.',
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs uppercase tracking-[0.2em] rounded-full bg-amber-500/10 text-amber-200 border border-amber-400/40">
            Confidential Term Sheet
          </span>
          <span className="px-3 py-1 text-xs uppercase tracking-[0.2em] rounded-full bg-stone-900/60 text-stone-300 border border-stone-700/60">
            As of {asOfDate}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Developer Terms Offer</h1>
        <p className="text-lg sm:text-xl text-stone-300 mb-12 max-w-3xl">
          Parade home lot purchase with installment payments, interest, and a performance-based true-up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {parties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
              className="bg-stone-900/80 border border-stone-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-[0.2em]">{item.title}</p>
                  <p className="text-lg text-white font-semibold mt-1">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {property.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.2 }}
              className="bg-gradient-to-br from-stone-900/80 to-amber-900/15 border border-amber-800/40 rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-[0.2em]">{item.title}</p>
                  <p className="text-lg text-white font-semibold mt-1">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Transaction Purpose</h2>
          <p className="text-stone-200 leading-relaxed mb-6">
            Structured to facilitate construction of a flagship Parade of Homes residence on the Property while preserving
            full market value through installment payments and a capped, performance-based purchase price true-up.
          </p>
          <div className="space-y-4">
            {structurePoints.map((point) => (
              <div key={point} className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="bg-gradient-to-br from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-8 mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-white">Parade of Homes Requirement</h2>
            <span className="px-2 py-1 text-xs uppercase tracking-[0.2em] rounded-full bg-amber-500/15 text-amber-200 border border-amber-400/40">
              Material Condition
            </span>
          </div>
          <div className="space-y-4">
            {paradeRequirements.map((item) => (
              <div key={item} className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Architectural Control Committee</h2>
            <p className="text-sm text-stone-400 mb-4">All design and construction are subject to approval by the ACC.</p>
            <div className="space-y-3">
              {accMembers.map((member) => (
                <div key={member} className="flex items-center">
                  <FiCheckCircle className="w-4 h-4 text-amber-300 mr-3" />
                  <p className="text-stone-200 text-sm">{member}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Pricing & True-Up</h2>
            <div className="space-y-4">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 border border-stone-700/60 rounded-lg p-4 bg-stone-900/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-stone-400 uppercase tracking-[0.2em]">{item.title}</p>
                      <p className="text-xs text-stone-500 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-amber-300">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4">
              Interest payable to Seller under this term sheet is in addition to, and not counted toward, the $3,500,000 cap.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Payment Stream</h2>
            <div className="space-y-4">
              {paymentStream.map((item) => (
                <div key={item} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Interest, Application, Security</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">
                  Interest accrues on unpaid Base Lot Price principal at 9% per annum, simple interest, commencing upon plat recordation.
                </p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">Payments apply first to accrued interest, then to outstanding principal.</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">
                  Buyer delivers a Seller Deed of Trust at plat recordation securing unpaid principal and interest, subordinate only to the
                  subdivision construction loan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.25 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Profit Definition (Confidential)</h2>
          <p className="text-stone-200 text-sm mb-4">
            Profit is calculated at sale closing as Gross Sale Price minus Total Cost. Total Cost includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profitDefinition.map((item) => (
              <div key={item} className="flex items-start">
                <FiCheckCircle className="w-4 h-4 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-4">Profit is calculated once at sale closing and remains confidential.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">True-Up Mechanism</h2>
            <p className="text-sm text-stone-400 mb-4">Single tier, non-incremental, based on Profit Margin (Profit ÷ Total Cost).</p>
            <div className="space-y-3">
              {trueUpTiers.map((item) => (
                <div key={item} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">True-Up Election & Audit</h2>
            <div className="space-y-4">
              {auditProcess.map((item) => (
                <div key={item} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Additional Lot Reservations</h2>
            <div className="space-y-4">
              {additionalLots.map((item) => (
                <div key={item} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-200 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-stone-900/80 to-amber-900/15 border border-amber-800/40 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Non-Precedent / Non-Binding</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">This term sheet is project-specific and establishes no precedent.</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">This term sheet is non-binding and subject to definitive agreements.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.2 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Self-Performed / Related-Party Work</h2>
          <div className="space-y-4">
            {selfPerformedWork.map((item) => (
              <div key={item} className="flex items-start">
                <FiCheckCircle className="w-5 h-5 text-amber-300 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-stone-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeveloperTermsOffer;
