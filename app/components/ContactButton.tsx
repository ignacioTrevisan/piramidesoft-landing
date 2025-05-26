'use client';

import { useState } from 'react';
import { Modal } from '@/app/components/Modal';
import { ContactForm } from '@/app/components/ContactForm';

interface ContactButtonProps {
  productId: string;
  productTitle: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export const ContactButton = ({ 
  productId, 
  productTitle, 
  variant = 'primary',
  className = '',
  children 
}: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = 'transition-all py-3 px-8 rounded-lg cursor-pointer shadow-sm hover:shadow-md text-base font-medium';
  const variantClasses = variant === 'primary' 
    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
    : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <ContactForm
          productId={productId}
          productTitle={productTitle}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};
