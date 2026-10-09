import { Fragment } from 'react';

/** Renders `backticked` parts of a plain string as code. */
export function inlineCode(text: string) {
  return text
    .split('`')
    .map((part, i) => (i % 2 ? <code key={i}>{part}</code> : <Fragment key={i}>{part}</Fragment>));
}
