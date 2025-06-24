import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PublicationListItemProps {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  url: string;
  className?: string;
}

const PublicationListItem: React.FC<PublicationListItemProps> = ({
  title,
  authors,
  venue,
  date,
  url,
  className,
}) => {
  console.log('PublicationListItem loaded for:', title);

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-b',
        className
      )}
    >
      <div className="flex-grow">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={`Read paper: ${title}`}
        >
          <h4 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
        </a>
        <p className="font-body text-sm text-muted-foreground mt-1">
          {authors.join(', ')}
        </p>
        <p className="font-body text-sm text-muted-foreground/80 mt-1">
          <em>{venue}</em>, {date}
        </p>
      </div>
      <div className="flex-shrink-0 mt-2 sm:mt-0">
        <Button asChild variant="outline" size="sm">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PublicationListItem;