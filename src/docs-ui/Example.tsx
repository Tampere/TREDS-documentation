import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { codeToHtml } from 'shiki';
import { examples, type ExampleName } from '@/examples';
import type { Lang } from '@/i18n';
import { CodeBlock } from './CodeBlock';

// The preview and the code block come from the same file, so they cannot drift apart.
export async function Example({ name, lang }: { name: ExampleName; lang: Lang }) {
  const Component = examples[lang][name];
  const source = await readFile(
    path.join(process.cwd(), 'src/examples', lang, `${name}.tsx`),
    'utf8'
  );
  const code = source.replace(/^'use client';\n\n/, '').trimEnd();
  const html = await codeToHtml(code, { lang: 'tsx', theme: 'github-light-high-contrast' });

  return (
    <div className="example">
      <div className="example-preview">
        <Component />
      </div>
      <CodeBlock>
        <div className="example-code" dangerouslySetInnerHTML={{ __html: html }} />
      </CodeBlock>
    </div>
  );
}
