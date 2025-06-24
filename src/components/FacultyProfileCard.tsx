import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FacultyProfileCardProps {
  id: string | number;
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  onClick?: (id: string | number) => void;
}

const getInitials = (name: string) => {
  const names = name.split(' ');
  if (names.length === 0) return '??';
  if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
  return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
};

const FacultyProfileCard: React.FC<FacultyProfileCardProps> = ({
  id,
  name,
  title,
  department,
  imageUrl,
  onClick,
}) => {
  console.log(`FacultyProfileCard loaded for: ${name}`);

  const handleInteraction = () => {
    if (onClick) {
      onClick(id);
    }
    // In a real app, this would likely navigate to the professor's detail page.
    console.log(`Interacted with faculty profile: ${name} (ID: ${id})`);
  };

  return (
    <Card
      className="w-full bg-card text-card-foreground overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
      onClick={handleInteraction}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInteraction()}
      tabIndex={0}
      role="button"
      aria-label={`View profile for ${name}`}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-28 h-28 mb-5 border-4 border-transparent group-hover:border-primary transition-all duration-300">
          <AvatarImage src={imageUrl} alt={`A dignified portrait of ${name}`} />
          <AvatarFallback className="text-3xl font-heading bg-muted text-muted-foreground">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-2xl font-bold font-heading text-foreground">{name}</h3>
        <p className="text-md font-medium text-primary mt-1 font-body">{title}</p>
        <p className="text-sm text-muted-foreground mt-2 font-body">{department}</p>
      </CardContent>
    </Card>
  );
};

export default FacultyProfileCard;