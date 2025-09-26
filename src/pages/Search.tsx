import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/search/SearchBar";
import { HostelCard } from "@/components/hostel/HostelCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  SlidersHorizontal, 
  MapPin, 
  Star,
  Filter,
  X,
  ChevronDown
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import hostel1 from "@/assets/hostel-1.jpg";
import hostel2 from "@/assets/hostel-2.jpg";
import hostel3 from "@/assets/hostel-3.jpg";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([20000, 100000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("price");
  const [showFilters, setShowFilters] = useState(false);

  // Mock search results
  const searchResults = [
    {
      id: "1",
      name: "Tashkent Central Hostel",
      location: "Toshkent, Yunusobod",
      rating: 4.8,
      reviewCount: 245,
      priceFrom: 45000,
      currency: "UZS",
      image: hostel1,
      amenities: ["wifi", "breakfast", "security", "parking"],
      distance: 2.3,
      featured: true,
    },
    {
      id: "2", 
      name: "Samarkand Travelers Inn",
      location: "Samarqand, Registon yaqinida",
      rating: 4.7,
      reviewCount: 189,
      priceFrom: 38000,
      currency: "UZS",
      image: hostel2,
      amenities: ["wifi", "breakfast", "security"],
      distance: 1.8,
      featured: true,
    },
    {
      id: "3",
      name: "Bukhara Heritage Hostel", 
      location: "Buxoro, Eski shahar",
      rating: 4.9,
      reviewCount: 167,
      priceFrom: 42000,
      currency: "UZS",
      image: hostel3,
      amenities: ["wifi", "breakfast", "security", "parking"],
      distance: 0.5,
      featured: true,
    },
  ];

  const amenities = [
    { id: "wifi", label: "Wi-Fi", count: 125 },
    { id: "breakfast", label: "Nonushta", count: 89 },
    { id: "security", label: "Xavfsizlik", count: 156 },
    { id: "parking", label: "Parking", count: 67 },
    { id: "kitchen", label: "Oshxona", count: 78 },
    { id: "laundry", label: "Kir yuvish", count: 45 },
  ];

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenityId)
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRating(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearFilters = () => {
    setPriceRange([20000, 100000]);
    setSelectedAmenities([]);
    setSelectedRating([]);
  };

  const activeFiltersCount = selectedAmenities.length + selectedRating.length + 
    (priceRange[0] > 20000 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Search Header */}
      <div className="border-b bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <SearchBar variant="compact" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              {searchParams.get("city") || "Barcha shaharlar"}da hostellar
            </h1>
            <p className="text-muted-foreground">
              {searchResults.length} ta hostel topildi
            </p>
          </div>
          
          <div className="flex gap-2">
            {/* Mobile Filter Toggle */}
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtr
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
            
            {/* Sort Dropdown */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="price">Narx bo'yicha</option>
              <option value="rating">Reyting bo'yicha</option>
              <option value="distance">Masofa bo'yicha</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className={`w-80 space-y-6 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtrlar
                  </h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="h-4 w-4 mr-1" />
                      Tozalash
                    </Button>
                  )}
                </div>

                {/* Price Range */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                    <span className="font-medium">Narx diapazoni</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={150000}
                      min={10000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0].toLocaleString()} UZS</span>
                      <span>{priceRange[1].toLocaleString()} UZS</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <hr className="my-4" />

                {/* Rating Filter */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                    <span className="font-medium">Reyting</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <Label key={rating} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={selectedRating.includes(rating)}
                          onCheckedChange={() => toggleRating(rating)}
                        />
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{rating}+ va yuqori</span>
                        </div>
                      </Label>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <hr className="my-4" />

                {/* Amenities Filter */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                    <span className="font-medium">Qulayliklar</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    {amenities.map((amenity) => (
                      <Label key={amenity.id} className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={selectedAmenities.includes(amenity.id)}
                            onCheckedChange={() => toggleAmenity(amenity.id)}
                          />
                          <span>{amenity.label}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({amenity.count})</span>
                      </Label>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </aside>

          {/* Results Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {searchResults.map((hostel) => (
                <HostelCard 
                  key={hostel.id} 
                  hostel={hostel}
                  onQuickBook={() => console.log("Quick book:", hostel.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Oldingi</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Keyingi</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Search;