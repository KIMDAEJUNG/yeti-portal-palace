
import React from 'react';
import { ChevronRight } from 'lucide-react';

const TopNavbar = ({ currentPath, subNavItems, onSubNavClick }) => {
  const getPageTitle = (path) => {
    const titles = {
      '/': 'Home',
      '/automation/aqua': 'AQUA',
      '/automation/pattern-density': 'Pattern Density',
      '/automation/foup-dashboard': 'Foup Dashboard',
      '/announcements/citizen-dev': 'Citizen Developer 양성',
      '/announcements/part-intro': '파트소개'
    };
    return titles[path] || 'YETI';
  };

  if (currentPath === '/') return null;

  return (
    <div className="bg-white shadow-sm border-b">
      {/* Breadcrumb */}
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>YETI</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">{getPageTitle(currentPath)}</span>
        </div>
      </div>

      {/* Sub Navigation */}
      {subNavItems && subNavItems.length > 0 && (
        <div className="px-6 pb-4">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {subNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSubNavClick(item)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
