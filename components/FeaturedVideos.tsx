
import React from 'react';

interface VideoData {
  id: string;
  title: string;
  description: string;
}

const videos: VideoData[] = [
  {
    id: 'P0hHOKmBGtI',
    title: 'Hun Manet & Tương Lai Campuchia',
    description: 'Phân tích sâu về sự chuyển giao quyền lực và những tác động đến khu vực và Việt Nam.',
  },
  {
    id: 'S2SgL6YdM0o',
    title: 'Địa Chính Trị Biển Đông & Vai Trò ASEAN',
    description: 'Cập nhật những diễn biến mới nhất và chiến lược của các bên liên quan.',
  },
  {
    id: 'G_A_4OqS_f8',
    title: 'Dòng Vốn FDI vào Việt Nam: Cơ Hội & Thách Thức',
    description: 'Đánh giá các xu hướng đầu tư nước ngoài và dự báo cho nền kinh tế Việt Nam.',
  },
];

const FeaturedVideos: React.FC = () => {
  return (
    <section className="bg-brand-gray-light py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Các Phân Tích Không Thể Bỏ Lỡ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tuyển tập những video tiêu biểu nhất từ các chủ đề nóng, được phân tích chuyên sâu và đa chiều.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition-colors">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
