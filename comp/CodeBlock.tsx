'use client'

import { transformerNotationDiff } from '@shikijs/transformers';
import { useEffect, useState } from 'react';
import * as shiki from 'shiki';

// Define CodeBlockProps interface
interface CodeBlockProps {
  children: string;
  language: string;
  highlightedCode?: string;
}

let highlighter: shiki.Highlighter | null = null;

const getHighlighter = async () => {
  if (!highlighter) {
    highlighter = await shiki.createHighlighter({
      themes: ['vitesse-dark'],
      langs: ['tsx', 'diff'],
    });
  }
  return highlighter;
};

// Create CodeBlock component
const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const highlighter = await getHighlighter();
      const html = await highlighter.codeToHtml(children, {
        lang: language,
        theme: 'vitesse-dark',
        transformers: [transformerNotationDiff()],
      });
      setHighlighted(html);
    })();
  }, [children, language]);

  return (
    <div className="relative bg-vitesse-dark-bg text-white rounded mb-4 p-4 overflow-x-auto">
      <div className="absolute top-2 left-2 text-xs text-gray-400">{language}</div>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: highlighted ?? '' }}
      />
    </div>
  );
};

export default CodeBlock;