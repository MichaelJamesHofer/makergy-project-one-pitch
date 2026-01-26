import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const navContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [indicatorProps, setIndicatorProps] = React.useState({ x: 0, width: 0 });
  const retryCountRef = React.useRef(0);

  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/executive-summary', label: 'Project Summary' },
    { path: '/financial-projections', label: 'Budget & Returns' },
    { path: '/products-services', label: 'Design & Scope' },
    { path: '/community-design-guide', label: 'Community Design Guide' },
    { path: '/funding-request', label: 'Investment Terms' },
    { path: '/developer-terms', label: 'Developer Terms' },
  ];

  const activeIndex = navItems.findIndex(item => item.path === location.pathname);

  // Calculate position and width for the indicator
  const calculateIndicatorProps = React.useCallback(() => {
    const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    
    if (currentIndex === -1) {
      setIndicatorProps({ x: 0, width: 0 });
      retryCountRef.current = 0;
      return;
    }
    
    // Get the container and current element
    const container = navContainerRef.current;
    const currentRef = navRefs.current[currentIndex];
    
    if (!container || !currentRef) {
      // If refs not ready, try again (with limit)
      if (retryCountRef.current < 20) {
        retryCountRef.current++;
        setTimeout(() => calculateIndicatorProps(), 50);
      }
      return;
    }

    // Get container position for relative calculations
    const containerRect = container.getBoundingClientRect();
    const currentRect = currentRef.getBoundingClientRect();
    
    // Calculate x position relative to container
    let x = currentRect.left - containerRect.left;
    const width = currentRect.width;
    
    if (width === 0 || !isFinite(width) || !isFinite(x)) {
      // Width/position not ready yet, try again (with limit)
      if (retryCountRef.current < 20) {
        retryCountRef.current++;
        setTimeout(() => calculateIndicatorProps(), 50);
      }
      return;
    }
    
    // Reset retry count on success
    retryCountRef.current = 0;
    
    // Get the actual visible width of the container (accounting for overflow)
    const containerVisibleWidth = container.offsetWidth || containerRect.width;
    
    // Clamp x to ensure indicator stays within visible bounds
    // If the item is partially or fully outside, clamp it
    const maxX = Math.max(0, containerVisibleWidth - width);
    const clampedX = Math.max(0, Math.min(x, maxX));
    
    // Also clamp width if it would overflow
    const clampedWidth = Math.min(width, containerVisibleWidth - clampedX);
    
    // Only update if we have valid values
    if (clampedWidth > 0 && isFinite(clampedWidth) && clampedX >= 0 && isFinite(clampedX)) {
      setIndicatorProps({ x: clampedX, width: clampedWidth });
    }
  }, [hoveredIndex, activeIndex]);

  // Update indicator on mount, hover, or active change
  React.useEffect(() => {
    calculateIndicatorProps();
  }, [calculateIndicatorProps]);

  // Handle window resize and use ResizeObserver for accurate width detection
  React.useEffect(() => {
    setMounted(true);
    
    // Initial calculation after DOM is ready
    const initCalculation = () => {
      requestAnimationFrame(() => {
        calculateIndicatorProps();
      });
    };

    // Try multiple times to catch font loading and layout
    const timeout1 = setTimeout(initCalculation, 100);
    const timeout2 = setTimeout(initCalculation, 300);
    const timeout3 = setTimeout(initCalculation, 500);

    // Window resize handler with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          calculateIndicatorProps();
        });
      }, 50);
    };
    window.addEventListener('resize', handleResize);

    // Also recalculate when fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          calculateIndicatorProps();
        });
      });
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateIndicatorProps]);

  // Set up ResizeObserver for each nav item after refs are populated
  React.useEffect(() => {
    if (!mounted) return;

    let observers: ResizeObserver[] = [];
    let setupTimeout: NodeJS.Timeout;

    const setupObservers = () => {
      // Clean up any existing observers
      observers.forEach(observer => observer.disconnect());
      observers = [];

      // Set up observers for all refs that exist
      navRefs.current.forEach((ref) => {
        if (ref) {
          const observer = new ResizeObserver(() => {
            // Use requestAnimationFrame to ensure layout is complete
            requestAnimationFrame(() => {
              calculateIndicatorProps();
            });
          });
          observer.observe(ref);
          observers.push(observer);
        }
      });

      // Force a recalculation after observers are set up
      requestAnimationFrame(() => {
        calculateIndicatorProps();
      });
    };

    // Initial setup - try multiple times to catch all refs
    setupTimeout = setTimeout(() => {
      setupObservers();
      // Also set up again after a delay to catch any late refs
      setTimeout(setupObservers, 200);
      setTimeout(setupObservers, 500);
    }, 100);

    return () => {
      clearTimeout(setupTimeout);
      observers.forEach(observer => observer.disconnect());
    };
  }, [mounted, calculateIndicatorProps]);

  const { x, width } = indicatorProps;

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
          
          {/* Desktop Navigation - Only show on very large screens */}
          <nav className="hidden xl:flex items-center flex-1 justify-end min-w-0">
            <LayoutGroup id="header-nav">
              <div 
                ref={navContainerRef}
                className="relative flex items-center"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {navItems.map((item, index) => (
                  <div 
                    key={item.path} 
                    ref={el => {
                      if (navRefs.current[index] !== el) {
                        navRefs.current[index] = el;
                        // Trigger calculation when ref is set or updated
                        if (el && mounted) {
                          requestAnimationFrame(() => {
                            calculateIndicatorProps();
                          });
                        }
                      }
                    }}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <Link
                      to={item.path}
                      className="relative text-xs font-medium uppercase tracking-widest transition-colors duration-150 px-3 xl:px-4 py-2 whitespace-nowrap text-foreground/70 hover:text-foreground inline-block"
                      style={{
                        color: activeIndex === index ? '#fff' : undefined
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                
                {/* Animated indicator */}
                {activeIndex !== -1 && mounted && width > 0 && (
                  <motion.div
                    className="absolute bottom-0 h-0.5 bg-amber-400 pointer-events-none z-10"
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
          
          {/* Mobile/Tablet Navigation - Show menu button on screens smaller than xl */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-foreground/70 hover:text-foreground transition-colors flex-shrink-0"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
          
        </div>
      </div>
      
      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="xl:hidden bg-background border-t border-border"
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
