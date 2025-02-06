// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  first_name: string;
  id: number;
  email: string;
  role: string;
  // add other fields as needed
}

interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (userData: User) => {
    setUser(userData);
    // Optionally, persist to local storage or cookies
  };

  const signOut = () => {
    setUser(null);
    // Remove any persisted state as needed
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
