'use client'
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import RuForm from "./RuForm";
import RoForm from "./RoForm";
import { useLocale } from 'next-intl';

export default function Modal({ onClose } : { onClose: () => void }) {
    const locale = useLocale();
    // Handle Esc key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed no-doc-scroll w-full h-full backdrop-blur-md z-[10000] flex justify-center items-center"
            onClick={handleBackdropClick}
        >
            <div className="w-[50%] h-[80%] max-[750px]:w-[75%] max-[480px]:w-full overflow-y-scroll bg-white rounded-[15px] max-w-[724px]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 cursor-pointer transition-colors z-10"
                    aria-label="Close modal"
                >
                    <IoClose size={20} className="text-gray-600" />
                </button>
                {locale == 'ru' ? <RuForm className='w-full' /> : <RoForm className='w-full'/>}
                
            </div>
        </div>
    );
}