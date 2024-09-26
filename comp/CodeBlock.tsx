'use client';

import { useEffect, useState } from 'react';
import { highlightCode } from '../utils/shikiHighlighter';

interface CodeBlockProps {
  children: string;
  language: string;
}

const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const highlight = async () => {
      const highlighted = await highlightCode(children.trim(), language);
      setHighlightedCode(highlighted);
    };
    highlight();
  }, [children, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="relative bg-vitesse-dark-bg text-white rounded mb-4 p-4 overflow-x-auto">
      <div className="absolute top-2 left-2 text-xs text-gray-400">{language}</div>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 text-white py-1 px-2 rounded text-xs hover:bg-gray-600"
      >
        {isCopied ? 'Copied' : 'Copy'}
      </button>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: highlightedCode ?? '' }}
      />
    </div>
  );
};

export default CodeBlock;
