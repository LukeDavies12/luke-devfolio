'use client';

import { useState } from 'react';

type CopyToClipboardProps = {
  code: string;
};

const CopyToClipboard = ({ code }: CopyToClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500); // Reset the copied state after 1.5 seconds
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="bg-gray-700 text-white py-1 px-2 rounded text-xs hover:bg-gray-600"
    >
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyToClipboard;
