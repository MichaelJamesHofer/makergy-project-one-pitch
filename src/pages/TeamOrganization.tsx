import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiTool, FiShield } from 'react-icons/fi';

const TeamOrganization = () => {
  const entities = [
    {
      title: 'Tree Branch Holdings',
      subtitle: 'Parent + capital sponsor',
      description: 'Governance oversight, capital partner relationships, and 80% equity ownership.'
    },
    {
      title: 'Makergy Inc.',
      subtitle: 'Operating entity',
      description: 'Design-build execution, project management, and 20% profit interest pool for the core team.'
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

  const coreTeam = [
    {
      name: 'David Gosse',
      role: 'Chief Visionary Officer',
      focus: 'Story + sale',
      bio: 'Serial entrepreneur and WoodLab co-founder guiding brand, buyer, and market positioning.',
      icon: <FiShield />,
      items: [
        'Sets the signature theme and buyer profile',
        'Final approval on aesthetic/budget trade-offs',
        'Public face with brokers, media, and partners'
      ]
    },
    {
      name: 'Mardie Engelhardt',
      role: 'Design Principal',
      focus: 'Soul + feel',
      bio: 'Principal architect with a total-design philosophy across luxury estates and interiors.',
      icon: <FiTool />,
      items: [
        'Interior architecture + material palette',
        'Lighting, landscape, and art curation',
        'Staging and final visual direction'
      ]
    },
    {
      name: 'Michael Hofer',
      role: 'Lead Systems & BIM Architect',
      focus: 'Digital twin',
      bio: 'Systems architect spanning BIM, automation, and integrated technology.',
      icon: <FiBriefcase />,
      items: [
        'Owns BIM model and clash-free coordination',
        'Smart home + low-voltage topology',
        'Shop drawings for custom fabrication'
      ]
    },
    {
      name: 'Anthony Holzapple',
      role: 'GC & Project Director',
      focus: 'Build + risk',
      bio: 'Licensed master builder known for custom fabrication and complex detailing.',
      icon: <FiUsers />,
      items: [
        'GC of record, subs, and field ops',
        'Schedule ownership + hard cost budget',
        'Permitting and inspections'
      ]
    },
    {
      name: 'Capital & Finance Director',
      role: '5th Member (TBD)',
      focus: 'Fuel + scoreboard',
      bio: 'Capital structuring and investor operations lead (to be named).',
      icon: <FiShield />,
      items: [
        'Investor reporting + draw control',
        'Bookkeeping and tax strategy',
        'Capital disbursement governance'
      ]
    }
  ];

  const principles = [
    'No-drift workflow with weekly budget checkpoints',
    'Owner-level transparency on bids and scope changes',
    'Design intent protected through finish packages',
    'Risk isolation via SPV governance and documentation',
    'Clear path to market with exit-focused decisions',
  ];

  const decisionMatrix = [
    { title: 'Aesthetic & vibe', owner: 'Mardie', detail: 'Final say on look/feel unless it breaks the model.' },
    { title: 'Constructability + risk', owner: 'Anthony', detail: 'Buildability and water-risk veto.' },
    { title: 'Digital truth', owner: 'Michael', detail: 'BIM model is source of truth.' },
    { title: 'Financial viability', owner: 'TBH Board', detail: 'Budget protection + solvency veto.' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Team & Delivery</h1>
        <p className="text-xl text-stone-300 mb-4">
          Makergy executes the build with Tree Branch Holdings governance and SPV protection
        </p>
        <p className="text-sm text-stone-400 mb-12">
          Five-person senior team, one $10M signature project, zero middle management.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {entities.map((entity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.25 }}
              className="bg-gradient-to-r from-stone-900/80 to-amber-900/20 border border-amber-800/40 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{entity.title}</h3>
              <p className="text-sm text-amber-300 mb-3">{entity.subtitle}</p>
              <p className="text-sm text-stone-200 leading-relaxed">{entity.description}</p>
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
                className="bg-stone-900/80 border border-stone-800 rounded-xl p-6 hover:border-amber-400/40 hover:shadow-md hover:shadow-amber-500/10 transition-all duration-150"
              >
                <h4 className="text-lg font-semibold text-white">{stream.phase}</h4>
                <p className="text-sm text-stone-400 mt-2">{stream.goal}</p>
                <ul className="mt-4 space-y-2">
                  {stream.items.map((item, i) => (
                    <li key={i} className="text-sm text-stone-200 flex items-start">
                      <span className="text-amber-300 mr-2">•</span>
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
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Core Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coreTeam.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="bg-stone-900/60 border border-stone-700/60 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-300">
                    {member.icon}
                  </div>
                <div>
                  <h4 className="font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-amber-300">{member.role}</p>
                  <p className="text-xs text-stone-400">{member.focus}</p>
                </div>
              </div>
              <p className="text-sm text-stone-300 mb-4">{member.bio}</p>
              <ul className="space-y-2">
                  {member.items.map((item) => (
                    <li key={item} className="text-sm text-stone-200 flex items-start">
                      <span className="text-amber-300 mr-2">•</span>
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
          transition={{ delay: 0.4, duration: 0.3 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Decision Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decisionMatrix.map((item) => (
              <div key={item.title} className="bg-stone-900/60 border border-stone-700/60 rounded-lg p-6">
                <p className="text-sm text-amber-300 font-semibold">{item.title}</p>
                <p className="text-base text-white mt-1">{item.owner}</p>
                <p className="text-sm text-stone-400 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.25 }}
          className="bg-stone-900/80 border border-stone-800 rounded-xl p-8 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-150"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Operating Principles</h3>
          <div className="space-y-3">
            {principles.map((value, idx) => (
              <div key={idx} className="flex items-center">
                <FiShield className="w-5 h-5 text-amber-300 mr-3" />
                <span className="text-stone-200">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamOrganization;
