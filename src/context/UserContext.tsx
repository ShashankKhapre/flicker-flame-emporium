
import { createContext, useState, useContext, ReactNode } from "react";
import { User, Product } from "@/types";
import { toast } from "@/components/ui/use-toast";

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Mock authentication functions
  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    if (email && password) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUser({
        id: "user1",
        email,
        name: email.split("@")[0],
        wishlist: [],
      });
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, you would send registration data to a backend
    if (name && email && password) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUser({
        id: "user" + Date.now(),
        email,
        name,
        wishlist: [],
      });
      
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      });
    } else {
      toast({
        title: "Registration failed",
        description: "Please fill all required fields",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const addToWishlist = (product: Product) => {
    if (!user) {
      toast({
        title: "You need to login",
        description: "Please login to add items to your wishlist",
        variant: "destructive",
      });
      return;
    }

    setUser((prevUser) => {
      if (!prevUser) return null;
      
      const wishlist = prevUser.wishlist || [];
      const isInWishlist = wishlist.some(item => item.id === product.id);
      
      if (isInWishlist) {
        toast({
          title: "Already in wishlist",
          description: `${product.name} is already in your wishlist`,
        });
        return prevUser;
      } else {
        toast({
          title: "Added to wishlist",
          description: `${product.name} added to your wishlist`,
        });
        return {
          ...prevUser,
          wishlist: [...wishlist, product],
        };
      }
    });
  };

  const removeFromWishlist = (productId: string) => {
    if (!user || !user.wishlist) return;

    const product = user.wishlist.find(item => item.id === productId);
    
    setUser({
      ...user,
      wishlist: user.wishlist.filter(item => item.id !== productId),
    });
    
    if (product) {
      toast({
        title: "Removed from wishlist",
        description: `${product.name} removed from your wishlist`,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
