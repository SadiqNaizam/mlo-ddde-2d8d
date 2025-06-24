import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Cpu, Atom, FlaskConical, Code, Microscope, BrainCircuit } from "lucide-react";

const departments: { name: string; description: string; href: string; icon: React.ElementType }[] = [
  {
    name: "Artificial Intelligence",
    description: "Pioneering intelligent systems, machine learning, and cognitive computing.",
    href: "/academics-departments?dept=ai",
    icon: BrainCircuit,
  },
  {
    name: "Computer Science & Engineering",
    description: "Building the digital backbone of tomorrow, from algorithms to cloud infrastructure.",
    href: "/academics-departments?dept=cse",
    icon: Code,
  },
  {
    name: "Quantum Physics",
    description: "Exploring the fundamental nature of reality and unlocking new computational paradigms.",
    href: "/academics-departments?dept=quantum",
    icon: Atom,
  },
  {
    name: "Bioengineering & Biotechnology",
    description: "Innovating at the intersection of biology, medicine, and engineering.",
    href: "/academics-departments?dept=bio",
    icon: Microscope,
  },
  {
    name: "Materials Science",
    description: "Designing and discovering novel materials with groundbreaking properties.",
    href: "/academics-departments?dept=materials",
    icon: Cpu,
  },
  {
    name: "Chemical Engineering",
    description: "Transforming raw materials into essential products for a sustainable future.",
    href: "/academics-departments?dept=chem",
    icon: FlaskConical,
  },
];

const MegaMenu = () => {
  console.log("MegaMenu loaded");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-transparent hover:bg-accent focus:bg-accent font-medium">
            Academics
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-6 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-2 bg-background">
              <div className="lg:col-span-2">
                <h3 className="font-heading text-xl font-semibold text-primary">
                  Explore Our Departments
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Discover the centers of innovation that drive our institution forward.
                </p>
              </div>
              {departments.map((department) => (
                <ListItem
                  key={department.name}
                  to={department.href}
                  title={department.name}
                  icon={department.icon}
                >
                  {department.description}
                </ListItem>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: React.ElementType, title: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-md">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-heading text-lg font-medium text-foreground">
              {title}
            </div>
            <p className="line-clamp-2 font-body text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MegaMenu;