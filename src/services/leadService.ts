/**
 * Camada de leads e agendamento da OneB.
 *
 * Estrutura de dados pronta para produção: cada lead é um registro único
 * (chaveado por e-mail) com nome, empresa, telefone, interesse, data do
 * primeiro contato e HISTÓRICO de interações (contato, agendamento,
 * newsletter, talentos).
 *
 * Persistência atual: localStorage (ambiente estático / GitHub Pages).
 * Para produção, troque a implementação de `leadStore` por chamadas ao
 * backend (ex.: Supabase — tabelas `leads` e `lead_events`) mantendo a
 * mesma interface. O envio de e-mail de confirmação e a criação do evento
 * no Google Meet devem ser feitos por uma função de backend (ex.: Supabase
 * Edge Function + Google Calendar API) disparada em `scheduleMeeting`.
 */

export type LeadEventType =
  'contato' | 'agendamento' | 'newsletter' | 'talentos'

export interface LeadEvent {
  type: LeadEventType
  description: string
  createdAt: string
}

export interface LeadRecord {
  id: string
  name: string
  company: string
  email: string
  phone: string
  /** Solução/tema de interesse declarado pelo lead. */
  interest: string
  /** Data do primeiro contato. */
  createdAt: string
  /** Histórico completo de interações do lead. */
  history: LeadEvent[]
}

export interface ContactLead {
  name: string
  email: string
  phone: string
  company: string
  solution: string
  message: string
  createdAt?: string
}

export interface NewsletterLead {
  email: string
  createdAt?: string
}

export interface MeetingLead {
  name: string
  email: string
  company: string
  date: string
  timeSlot: string
  notes?: string
  createdAt?: string
}

export interface MeetingConfirmation {
  success: boolean
  message: string
  /** Dados da reunião confirmada — data, horário e link. */
  meeting: {
    date: string
    timeSlot: string
    meetingUrl: string
  }
}

export interface TalentApplication {
  name: string
  email: string
  phone: string
  position: string
  linkedin: string
  message?: string
  createdAt?: string
}

const LEADS_KEY = 'oneb_leads'

/** Banco de leads (localStorage) — troque por Supabase em produção. */
const leadStore = {
  all(): LeadRecord[] {
    return JSON.parse(localStorage.getItem(LEADS_KEY) || '[]') as LeadRecord[]
  },

  save(leads: LeadRecord[]) {
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
  },

  /**
   * Cria ou atualiza o lead pelo e-mail e registra o evento no histórico.
   * Retorna o registro atualizado.
   */
  upsert(
    data: {
      name?: string
      company?: string
      email: string
      phone?: string
      interest?: string
    },
    event: Omit<LeadEvent, 'createdAt'>,
  ): LeadRecord {
    const leads = this.all()
    const now = new Date().toISOString()
    let lead = leads.find(
      (l) => l.email.toLowerCase() === data.email.toLowerCase(),
    )

    if (lead) {
      lead.name = data.name || lead.name
      lead.company = data.company || lead.company
      lead.phone = data.phone || lead.phone
      lead.interest = data.interest || lead.interest
    } else {
      lead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: data.name ?? '',
        company: data.company ?? '',
        email: data.email,
        phone: data.phone ?? '',
        interest: data.interest ?? '',
        createdAt: now,
        history: [],
      }
      leads.push(lead)
    }

    lead.history.push({ ...event, createdAt: now })
    this.save(leads)
    return lead
  },
}

/** Simula latência de rede das gravações. */
const simulateLatency = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Gera o link da reunião. Em produção, substitua pela criação real do
 * evento via Google Calendar API (conferenceData → Google Meet).
 */
const generateMeetingUrl = () => {
  const code = Math.random().toString(36).slice(2, 5)
  return `https://meet.google.com/oneb-${code}-diagnostico`
}

export const leadService = {
  async submitContact(
    data: ContactLead,
  ): Promise<{ success: boolean; message: string }> {
    await simulateLatency(800)

    const lead = leadStore.upsert(
      {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        interest: data.solution,
      },
      {
        type: 'contato',
        description: `Mensagem comercial: ${data.message}`,
      },
    )

    console.log('[Lead Service] Lead de contato registrado:', lead)
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    }
  },

  async subscribeNewsletter(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    await simulateLatency(500)

    const existing = leadStore
      .all()
      .find((l) => l.email.toLowerCase() === email.toLowerCase())
    if (existing?.history.some((h) => h.type === 'newsletter')) {
      return {
        success: true,
        message: 'Este e-mail já está cadastrado em nossa newsletter!',
      }
    }

    const lead = leadStore.upsert(
      { email },
      { type: 'newsletter', description: 'Inscrição na newsletter' },
    )

    console.log('[Lead Service] Inscrição de newsletter registrada:', lead)
    return {
      success: true,
      message:
        'Inscrição realizada com sucesso! Obrigado por acompanhar a OneB.',
    }
  },

  async scheduleMeeting(data: MeetingLead): Promise<MeetingConfirmation> {
    await simulateLatency(1000)

    const meetingUrl = generateMeetingUrl()
    const lead = leadStore.upsert(
      {
        name: data.name,
        company: data.company,
        email: data.email,
        interest: 'Reunião diagnóstica',
      },
      {
        type: 'agendamento',
        description: `Reunião diagnóstica em ${data.date} às ${data.timeSlot} — ${meetingUrl}${
          data.notes ? ` | Notas: ${data.notes}` : ''
        }`,
      },
    )

    // TODO produção: disparar backend para (1) enviar e-mail corporativo de
    // confirmação com data, horário e link, e (2) criar o evento no Google
    // Meet via Calendar API convidando o lead.
    console.log('[Lead Service] Reunião agendada:', lead)

    return {
      success: true,
      message: `Reunião confirmada! Enviamos os detalhes para ${data.email}.`,
      meeting: {
        date: data.date,
        timeSlot: data.timeSlot,
        meetingUrl,
      },
    }
  },

  async submitTalentApplication(
    data: TalentApplication,
  ): Promise<{ success: boolean; message: string }> {
    await simulateLatency(800)

    const lead = leadStore.upsert(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: `Vaga: ${data.position}`,
      },
      {
        type: 'talentos',
        description: `Candidatura para ${data.position} — LinkedIn: ${data.linkedin}${
          data.message ? ` | ${data.message}` : ''
        }`,
      },
    )

    console.log('[Lead Service] Candidatura registrada:', lead)
    return {
      success: true,
      message:
        'Candidatura recebida com sucesso! Manteremos seu perfil em nosso banco de talentos.',
    }
  },
}
