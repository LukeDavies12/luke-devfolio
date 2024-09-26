import { highlightCode } from '../utils/shikiHighlighter';
import CopyToClipboard from './CopyToClipboard';

type CodeProps = {
  code: string;
  lang: string;
  filename?: string;
};

export default async function CodeBlock({ code, lang = 'tsx', filename }: CodeProps) {
  const highlightedCode = await highlightCode(code.trim(), lang);

  return (
    <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-900 p-4 !pr-0 md:p-4 lg:p-6 w-full mb-4">
      <div className="overflow-hidden rounded-s-lg">
        <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
          {filename && (
            <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 ">
              {filename}
            </span>
          )}
          <CopyToClipboard code={code} />
        </div>
        <div
          className="border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}
