import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cpu, Search } from 'lucide-react';
import MegaMenu from '@/components/MegaMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-foreground/80'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground">
              Aethelred College
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Button
              variant="link"
              onClick={() => setIsMenuOpen(true)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:no-underline"
            >
              Academics
            </Button>
            <NavLink to="/admissions" className={navLinkClasses}>
              Admissions
            </NavLink>
            <NavLink to="/faculty-directory" className={navLinkClasses}>
              Faculty
            </NavLink>
            <NavLink to="/research-innovation-hub" className={navLinkClasses}>
              Research
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            {/* A mobile menu button would go here */}
          </div>
        </div>
      </header>
      {isMenuOpen && <MegaMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;