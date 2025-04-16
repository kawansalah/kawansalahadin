import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import Instagram from "@/components/pages/instagram";
import { MainLayout } from "@/components/layouts/main-layout";
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Toaster } from "react-hot-toast";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useState, useEffect } from "react";
import { Home } from "@/components/pages/home";
import { Footer } from "@/components/footer";
import NotFound from "@/components/pages/not-found";
import AdminDashboard from "@/components/admin/dashboard";
import Login from "@/components/auth/login";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/routes/ProtectedRoute";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        {isLoading && <LoadingScreen />}
        <Toaster
          position="top-center"
          toastOptions={{
            className: "",
            style: {
              background: "rgba(10, 10, 10, 0.9)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
            success: {
              iconTheme: {
                primary: "#3b82f6",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        <Routes>
          {/* Main website routes */}
          <Route
            path="/"
            element={
              <MainLayout>
                <div className="sm:h-20 xs:h-20" />
                <Navigation />
                <Outlet />
                <Footer />
              </MainLayout>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="instagram" element={<Instagram />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout><Outlet /></AdminLayout>}>
            {/* Login as index route */}
            <Route index element={<Login />} />
            
            {/* Protected admin routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={
                <>
                  <AdminNavigation />
                  <AdminDashboard />
                </>
              } />
              <Route path="users" element={
                <>
                  <AdminNavigation />
                  <div>Users Management</div>
                </>
              } />
              <Route path="content" element={
                <>
                  <AdminNavigation />
                  <div>Content Management</div>
                </>
              } />
              <Route path="settings" element={
                <>
                  <AdminNavigation />
                  <div>Settings</div>
                </>
              } />
            </Route>
          </Route>

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
