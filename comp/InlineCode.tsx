import { ReactNode } from 'react';

interface InlineCodeProps {
  children: ReactNode;
}

const InlineCode = ({ children }: InlineCodeProps) => {
  return (
    <code className="text-sm text-red-600 bg-neutral-200 px-1 py-0.5 rounded">
      {children}
    </code>
  );
};

export default InlineCode;
