
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-24 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mb-6 tracking-wide">
          Kênh Phân Tích Chính Trị & Địa Chính Trị Đông Nam Á Hàng Đầu
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-300">
          Phân tích chuyên sâu, khách quan và đa chiều, với góc nhìn luôn đặt lợi ích của Việt Nam làm trọng tâm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.youtube.com/@VietNamNhipDap247"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-blue font-bold text-lg py-4 px-10 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            XEM VIDEO MỚI NHẤT
          </a>
          <a
            href="#newsletter"
            className="bg-transparent border-2 border-gray-400 text-gray-200 font-bold text-lg py-4 px-10 rounded-lg hover:bg-gray-700 hover:border-gray-700 transition-colors duration-300"
          >
            Đăng Ký Nhận Tin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
