import { transformerNotationDiff } from '@shikijs/transformers';
import * as shiki from 'shiki';

let highlighter: shiki.Highlighter | null = null;

export const getHighlighter = async () => {
  if (!highlighter) {
    highlighter = await shiki.createHighlighter({
      themes: ['vitesse-dark'],
      langs: ['tsx', 'diff'],
    });
  }
  return highlighter;
};

export const highlightCode = async (code: string, lang: string) => {
  const highlighter = await getHighlighter();

  // Pass the transformer as part of the options
  const html = highlighter.codeToHtml(code, {
    lang,
    themes: { 'light': 'vitesse-dark' },
    transformers: [transformerNotationDiff()],
  });

  return html;
};
