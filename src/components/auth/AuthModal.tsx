import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "register" | "forgot";
}

type AuthMode = "login" | "register" | "forgot";

export function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Supabase integration
    console.log("Auth submission:", { mode, formData });
    onClose();
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === "login" && "Tizimga kirish"}
            {mode === "register" && "Yangi hisob yaratish"}
            {mode === "forgot" && "Parolni tiklash"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="fullName">To'liq ismingiz</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Ismingiz va familiyangiz"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
          )}

          {(mode === "register" || mode === "login") && (
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon raqam</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+998 90 123 45 67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email manzil</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {mode !== "forgot" && (
            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Parolingizni kiriting"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}

          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Parolni qayta kiriting"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          )}

          <Button type="submit" className="w-full">
            {mode === "login" && "Kirish"}
            {mode === "register" && "Hisob yaratish"}
            {mode === "forgot" && "Parolni tiklash"}
          </Button>
        </form>

        <div className="space-y-4">
          {mode === "login" && (
            <>
              <div className="text-center">
                <Button
                  variant="link"
                  onClick={() => switchMode("forgot")}
                  className="text-sm text-muted-foreground"
                >
                  Parolni unutdingizmi?
                </Button>
              </div>
              <Separator />
              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Hisobingiz yo'qmi?{" "}
                </span>
                <Button
                  variant="link"
                  onClick={() => switchMode("register")}
                  className="text-sm p-0 h-auto"
                >
                  Yangi hisob yarating
                </Button>
              </div>
            </>
          )}

          {mode === "register" && (
            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Allaqachon hisobingiz bormi?{" "}
              </span>
              <Button
                variant="link"
                onClick={() => switchMode("login")}
                className="text-sm p-0 h-auto"
              >
                Tizimga kirish
              </Button>
            </div>
          )}

          {mode === "forgot" && (
            <div className="text-center">
              <Button
                variant="link"
                onClick={() => switchMode("login")}
                className="text-sm inline-flex items-center gap-1"
              >
                <ArrowLeft className="h-3 w-3" />
                Tizimga kirishga qaytish
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}