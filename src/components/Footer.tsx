import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <p className="text-purple-400 text-lg font-semibold mb-2">Jeremiah 29:11</p>
            <p className="text-slate-300 text-sm md:text-base italic max-w-3xl mx-auto">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, 
              plans to give you hope and a future."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-6 border-t border-slate-800"
          >
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              Built with <FiHeart className="text-red-500" /> and faith
            </p>
            <p className="text-slate-600 text-xs mt-2">
              © 2026 Makergy Project One. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
