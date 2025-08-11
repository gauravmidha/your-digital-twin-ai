
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  testimonial: string;
}

export const TestimonialCard = ({ name, role, company, avatar, rating, testimonial }: TestimonialProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role} at {company}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  );
};
