import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Coffee, 
  Car, 
  Shield,
  Eye,
  Heart
} from "lucide-react";

interface HostelCardProps {
  hostel: {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    priceFrom: number;
    currency: string;
    image: string;
    amenities: string[];
    distance?: number;
    featured?: boolean;
  };
  onQuickBook?: () => void;
  className?: string;
}

export function HostelCard({ hostel, onQuickBook, className }: HostelCardProps) {
  const amenityIcons = {
    wifi: Wifi,
    breakfast: Coffee,
    parking: Car,
    security: Shield,
  };

  return (
    <Card className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={hostel.image}
          alt={hostel.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {hostel.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-hero border-0 text-white">
            Tavsiya etiladi
          </Badge>
        )}
        
        {/* Actions */}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Distance */}
        {hostel.distance && (
          <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {hostel.distance} km markazdan
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <Link to={`/hostels/${hostel.id}`}>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">
                {hostel.name}
              </h3>
            </Link>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {hostel.location}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{hostel.rating}</span>
              <span className="text-muted-foreground text-sm">
                ({hostel.reviewCount})
              </span>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex gap-2 mb-3">
          {hostel.amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
            return IconComponent ? (
              <div key={amenity} className="flex items-center text-muted-foreground">
                <IconComponent className="h-3 w-3" />
              </div>
            ) : (
              <Badge key={amenity} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            );
          })}
          {hostel.amenities.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{hostel.amenities.length - 4} ko'proq
            </span>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">
              {hostel.priceFrom.toLocaleString()} {hostel.currency}
            </div>
            <div className="text-sm text-muted-foreground">kecha uchun</div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/hostels/${hostel.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                Ko'rish
              </Link>
            </Button>
            {onQuickBook && (
              <Button variant="booking" size="sm" onClick={onQuickBook}>
                Tez bron
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}