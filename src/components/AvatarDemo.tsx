
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Pause, Mic, MicOff, Video, VideoOff } from "lucide-react";

export const AvatarDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Avatar Video Preview */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              {isVideoOn ? (
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder.svg" alt="AI Avatar" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">AI</AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                  <VideoOff className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
            </div>
            
            {/* Demo Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
              <Button
                size="sm"
                variant={isPlaying ? "secondary" : "default"}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant={isMuted ? "destructive" : "secondary"}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant={isVideoOn ? "secondary" : "destructive"}
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Demo Chat */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Live Demo Conversation</h4>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium text-accent">Meeting Host</p>
                <p className="text-sm mt-1">"Can you walk us through the Q3 marketing strategy?"</p>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-3 ml-4">
                <p className="text-sm font-medium text-primary">Your AI Avatar</p>
                <p className="text-sm mt-1">
                  "Absolutely! Based on our data analysis, I've identified three key focus areas for Q3. 
                  First, we're expanding our digital presence with a 40% increase in social media engagement..."
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium text-accent">Team Member</p>
                <p className="text-sm mt-1">"What's our projected ROI for the new campaigns?"</p>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-3 ml-4">
                <p className="text-sm font-medium text-primary">Your AI Avatar</p>
                <p className="text-sm mt-1">
                  "Great question! Our models predict a 23% ROI increase, with the highest returns 
                  coming from our LinkedIn and video content strategies..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
