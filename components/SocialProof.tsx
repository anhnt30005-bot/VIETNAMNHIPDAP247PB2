
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center p-4">
    <p className="text-4xl font-extrabold text-brand-blue">{value}</p>
    <p className="text-base text-gray-500 font-medium">{label}</p>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          <StatCard value="1,970+" label="Subscribers" />
          <StatCard value="319,400+" label="Views" />
          <StatCard value="Top 3" label="Kênh Phân Tích Về Campuchia" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
