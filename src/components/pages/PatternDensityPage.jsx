
import React, { useState } from 'react';
import { Search, GitCompare, Info, Download } from 'lucide-react';

const PatternDensityPage = ({ activeSubNav, onSubNavChange }) => {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [compareMode, setCompareMode] = useState('compare');

  const subNavItems = [
    { id: 'compare', title: '제품 비교', active: activeSubNav === 'compare' },
    { id: 'info', title: '제품 정보', active: activeSubNav === 'info' }
  ];

  React.useEffect(() => {
    onSubNavChange(subNavItems);
  }, [activeSubNav]);

  const products = [
    'Product A', 'Product B', 'Product C', 'Product D', 'Product E'
  ];

  const handleSearch = () => {
    console.log('Comparing:', product1, 'vs', product2);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yeti-pink-medium to-yeti-blue-medium rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Pattern Density</h1>
        <p className="text-xl opacity-90">패턴 밀도 분석 및 제품 비교</p>
      </div>

      {activeSubNav === 'compare' && (
        <>
          {/* Product Comparison Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GitCompare className="w-6 h-6 mr-2 text-yeti-purple" />
              제품 비교
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Product 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  제품 1 선택
                </label>
                <select
                  value={product1}
                  onChange={(e) => setProduct1(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yeti-purple focus:border-transparent"
                >
                  <option value="">제품을 선택하세요</option>
                  {products.map((product) => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              {/* Product 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  제품 2 선택
                </label>
                <select
                  value={product2}
                  onChange={(e) => setProduct2(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yeti-purple focus:border-transparent"
                >
                  <option value="">제품을 선택하세요</option>
                  {products.map((product) => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div>
                <button
                  onClick={handleSearch}
                  disabled={!product1 || !product2}
                  className="w-full bg-gradient-to-r from-yeti-purple to-yeti-pink-medium text-white 
                           px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2
                           disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg 
                           transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                  <span>비교 분석</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Results */}
          {product1 && product2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">비교 결과</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 1 Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yeti-purple">{product1}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Pattern Density</span>
                      <span className="font-semibold">0.85</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Coverage</span>
                      <span className="font-semibold">92.3%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="font-semibold">88.7%</span>
                    </div>
                  </div>
                </div>

                {/* Product 2 Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yeti-blue-medium">{product2}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Pattern Density</span>
                      <span className="font-semibold">0.91</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Coverage</span>
                      <span className="font-semibold">94.1%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="font-semibold">91.2%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Report */}
              <div className="mt-8 text-center">
                <button className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <Download className="w-5 h-5" />
                  <span>보고서 다운로드</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {activeSubNav === 'info' && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="w-6 h-6 mr-2 text-yeti-blue-medium" />
            제품 정보
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={product} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{product}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Pattern Type: Type {index + 1}</p>
                  <p>Density: 0.{80 + index}{index}</p>
                  <p>Last Updated: 2024-01-{15 + index}</p>
                </div>
                <button className="mt-4 w-full bg-yeti-blue-light text-gray-900 py-2 px-4 rounded-lg hover:bg-yeti-blue-medium transition-colors">
                  상세 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatternDensityPage;
