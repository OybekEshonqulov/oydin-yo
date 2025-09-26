import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Coffee, 
  Car, 
  Shield,
  Heart,
  Share2,
  ChevronLeft,
  Users,
  Bed,
  Clock,
  CheckCircle,
  X,
  Calendar,
  CreditCard
} from "lucide-react";
import hostel1 from "@/assets/hostel-1.jpg";
import hostel2 from "@/assets/hostel-2.jpg";
import hostel3 from "@/assets/hostel-3.jpg";

const HostelDetail = () => {
  const { hostelId } = useParams();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock data for hostel details
  const hostel = {
    id: hostelId,
    name: "Tashkent Central Hostel",
    location: "Toshkent, Yunusobod tumani",
    address: "Amir Temur ko'chasi 15, Toshkent 100084",
    rating: 4.8,
    reviewCount: 245,
    description: "Toshkent markazida joylashgan zamonaviy hostel. Yosh sayohatchilar uchun qulay sharoitlar, hamjihatlik muhiti va shahar diqqatga sazovor joylariga yaqinlik.",
    images: [hostel1, hostel2, hostel3, hostel1],
    amenities: [
      { id: "wifi", icon: Wifi, label: "Bepul Wi-Fi" },
      { id: "breakfast", icon: Coffee, label: "Nonushta" },
      { id: "security", icon: Shield, label: "24/7 xavfsizlik" },
      { id: "parking", icon: Car, label: "Bepul parking" },
    ],
    rooms: [
      {
        id: "1",
        name: "4 kishilik yotoqxona",
        capacity: 4,
        beds: "2 ta ikki qavatli krovat",
        price: 45000,
        available: true,
        amenities: ["Shaxsiy shkaf", "Kitobxonlik chirog'i", "Elektr rozetka"]
      },
      {
        id: "2", 
        name: "6 kishilik yotoqxona",
        capacity: 6,
        beds: "3 ta ikki qavatli krovat",
        price: 38000,
        available: true,
        amenities: ["Shaxsiy shkaf", "Kitobxonlik chirog'i", "USB rozetka"]
      },
      {
        id: "3",
        name: "Shaxsiy xona",
        capacity: 2,
        beds: "1 ta qo'sh krovat",
        price: 95000,
        available: false,
        amenities: ["Shaxsiy hammom", "Televizor", "Muzlatgich"]
      }
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Bepul bekor qilish 24 soat oldin",
      ageLimit: "18+ yoshdagi mehmonlar",
      smoking: "Chekmayotganlar uchun",
      pets: "Uy hayvonlari ruxsat etilmaydi"
    },
    reviews: [
      {
        id: "1",
        author: "Sardor A.",
        rating: 5,
        date: "2024-01-15", 
        comment: "Juda yaxshi hostel! Toza, qulay va xodimlar juda samimiy. Markazda joylashgani ham katta afzallik.",
        helpful: 12
      },
      {
        id: "2",
        author: "Marina K.",
        rating: 4,
        date: "2024-01-10",
        comment: "Yaxshi joy, lekin kechasi biroz shovqinli. Umumiy oshxona juda qulay.",
        helpful: 8
      }
    ]
  };

  const handleBookRoom = (roomId: string) => {
    // In real app, this would navigate to booking flow
    console.log("Booking room:", roomId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Bosh sahifa</Link>
            <span>/</span>
            <Link to="/search" className="hover:text-foreground">Qidiruv</Link>
            <span>/</span>
            <span className="text-foreground">{hostel.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{hostel.name}</h1>
              <Badge variant="secondary" className="bg-gradient-hero text-white border-0">
                Tavsiya etiladi
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-foreground">{hostel.rating}</span>
                <span>({hostel.reviewCount} sharh)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{hostel.location}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">{hostel.address}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 h-96">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg">
            <img 
              src={hostel.images[currentImageIndex]}
              alt="Hostel main image"
              className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setCurrentImageIndex(0)}
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-2">
            {hostel.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img 
                  src={image}
                  alt={`Hostel image ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setCurrentImageIndex(index + 1)}
                />
                {index === 3 && hostel.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                    +{hostel.images.length - 4} ko'proq
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Umumiy</TabsTrigger>
                <TabsTrigger value="rooms">Xonalar</TabsTrigger>
                <TabsTrigger value="reviews">Sharhlar</TabsTrigger>
                <TabsTrigger value="policies">Qoidalar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tavsif</h3>
                  <p className="text-muted-foreground leading-relaxed">{hostel.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Qulayliklar</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {hostel.amenities.map((amenity) => (
                      <div key={amenity.id} className="flex items-center gap-2">
                        <amenity.icon className="h-5 w-5 text-primary" />
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rooms" className="space-y-4">
                {hostel.rooms.map((room) => (
                  <Card key={room.id} className={`${selectedRoom === room.id ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{room.name}</h4>
                          <div className="flex items-center gap-4 text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{room.capacity} kishi</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bed className="h-4 w-4" />
                              <span>{room.beds}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {room.amenities.map((amenity, index) => (
                              <Badge key={index} variant="secondary">{amenity}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {room.price.toLocaleString()} UZS
                          </div>
                          <div className="text-sm text-muted-foreground mb-3">kecha uchun</div>
                          
                          {room.available ? (
                            <Button 
                              variant="booking"
                              onClick={() => handleBookRoom(room.id)}
                              className="w-full"
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              Bron qilish
                            </Button>
                          ) : (
                            <Button variant="outline" disabled className="w-full">
                              <X className="h-4 w-4 mr-2" />
                              Band
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Mehmon sharhlari</h3>
                  <Button variant="outline">Sharh yozish</Button>
                </div>
                
                {hostel.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.author}</div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{review.comment}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Foydali ({review.helpful})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="policies" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Kirish/Chiqish
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Kirish vaqti:</span>
                          <span className="font-medium">{hostel.policies.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Chiqish vaqti:</span>
                          <span className="font-medium">{hostel.policies.checkOut}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <X className="h-4 w-4 mr-2" />
                        Bekor qilish
                      </h4>
                      <p className="text-sm text-muted-foreground">{hostel.policies.cancellation}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">Qoidalar</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {hostel.policies.ageLimit}</li>
                        <li>• {hostel.policies.smoking}</li>
                        <li>• {hostel.policies.pets}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">
                    45,000 UZS
                  </div>
                  <div className="text-muted-foreground">kecha uchun</div>
                </div>
                
                <Button variant="booking" size="lg" className="w-full mb-4">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Hoziroq bron qilish
                </Button>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Baza narxi:</span>
                    <span>45,000 UZS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Xizmat haqi:</span>
                    <span>2,250 UZS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soliq:</span>
                    <span>4,725 UZS</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Jami:</span>
                    <span>51,975 UZS</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Bron qilishdan oldin to'lov talab qilinmaydi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;