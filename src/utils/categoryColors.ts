// Define vibrant colors for each category
export const categoryColors: Record<string, { hsl: string; rgb: string; hex: string }> = {
  // Growth-related (Purple/Violet family)
  "Growth": { 
    hsl: "280, 85%, 60%",
    rgb: "178, 102, 255",
    hex: "#b266ff"
  },
  "Growth Hormone": { 
    hsl: "270, 85%, 65%",
    rgb: "153, 85, 255",
    hex: "#9955ff"
  },
  
  // Mind/Brain (Orange/Amber family)
  "Cognitive": { 
    hsl: "35, 90%, 50%",
    rgb: "242, 153, 13",
    hex: "#f2990d"
  },
  "Nootropic": { 
    hsl: "25, 85%, 55%",
    rgb: "238, 119, 43",
    hex: "#ee772b"
  },
  
  // Body/Physical (Green family)
  "Healing": { 
    hsl: "145, 75%, 45%",
    rgb: "29, 201, 101",
    hex: "#1dc965"
  },
  "Weight Loss": {
    hsl: "155, 70%, 50%",
    rgb: "38, 217, 127",
    hex: "#26d97f"
  },
  
  // Hormonal/Anti-Aging (Pink/Rose family)
  "Anti-Aging": { 
    hsl: "350, 85%, 60%",
    rgb: "240, 66, 97",
    hex: "#f04261"
  },
  "Hormonal": { 
    hsl: "340, 80%, 55%",
    rgb: "217, 63, 107",
    hex: "#d93f6b"
  },
  
  // Sleep/Rest (Blue/Indigo family)
  "Sleep": { 
    hsl: "250, 85%, 65%",
    rgb: "115, 89, 242",
    hex: "#7359f2"
  },
  "Research": { 
    hsl: "220, 85%, 60%",
    rgb: "51, 119, 255",
    hex: "#3377ff"
  },
  
  // Other unique categories
  "Tanning": { 
    hsl: "20, 80%, 45%",
    rgb: "207, 92, 23",
    hex: "#cf5c17"
  },
  
  // Meta category
  "Popular": {
    hsl: "195, 90%, 50%",
    rgb: "13, 183, 242",
    hex: "#0db7f2"
  },
  
  "All": {
    hsl: "0, 0%, 50%",
    rgb: "128, 128, 128",
    hex: "#808080"
  }
};

// Get color for a category with fallback
export const getCategoryColor = (category: string): string => {
  const color = categoryColors[category] || categoryColors["All"];
  return color.hex;
};

// Create a gradient from multiple categories
export const createCategoryGradient = (
  primaryCategory: string,
  secondaryCategories: string[] = [],
  theme: 'light' | 'dark' = 'light'
): string => {
  const primary = categoryColors[primaryCategory] || categoryColors["All"];
  
  if (secondaryCategories.length === 0) {
    const opacity1 = theme === 'dark' ? 0.25 : 0.20;
    const opacity2 = theme === 'dark' ? 0.15 : 0.10;
    return `linear-gradient(to bottom, 
      rgba(${primary.rgb}, ${opacity1}) 0%, 
      rgba(${primary.rgb}, ${opacity2}) 100%)`;
  }
  
  const secondary = secondaryCategories.map(cat => categoryColors[cat] || categoryColors["All"]);
  const topOpacity1 = theme === 'dark' ? 0.30 : 0.25;
  const topOpacity2 = theme === 'dark' ? 0.20 : 0.15;
  const bottomOpacity = theme === 'dark' ? 0.18 : 0.12;
  
  if (secondary.length === 1) {
    return `linear-gradient(to bottom,
      rgba(${primary.rgb}, ${topOpacity1}) 0%,
      rgba(${primary.rgb}, ${topOpacity2}) 50%,
      rgba(${secondary[0].rgb}, ${bottomOpacity}) 50%,
      rgba(${secondary[0].rgb}, ${bottomOpacity * 0.7}) 100%)`;
  }
  
  const gradientStops = [
    `rgba(${primary.rgb}, ${topOpacity1}) 0%`,
    `rgba(${primary.rgb}, ${topOpacity2}) 50%`,
  ];
  
  secondary.forEach((color, index) => {
    const percent = 50 + (50 * (index / secondary.length));
    gradientStops.push(`rgba(${color.rgb}, ${bottomOpacity}) ${percent}%`);
  });
  
  return `linear-gradient(180deg, ${gradientStops.join(', ')})`;
};