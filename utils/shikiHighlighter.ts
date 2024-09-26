import { transformerNotationDiff } from '@shikijs/transformers';
import * as shiki from 'shiki';

// Singleton instance of the highlighter
let highlighter: shiki.Highlighter | null = null;

export const getHighlighter = async () => {
  // Check if the highlighter has already been created
  if (!highlighter) {
    highlighter = await shiki.createHighlighter({
      themes: ['vitesse-dark'],
      langs: ['tsx', 'diff'], // Add other languages as needed
    });
  }
  return highlighter;
};

export const highlightCode = async (code: string, lang: string) => {
  const highlighter = await getHighlighter();

  // Highlight the code with transformers
  const html = highlighter.codeToHtml(code, {
    lang,
    themes: { 'light': 'vitesse-dark' },
    transformers: [transformerNotationDiff()],
  });

  return html;
};

// Optional: Function to dispose of the highlighter (if needed)
export const disposeHighlighter = () => {
  if (highlighter) {
    highlighter.dispose();
    highlighter = null;
  }
};
