import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { 
  Building2, 
  Users, 
  DollarSign, 
  TrendingUp,
  CheckCircle,
  XCircle,
  Search,
  Eye,
  ShieldAlert,
  BarChart3
} from "lucide-react";

export default function AdminDashboard() {
  const [stats] = useState({
    totalHostels: 145,
    totalUsers: 2340,
    totalRevenue: 45600000,
    pendingApprovals: 12
  });

  const [pendingHostels] = useState([
    {
      id: "1",
      name: "New Comfort Hostel",
      owner: "John Smith",
      location: "Toshkent, Yunusobod",
      submittedDate: "2024-10-15",
      rooms: 10,
      email: "john@example.com",
      phone: "+998901234567"
    },
    {
      id: "2", 
      name: "Budget Stay Fergana",
      owner: "Sarah Wilson",
      location: "Farg'ona, Markaz",
      submittedDate: "2024-10-14",
      rooms: 8,
      email: "sarah@example.com",
      phone: "+998912345678"
    },
    {
      id: "3",
      name: "Luxury Hostel Khiva",
      owner: "Mike Johnson", 
      location: "Xiva, Ichan Qal'a",
      submittedDate: "2024-10-13",
      rooms: 15,
      email: "mike@example.com",
      phone: "+998923456789"
    }
  ]);

  const [users] = useState([
    {
      id: "1",
      name: "Ali Karimov",
      email: "ali@example.com",
      role: "user",
      joinDate: "2024-01-15",
      totalBookings: 5,
      status: "active"
    },
    {
      id: "2",
      name: "John Doe",
      email: "john@example.com", 
      role: "owner",
      joinDate: "2024-02-20",
      totalBookings: 0,
      status: "active"
    },
    {
      id: "3",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "user", 
      joinDate: "2024-03-10",
      totalBookings: 12,
      status: "suspended"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleApproveHostel = (hostelId: string) => {
    console.log("Approve hostel:", hostelId);
    // TODO: Implement with Supabase
  };

  const handleRejectHostel = (hostelId: string) => {
    console.log("Reject hostel:", hostelId);
    // TODO: Implement with Supabase
  };

  const handleUserAction = (userId: string, action: "suspend" | "activate" | "delete") => {
    console.log(`${action} user:`, userId);
    // TODO: Implement with Supabase
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "suspended": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "owner": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "user": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin paneli</h1>
            <p className="text-muted-foreground">Platformani boshqaring</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Hisobot
            </Button>
            <Button>
              <ShieldAlert className="h-4 w-4 mr-2" />
              Xavfsizlik
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami hostellar</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHostels}</div>
              <p className="text-xs text-muted-foreground">+8 yangi hostel bu oy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami foydalanuvchilar</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+15% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platforma daromadi</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} so'm</div>
              <p className="text-xs text-muted-foreground">+12% o'tgan oyga nisbatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasdiq kutayotgan</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Yangi hostellar</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Tasdiq kutayotgan hostellar</TabsTrigger>
            <TabsTrigger value="users">Foydalanuvchilar</TabsTrigger>
            <TabsTrigger value="analytics">Analitika</TabsTrigger>
            <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tasdiq kutayotgan hostellar</CardTitle>
                <CardDescription>Yangi hostel so'rovlarini ko'rib chiqing va tasdiqlang</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hostel nomi</TableHead>
                      <TableHead>Egasi</TableHead>
                      <TableHead>Manzil</TableHead>
                      <TableHead>Yuborilgan sana</TableHead>
                      <TableHead>Xonalar</TableHead>
                      <TableHead>Harakatlar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingHostels.map((hostel) => (
                      <TableRow key={hostel.id}>
                        <TableCell className="font-medium">{hostel.name}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{hostel.owner}</p>
                            <p className="text-sm text-muted-foreground">{hostel.email}</p>
                            <p className="text-sm text-muted-foreground">{hostel.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell>{hostel.location}</TableCell>
                        <TableCell>{new Date(hostel.submittedDate).toLocaleDateString()}</TableCell>
                        <TableCell>{hostel.rooms} ta</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-green-600 hover:text-green-700"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Hostellni tasdiqlash</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    "{hostel.name}" hostellni tasdiqlashni xohlaysizmi? Bu amal bekor qilinmaydi.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleApproveHostel(hostel.id)}>
                                    Tasdiqlash
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Hostellni rad etish</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    "{hostel.name}" hostellni rad etishni xohlaysizmi? Sabab ko'rsatishingiz mumkin.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleRejectHostel(hostel.id)}>
                                    Rad etish
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Foydalanuvchilar</CardTitle>
                    <CardDescription>Barcha platformada ro'yxatdan o'tgan foydalanuvchilar</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Foydalanuvchini qidirish..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-[250px]"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Foydalanuvchi</TableHead>
                      <TableHead>Rol</TableHead>
                      <TableHead>Qo'shilgan sana</TableHead>
                      <TableHead>Bronlar</TableHead>
                      <TableHead>Holat</TableHead>
                      <TableHead>Harakatlar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleColor(user.role)}>
                            {user.role === "user" ? "Foydalanuvchi" : 
                             user.role === "owner" ? "Mulkdor" : "Admin"}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                        <TableCell>{user.totalBookings}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status === "active" ? "Faol" : "Bloklangan"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {user.status === "active" ? (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUserAction(user.id, "suspend")}
                                className="text-red-600 hover:text-red-700"
                              >
                                Bloklash
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUserAction(user.id, "activate")}
                                className="text-green-600 hover:text-green-700"
                              >
                                Faollashtirish
                              </Button>
                            )}
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
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
                  <CardTitle>Platforma o'sishi</CardTitle>
                  <CardDescription>Foydalanuvchilar va hostellar dinamikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Grafik komponenti (Chart.js yoki Recharts bilan amalga oshiriladi)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daromad bo'yicha statistika</CardTitle>
                  <CardDescription>Oylik daromad dinamikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Grafik komponenti (Chart.js yoki Recharts bilan amalga oshiriladi)
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platforma sozlamalari</CardTitle>
                <CardDescription>Umumiy platforma parametrlarini boshqaring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center text-muted-foreground py-8">
                    Platforma sozlamalari (Komissiya stavkalari, to'lov usullari, email sozlamalari va boshqalar)
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}