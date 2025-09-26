import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/search/SearchBar";
import { HostelCard } from "@/components/hostel/HostelCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Award, 
  Shield, 
  MapPin, 
  TrendingUp,
  ArrowRight,
  Users,
  Building2
} from "lucide-react";
import heroImage from "@/assets/hero-hostel.jpg";
import hostel1 from "@/assets/hostel-1.jpg";
import hostel2 from "@/assets/hostel-2.jpg";
import hostel3 from "@/assets/hostel-3.jpg";

const Index = () => {
  // Mock data for featured hostels
  const featuredHostels = [
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
      featured: true,
    },
  ];

  const popularCities = [
    { name: "Toshkent", count: 45, image: hostel1 },
    { name: "Samarqand", count: 32, image: hostel2 },
    { name: "Buxoro", count: 28, image: hostel3 },
  ];

  const features = [
    {
      icon: Shield,
      title: "Xavfsiz to'lov",
      description: "Barcha to'lovlar himoyalangan"
    },
    {
      icon: Award,
      title: "Sifat kafolati",
      description: "Faqat tekshirilgan hostellar"
    },
    {
      icon: TrendingUp,
      title: "Eng yaxshi narxlar",
      description: "Bozordagi eng qulay narxlar"
    },
    {
      icon: Users,
      title: "24/7 qo'llab-quvvatlash",
      description: "Har doim yordam berishga tayyormiz"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              O'zbekistondagi eng yaxshi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                hostellarni
              </span>{" "}
              toping
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Minglab takliflar, bir marta qidiruv. Sayohatingizni biz bilan boshlang.
            </p>
          </div>
          
          <SearchBar variant="hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hostels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Tavsiya etiladigan hostellar</h2>
              <p className="text-muted-foreground">Eng yaxshi baholangan va mashhur joylashuvlar</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/search">
                Barchasini ko'rish
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHostels.map((hostel) => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mashhur shaharlar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O'zbekistonning eng go'zal shaharlarida joylashgan hostellarni kashf eting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCities.map((city, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-medium transition-all overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{city.name}</h3>
                    <div className="flex items-center text-white/80">
                      <Building2 className="h-4 w-4 mr-1" />
                      {city.count} hostel
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">Bizning yutuqlarimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Tekshirilgan hostellar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Mamnun mijozlar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">O'rtacha baho</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sayohatingizni bugun boshlang</h2>
          <p className="text-xl mb-8 text-white/90">
            Minglab hostellar orasidan o'zingizga mos kelganini toping
          </p>
          <Button variant="hero" size="xl">
            Hostellarni qidirish
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">HostelHub</span>
              </div>
              <p className="text-muted-foreground">
                O'zbekistondagi eng yaxshi hostellarni topish uchun ishonchli platforma.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kompaniya</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground">Biz haqimizda</a></li>
                <li><a href="/contact" className="hover:text-foreground">Aloqa</a></li>
                <li><a href="/help" className="hover:text-foreground">Yordam</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Mulkdorlar uchun</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/owner" className="hover:text-foreground">Hostel qo'shish</a></li>
                <li><a href="/owner/login" className="hover:text-foreground">Kirish</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Yordam</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground">Ko'p so'raladigan savollar</a></li>
                <li><a href="/contact" className="hover:text-foreground">Qo'llab-quvvatlash</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HostelHub. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
