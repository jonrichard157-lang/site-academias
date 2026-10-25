export interface LeadValues {
  name: string;
  goal: string;
  period: string;
  message: string;
}

export type LeadField = keyof LeadValues;
export type LeadErrors = Partial<Record<LeadField, string>>;

export const EMPTY_LEAD: LeadValues = { name: '', goal: '', period: '', message: '' };
export const MESSAGE_MAX = 400;

export function validateLead(values: LeadValues): LeadErrors {
  const errors: LeadErrors = {};
  const name = values.name.trim();
  if (!name) errors.name = 'Informe seu nome.';
  else if (name.length < 2) errors.name = 'O nome precisa ter pelo menos 2 letras.';
  if (!values.goal) errors.goal = 'Escolha um objetivo.';
  if (!values.period) errors.period = 'Escolha o melhor período para a visita.';
  if (values.message.length > MESSAGE_MAX) errors.message = `Use até ${MESSAGE_MAX} caracteres.`;
  return errors;
}

/** Texto enviado ao WhatsApp a partir do formulário. */
export function buildLeadMessage(gymName: string, values: LeadValues): string {
  const lines = [
    `Olá! Vim pelo site da ${gymName} e gostaria de agendar uma visita.`,
    '',
    `Nome: ${values.name.trim()}`,
    `Objetivo: ${values.goal}`,
    `Melhor período: ${values.period}`,
  ];
  const message = values.message.trim();
  if (message) lines.push(`Mensagem: ${message}`);
  return lines.join('\n');
}
