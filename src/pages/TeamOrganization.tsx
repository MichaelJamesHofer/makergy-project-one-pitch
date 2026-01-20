import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiTool, FiShield } from 'react-icons/fi';

const TeamOrganization = () => {
  const entities = [
    {
      title: 'Tree Branch Holdings',
      subtitle: 'Parent + capital sponsor',
      description: 'Governance oversight, capital partner relationships, and strategic direction.'
    },
    {
      title: 'Makergy Inc.',
      subtitle: 'Operating entity',
      description: 'Design-build execution, project management, and construction delivery.'
    },
    {
      title: 'Project One SPV',
      subtitle: 'Asset + capital vehicle',
      description: 'Holds land, project capital, and isolates risk for investors.'
    }
  ];

  const workstreams = [
    {
      phase: 'Workstream 1: Raise',
      goal: 'Secure operational runway and project capital.',
      items: ['Finalize budget + model', 'Investor outreach + meetings', 'Proof of funds letter']
    },
    {
      phase: 'Workstream 2: Makergy Launch',
      goal: 'Operational readiness and SPV formation.',
      items: ['Form Makergy Inc.', 'Execute inter-company agreement', 'Form Project One SPV']
    },
    {
      phase: 'Workstream 3: Governance',
      goal: 'Legal alignment and protective documentation.',
      items: ['Operating agreements + bylaws', 'Insurance + risk controls', 'Partner alignment']
    }
  ];

  const keyRoles = [
    { role: 'Design + BIM', detail: 'Finalize plan set and coordinate scope', icon: <FiTool /> },
    { role: 'Permitting + Precon', detail: 'Submittals, bidding, and GMP alignment', icon: <FiBriefcase /> },
    { role: 'Construction Ops', detail: 'Schedule, trades, and quality control', icon: <FiUsers /> },
    { role: 'Capital + Governance', detail: 'Investor relations and reporting', icon: <FiShield /> },
  ];

  const principles = [
    'No-drift workflow with weekly budget checkpoints',
    'Owner-level transparency on bids and scope changes',
    'Design intent protected through finish packages',
    'Risk isolation via SPV governance and documentation',
    'Clear path to market with exit-focused decisions',
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Team & Delivery</h1>
        <p className="text-xl text-slate-400 mb-12">
          Makergy executes the build with Tree Branch Holdings governance and SPV protection
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {entities.map((entity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.25 }}
              className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{entity.title}</h3>
              <p className="text-sm text-purple-400 mb-3">{entity.subtitle}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{entity.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Execution Workstreams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workstreams.map((stream, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + idx * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-150"
              >
                <h4 className="text-lg font-semibold text-white">{stream.phase}</h4>
                <p className="text-sm text-slate-400 mt-2">{stream.goal}</p>
                <ul className="mt-4 space-y-2">
                  {stream.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Key Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyRoles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-400">
                  {role.icon}
                </div>
                <h4 className="font-semibold text-white mb-1">{role.role}</h4>
                <p className="text-sm text-slate-400">{role.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.25 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-150"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Operating Principles</h3>
          <div className="space-y-3">
            {principles.map((value, idx) => (
              <div key={idx} className="flex items-center">
                <FiShield className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-slate-300">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamOrganization;
