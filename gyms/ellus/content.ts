import type { SiteContent } from '../../src/content/types';

// Ellus Academia é uma marca fictícia: esta página é um template demonstrativo da VeyzaTech.
// Planos, valores, endereço e depoimentos abaixo são exemplos e devem ser trocados pelos reais.

const VISIT = 'Olá! Vim pelo site da Ellus Academia e gostaria de agendar uma visita para conhecer o espaço.';

export const content = {
  nav: [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Planos', href: '#planos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  header: { cta: { label: 'Agendar visita', message: VISIT } },
  float: {
    label: 'Falar no WhatsApp',
    message: 'Olá! Vim pelo site da Ellus Academia e gostaria de mais informações.',
  },

  hero: {
    eyebrow: 'Musculação e treino acompanhado · Mairinque-SP',
    title: 'Treino de perto, no *seu ritmo.*',
    lead: 'Uma academia com professor no salão, treino montado para a sua rotina e espaço para você evoluir sem pressa e sem fila.',
    primary: { label: 'Agendar uma visita', message: VISIT },
    secondary: { label: 'Ver planos', href: '#planos' },
    image: {
      file: 'equipamentos-musculacao.webp',
      alt: 'Salão de musculação da Ellus Academia com duas fileiras de máquinas e luz de destaque nas paredes',
      objectPosition: '50% 55%',
    },
    facts: [
      { title: 'Avaliação inicial', text: 'Conversa e testes antes do primeiro treino.' },
      { title: 'Professor no salão', text: 'Acompanhamento em todos os horários.' },
      { title: 'Treino revisado', text: 'Ajustes a cada ciclo, conforme sua evolução.' },
    ],
  },

  benefits: {
    eyebrow: 'Benefícios',
    title: 'O que muda quando alguém *acompanha* seu treino',
    intro: 'Resultado vem de constância. Nosso trabalho é tornar o treino claro, seguro e possível de manter.',
    items: [
      {
        title: 'Começo sem dúvida',
        text: 'Você sai da primeira semana sabendo o que fazer em cada aparelho, com carga e execução explicadas.',
      },
      {
        title: 'Plano que cabe na rotina',
        text: 'Treinos de 45 a 60 minutos, montados para os dias que você realmente consegue vir.',
      },
      {
        title: 'Evolução que dá para ver',
        text: 'Reavaliações periódicas mostram o que melhorou e o que ajustar no próximo ciclo.',
      },
      {
        title: 'Segurança em cada série',
        text: 'Correção de postura no salão e progressão de carga feita no tempo do seu corpo.',
      },
    ],
  },

  structure: {
    eyebrow: 'Estrutura e equipamentos',
    title: 'Espaço amplo, *equipamento* em dia',
    intro: 'Áreas separadas por tipo de treino, para você circular com fluidez e encontrar o aparelho livre.',
    gallery: [
      {
        file: 'area-pesos-livres.webp',
        alt: 'Área de pesos livres com halteres organizados em racks e bancos ajustáveis',
        caption: 'Pesos livres',
        area: 'a',
        mobileAspect: '4 / 3',
      },
      {
        file: 'area-treino.webp',
        alt: 'Estações de agachamento com anilhas e piso de borracha',
        caption: 'Racks e plataformas',
        area: 'b',
        mobileAspect: '4 / 5',
      },
      {
        file: 'maquinas-detalhe.webp',
        alt: 'Detalhe de cabo e pilha de pesos de uma máquina de musculação',
        caption: 'Máquinas guiadas',
        area: 'c',
        mobileAspect: '1 / 1',
      },
      {
        file: 'ambiente-interno-02.webp',
        alt: 'Fileira de esteiras de frente para janelas amplas',
        caption: 'Cardio',
        area: 'd',
        mobileAspect: '3 / 2',
      },
    ],
    areas: [
      { title: 'Musculação', text: 'Máquinas guiadas e cabos para todos os grupos musculares.' },
      { title: 'Pesos livres', text: 'Halteres, barras e bancos ajustáveis.' },
      { title: 'Funcional', text: 'Área livre com kettlebells, elásticos e caixas.' },
      { title: 'Cardio', text: 'Esteiras, bikes e elípticos com vista para fora.' },
      { title: 'Vestiários', text: 'Chuveiros, armários e área de troca.' },
    ],
  },

  plans: {
    eyebrow: 'Planos',
    title: 'Escolha como *quer começar*',
    intro: 'Todos os planos dão acesso livre à academia no horário de funcionamento.',
    included: 'Incluso em todos: avaliação inicial, treino montado por professor e acompanhamento no salão.',
    note: 'Valores ilustrativos deste template demonstrativo. Condições reais são apresentadas na visita ou pelo WhatsApp.',
    items: [
      {
        id: 'mensal',
        name: 'Mensal',
        price: 'R$ 139',
        period: 'por mês',
        summary: 'Para experimentar a rotina sem compromisso longo.',
        features: ['Acesso livre à academia', 'Avaliação inicial', 'Treino individual'],
        cta: {
          label: 'Quero o Mensal',
          message: 'Olá! Vim pelo site da Ellus Academia e quero saber mais sobre o plano Mensal.',
        },
      },
      {
        id: 'trimestral',
        name: 'Trimestral',
        price: 'R$ 119',
        period: 'por mês, em 3 meses',
        summary: 'Tempo suficiente para criar o hábito e ver os primeiros resultados.',
        features: ['Tudo do Mensal', 'Reavaliação ao fim do ciclo', 'Ajuste do treino a cada 4 semanas'],
        tag: 'Indicado para começar',
        featured: true,
        cta: {
          label: 'Quero o Trimestral',
          message: 'Olá! Vim pelo site da Ellus Academia e quero saber mais sobre o plano Trimestral.',
        },
      },
      {
        id: 'anual',
        name: 'Anual',
        price: 'R$ 99',
        period: 'por mês, em 12 meses',
        summary: 'Para quem já decidiu que treinar faz parte da rotina.',
        features: ['Tudo do Trimestral', 'Reavaliações trimestrais', 'Congelamento de até 30 dias'],
        cta: {
          label: 'Quero o Anual',
          message: 'Olá! Vim pelo site da Ellus Academia e quero saber mais sobre o plano Anual.',
        },
      },
    ],
  },

  differentials: {
    eyebrow: 'Diferenciais',
    title: 'Pequenos detalhes, *todo dia*',
    image: {
      file: 'ambiente-interno-03.webp',
      alt: 'Recepção da Ellus Academia com balcão iluminado, poltronas e plantas',
      objectPosition: '40% 50%',
    },
    items: [
      {
        title: 'Poucos alunos por professor',
        text: 'A equipe do salão é dimensionada para que o professor consiga chegar até você em cada treino.',
      },
      {
        title: 'Treino no celular',
        text: 'Sua ficha atualizada em mãos, com séries, cargas e observações do professor.',
      },
      {
        title: 'Horários estendidos',
        text: 'Abrimos cedo e fechamos tarde para encaixar o treino antes ou depois do trabalho.',
      },
      {
        title: 'Ambiente cuidado',
        text: 'Limpeza ao longo do dia, ventilação e equipamentos revisados com frequência.',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'Como seria *treinar aqui*',
    disclaimer: 'Exemplos fictícios, criados para demonstrar esta seção do template. Não são depoimentos de alunos reais.',
    items: [
      {
        quote: 'Eu nunca tinha treinado. Na primeira semana já sabia usar cada aparelho, e isso fez eu continuar.',
        name: 'Mariana',
        detail: 'Exemplo fictício · aluna há 6 meses',
      },
      {
        quote: 'O professor corrige a execução no meio da série. Parei de sentir dor no ombro.',
        name: 'Carlos',
        detail: 'Exemplo fictício · aluno há 1 ano',
      },
      {
        quote: 'Consigo treinar às 6h e chegar no trabalho no horário. O treino é curto e bem feito.',
        name: 'Juliana',
        detail: 'Exemplo fictício · aluna há 3 meses',
      },
    ],
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Antes de *vir*',
    items: [
      {
        question: 'Posso conhecer a academia antes de fechar um plano?',
        answer: 'Sim. Agende uma visita pelo WhatsApp: mostramos o espaço, explicamos os planos e tiramos suas dúvidas sem compromisso.',
      },
      {
        question: 'Nunca treinei. Vou conseguir acompanhar?',
        answer: 'Vai. O treino começa pela avaliação inicial e é montado para o seu nível. O professor acompanha a execução no salão até você se sentir seguro.',
      },
      {
        question: 'Qual é o horário de funcionamento?',
        answer: 'De segunda a sexta, das 6h às 22h. Aos sábados, das 8h às 14h. Domingos e feriados, das 8h às 12h.',
      },
      {
        question: 'Preciso de atestado médico?',
        answer: 'Recomendamos uma avaliação médica antes de iniciar. Na matrícula você preenche um questionário de saúde e, se houver alguma condição específica, pedimos liberação médica.',
      },
      {
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Pix, cartão de débito e cartão de crédito. As condições de cada plano são explicadas na visita ou pelo WhatsApp.',
      },
      {
        question: 'Posso pausar o plano em caso de viagem ou lesão?',
        answer: 'No plano Anual é possível congelar por até 30 dias. Nos demais, conversamos caso a caso.',
      },
    ],
    more: {
      prompt: 'Ficou alguma dúvida?',
      label: 'Pergunte pelo WhatsApp',
      message: 'Olá! Vim pelo site da Ellus Academia e tenho uma dúvida:',
    },
  },

  contact: {
    eyebrow: 'Agende sua visita',
    title: 'Venha *conhecer* a Ellus',
    intro: 'Escolha o melhor horário e fale com a gente. Mostramos o espaço, apresentamos os professores e montamos com você o primeiro passo.',
    image: {
      file: 'ambiente-interno.webp',
      alt: '',
      objectPosition: '50% 40%',
    },
    direct: { label: 'Chamar no WhatsApp', message: VISIT },
    form: {
      title: 'Prefere que a gente organize a conversa?',
      goals: ['Começar a treinar', 'Ganhar massa muscular', 'Emagrecer', 'Condicionamento e saúde', 'Outro'],
      periods: ['Manhã', 'Tarde', 'Noite'],
      submitLabel: 'Enviar pelo WhatsApp',
      privacyNote: 'Ao enviar, o WhatsApp abre com sua mensagem pronta. Este site não armazena seus dados.',
    },
  },

  footer: {
    address: ['Rua Ilustrativa, 100 · Centro', 'Mairinque-SP'],
    hours: [
      { days: 'Segunda a sexta', time: '6h às 22h' },
      { days: 'Sábado', time: '8h às 14h' },
      { days: 'Domingo e feriados', time: '8h às 12h' },
    ],
    disclaimer: 'Ellus Academia é uma marca fictícia. Endereço, planos, valores e depoimentos são exemplos.',
    credit: 'Template demonstrativo desenvolvido pela VeyzaTech.',
  },
} satisfies SiteContent;
