
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import HomePage from './components/pages/HomePage';
import AquaPage from './components/pages/AquaPage';
import PatternDensityPage from './components/pages/PatternDensityPage';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [subNavItems, setSubNavItems] = useState([]);
  const [activeSubNav, setActiveSubNav] = useState('');

  const handleNavigate = (path) => {
    setCurrentPath(path);
    // Reset sub navigation when changing main path
    setSubNavItems([]);
    setActiveSubNav('');
    
    // Set default sub nav for specific pages
    if (path === '/automation/aqua') {
      setActiveSubNav('ein-l2-beol');
    } else if (path === '/automation/pattern-density') {
      setActiveSubNav('compare');
    }
  };

  const handleSubNavClick = (item) => {
    setActiveSubNav(item.id);
  };

  const handleSubNavChange = (items) => {
    setSubNavItems(items);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/automation/aqua':
        return (
          <AquaPage 
            activeSubNav={activeSubNav} 
            onSubNavChange={handleSubNavChange}
          />
        );
      case '/automation/pattern-density':
        return (
          <PatternDensityPage 
            activeSubNav={activeSubNav} 
            onSubNavChange={handleSubNavChange}
          />
        );
      case '/automation/foup-dashboard':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Foup Dashboard</h1>
            <p className="text-gray-600">Foup Dashboard 시스템이 여기에 표시됩니다.</p>
          </div>
        );
      case '/announcements/citizen-dev':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Citizen Developer 양성</h1>
            <p className="text-gray-600">Citizen Developer 양성 프로그램 정보가 여기에 표시됩니다.</p>
          </div>
        );
      case '/announcements/part-intro':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">파트소개</h1>
            <p className="text-gray-600">파트 소개 내용이 여기에 표시됩니다.</p>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <TooltipProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 w-full">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b w-full">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Menu size={24} className="text-gray-700" />
                </button>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yeti-purple to-yeti-blue-medium bg-clip-text text-transparent">
                  YETI
                </h1>
              </div>
              <div className="text-sm text-gray-600">
                Foundry YE Team Innovation
              </div>
            </div>
          </header>

          {/* Top Navbar (for sub navigation) */}
          <TopNavbar 
            currentPath={currentPath}
            subNavItems={subNavItems}
            onSubNavClick={handleSubNavClick}
          />

          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            onNavigate={handleNavigate}
          />

          {/* Main Content */}
          <main className="p-6 w-full">
            <div className="max-w-7xl mx-auto">
              {renderCurrentPage()}
            </div>
          </main>

          <Toaster />
          <Sonner />
        </div>
      </Router>
    </TooltipProvider>
  );
};

export default App;
