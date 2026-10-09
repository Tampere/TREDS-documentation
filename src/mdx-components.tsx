import type { MDXComponents } from 'mdx/types';
import { TextLink, Typography } from '@/treds';
import { Prose } from '@/docs-ui/Prose';
import { CodeBlock } from '@/docs-ui/CodeBlock';

// `id` comes from rehype-slug and feeds the "On this page" links.
const components: MDXComponents = {
  wrapper: ({ children }) => <Prose>{children}</Prose>,
  h1: ({ children, id }) => (
    <Typography variant="h1" id={id}>
      {children}
    </Typography>
  ),
  h2: ({ children, id }) => (
    <Typography variant="h2" id={id}>
      {children}
    </Typography>
  ),
  h3: ({ children, id }) => (
    <Typography variant="h3" id={id}>
      {children}
    </Typography>
  ),
  p: ({ children }) => <Typography variant="p1">{children}</Typography>,
  a: ({ href, children }) => <TextLink href={href}>{children}</TextLink>,
  ul: ({ children }) => <ul className="list">{children}</ul>,
  pre: (props) => (
    <CodeBlock>
      <pre {...props} />
    </CodeBlock>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
