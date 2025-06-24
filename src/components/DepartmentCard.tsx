import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

/**
 * Props for the DepartmentCard component.
 * @param name - The name of the department.
 * @param icon - A ReactNode, typically a lucide-react icon, representing the department.
 * @param description - A short description of the department.
 * @param flagshipLabs - An array of strings listing key labs or research centers.
 * @param slug - A URL-friendly string for linking (e.g., 'computer-science').
 */
interface DepartmentCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  flagshipLabs: string[];
  slug: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  name,
  icon,
  description,
  flagshipLabs,
  slug,
}) => {
  console.log(`DepartmentCard loaded for: ${name}`);

  // Animation variants for the card lifting and glowing on hover.
  const cardVariants = {
    initial: { y: 0 },
    hover: {
      y: -8,
      boxShadow: "0px 10px 30px -5px hsl(var(--primary) / 0.2)",
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="h-full"
    >
      <Link 
        to={`/academics-departments#${slug}`} 
        className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
        aria-label={`Learn more about the ${name} department`}
      >
        <Card className="bg-card text-card-foreground border-border h-full flex flex-col transition-colors duration-300 overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <CardTitle className="font-heading text-xl md:text-2xl text-card-foreground">
                  {name}
                </CardTitle>
                <p className="font-body text-muted-foreground mt-2 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-grow pt-2">
            <div className="space-y-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="font-heading text-sm font-semibold text-foreground tracking-wider uppercase">
                Flagship Labs
              </h4>
              <div className="flex flex-wrap gap-2">
                {flagshipLabs.map((lab) => (
                  <Badge 
                    key={lab} 
                    variant="secondary" 
                    className="font-body border-transparent bg-accent text-accent-foreground group-hover:bg-primary/20 group-hover:text-primary-foreground transition-colors"
                  >
                    {lab}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          
          <div className="p-6 pt-4 mt-auto">
             <div className="text-primary font-semibold flex items-center text-sm">
                <span>Explore Department</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default DepartmentCard;