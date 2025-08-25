
import React, { useState } from 'react';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-brand-blue py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Nhận Phân Tích Độc Quyền</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Đừng bỏ lỡ bất kỳ phân tích chuyên sâu nào. Hãy là người đầu tiên nhận các bài viết độc quyền và cập nhật mới nhất thẳng vào hòm thư của bạn.
        </p>
        {submitted ? (
          <p className="text-xl font-semibold text-brand-gold">Cảm ơn bạn đã đăng ký!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-grow px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button
              type="submit"
              className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Đăng Ký Ngay
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterCTA;
