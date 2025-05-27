
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Activity, Database } from 'lucide-react';

const AquaPage = ({ activeSubNav, onSubNavChange }) => {
  const [selectedMetric, setSelectedMetric] = useState('throughput');

  const subNavItems = [
    { id: 'ein-l2-beol', title: 'EIN L2 BEOL', active: activeSubNav === 'ein-l2-beol' },
    { id: 'ecn-l2-beol', title: 'ECN L2 BEOL', active: activeSubNav === 'ecn-l2-beol' },
    { id: 'ein-l2-feol', title: 'EIN L2 FEOL', active: activeSubNav === 'ein-l2-feol' },
    { id: 'ein-l3', title: 'EIN L3', active: activeSubNav === 'ein-l3' }
  ];

  React.useEffect(() => {
    onSubNavChange(subNavItems);
  }, [activeSubNav]);

  const metrics = [
    {
      id: 'throughput',
      title: 'Throughput',
      value: '98.5%',
      change: '+2.3%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      value: '94.2%',
      change: '+1.8%',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'quality',
      title: 'Quality Score',
      value: '96.7%',
      change: '+0.9%',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'utilization',
      title: 'Utilization',
      value: '92.1%',
      change: '+3.2%',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const getCurrentTitle = () => {
    const active = subNavItems.find(item => item.active);
    return active ? active.title : 'EIN L2 BEOL';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yeti-purple to-yeti-blue-light rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">AQUA System</h1>
        <p className="text-xl opacity-90">Advanced Quality & Utility Analytics</p>
        <p className="mt-2 opacity-75">Current View: {getCurrentTitle()}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedMetric === metric.id
                ? 'border-yeti-purple shadow-lg scale-105'
                : 'border-gray-200 hover:border-yeti-blue-light hover:shadow-md'
            }`}
            onClick={() => setSelectedMetric(metric.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className={`text-sm mt-1 ${metric.color}`}>{metric.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Dashboard</h2>
        
        {/* Chart Placeholder */}
        <div className="h-64 bg-gradient-to-br from-yeti-blue-light/20 to-yeti-purple/20 rounded-xl 
                        flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Interactive Chart for {getCurrentTitle()}</p>
            <p className="text-gray-500 text-sm mt-2">Selected Metric: {metrics.find(m => m.id === selectedMetric)?.title}</p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Data</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-700">Time</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Value</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">14:0{row}:00</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Normal
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">9{row}.{row}%</td>
                  <td className="py-3 px-4 text-green-600">↗ +0.{row}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AquaPage;
