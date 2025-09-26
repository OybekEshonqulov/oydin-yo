import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  Users,
  Plus,
  Eye,
  Edit,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

export default function OwnerDashboard() {
  const [stats] = useState({
    totalRevenue: 2500000,
    totalBookings: 45,
    occupancyRate: 78,
    activeHostels: 3
  });

  const [hostels] = useState([
    {
      id: "1",
      name: "Comfort Hostel Tashkent",
      location: "Toshkent, Chilonzor",
      status: "active",
      rooms: 12,
      occupancy: 85,
      monthlyRevenue: 1200000,
      image: "/src/assets/hostel-1.jpg"
    },
    {
      id: "2",
      name: "Budget Stay Center",
      location: "Toshkent, Mirobod",
      status: "pending",
      rooms: 8,
      occupancy: 0,
      monthlyRevenue: 0,
      image: "/src/assets/hostel-2.jpg"
    },
    {
      id: "3",
      name: "Luxury Hostel Samarkand",
      location: "Samarqand, Registon",
      status: "active",
      rooms: 15,
      occupancy: 72,
      monthlyRevenue: 1300000,
      image: "/src/assets/hostel-3.jpg"
    }
  ]);

  const [bookings] = useState([
    {
      id: "1",
      guestName: "John Doe",
      hostelName: "Comfort Hostel Tashkent",
      checkIn: "2024-10-15",
      checkOut: "2024-10-17",
      guests: 2,
      status: "pending",
      amount: 120000
    },
    {
      id: "2",
      guestName: "Sarah Wilson",
      hostelName: "Luxury Hostel Samarkand",
      checkIn: "2024-10-20",
      checkOut: "2024-10-23",
      guests: 1,
      status: "confirmed",
      amount: 180000
    },
    {
      id: "3",
      guestName: "Mike Johnson",
      hostelName: "Comfort Hostel Tashkent",
      checkIn: "2024-10-10",
      checkOut: "2024-10-12",
      guests: 3,
      status: "completed",
      amount: 150000
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "confirmed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "completed": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Faol";
      case "pending": return "Kutilmoqda";
      case "confirmed": return "Tasdiqlangan";
      case "completed": return "Tugallangan";
      default: return status;
    }
  };

  const handleBookingAction = (bookingId: string, action: "approve" | "reject") => {
    console.log(`${action} booking ${bookingId}`);
    // TODO: Implement with Supabase
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Mulkdor paneli</h1>
            <p className="text-muted-foreground">Hostellaringizni boshqaring</p>
          </div>
          <Link to="/owner/hostels/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Yangi hostel qo'shish
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami daromad</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} so'm</div>
              <p className="text-xs text-muted-foreground">+12% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami bronlar</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBookings}</div>
              <p className="text-xs text-muted-foreground">+8% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Band bo'lganlik</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.occupancyRate}%</div>
              <p className="text-xs text-muted-foreground">+5% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faol hostellar</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeHostels}</div>
              <p className="text-xs text-muted-foreground">Jami hostellar soni</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="hostels" className="space-y-6">
          <TabsList>
            <TabsTrigger value="hostels">Hostellarim</TabsTrigger>
            <TabsTrigger value="bookings">Bronlar</TabsTrigger>
            <TabsTrigger value="analytics">Analitika</TabsTrigger>
          </TabsList>

          <TabsContent value="hostels" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostels.map((hostel) => (
                <Card key={hostel.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={hostel.image}
                      alt={hostel.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getStatusColor(hostel.status)}`}>
                      {getStatusText(hostel.status)}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{hostel.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{hostel.location}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-muted-foreground">Xonalar:</span>
                        <p className="font-medium">{hostel.rooms} ta</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Band bo'lganlik:</span>
                        <p className="font-medium">{hostel.occupancy}%</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Oylik daromad:</span>
                        <p className="font-medium">{hostel.monthlyRevenue.toLocaleString()} so'm</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/owner/hostels/${hostel.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Boshqarish
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>So'nggi bronlar</CardTitle>
                <CardDescription>Hostellaringiz uchun so'nggi bronlar ro'yxati</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mehmon</TableHead>
                      <TableHead>Hostel</TableHead>
                      <TableHead>Sanalar</TableHead>
                      <TableHead>Mehmonlar</TableHead>
                      <TableHead>Holat</TableHead>
                      <TableHead>Summa</TableHead>
                      <TableHead>Harakatlar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.guestName}</TableCell>
                        <TableCell>{booking.hostelName}</TableCell>
                        <TableCell>
                          {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{booking.guests} kishi</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(booking.status)}>
                            {getStatusText(booking.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>{booking.amount.toLocaleString()} so'm</TableCell>
                        <TableCell>
                          {booking.status === "pending" && (
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleBookingAction(booking.id, "approve")}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleBookingAction(booking.id, "reject")}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                          {booking.status !== "pending" && (
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daromad dinamikasi</CardTitle>
                  <CardDescription>So'nggi 6 oy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Grafik komponenti (Chart.js yoki Recharts bilan amalga oshiriladi)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Band bo'lganlik ko'rsatkichi</CardTitle>
                  <CardDescription>Hostellar bo'yicha</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hostels.filter(h => h.status === "active").map((hostel) => (
                      <div key={hostel.id} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{hostel.name}</span>
                          <span className="text-sm text-muted-foreground">{hostel.occupancy}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-hero h-2 rounded-full" 
                            style={{ width: `${hostel.occupancy}%` }}
                          ></div>
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
  );
}