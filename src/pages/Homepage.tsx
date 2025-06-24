import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import InteractiveBuildingShowcase from '@/components/InteractiveBuildingShowcase';
import DepartmentCard from '@/components/DepartmentCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons
import { ArrowRight, BrainCircuit, Atom, Code, Award, Users, Network } from 'lucide-react';

// Placeholder data for featured departments
const featuredDepartments = [
  {
    name: "Artificial Intelligence",
    icon: <BrainCircuit className="h-8 w-8" />,
    description: "Pioneering the frontiers of machine cognition, deep learning, and autonomous systems to solve tomorrow's grand challenges.",
    flagshipLabs: ["Cognitive Robotics Lab", "Neural Architecture Group", "Human-AI Interaction Center"],
    slug: "ai"
  },
  {
    name: "Quantum Computing",
    icon: <Atom className="h-8 w-8" />,
    description: "Exploring the fundamental fabric of reality to build the next paradigm of computational power and secure communication.",
    flagshipLabs: ["Quantum Supremacy Initiative", "Entanglement Research", "Cryogenic Systems Lab"],
    slug: "quantum"
  },
  {
    name: "Computer Science & Engineering",
    icon: <Code className="h-8 w-8" />,
    description: "Engineering the digital backbone of the modern world, from high-performance computing to decentralized networks.",
    flagshipLabs: ["Algorithms & Complexity Group", "Cybersecurity Center", "Distributed Systems Lab"],
    slug: "cse"
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-8 md:pt-12">
          <InteractiveBuildingShowcase />
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            Engineering the Future, Today.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto"
          >
            Aethelred College is a beacon of innovation, where the brightest minds converge to push the boundaries of technology and create a better world.
          </motion.p>
        </section>

        {/* Featured Departments Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Explore Our Core Disciplines</h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Dive into the research centers and departments that form the bedrock of our academic excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredDepartments.map((dept, index) => (
                 <motion.div
                    key={dept.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                 >
                    <DepartmentCard
                      name={dept.name}
                      icon={dept.icon}
                      description={dept.description}
                      flagshipLabs={dept.flagshipLabs}
                      slug={dept.slug}
                    />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/academics-departments">
                  View All Departments <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* "Why Choose Us?" Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">The Aethelred Advantage</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <Card className="text-center bg-card border-border p-4">
                        <CardHeader>
                            <Award className="h-12 w-12 mx-auto text-primary" />
                            <CardTitle className="font-heading text-2xl mt-4">World-Class Faculty</CardTitle>
                        </CardHeader>
                        <CardContent className="font-body text-muted-foreground">
                            Learn from Turing Award laureates, industry pioneers, and leading researchers shaping global technology.
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-card border-border p-4">
                        <CardHeader>
                           <Network className="h-12 w-12 mx-auto text-primary" />
                            <CardTitle className="font-heading text-2xl mt-4">Groundbreaking Research</CardTitle>
                        </CardHeader>
                        <CardContent className="font-body text-muted-foreground">
                            Engage in research that matters, with access to state-of-the-art labs and billions in research funding.
                        </CardContent>
                    </Card>
                    <Card className="text-center bg-card border-border p-4">
                        <CardHeader>
                            <Users className="h-12 w-12 mx-auto text-primary" />
                            <CardTitle className="font-heading text-2xl mt-4">A Global Network</CardTitle>
                        </CardHeader>
                        <CardContent className="font-body text-muted-foreground">
                            Join an elite network of alumni leading innovation at the world's most influential companies and startups.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50">
            <div className="container mx-auto px-4 py-16 md:py-20 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Ready to Build the Future?</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                    Your journey to becoming a leader in technology and engineering starts here. Explore our admissions process and begin your application.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link to="/admissions">
                        Apply Now
                    </Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;