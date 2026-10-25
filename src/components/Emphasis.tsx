import { Fragment } from 'react';

/** Renderiza "texto *destaque* texto" com o trecho entre asteriscos em <em>. */
export function Emphasis({ text }: { readonly text: string }) {
  return (
    <>
      {text.split('*').map((part, index) =>
        index % 2 === 1 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}

