
import React from 'react';
import ImageSlideshow from '../ImageSlideshow';
import { Zap, Users, Target, Award } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: '자동화 시스템',
      description: 'AQUA, Pattern Density, Foup Dashboard를 통한 효율적인 업무 관리',
      color: 'from-yeti-purple to-yeti-pink-light'
    },
    {
      icon: Users,
      title: '팀 협업',
      description: '실시간 정보 공유와 협업을 통한 생산성 향상',
      color: 'from-yeti-pink-medium to-yeti-blue-light'
    },
    {
      icon: Target,
      title: '데이터 분석',
      description: '정확한 데이터 분석을 통한 인사이트 도출',
      color: 'from-yeti-blue-light to-yeti-blue-medium'
    },
    {
      icon: Award,
      title: '혁신 솔루션',
      description: 'Foundry YE Team의 혁신적인 기술 솔루션',
      color: 'from-yeti-blue-medium to-yeti-purple'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yeti-purple via-yeti-pink-medium to-yeti-blue-medium bg-clip-text text-transparent animate-fade-in">
            Welcome to YETI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Foundry YE Team Innovation Portal
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto animate-fade-in">
            회사 내부 직원들이 정보를 쉽게 접근할 수 있도록 도와주는 통합 포탈입니다
          </p>
        </div>
      </div>

      {/* Image Slideshow */}
      <div className="animate-fade-in">
        <ImageSlideshow />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-2xl 
                       transition-all duration-300 hover:scale-105 border border-gray-100"
            style={{
              background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
            }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:scale-105 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-yeti-purple via-yeti-pink-light to-yeti-blue-light 
                      rounded-2xl p-12 shadow-xl animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-4">
          지금 시작해보세요
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          YETI 포탈에서 제공하는 다양한 시스템과 도구들을 활용해 보세요
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg
                          hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl
                          transform hover:scale-105">
          시작하기
        </button>
      </div>
    </div>
  );
};

export default HomePage;
