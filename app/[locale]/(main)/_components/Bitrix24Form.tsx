import { useEffect } from 'react';

export const Bitrix24Form = ({ src, data, className }: { src: string; data: string, className?: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src + '?' + ((Date.now() / 180000) | 0);
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
  return <script data-b24-form={data} data-skip-moving='true' className={`${className}`}></script>;
};