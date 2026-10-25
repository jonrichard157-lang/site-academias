import type { SiteContent } from './types';

// Textos neutros usados quando gyms/<academia>/content.ts não existe.
// Para personalizar uma academia, copie este arquivo para gyms/<academia>/content.ts.

const VISIT = 'Olá! Vim pelo site e gostaria de agendar uma visita para conhecer a academia.';

export const content = {
  nav: [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Planos', href: '#planos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  header: { cta: { label: 'Agendar visita', message: VISIT } },
  float: { label: 'Falar no WhatsApp', message: 'Olá! Vim pelo site e gostaria de mais informações.' },

  hero: {
    eyebrow: 'Musculação e treino acompanhado',
    title: 'Treine com *estrutura* e acompanhamento',
    lead: 'Equipamentos completos, professores no salão e um treino montado para a sua rotina.',
    primary: { label: 'Agendar uma visita', message: VISIT },
    secondary: { label: 'Ver planos', href: '#planos' },
    image: { file: 'equipamentos-musculacao.webp', alt: 'Salão de musculação da academia' },
    facts: [
      { title: 'Avaliação inicial', text: 'Antes do primeiro treino.' },
      { title: 'Professor no salão', text: 'Em todos os horários.' },
      { title: 'Treino revisado', text: 'A cada ciclo.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefícios',
    title: 'Treino *claro* do primeiro dia em diante',
    items: [
      { title: 'Começo orientado', text: 'Execução e carga explicadas desde a primeira semana.' },
      { title: 'Plano para a sua rotina', text: 'Treinos montados para os dias que você consegue vir.' },
      { title: 'Evolução medida', text: 'Reavaliações periódicas para ajustar o próximo ciclo.' },
      { title: 'Segurança', text: 'Correção de postura e progressão no seu tempo.' },
    ],
  },

  structure: {
    eyebrow: 'Estrutura e equipamentos',
    title: 'Espaço amplo, *equipamento* em dia',
    gallery: [
      { file: 'area-pesos-livres.webp', alt: 'Área de pesos livres', caption: 'Pesos livres', area: 'a', mobileAspect: '4 / 3' },
      { file: 'area-treino.webp', alt: 'Racks de agachamento', caption: 'Racks', area: 'b', mobileAspect: '4 / 5' },
      { file: 'maquinas-detalhe.webp', alt: 'Detalhe de máquina', caption: 'Máquinas', area: 'c', mobileAspect: '1 / 1' },
      { file: 'ambiente-interno-02.webp', alt: 'Área de cardio', caption: 'Cardio', area: 'd', mobileAspect: '3 / 2' },
    ],
    areas: [
      { title: 'Musculação', text: 'Máquinas guiadas e cabos.' },
      { title: 'Pesos livres', text: 'Halteres, barras e bancos.' },
      { title: 'Cardio', text: 'Esteiras e bikes.' },
      { title: 'Vestiários', text: 'Chuveiros e armários.' },
    ],
  },

  plans: {
    eyebrow: 'Planos',
    title: 'Escolha como *quer começar*',
    included: 'Incluso em todos: avaliação inicial e treino montado por professor.',
    note: 'Valores ilustrativos. Condições reais são apresentadas na visita.',
    items: [
      {
        id: 'mensal',
        name: 'Mensal',
        price: 'R$ 000',
        period: 'por mês',
        summary: 'Sem compromisso longo.',
        features: ['Acesso livre', 'Avaliação inicial'],
        cta: { label: 'Quero o Mensal', message: 'Olá! Quero saber mais sobre o plano Mensal.' },
      },
      {
        id: 'anual',
        name: 'Anual',
        price: 'R$ 000',
        period: 'por mês, em 12 meses',
        summary: 'Para quem quer constância.',
        features: ['Tudo do Mensal', 'Reavaliações trimestrais'],
        featured: true,
        cta: { label: 'Quero o Anual', message: 'Olá! Quero saber mais sobre o plano Anual.' },
      },
    ],
  },

  differentials: {
    eyebrow: 'Diferenciais',
    title: 'Pequenos detalhes, *todo dia*',
    image: { file: 'ambiente-interno-03.webp', alt: 'Recepção da academia' },
    items: [
      { title: 'Professor perto', text: 'Equipe dimensionada para acompanhar cada aluno.' },
      { title: 'Horários estendidos', text: 'Treine antes ou depois do trabalho.' },
      { title: 'Ambiente cuidado', text: 'Limpeza e manutenção frequentes.' },
    ],
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Antes de *vir*',
    items: [
      { question: 'Posso conhecer antes de fechar um plano?', answer: 'Sim, agende uma visita pelo WhatsApp.' },
      { question: 'Nunca treinei. Vou conseguir?', answer: 'Sim. O treino começa pela avaliação e respeita o seu nível.' },
    ],
    more: { prompt: 'Ficou alguma dúvida?', label: 'Pergunte pelo WhatsApp', message: 'Olá! Tenho uma dúvida:' },
  },

  contact: {
    eyebrow: 'Agende sua visita',
    title: 'Venha *conhecer* a academia',
    intro: 'Fale com a gente e escolha o melhor horário para visitar.',
    image: { file: 'ambiente-interno.webp', alt: '' },
    direct: { label: 'Chamar no WhatsApp', message: VISIT },
    form: {
      title: 'Prefere que a gente organize a conversa?',
      goals: ['Começar a treinar', 'Ganhar massa muscular', 'Emagrecer', 'Outro'],
      periods: ['Manhã', 'Tarde', 'Noite'],
      submitLabel: 'Enviar pelo WhatsApp',
      privacyNote: 'Ao enviar, o WhatsApp abre com sua mensagem pronta. Este site não armazena seus dados.',
    },
  },

  footer: {
    address: ['Endereço da academia', 'Cidade-UF'],
    hours: [{ days: 'Segunda a sexta', time: '6h às 22h' }],
    disclaimer: '',
    credit: '',
  },
} satisfies SiteContent;
