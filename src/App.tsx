import { Hero } from './components/Hero';
import { PhotoGrid } from './components/PhotoGrid';
import { Section } from './components/Section';
import { SiteHeader } from './components/SiteHeader';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { GYM, SECTION_TITLES } from './config/gym';
import { buildEquipmentSlots, buildSpaceSlots } from './data/images';

const EQUIPMENT_SLOTS = buildEquipmentSlots(GYM.name);
const SPACE_SLOTS = buildSpaceSlots(GYM.name);

export default function App() {
  return (
    <>
      <a className="skip-link" href="#estrutura">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Section id="estrutura" title={SECTION_TITLES.equipment}>
          <PhotoGrid slots={EQUIPMENT_SLOTS} layout="equipment" />
        </Section>
        <Section id="espaco" title={SECTION_TITLES.space} tone="raised">
          <PhotoGrid slots={SPACE_SLOTS} layout="space" />
        </Section>
      </main>
      <WhatsAppFloat />
    </>
  );
}
