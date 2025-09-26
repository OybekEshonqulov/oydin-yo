import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Calendar, 
  MapPin, 
  Star, 
  CreditCard,
  Heart,
  Settings,
  LogOut,
  Eye,
  Download,
  X
} from "lucide-react";

export default function Profile() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+998 90 123 45 67",
    joinDate: "2024-01-15",
    totalBookings: 12,
    favoriteHostels: 5
  });

  const [bookings] = useState([
    {
      id: "1",
      hostelName: "Comfort Hostel Tashkent",
      location: "Toshkent, Chilonzor",
      checkIn: "2024-10-15",
      checkOut: "2024-10-17",
      guests: 2,
      status: "confirmed",
      totalPrice: 120000,
      image: "/src/assets/hostel-1.jpg"
    },
    {
      id: "2", 
      hostelName: "Budget Stay Samarkand",
      location: "Samarqand, Registon",
      checkIn: "2024-09-20",
      checkOut: "2024-09-22", 
      guests: 1,
      status: "completed",
      totalPrice: 85000,
      image: "/src/assets/hostel-2.jpg"
    }
  ]);

  const [favorites] = useState([
    {
      id: "1",
      name: "Luxury Hostel Bukhara",
      location: "Buxoro, Eski Shahar",
      rating: 4.8,
      priceFrom: 45000,
      image: "/src/assets/hostel-3.jpg"
    },
    {
      id: "2",
      name: "Comfort Hostel Tashkent", 
      location: "Toshkent, Yunusobod",
      rating: 4.6,
      priceFrom: 35000,
      image: "/src/assets/hostel-1.jpg"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "completed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "cancelled": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Tasdiqlangan";
      case "completed": return "Tugallangan";
      case "cancelled": return "Bekor qilingan";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>A'zo bo'lgan: {new Date(user.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.totalBookings} ta bron</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span>{user.favoriteHostels} ta sevimli</span>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Sozlamalar
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Chiqish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="bookings" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bookings">Bronlarim</TabsTrigger>
                <TabsTrigger value="favorites">Sevimlilar</TabsTrigger>
                <TabsTrigger value="payments">To'lovlar</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mening bronlarim</h2>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4">
                            <img
                              src={booking.image}
                              alt={booking.hostelName}
                              className="w-full md:w-32 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-lg">{booking.hostelName}</h3>
                                <Badge className={getStatusColor(booking.status)}>
                                  {getStatusText(booking.status)}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-2">{booking.location}</p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Kirish:</span>
                                  <p>{new Date(booking.checkIn).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Chiqish:</span>
                                  <p>{new Date(booking.checkOut).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Mehmonlar:</span>
                                  <p>{booking.guests} kishi</p>
                                </div>
                                <div>
                                  <span className="font-medium">Jami:</span>
                                  <p className="font-semibold">{booking.totalPrice.toLocaleString()} so'm</p>
                                </div>
                              </div>
                              <div className="flex gap-2 mt-4">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-1" />
                                  Tafsilotlar
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-1" />
                                  Kvitansiya
                                </Button>
                                {booking.status === "confirmed" && (
                                  <Button variant="outline" size="sm" className="text-destructive">
                                    <X className="h-4 w-4 mr-1" />
                                    Bekor qilish
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Sevimli hostellar</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favorites.map((hostel) => (
                      <Card key={hostel.id} className="overflow-hidden">
                        <div className="relative">
                          <img
                            src={hostel.image}
                            alt={hostel.name}
                            className="w-full h-48 object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1">{hostel.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{hostel.location}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{hostel.rating}</span>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">dan</p>
                              <p className="font-semibold">{hostel.priceFrom.toLocaleString()} so'm</p>
                            </div>
                          </div>
                          <Link to={`/hostels/${hostel.id}`}>
                            <Button className="w-full mt-3" size="sm">
                              Ko'rish
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="payments" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">To'lov tarixi</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {bookings.map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                                <CreditCard className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium">{booking.hostelName}</p>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(booking.checkIn).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">{booking.totalPrice.toLocaleString()} so'm</p>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status === "completed" ? "To'langan" : "Kutilmoqda"}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}