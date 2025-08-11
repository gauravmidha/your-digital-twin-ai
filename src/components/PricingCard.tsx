
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const PricingCard = ({ title, price, period, features, isPopular, ctaText }: PricingProps) => {
  return (
    <Card className={`relative bg-card/50 backdrop-blur-sm border-border ${isPopular ? 'ring-2 ring-primary' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full mt-6" 
          variant={isPopular ? "hero" : "outline"}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};
