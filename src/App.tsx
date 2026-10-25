import { CONTENT } from './config/gym';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Benefits } from './components/sections/Benefits';
import { Contact } from './components/sections/Contact';
import { Differentials } from './components/sections/Differentials';
import { Faq } from './components/sections/Faq';
import { Hero } from './components/sections/Hero';
import { Plans } from './components/sections/Plans';
import { Structure } from './components/sections/Structure';
import { Testimonials } from './components/sections/Testimonials';

// Ordem das seções depois do topo. A numeração (01, 02...) acompanha a ordem e pula as que não têm conteúdo.
const SECTIONS = [
  { id: 'beneficios', Section: Benefits },
  { id: 'estrutura', Section: Structure },
  { id: 'planos', Section: Plans },
  { id: 'diferenciais', Section: Differentials },
  ...(CONTENT.testimonials ? [{ id: 'depoimentos', Section: Testimonials }] : []),
  { id: 'duvidas', Section: Faq },
  { id: 'contato', Section: Contact },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        {SECTIONS.map(({ id, Section }, position) => (
          <Section key={id} index={String(position + 1).padStart(2, '0')} />
        ))}
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
