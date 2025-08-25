
import React from 'react';

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.323 11.822c.426-1.755 1.64-5.564 2.164-7.46.22-1.045 1.045-.92 1.562-.89 1.144.066 2.05.343 2.61.572.584.237 1.488.6 1.488.6l-.002.016s-1.825 1.6-2.14 1.89c-.53.473-.83.74-.508 1.19s1.42 1.454 2.27 2.24c.824.76 1.53 1.453 2.92 2.7.99 1.01 3.89 3.447 3.89 3.447s.46.39.83.33c.36-.06.75-.36.75-.36s2.4-2.22 2.9-2.7c1.3-.92 1.9-1.3 2.4-1.2.48.08 1.1.25 1.1.25s.23.1.22.3c-.02.2-.5 1.8-1.02 3.6-1.08 3.5-2.1 6.8-2.4 7.4-.52 1.1-1.5 1.2-2.1 1.1-.6-.1-1.3-.5-1.9-1-2.1-1.8-3.4-3-5.5-4.8-2.8-2.4-2.9-2.5-3.3-2.4-.5.1-1.1.3-1.8.6-1.2.4-2.3.9-2.3.9s-.6.2-.9.1c-.3-.1-.6-.2-.8-.4-.2-.3-.4-.6-.4-1.1s.1-1 .3-1.5z"/></svg>
);

const socialLinks = [
    { href: 'https://www.youtube.com/@VietNamNhipDap247', icon: <YoutubeIcon />, name: 'YouTube' },
    { href: '#', icon: <FacebookIcon />, name: 'Facebook' },
    { href: '#', icon: <TelegramIcon />, name: 'Telegram' },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Việt Nam Nhịp Đập 247</h3>
            <p className="text-gray-400">Liên hệ hợp tác: <a href="mailto:contact@vnnđ247.com" className="hover:text-brand-gold">contact@vnnđ247.com</a></p>
          </div>
          <div className="flex justify-center gap-6 mb-6 md:mb-0">
            {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label={link.name}>
                    {link.icon}
                </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Việt Nam Nhịp Đập 247. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
