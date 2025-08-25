
import React from 'react';

interface Strength {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const strengths: Strength[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a9 9 0 0110 9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22a9 9 0 0010-9" /></svg>
    ),
    title: 'Phân Tích Đa Chiều',
    description: 'Tiếp cận vấn đề từ nhiều góc độ: chính trị, kinh tế, lịch sử và văn hóa để có cái nhìn toàn diện.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    title: 'Số Liệu Uy Tín',
    description: 'Mọi phân tích đều dựa trên nguồn dữ liệu tin cậy, được kiểm chứng từ các tổ chức quốc tế.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Vì Lợi Ích Việt Nam',
    description: 'Luôn đặt lợi ích quốc gia làm kim chỉ nam, góp phần nâng cao nhận thức và bảo vệ chủ quyền.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Cộng Đồng Chất Lượng',
    description: 'Nơi quy tụ những khán giả văn minh, có trình độ, cùng nhau thảo luận và xây dựng tri thức.',
  },
];

const Strengths: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Vì Sao Chọn Chúng Tôi?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến những giá trị khác biệt, tạo nên một kênh thông tin đáng tin cậy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center p-6 bg-brand-gray-light rounded-lg">
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 bg-brand-blue text-brand-gold rounded-full">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
