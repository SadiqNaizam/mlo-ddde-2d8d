import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <Cpu className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">
                Aethelred College
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Pioneering the future of technology and engineering.
            </p>
            <p className="text-xs text-muted-foreground">Bangalore, India</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold font-heading text-foreground">Navigate</h4>
              <Link to="/academics-departments" className="text-sm text-muted-foreground hover:text-primary">Academics</Link>
              <Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary">Admissions</Link>
              <Link to="/faculty-directory" className="text-sm text-muted-foreground hover:text-primary">Faculty</Link>
              <Link to="/research-innovation-hub" className="text-sm text-muted-foreground hover:text-primary">Research</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold font-heading text-foreground">Resources</h4>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold font-heading text-foreground">Connect</h4>
              <div className="flex gap-4">
                <Link to="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link to="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link to="#" aria-label="GitHub"><Github className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Aethelred College of Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;