import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/executive-summary', label: 'Project Summary' },
    { path: '/financial-projections', label: 'Budget & Returns' },
    { path: '/products-services', label: 'Design & Scope' },
    { path: '/funding-request', label: 'Investment Terms' },
  ];

  const activeIndex = navItems.findIndex(item => item.path === location.pathname);

  // Force re-render after refs are populated
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate position and width for the indicator
  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  
  const getIndicatorProps = () => {
    if (currentIndex === -1 || !navRefs.current[currentIndex]) {
      return { x: 0, width: 0 };
    }
    
    let x = 0;
    for (let i = 0; i < currentIndex; i++) {
      x += navRefs.current[i]?.offsetWidth || 0;
    }
    
    const width = navRefs.current[currentIndex]?.offsetWidth || 0;
    return { x, width };
  };

  const { x, width } = getIndicatorProps();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-border">
      <div className="container min-h-[5rem]">
        <div className="flex h-full min-h-[5rem] items-center justify-between px-4 md:px-6">
          {/* Logo / Title */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-foreground">
              <span className="hidden sm:inline">Makergy Project One</span>
              <span className="sm:hidden">Project One</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <LayoutGroup id="header-nav">
              <div 
                className="relative flex items-center"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {navItems.map((item, index) => (
                  <div 
                    key={item.path} 
                    ref={el => navRefs.current[index] = el}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <Link
                      to={item.path}
                      className="relative text-xs font-medium uppercase tracking-widest transition-colors duration-150 px-4 py-2 whitespace-nowrap text-foreground/70 hover:text-foreground inline-block"
                      style={{
                        color: activeIndex === index ? '#fff' : undefined
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                
                {/* Animated indicator */}
                {currentIndex !== -1 && mounted && (
                  <motion.div
                    className="absolute bottom-0 h-0.5 bg-amber-400 pointer-events-none"
                    initial={false}
                    animate={{
                      x,
                      width,
                      opacity: hoveredIndex !== null ? 0.7 : 1
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30
                    }}
                  />
                )}
              </div>
            </LayoutGroup>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors flex-shrink-0"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-accent/15 text-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-card/60'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
