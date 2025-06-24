import React from 'react';
import { MousePointer2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const InteractiveBuildingShowcase: React.FC = () => {
  console.log('InteractiveBuildingShowcase loaded');

  // Pulsing dot component to represent data nodes
  const DataNode = ({ top, left, delay = '0ms', size = 'w-3 h-3' }: { top: string, left: string, delay?: string, size?: string }) => (
    <div className="absolute" style={{ top, left }}>
      <div 
        className={`absolute ${size} rounded-full bg-primary/80 animate-ping`} 
        style={{ animationDelay: delay }}
      />
      <div className={`absolute ${size} rounded-full bg-primary`} />
    </div>
  );

  return (
    <section aria-label="Interactive Campus Building Showcase">
      <Card className="relative w-full aspect-[16/8] bg-background overflow-hidden rounded-lg shadow-2xl group border-2 border-border">
        {/* Background Image: A generic, futuristic building */}
        <img
          src="https://images.unsplash.com/photo-1579548122204-cde5e6838a7b?q=80&w=2070&auto=format&fit=crop"
          alt="AI & Robotics Center Building"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Gradient Overlay for better text visibility and atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />


        {/* Animated Data Flow Elements */}
        <div className="absolute inset-0">
          <DataNode top="40%" left="55%" />
          <DataNode top="65%" left="30%" delay="300ms" size="w-2 h-2" />
          <DataNode top="50%" left="75%" delay="600ms" />
          <DataNode top="80%" left="60%" delay="900ms" size="w-2 h-2" />
        </div>

        {/* Text Content */}
        <div className="absolute top-0 left-0 p-6 md:p-8 text-white">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">
            Nexus of Innovation
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-md drop-shadow-md">
            Our campus architecture reflects our commitment to pioneering the future of technology and research.
          </p>
        </div>

        {/* Interactive Hint */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 text-sm text-foreground bg-background/70 p-3 rounded-md backdrop-blur-sm shadow-lg transition-opacity opacity-0 group-hover:opacity-100">
          <MousePointer2 className="h-5 w-5 text-primary" />
          <span className="font-body">Drag to explore the model</span>
        </div>
      </Card>
    </section>
  );
};

export default InteractiveBuildingShowcase;