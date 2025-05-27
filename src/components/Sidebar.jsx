
import React from 'react';
import { X, Home, Settings, Bell, Users, BarChart3, Database } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    {
      id: 'home',
      title: 'Home',
      icon: Home,
      path: '/'
    },
    {
      id: 'automation',
      title: '자동화 시스템',
      icon: Settings,
      children: [
        { id: 'aqua', title: 'AQUA', path: '/automation/aqua' },
        { id: 'pattern-density', title: 'Pattern Density', path: '/automation/pattern-density' },
        { id: 'foup-dashboard', title: 'Foup Dashboard', path: '/automation/foup-dashboard' }
      ]
    },
    {
      id: 'announcements',
      title: '공지사항',
      icon: Bell,
      children: [
        { id: 'citizen-dev', title: 'Citizen Developer 양성', path: '/announcements/citizen-dev' },
        { id: 'part-intro', title: '파트소개', path: '/announcements/part-intro' }
      ]
    },
    {
      id: 'analytics',
      title: '분석도구',
      icon: BarChart3,
      path: '/analytics'
    },
    {
      id: 'database',
      title: '데이터베이스',
      icon: Database,
      path: '/database'
    }
  ];

  const handleItemClick = (item) => {
    if (item.path) {
      onNavigate(item.path);
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-yeti-purple to-yeti-blue-light
        transform transition-transform duration-300 ease-in-out z-50 shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">YETI</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 
                          transition-colors text-white group"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.title}</span>
              </button>
              
              {/* Submenu */}
              {item.children && (
                <div className="ml-6 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleItemClick(child)}
                      className="w-full text-left p-2 rounded-lg hover:bg-white/10 
                                transition-colors text-white/80 hover:text-white text-sm"
                    >
                      {child.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
          <div className="text-center text-white/70 text-sm">
            <p>Foundry YE Team Innovation</p>
            <p className="text-xs mt-1">v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
