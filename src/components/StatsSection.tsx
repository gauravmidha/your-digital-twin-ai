
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "95%", label: "Meeting Attendance Rate" },
  { value: "3.2x", label: "Productivity Increase" },
  { value: "24/7", label: "Availability" },
  { value: "12+", label: "Languages Supported" },
];

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card/30 backdrop-blur-sm border-border">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
