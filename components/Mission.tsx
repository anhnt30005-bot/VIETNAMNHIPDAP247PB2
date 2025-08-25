
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/geopolitics/600/400" alt="Geopolitical map of Southeast Asia" className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-brand-blue mb-4">Sứ Mệnh & Cam Kết</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Sứ mệnh của <span className="font-bold">Việt Nam Nhịp Đập 247</span> là cung cấp thông tin chính xác, khách quan và những phân tích sâu sắc về các vấn đề chính trị, kinh tế, xã hội phức tạp trong khu vực.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            Chúng tôi cam kết chống lại tin giả, nâng cao nhận thức cộng đồng và góp phần xây dựng một xã hội thông tin minh bạch, nơi mọi quyết định đều dựa trên sự thật và hiểu biết.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
