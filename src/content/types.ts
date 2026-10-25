/**
 * Formato dos textos da página. Cada academia tem o seu em gyms/<academia>/content.ts;
 * sem esse arquivo, vale src/content/default.ts.
 *
 * Títulos aceitam *palavra* entre asteriscos para o destaque em itálico.
 */

export interface ImageRef {
  /** Nome do arquivo em gyms/<academia>/public/images. Se faltar, aparece um espaço "Foto em breve". */
  readonly file: string;
  readonly alt: string;
  readonly objectPosition?: string;
}

export interface GallerySlot extends ImageRef {
  readonly caption: string;
  /** Posição na grade do desktop (a = maior). */
  readonly area: 'a' | 'b' | 'c' | 'd';
  /** Proporção no celular. */
  readonly mobileAspect: string;
}

/** Botão que abre o WhatsApp com a mensagem já escrita. */
export interface WhatsAppCta {
  readonly label: string;
  readonly message: string;
}

export interface LinkCta {
  readonly label: string;
  readonly href: string;
}

export interface SectionIntro {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro?: string;
}

export interface TextItem {
  readonly title: string;
  readonly text: string;
}

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly summary: string;
  readonly features: readonly string[];
  /** Selo opcional, sem promessas de desconto ou prazo. */
  readonly tag?: string;
  readonly featured?: boolean;
  readonly cta: WhatsAppCta;
}

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly detail: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface SiteContent {
  readonly nav: readonly LinkCta[];
  readonly header: { readonly cta: WhatsAppCta };
  readonly float: WhatsAppCta;
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly primary: WhatsAppCta;
    readonly secondary: LinkCta;
    readonly image: ImageRef;
    readonly facts: readonly TextItem[];
  };
  readonly benefits: SectionIntro & { readonly items: readonly TextItem[] };
  readonly structure: SectionIntro & {
    readonly gallery: readonly GallerySlot[];
    readonly areas: readonly TextItem[];
  };
  readonly plans: SectionIntro & {
    readonly included: string;
    readonly note: string;
    readonly items: readonly Plan[];
  };
  readonly differentials: SectionIntro & {
    readonly image: ImageRef;
    readonly items: readonly TextItem[];
  };
  /** Opcional: só publique depoimentos reais ou marcados como exemplo. */
  readonly testimonials?: SectionIntro & {
    readonly disclaimer: string;
    readonly items: readonly Testimonial[];
  };
  readonly faq: SectionIntro & {
    readonly items: readonly FaqItem[];
    readonly more: WhatsAppCta & { readonly prompt: string };
  };
  readonly contact: SectionIntro & {
    readonly image: ImageRef;
    readonly direct: WhatsAppCta;
    readonly form: {
      readonly title: string;
      readonly goals: readonly string[];
      readonly periods: readonly string[];
      readonly submitLabel: string;
      readonly privacyNote: string;
    };
  };
  readonly footer: {
    readonly address: readonly string[];
    readonly hours: readonly { readonly days: string; readonly time: string }[];
    readonly disclaimer: string;
    readonly credit: string;
  };
}
