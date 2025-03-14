import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export interface HeaderProps {
  title?: string
  className?: string
}

export function Header({ title = "Ali Cebe", className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4",
      className
    )}>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto flex items-center justify-between">
        <motion.h1 
          className="text-xl font-bold text-primary"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <nav>
          <motion.ul 
            className="flex items-center space-x-1 md:space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) }}
              >
                <a 
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link 
                to="/cover-letter" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Cover Letter
              </Link>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Link 
                to="/capstone" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Capstone
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}
