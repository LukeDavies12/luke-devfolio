import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

interface BackLinkProps {
  href: string;
  text: string;
}

const BackLink: React.FC<BackLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} className='flex items-center mb-5'>
      <ArrowLeftIcon className="h-4 w-4 mr-2" />
      <span>{text}</span>
    </Link>
  );
};

export default BackLink;