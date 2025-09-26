import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Search, 
  MapPin, 
  Calendar as CalendarIcon, 
  Users 
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  variant?: "hero" | "compact";
  className?: string;
}

export function SearchBar({ variant = "hero", className }: SearchBarProps) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("city", destination);
    if (checkIn) params.set("from", format(checkIn, "yyyy-MM-dd"));
    if (checkOut) params.set("to", format(checkOut, "yyyy-MM-dd"));
    if (guests > 1) params.set("guests", guests.toString());

    navigate(`/search?${params.toString()}`);
  };

  const isHero = variant === "hero";

  return (
    <Card className={cn(
      "w-full max-w-4xl mx-auto p-6 shadow-medium bg-card/95 backdrop-blur-sm border-border/50",
      isHero && "bg-white/10 border-white/20 text-white",
      className
    )}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Destination */}
        <div className="space-y-2">
          <Label className={cn("text-sm font-medium", isHero && "text-white/90")}>
            Manzil
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Shahar yoki hostel nomi"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={cn(
                "pl-10 h-12",
                isHero && "bg-white/10 border-white/20 text-white placeholder:text-white/70"
              )}
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div className="space-y-2">
          <Label className={cn("text-sm font-medium", isHero && "text-white/90")}>
            Kirish sanasi
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground",
                  isHero && "bg-white/10 border-white/20 text-white hover:bg-white/20"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "dd/MM/yyyy") : "Sanani tanlang"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out Date */}
        <div className="space-y-2">
          <Label className={cn("text-sm font-medium", isHero && "text-white/90")}>
            Chiqish sanasi
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground",
                  isHero && "bg-white/10 border-white/20 text-white hover:bg-white/20"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "dd/MM/yyyy") : "Sanani tanlang"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => date < (checkIn || new Date())}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests and Search */}
        <div className="space-y-2">
          <Label className={cn("text-sm font-medium", isHero && "text-white/90")}>
            Mehmonlar
          </Label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className={cn(
                  "pl-10 h-12",
                  isHero && "bg-white/10 border-white/20 text-white"
                )}
              />
            </div>
            <Button 
              variant={isHero ? "hero" : "booking"} 
              size="lg"
              onClick={handleSearch}
              className="h-12 px-6"
            >
              <Search className="h-4 w-4 mr-2" />
              Qidirish
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}