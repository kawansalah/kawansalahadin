declare module '@/contexts/AuthContext' {
  interface User {
    username: string;
    role: string;
  }

  interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
  }

  export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element;
  export function useAuth(): AuthContextType;
} 