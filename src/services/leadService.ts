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

export interface TalentApplication {
  name: string
  email: string
  phone: string
  position: string
  linkedin: string
  message?: string
  createdAt?: string
}

export const leadService = {
  async submitContact(
    data: ContactLead,
  ): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 800)) // Simular latência de salvamento

    const lead: ContactLead = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    // Simular gravação (salva no localStorage para testes)
    const currentLeads = JSON.parse(
      localStorage.getItem('oneb_contact_leads') || '[]',
    ) as ContactLead[]
    currentLeads.push(lead)
    localStorage.setItem('oneb_contact_leads', JSON.stringify(currentLeads))

    console.log('[Lead Service] Novo Lead de Contato Salvo:', lead)
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    }
  },

  async subscribeNewsletter(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const lead: NewsletterLead = {
      email,
      createdAt: new Date().toISOString(),
    }

    const currentLeads = JSON.parse(
      localStorage.getItem('oneb_newsletter_leads') || '[]',
    ) as NewsletterLead[]
    if (currentLeads.some((l: NewsletterLead) => l.email === email)) {
      return {
        success: true,
        message: 'Este e-mail já está cadastrado em nossa newsletter!',
      }
    }

    currentLeads.push(lead)
    localStorage.setItem('oneb_newsletter_leads', JSON.stringify(currentLeads))

    console.log('[Lead Service] Nova Inscrição de Newsletter:', lead)
    return {
      success: true,
      message:
        'Inscrição realizada com sucesso! Obrigado por acompanhar a OneB.',
    }
  },

  async scheduleMeeting(
    data: MeetingLead,
  ): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const lead: MeetingLead = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    const currentLeads = JSON.parse(
      localStorage.getItem('oneb_meeting_leads') || '[]',
    ) as MeetingLead[]
    currentLeads.push(lead)
    localStorage.setItem('oneb_meeting_leads', JSON.stringify(currentLeads))

    console.log('[Lead Service] Reunião Agendada com Sucesso:', lead)
    return {
      success: true,
      message: `Reunião agendada com sucesso para ${data.date} às ${data.timeSlot}!`,
    }
  },

  async submitTalentApplication(
    data: TalentApplication,
  ): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const application: TalentApplication = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    const currentApplications = JSON.parse(
      localStorage.getItem('oneb_talent_applications') || '[]',
    ) as TalentApplication[]
    currentApplications.push(application)
    localStorage.setItem(
      'oneb_talent_applications',
      JSON.stringify(currentApplications),
    )

    console.log(
      '[Lead Service] Nova Candidatura no Banco de Talentos:',
      application,
    )
    return {
      success: true,
      message:
        'Candidatura recebida com sucesso! Manteremos seu perfil em nosso banco de talentos.',
    }
  },
}
