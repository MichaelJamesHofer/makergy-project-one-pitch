import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Password: "jer2911" - referencing Jeremiah 29:11
  const correctPassword = 'jer2911';

  useEffect(() => {
    const auth = sessionStorage.getItem('project-one-auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('project-one-auth', 'authenticated');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-stone-950/80 border border-stone-800 rounded-xl p-8 max-w-md w-full"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4">
            <FiLock className="w-8 h-8 text-amber-300" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Makergy Project One</h1>
          <p className="text-stone-400 text-sm">Investor materials are password protected</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-2">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-200"
              placeholder="Enter password"
              autoFocus
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Access Site
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-800">
          <p className="text-xs text-stone-500 text-center italic">
            "For I know the plans I have for you," declares the Lord
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;
