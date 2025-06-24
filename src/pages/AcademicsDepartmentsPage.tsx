import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DepartmentCard from '@/components/DepartmentCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Cpu, Atom, FlaskConical, Code, Microscope, BrainCircuit } from 'lucide-react';

const departmentsData = [
  {
    name: "Artificial Intelligence",
    description: "Pioneering intelligent systems, machine learning, and cognitive computing.",
    slug: "ai",
    icon: <BrainCircuit className="w-8 h-8" />,
    flagshipLabs: ["Cognitive Robotics Lab", "NLP Center", "Vision & Perception Group"],
  },
  {
    name: "Computer Science & Engineering",
    description: "Building the digital backbone of tomorrow, from algorithms to cloud infrastructure.",
    slug: "cse",
    icon: <Code className="w-8 h-8" />,
    flagshipLabs: ["High-Performance Computing", "Cybersecurity Nexus", "Distributed Systems Lab"],
  },
  {
    name: "Quantum Physics",
    description: "Exploring the fundamental nature of reality and unlocking new computational paradigms.",
    slug: "quantum",
    icon: <Atom className="w-8 h-8" />,
    flagshipLabs: ["Quantum Entanglement Lab", "Particle Collider Research", "Spacetime Theory Group"],
  },
  {
    name: "Bioengineering & Biotechnology",
    description: "Innovating at the intersection of biology, medicine, and engineering.",
slug: "bio",
    icon: <Microscope className="w-8 h-8" />,
    flagshipLabs: ["Gene-Editing Center", "Synthetic Biology Lab", "Biomechanics Research"],
  },
  {
    name: "Materials Science",
    description: "Designing and discovering novel materials with groundbreaking properties.",
    slug: "materials",
    icon: <Cpu className="w-8 h-8" />,
    flagshipLabs: ["Nanomaterials Synthesis", "Advanced Polymers Lab", "Photovoltaics Center"],
  },
  {
    name: "Chemical Engineering",
    description: "Transforming raw materials into essential products for a sustainable future.",
    slug: "chem",
    icon: <FlaskConical className="w-8 h-8" />,
    flagshipLabs: ["Catalysis & Reaction Eng.", "Sustainable Energy Lab", "Process Systems Design"],
  },
];

const AcademicsDepartmentsPage = () => {
  console.log('Academics & Departments Page loaded');

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 py-8 md:px-6 md:py-16">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Academics & Departments</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Our Academic Disciplines
            </h1>
            <p className="mt-4 max-w-3xl mx-auto font-body text-lg text-muted-foreground">
              Explore the frontiers of knowledge at Aethelred College. Each department is a powerhouse of research, innovation, and academic excellence, dedicated to solving the world's most complex challenges.
            </p>
          </div>

          <section aria-labelledby="departments-heading">
            <h2 id="departments-heading" className="sr-only">
              List of Academic Departments
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {departmentsData.map((dept) => (
                <DepartmentCard
                  key={dept.slug}
                  name={dept.name}
                  description={dept.description}
                  slug={dept.slug}
                  icon={dept.icon}
                  flagshipLabs={dept.flagshipLabs}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsDepartmentsPage;