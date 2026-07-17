export interface SolutionMetric {
  value: string
  label: string
}

export interface SolutionProcessStep {
  title: string
  description: string
}

export interface SolutionUseCase {
  title: string
  description: string
}

export interface Solution {
  slug: string
  title: string
  icon: string
  /** Illustration component key from SolutionIllustrations. */
  illustration:
    | 'IllustrationBI'
    | 'IllustrationFabric'
    | 'IllustrationEngineering'
    | 'IllustrationAI'
    | 'IllustrationConsulting'
  /** 'primary' or 'secondary' accent variant for this solution (both render in teal). */
  accent: 'primary' | 'secondary'
  /** Fotografia real de cenário de aplicação (cards de especialidades). */
  photo: string
  tagline: string
  description: string
  fullDescription: string
  benefits: string[]
  technologies: string[]
  metrics: SolutionMetric[]
  process: SolutionProcessStep[]
  deliverables: string[]
  useCases: SolutionUseCase[]
  /** Rich example shown inside a modal ("ver exemplo real"). */
  example: {
    title: string
    scenario: string
    highlights: string[]
    /** Demonstração em vídeo exibida no modal "Ver exemplo". */
    video: {
      poster: string
      src: string
      duration: string
    }
  }
  faqs: { question: string; answer: string }[]
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  category: string
  summary: string
  challenge: string
  /** Como o problema foi identificado (diagnóstico). */
  discovery: string
  solution: string
  impact: string
  architecture: string[]
  /** Prints, dashboards e exemplos práticos exibidos no estudo de caso. */
  gallery: { src: string; caption: string }[]
  kpis: { label: string; value: string }[]
  beforeAfter: { label: string; before: string; after: string }[]
  quote: { text: string; author: string; role: string }
  duration: string
  teamSize: string
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: {
    name: string
    role: string
    avatar: string
  }
  image: string
}

export const solutionsData: Solution[] = [
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence & Analytics',
    icon: 'BarChart3',
    description:
      'Transformação de dados complexos em dashboards executivos de alta performance para tomada de decisões estratégicas em tempo real.',
    fullDescription:
      'Nossa solução de Business Intelligence cobre desde o mapeamento de KPIs de negócio até o desenvolvimento de dashboards executivos refinados no Power BI. Focamos em performance de carga, modelagem estrela (Star Schema) robusta e design de relatórios intuitivo para que a liderança tome decisões baseadas em fatos, não em intuição.',
    benefits: [
      'Visualização executiva centralizada dos principais KPIs da empresa.',
      'Redução do tempo gasto na elaboração de relatórios manuais.',
      'Modelagem de dados otimizada e cálculos complexos em DAX de alto desempenho.',
      'Criação de cultura Data-Driven dentro de todos os departamentos.',
    ],
    technologies: ['Power BI', 'SQL Server', 'DAX', 'Power Query', 'SSAS'],
    illustration: 'IllustrationBI',
    accent: 'primary',
    photo:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=900&auto=format&fit=crop',
    tagline: 'Dashboards executivos que a diretoria realmente usa.',
    metrics: [
      { value: '-70%', label: 'Tempo de elaboração de relatórios' },
      { value: '<2s', label: 'Tempo de carga dos painéis' },
      { value: '100%', label: 'Métricas centralizadas e auditáveis' },
    ],
    process: [
      {
        title: 'Mapeamento de KPIs',
        description:
          'Entrevistamos os stakeholders para definir os indicadores que realmente movem o negócio.',
      },
      {
        title: 'Modelagem Star Schema',
        description:
          'Estruturamos tabelas fato e dimensão otimizadas para performance e clareza analítica.',
      },
      {
        title: 'Desenvolvimento DAX',
        description:
          'Criamos medidas e cálculos complexos com foco em desempenho e reuso.',
      },
      {
        title: 'Design & Governança',
        description:
          'Publicamos dashboards refinados com RLS, versionamento e distribuição controlada.',
      },
    ],
    deliverables: [
      'Modelo semântico documentado no Power BI',
      'Dashboards executivos responsivos',
      'Dicionário de métricas e medidas DAX',
      'Configuração de atualização agendada e RLS',
      'Treinamento de uso para os times de negócio',
    ],
    useCases: [
      {
        title: 'Diretoria Comercial',
        description:
          'Acompanhamento de metas, funil e performance por região em tempo quase real.',
      },
      {
        title: 'Financeiro',
        description:
          'Fechamento mensal, DRE gerencial e análise de margem por linha de produto.',
      },
      {
        title: 'Operações',
        description:
          'Monitoramento de produtividade, SLA e indicadores operacionais consolidados.',
      },
    ],
    example: {
      title: 'Painel Executivo de Vendas — Rede Varejista',
      scenario:
        'Uma rede com 40 lojas consolidava vendas em planilhas manuais, com números divergentes entre áreas. Centralizamos as fontes num modelo Star Schema e entregamos um painel executivo único.',
      highlights: [
        'Visão consolidada de faturamento, ticket médio e ruptura por loja',
        'Drill-through de região → loja → vendedor → produto',
        'Alertas visuais de metas e comparativo YoY automático',
        'Atualização a cada 30 minutos via gateway corporativo',
      ],
      video: {
        poster:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '2:40',
      },
    },
    faqs: [
      {
        question: 'Os relatórios atualizam em tempo real?',
        answer:
          'Sim, configuramos atualizações agendadas ou em tempo real (DirectQuery / Push Datasets) dependendo da necessidade do negócio e da infraestrutura de banco de dados disponível.',
      },
      {
        question: 'Como funciona o licenciamento do Power BI?',
        answer:
          'Ajudamos sua empresa a desenhar o melhor modelo de licenciamento (Pro, Premium Per User ou Premium Capacity), maximizando a distribuição de relatórios com o menor custo possível.',
      },
    ],
  },
  {
    slug: 'microsoft-fabric',
    title: 'Microsoft Fabric',
    icon: 'Layers',
    description:
      'Implementação da plataforma analítica unificada da Microsoft para integrar Data Factory, Synapse e Power BI em um único ecossistema SaaS.',
    fullDescription:
      'O Microsoft Fabric redefine a análise de dados moderna ao consolidar armazenamento, engenharia de dados, ciência de dados e Business Intelligence sob o OneLake. Nós implementamos a plataforma de ponta a ponta, configurando Lakehouses, Data Warehouses e otimizando custos por meio de capacidades sob demanda.',
    benefits: [
      'Eliminação de silos de dados através do OneLake (armazenamento único no formato Delta/Parquet).',
      'Integração nativa com Power BI através do DirectLake (sem necessidade de carregar dados na memória).',
      'Ambiente unificado para Engenheiros, Cientistas e Analistas de dados.',
      'Governança centralizada e segurança de nível corporativo integrada.',
    ],
    technologies: [
      'Microsoft Fabric',
      'OneLake',
      'Synapse Data Engineering',
      'Synapse Data Warehouse',
      'Data Factory',
    ],
    illustration: 'IllustrationFabric',
    accent: 'secondary',
    photo:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
    tagline:
      'Toda a sua análise de dados unificada em uma única plataforma SaaS.',
    metrics: [
      { value: '1', label: 'Camada de armazenamento única (OneLake)' },
      { value: '15x', label: 'Ganho de velocidade com DirectLake' },
      { value: '-32%', label: 'Custo de nuvem vs. stack fragmentada' },
    ],
    process: [
      {
        title: 'Assessment do Ambiente',
        description:
          'Avaliamos as fontes atuais, silos e cargas de trabalho para desenhar a capacidade ideal.',
      },
      {
        title: 'Estruturação do OneLake',
        description:
          'Organizamos as camadas Bronze, Silver e Gold em formato Delta/Parquet.',
      },
      {
        title: 'Pipelines & Warehouse',
        description:
          'Implementamos ingestão via Data Factory e modelagem analítica no Synapse.',
      },
      {
        title: 'DirectLake & Governança',
        description:
          'Conectamos o Power BI via DirectLake e configuramos segurança e monitoramento de custos.',
      },
    ],
    deliverables: [
      'Workspace Fabric configurado com capacidade dimensionada',
      'Lakehouse em camadas medalhão (Bronze/Silver/Gold)',
      'Pipelines de ingestão versionados no Data Factory',
      'Modelo semântico DirectLake conectado ao Power BI',
      'Painel de monitoramento de consumo de capacidade',
    ],
    useCases: [
      {
        title: 'Consolidação de Silos',
        description:
          'Unificação de bases dispersas (ERP, CRM, arquivos) em um único ponto de verdade.',
      },
      {
        title: 'Fechamento Acelerado',
        description:
          'Relatórios de fechamento que passam de dias para minutos com DirectLake.',
      },
      {
        title: 'Escala Sob Demanda',
        description:
          'Capacidade compartilhada entre engenharia, ciência de dados e BI sem provisionar servidores.',
      },
    ],
    example: {
      title: 'Migração de Modern Data Stack — Serviços Financeiros',
      scenario:
        'Uma financeira levava mais de 5 dias no fechamento mensal por consultas pesadas em bancos separados. Migramos tudo para o Fabric com OneLake e DirectLake.',
      highlights: [
        'Ingestão contínua de 12 fontes via Data Factory',
        'Camadas Silver/Gold modeladas no Synapse Data Warehouse',
        'Relatórios renderizando em menos de 2 segundos via DirectLake',
        'Redução de 32% nos custos de computação em nuvem',
      ],
      video: {
        poster:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '3:10',
      },
    },
    faqs: [
      {
        question: 'O Microsoft Fabric substitui o Azure Synapse tradicional?',
        answer:
          'Sim, o Fabric é a evolução do Synapse, encapsulando-o em uma experiência SaaS muito mais integrada, simplificada e com melhor custo-benefício.',
      },
      {
        question: 'É possível integrar fontes externas ao OneLake?',
        answer:
          'Com certeza. Usamos o recurso de Shortcuts (Atalhos) do OneLake para conectar dados do AWS S3, Google Cloud Storage ou bancos locais diretamente, sem precisar copiá-los fisicamente.',
      },
    ],
  },
  {
    slug: 'engenharia-de-dados',
    title: 'Engenharia de Dados & DW',
    icon: 'Database',
    description:
      'Construção de pipelines de ETL/ELT escaláveis, modelagem de Data Warehouse moderno (SQL Server/Cloud) e automação de cargas.',
    fullDescription:
      'Estruturamos as fundações de dados para a sua inteligência de negócios. Desenvolvemos pipelines robustos de extração, transformação e carga (ETL/ELT), estruturando bases limpas em Data Warehouses seguros, garantindo governança, qualidade da informação e performance.',
    benefits: [
      'Infraestrutura de dados confiável, estável e livre de inconsistências.',
      'Cargas rápidas de dados estruturados e não estruturados de múltiplas origens (CRMs, ERPs, APIs).',
      'Histórico completo de dados mantido para análises retrospectivas (Slowly Changing Dimensions).',
      'Monitoramento automatizado de falhas em tempo real nos pipelines.',
    ],
    technologies: [
      'SQL Server',
      'Python',
      'Apache Spark',
      'Azure Data Factory',
      'dbt (data build tool)',
      'Airflow',
    ],
    illustration: 'IllustrationEngineering',
    accent: 'primary',
    photo:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop',
    tagline:
      'A fundação de dados confiável sobre a qual toda decisão se apoia.',
    metrics: [
      { value: '99.9%', label: 'SLA de sucesso nas cargas' },
      { value: '24/7', label: 'Monitoramento automatizado de pipelines' },
      { value: '+50', label: 'Fontes integradas em projetos reais' },
    ],
    process: [
      {
        title: 'Descoberta das Fontes',
        description:
          'Mapeamos origens (ERPs, CRMs, APIs, arquivos) e definimos a estratégia de ingestão.',
      },
      {
        title: 'Ingestão & Staging',
        description:
          'Construímos pipelines resilientes de extração e carga com controle de falhas.',
      },
      {
        title: 'Transformação (ELT)',
        description:
          'Modelamos dados limpos e testados com dbt e Spark na camada analítica.',
      },
      {
        title: 'Orquestração & Observabilidade',
        description:
          'Agendamos e monitoramos tudo com Airflow, com alertas proativos de falha.',
      },
    ],
    deliverables: [
      'Pipelines ETL/ELT versionados e documentados',
      'Data Warehouse modelado e otimizado',
      'Testes de qualidade de dados automatizados',
      'Orquestração com alertas e logs centralizados',
      'Documentação de linhagem dos dados',
    ],
    useCases: [
      {
        title: 'Integração de Sistemas',
        description:
          'Unificar dados de ERP, CRM e planilhas em uma base analítica consistente.',
      },
      {
        title: 'Histórico Confiável',
        description:
          'Manter versões históricas (SCD) para análises retrospectivas precisas.',
      },
      {
        title: 'Cargas Automatizadas',
        description:
          'Eliminar processos manuais de atualização com pipelines agendados e monitorados.',
      },
    ],
    example: {
      title: 'Pipeline Preditivo de Demanda — Varejo',
      scenario:
        'Um varejista dependia de previsões manuais e imprecisas de reabastecimento. Construímos um pipeline que alimenta um modelo preditivo diariamente.',
      highlights: [
        'Extração do histórico de vendas do ERP via Airflow',
        'Limpeza e engenharia de features em Python',
        'Carga estruturada em SQL Server Data Warehouse',
        'Saídas preditivas publicadas automaticamente no Power BI',
      ],
      video: {
        poster:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '2:15',
      },
    },
    faqs: [
      {
        question: 'Qual a diferença entre Data Lake e Data Warehouse?',
        answer:
          'O Data Lake armazena dados brutos (estruturados ou não) em sua forma original para alta escalabilidade. O Data Warehouse armazena dados altamente estruturados e refinados, otimizados para consultas analíticas rápidas de BI.',
      },
      {
        question: 'Como é garantida a segurança dos dados?',
        answer:
          'Implementamos criptografia em trânsito e em repouso, mascaramento de dados confidenciais (Data Masking) e controle de acesso baseado em funções (RBAC), seguindo rigorosamente as diretrizes da LGPD.',
      },
    ],
  },
  {
    slug: 'inteligencia-artificial',
    title: 'Inteligência Artificial & ML',
    icon: 'Brain',
    description:
      'Modelos preditivos, Machine Learning aplicado a negócios e agentes de IA personalizados integrados aos sistemas corporativos.',
    fullDescription:
      'Vamos além do retrospectivo. Desenvolvemos inteligência ativa para prever tendências, otimizar estoques, detectar fraudes, classificar clientes (churn) e criar assistentes virtuais de IA generativa personalizados integrados aos repositórios de dados internos da sua empresa.',
    benefits: [
      'Modelos preditivos alinhados a objetivos de negócio reais.',
      'Automação inteligente de processos decisórios complexos.',
      'Criação de assistentes de IA (RAG) baseados nos seus próprios documentos e bases SQL.',
      'Identificação proativa de oportunidades e gargalos operacionais.',
    ],
    technologies: [
      'Python',
      'scikit-learn',
      'TensorFlow',
      'LangChain',
      'OpenAI API',
      'Pandas',
    ],
    illustration: 'IllustrationAI',
    accent: 'secondary',
    photo:
      'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=900&auto=format&fit=crop',
    tagline: 'Inteligência ativa que prevê, classifica e automatiza decisões.',
    metrics: [
      { value: '94%', label: 'Acurácia média em modelos preditivos' },
      { value: '100%', label: 'Dados processados em ambiente privado' },
      { value: '24/7', label: 'Assistentes de IA sempre disponíveis' },
    ],
    process: [
      {
        title: 'Definição do Problema',
        description:
          'Traduzimos o objetivo de negócio em um problema de ML mensurável e viável.',
      },
      {
        title: 'Preparação dos Dados',
        description:
          'Coletamos, limpamos e realizamos engenharia de features sobre bases confiáveis.',
      },
      {
        title: 'Treinamento & Validação',
        description:
          'Treinamos, comparamos e validamos modelos com métricas alinhadas ao negócio.',
      },
      {
        title: 'Deploy & Monitoramento',
        description:
          'Publicamos via API, integramos aos sistemas e monitoramos drift de performance.',
      },
    ],
    deliverables: [
      'Modelo preditivo treinado e validado',
      'API de inferência integrada aos sistemas',
      'Assistente de IA (RAG) sobre bases privadas',
      'Painel de acompanhamento de métricas do modelo',
      'Documentação técnica e transferência de conhecimento',
    ],
    useCases: [
      {
        title: 'Previsão de Demanda',
        description:
          'Antecipar vendas e otimizar estoque com séries temporais e ML.',
      },
      {
        title: 'Churn & Classificação',
        description:
          'Identificar clientes com risco de cancelamento antes que aconteça.',
      },
      {
        title: 'Assistente Corporativo',
        description:
          'Chatbot RAG que responde sobre documentos e bases internas com segurança.',
      },
    ],
    example: {
      title: 'Assistente de IA sobre Base SQL — Indústria',
      scenario:
        'Executivos queriam consultar KPIs de produção em linguagem natural, sem esperar por relatórios. Construímos um assistente RAG conectado ao Data Warehouse.',
      highlights: [
        'Arquitetura RAG com Azure OpenAI em ambiente privado',
        'LangChain convertendo perguntas em consultas SQL seguras',
        'Respeito às permissões RLS do usuário logado',
        'Respostas em segundos, sem vazar dados para modelos públicos',
      ],
      video: {
        poster:
          'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '2:55',
      },
    },
    faqs: [
      {
        question:
          'Preciso de uma equipe de cientistas de dados para adotar IA?',
        answer:
          'Não. Nós desenvolvemos os modelos, criamos as APIs de integração e os painéis de visualização. Entregamos a solução ponta a ponta e capacitamos sua equipe interna.',
      },
      {
        question:
          'Os dados de nossa empresa serão usados para treinar IAs públicas?',
        answer:
          'Não. Desenvolvemos soluções usando infraestrutura dedicada de nuvem privada (ex: Azure OpenAI) ou modelos de código aberto locais (Llama), garantindo sigilo absoluto dos seus dados.',
      },
    ],
  },
  {
    slug: 'consultoria',
    title: 'Consultoria Estratégica & Mentoria',
    icon: 'Compass',
    description:
      'Diagnóstico de maturidade analítica, arquitetura de dados moderna e mentoria técnica corporativa para capacitação de times.',
    fullDescription:
      'Ajudamos empresas a estruturarem suas estratégias de dados corporativas. Avaliamos a maturidade analítica atual, propomos a arquitetura tecnológica ideal e realizamos mentorias e treinamentos especializados para acelerar a curva de aprendizado das suas equipes internas.',
    benefits: [
      'Evita investimentos incorretos em ferramentas ou infraestruturas inadequadas.',
      'Desenho de arquitetura focado em custo-benefício e expansão futura.',
      'Capacitação acelerada do time interno com profissionais que vivem o mercado de dados.',
      'Aceleração de projetos travados por desafios de modelagem ou governança.',
    ],
    technologies: [
      'Data Governance',
      'Cloud Architecture',
      'Mentoria DAX/SQL',
      'Assessment Tecnológico',
    ],
    illustration: 'IllustrationConsulting',
    accent: 'primary',
    photo:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop',
    tagline:
      'A estratégia de dados certa antes de investir na ferramenta errada.',
    metrics: [
      { value: '360°', label: 'Diagnóstico de maturidade analítica' },
      { value: '4-6 sem', label: 'Do assessment ao plano de ação' },
      { value: '+30', label: 'Times capacitados em dados' },
    ],
    process: [
      {
        title: 'Assessment de Maturidade',
        description:
          'Avaliamos pessoas, processos e tecnologia para medir o estágio analítico atual.',
      },
      {
        title: 'Desenho de Arquitetura',
        description:
          'Propomos a arquitetura ideal com foco em custo-benefício e crescimento futuro.',
      },
      {
        title: 'Roadmap Priorizado',
        description:
          'Construímos um plano de ação sequenciado por impacto e esforço.',
      },
      {
        title: 'Mentoria & Capacitação',
        description:
          'Treinamos os times internos com casos reais para acelerar a autonomia.',
      },
    ],
    deliverables: [
      'Relatório de maturidade analítica',
      'Desenho de arquitetura de dados recomendada',
      'Roadmap priorizado de evolução',
      'Plano de governança e boas práticas',
      'Trilhas de capacitação personalizadas',
    ],
    useCases: [
      {
        title: 'Antes de Investir',
        description:
          'Evitar compras equivocadas de ferramentas e infraestrutura inadequada.',
      },
      {
        title: 'Projeto Travado',
        description:
          'Destravar iniciativas paradas por desafios de modelagem ou governança.',
      },
      {
        title: 'Capacitação de Time',
        description:
          'Acelerar a curva de aprendizado da equipe interna com mentoria especializada.',
      },
    ],
    example: {
      title: 'Programa de Governança & Self-Service — Metalúrgica',
      scenario:
        'Uma metalúrgica tinha mais de 200 relatórios não homologados gerando métricas divergentes. Estruturamos um programa de governança e capacitação.',
      highlights: [
        'Auditoria completa dos relatórios via API de metadados',
        'Dataset único compartilhado com RLS por filial',
        'Fluxo de homologação de novos relatórios',
        'Workshops presenciais de capacitação para líderes',
      ],
      video: {
        poster:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '1:50',
      },
    },
    faqs: [
      {
        question:
          'Como funciona o diagnóstico inicial de maturidade analítica?',
        answer:
          'Realizamos entrevistas com os stakeholders chave e engenheiros, avaliamos os bancos de dados atuais e criamos um relatório técnico detalhado com as vulnerabilidades encontradas e o plano de ação sugerido.',
      },
      {
        question: 'A consultoria inclui treinamentos personalizados?',
        answer:
          'Sim, customizamos os treinamentos focando nos desafios reais do dia a dia da sua empresa, usando suas próprias bases de dados fictícias ou higienizadas como exemplos práticos.',
      },
    ],
  },
]

export const casesData: CaseStudy[] = [
  {
    slug: 'otimizacao-logistica-retail',
    title: 'Redução de Custos Logísticos com Modelagem Preditiva',
    client: 'Multivarejo Brasil',
    industry: 'Varejo',
    category: 'Varejo / IA',
    summary:
      'Construção de uma solução preditiva de demanda e roteirização inteligente, gerando redução de custos na última milha.',
    challenge:
      'A Multivarejo enfrentava custos crescentes de combustível e devoluções devido a previsões manuais e ineficientes de reabastecimento nas lojas físicas do Sudeste. Cada filial calculava sua própria previsão de demanda em planilhas isoladas, sem visibilidade da matriz.',
    discovery:
      'Durante o diagnóstico gratuito, cruzamos o custo de frete por rota com o erro de previsão de cada loja e mostramos que 60% dos fretes emergenciais nasciam de previsões com desvio acima de 30%. O problema não era o transporte — era a previsão.',
    solution:
      'Implementamos pipelines de dados usando Python e SQL Server para alimentar um modelo preditivo baseado em séries temporais (LightGBM). Conectamos as saídas a um painel dinâmico do Power BI integrado no centro de distribuição regional.',
    impact:
      'Em três meses de operação, o modelo preditivo se tornou a fonte única de verdade para reabastecimento das 42 lojas do Sudeste. A diretoria de operações passou a revisar rotas semanalmente com base em dados, não em intuição — liberando a equipe de planejamento para focar em exceções, não em cálculos manuais.',
    architecture: [
      'Extração de histórico de vendas do ERP corporativo via Airflow.',
      'Armazenamento e limpeza de dados estruturados em SQL Server Data Warehouse.',
      'Pipeline em Python para engenharia de features e treinamento do modelo preditivo.',
      'Distribuição dos insights preditivos via painel em Power BI no painel operacional.',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        caption: 'Painel operacional de demanda prevista por loja e SKU',
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Acompanhamento de acurácia do modelo vs. baseline manual',
      },
      {
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Rotas de última milha replanejadas semanalmente com dados',
      },
    ],
    kpis: [
      { label: 'Redução Custo Logístico', value: '18%' },
      { label: 'Acurácia de Previsão', value: '94.2%' },
      { label: 'Redução de Ruptura de Estoque', value: '27%' },
    ],
    beforeAfter: [
      {
        label: 'Previsão de demanda',
        before: 'Planilha manual por loja',
        after: 'Modelo preditivo centralizado',
      },
      {
        label: 'Ciclo de replanejamento',
        before: '1x por mês',
        after: 'Semanal, orientado a dados',
      },
      {
        label: 'Custo de última milha',
        before: 'Baseline 100%',
        after: '82% do baseline',
      },
    ],
    quote: {
      text: 'Pela primeira vez, o time de operações e o time de dados falam a mesma língua. Deixamos de discutir "achismo" e passamos a discutir o modelo.',
      author: 'Renata Furlan',
      role: 'Diretora de Operações, Multivarejo Brasil',
    },
    duration: '4 meses',
    teamSize: '3 especialistas OneB',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'migracao-modern-data-stack-fabric',
    title: 'Migração para Modern Data Stack com Microsoft Fabric',
    client: 'Financeira Alfa',
    industry: 'Serviços Financeiros',
    category: 'Serviços Financeiros / Fabric',
    summary:
      'Centralização de bases legadas e silos de dados em um Lakehouse unificado com Microsoft Fabric DirectLake.',
    challenge:
      'Relatórios de fechamento mensal demoravam mais de 5 dias devido a consultas pesadas em múltiplos bancos relacionais separados e lentidão nos processos clássicos de ETL. O time financeiro só descobria inconsistências no dia do fechamento, sem margem para corrigir.',
    discovery:
      'O assessment de arquitetura mapeou 12 bancos isolados e mediu o tempo real de cada etapa do fechamento: 70% dos 5 dias eram espera de cargas noturnas e reconciliação manual entre sistemas — não análise.',
    solution:
      'Desenhamos e executamos a migração para o Microsoft Fabric. Consolidamos os dados no OneLake com formato Delta Parquet. Criamos views analíticas conectadas ao Power BI via DirectLake, permitindo a renderização dos painéis em menos de 2 segundos.',
    impact:
      'O fechamento contábil deixou de ser um evento de risco mensal para se tornar um processo previsível e monitorado em tempo real. A área de compliance passou a validar números com uma semana de antecedência, e a economia de capacidade de nuvem financiou a expansão do time de dados.',
    architecture: [
      'Ingestão contínua usando Data Factory no Microsoft Fabric.',
      'Armazenamento único no OneLake em tabelas Delta organizadas na camada Silver/Gold.',
      'Modelagem analítica executada em Synapse Data Warehouse dentro do Fabric.',
      'Acesso aos relatórios pelo Power BI utilizando conexão ultra rápida DirectLake.',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
        caption: 'War room da migração: cutover por domínio de dados',
      },
      {
        src: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
        caption: 'Monitoramento das camadas Bronze/Silver/Gold no OneLake',
      },
      {
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop',
        caption: 'Painel de fechamento renderizando em <2s via DirectLake',
      },
    ],
    kpis: [
      { label: 'Tempo de Fechamento Mensal', value: '1 dia' },
      { label: 'Velocidade de Atualização', value: '15x +' },
      { label: 'Redução em Custos de Nuvem', value: '32%' },
    ],
    beforeAfter: [
      { label: 'Fechamento contábil', before: '5+ dias', after: '1 dia' },
      {
        label: 'Atualização de painéis',
        before: 'Overnight batch',
        after: 'DirectLake em segundos',
      },
      {
        label: 'Infraestrutura de nuvem',
        before: 'Capacidades isoladas por área',
        after: 'Capacidade única compartilhada',
      },
    ],
    quote: {
      text: 'Trocamos cinco dias de incerteza por um dashboard que atualiza antes da nossa primeira reunião da manhã.',
      author: 'Marcelo Andrade',
      role: 'CFO, Financeira Alfa',
    },
    duration: '5 meses',
    teamSize: '4 especialistas OneB',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'plataforma-self-service-bi-industria',
    title: 'Cultura de Self-Service BI e Governança Corporativa',
    client: 'Metalúrgica Imperial',
    industry: 'Indústria',
    category: 'Indústria / BI',
    summary:
      'Estruturação de governança de dados, auditoria de relatórios e treinamento em larga escala para capacitação de líderes industriais.',
    challenge:
      'A metalúrgica possuía mais de 200 relatórios não homologados criados individualmente, gerando divergência em métricas de produtividade fundamentais. Cada planta industrial reportava um número diferente para o mesmo indicador de OEE.',
    discovery:
      'A auditoria via API de metadados do Power BI revelou 200+ relatórios ativos, 37 definições diferentes de OEE e nenhum dono formal de métrica — evidência apresentada à diretoria em um único painel de governança.',
    solution:
      'Criamos um portal de dados centralizado sob um programa rígido de governança. Desenvolvemos fluxos de aprovação de relatórios, mapeamos a linhagem dos dados de produção e promovemos workshops presenciais de capacitação.',
    impact:
      'A diretoria industrial passou a confiar em um único número de OEE por planta, eliminando disputas entre unidades sobre qual relatório estava "certo". O programa de capacitação formou multiplicadores internos, reduzindo a dependência de consultoria externa para novos relatórios.',
    architecture: [
      'Auditoria completa dos relatórios Power BI com a API de metadados da Microsoft.',
      'Modelagem de dados padronizada em um único Dataset compartilhado no ambiente premium.',
      'Implementação de níveis de acesso RLS (Row-Level Security) baseado na filial fabril.',
      'Criação de manuais e vídeos de treinamento para a equipe de negócios.',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
        caption: 'Indicadores de produção padronizados no chão de fábrica',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
        caption: 'Workshop de capacitação de líderes multiplicadores',
      },
      {
        src: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop',
        caption: 'Dataset único certificado com OEE oficial por planta',
      },
    ],
    kpis: [
      { label: 'Métricas Padronizadas', value: '100%' },
      { label: 'Usuários Ativos Mensais', value: '450+' },
      { label: 'Relatórios Homologados', value: '14' },
    ],
    beforeAfter: [
      {
        label: 'Relatórios em produção',
        before: '200+ não homologados',
        after: '14 homologados e auditados',
      },
      {
        label: 'Definição de OEE',
        before: 'Divergente por planta',
        after: 'Única, versionada e auditável',
      },
      {
        label: 'Dependência de terceiros',
        before: 'Alta para novos relatórios',
        after: 'Time interno autônomo',
      },
    ],
    quote: {
      text: 'Não precisávamos de mais relatórios. Precisávamos de um único número em que todo mundo confiasse — e foi isso que a OneB entregou.',
      author: 'Eduardo Bastos',
      role: 'Diretor Industrial, Metalúrgica Imperial',
    },
    duration: '6 meses',
    teamSize: '3 especialistas OneB',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  },
]

export const blogData: BlogPost[] = [
  {
    slug: 'por-que-migrar-para-o-microsoft-fabric',
    title: 'Por que o Microsoft Fabric é o futuro do Business Intelligence?',
    excerpt:
      'Descubra como a nova plataforma unificada SaaS da Microsoft revoluciona a análise de dados combinando Synapse, Data Factory e Power BI.',
    content: `
      <p>O mercado de dados evolui em passos rápidos. O que antes exigia a contratação de múltiplos serviços de nuvem complexos, agora pode ser gerenciado de forma centralizada e sem atrito operacional.</p>
      
      <h3>O que é o Microsoft Fabric?</h3>
      <p>O Microsoft Fabric é um ecossistema SaaS completo focado em dados e analytics. Ele unifica em um único portal as principais ferramentas analíticas da Microsoft:</p>
      <ul>
        <li><strong>Data Factory:</strong> Integração de dados em larga escala.</li>
        <li><strong>Synapse Data Engineering:</strong> Pipelines potentes com Spark.</li>
        <li><strong>Synapse Data Warehouse:</strong> Bancos de alta performance analítica.</li>
        <li><strong>Power BI:</strong> Visualização intuitiva de negócios.</li>
      </ul>

      <h3>A Revolução do DirectLake</h3>
      <p>Tradicionalmente, no Power BI existiam dois caminhos principais: <em>Import</em> (rápido, mas limitado pelo tamanho da memória) e <em>DirectQuery</em> (dados em tempo real, porém com performance de consulta reduzida). O Fabric introduz o <strong>DirectLake</strong>.</p>
      <p>Com o DirectLake, o Power BI lê os arquivos Delta Parquet do OneLake diretamente na memória cache. O resultado é o desempenho ultra veloz do modo Import combinado com a facilidade e frescor dos dados sem necessidade de atualizações pesadas de banco.</p>

      <h3>Benefícios Financeiros</h3>
      <p>Ao invés de comprar unidades de processamento separadas para SQL, Spark e Power BI, sua empresa aloca uma capacidade única compartilhada de computação (Fabric Capacity). Se um setor está ocioso, outro setor pode aproveitar essa capacidade de hardware disponível, reduzindo o desperdício financeiro de recursos computacionais.</p>

      <p>Se a sua organização busca simplificação operacional, velocidade extrema e governança ponta a ponta, a migração para o Microsoft Fabric deve estar na sua mesa de decisões.</p>
    `,
    date: '02 Jul 2026',
    readTime: '6 min',
    category: 'Tecnologia',
    tags: ['Microsoft Fabric', 'Data Lake', 'Power BI'],
    author: {
      name: 'Vitor Siqueira',
      role: 'Head de Engenharia de Dados',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    },
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'como-estruturar-um-dw-de-alta-performance',
    title: 'Boas Práticas de Modelagem: O Guia Definitivo do Star Schema',
    excerpt:
      'Evite relatórios lentos e fórmulas DAX complexas estruturando suas tabelas Fato e Dimensão sob as regras douradas de Ralph Kimball.',
    content: `
      <p>Muitos analistas de BI começam a criar relatórios arrastando tabelas brutas diretamente do ERP para dentro do Power BI. O resultado? Painéis lentos, fórmulas DAX difíceis de manter e dados inconsistentes. A resposta clássica para isso é a modelagem dimensional.</p>

      <h3>O que é o Star Schema (Esquema Estrela)?</h3>
      <p>Proposto por Ralph Kimball, o Star Schema organiza os dados analíticos em duas categorias claras de tabelas:</p>
      <ol>
        <li><strong>Tabelas Fato:</strong> Contêm os eventos de negócio. São transacionais por natureza (ex: Vendas, Cliques, Chamados). Possuem números de métricas para somar e chaves estrangeiras.</li>
        <li><strong>Tabelas Dimensão:</strong> Contêm os contextos dos eventos. Respondem a perguntas como "quem, o quê, onde e quando" (ex: Clientes, Produtos, Filiais, Calendário).</li>
      </ol>

      <h3>As Regras de Ouro</h3>
      <ul>
        <li><strong>Relacionamentos Unidirecionais (1 para Muitos):</strong> Os filtros devem fluir sempre das dimensões para as fatos. Evite relacionamentos bidirecionais, pois geram ambiguidades de modelo.</li>
        <li><strong>Granularidade Única:</strong> Cada tabela fato deve ter apenas um nível de detalhe estabelecido (ex: um item por linha da nota fiscal, e nunca misturar notas com resumos consolidados mensais).</li>
        <li><strong>Tabela Calendário dedicada:</strong> Nunca use a data embutida do Power BI. Tenha uma dimensão calendário customizada com feriados, semestres, trimestres e semanas fiscais.</li>
      </ul>

      <p>Seguir essas regras garante relatórios leves que carregam de forma instantânea e facilitam a evolução analítica da sua empresa.</p>
    `,
    date: '28 Jun 2026',
    readTime: '8 min',
    category: 'Engenharia',
    tags: ['Data Warehouse', 'SQL Server', 'Star Schema'],
    author: {
      name: 'Daniel Santos',
      role: 'Arquiteto de Dados',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    },
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'ia-generativa-aplicada-aos-negocios',
    title:
      'Como conectar LLMs de Inteligência Artificial ao seu banco SQL com segurança',
    excerpt:
      'Saiba como utilizar arquitetura RAG e frameworks como LangChain para criar chatbots inteligentes corporativos sem vazar dados confidenciais.',
    content: `
      <p>Todo executivo deseja conversar com seus dados corporativos usando IA como o ChatGPT. Porém, enviar planilhas de faturamento para ferramentas públicas pode gerar violações sérias de privacidade. Como resolver esse dilema comercial?</p>

      <h3>Entendendo a arquitetura RAG (Retrieval-Augmented Generation)</h3>
      <p>Ao invés de retreinar um modelo de linguagem gigante com seus dados (o que é caro e ineficiente), a técnica de RAG realiza uma busca em bancos de dados indexados (Vector Stores) no momento da pergunta do usuário. Apenas os trechos de texto específicos relevantes são enviados no prompt da IA como contexto para formular a resposta final.</p>

      <h3>Como ligar IA com SQL de forma segura?</h3>
      <ol>
        <li><strong>Gateway de IA privado:</strong> Utilize instâncias corporativas do Azure OpenAI ou servidores locais que garantem, sob contrato, que suas informações não serão utilizadas para treinar modelos globais.</li>
        <li><strong>Camada Intermediária de Agente:</strong> Use frameworks como LangChain para converter a pergunta em linguagem natural em uma consulta SQL otimizada, filtrando tabelas antes do retorno.</li>
        <li><strong>Controle RLS Ativo:</strong> A IA deve respeitar as permissões do usuário logado. Se o usuário comercial não pode ver os salários de TI no banco de dados, o chatbot de IA também não deve ter acesso a essas tabelas durante a pesquisa.</li>
      </ol>

      <p>Com essas barreiras bem estruturadas, sua empresa pode extrair todo o valor preditivo e facilidade de busca da IA generativa de forma segura e dentro de regras de conformidade e governança de dados.</p>
    `,
    date: '15 Jun 2026',
    readTime: '5 min',
    category: 'Inteligência Artificial',
    tags: ['AI', 'Python', 'LangChain', 'OpenAI'],
    author: {
      name: 'Juliana Vieira',
      role: 'Cientista de Dados e IA',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    },
    image:
      'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
  },
]

export interface Technology {
  name: string
  category:
    | 'Frontend'
    | 'Backend & Dados'
    | 'Cloud & Fabric'
    | 'Business Intelligence'
    | 'Inteligência Artificial'
    | 'DevOps & Qualidade'
  description: string
}

export const technologiesData: Technology[] = [
  {
    name: 'React',
    category: 'Frontend',
    description:
      'Construção de portais corporativos e dashboards customizados de alta performance.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description:
      'Tipagem estática ponta a ponta para reduzir bugs em produção em interfaces de dados.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description:
      'Design systems consistentes e responsivos para portais e painéis white-label.',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description:
      'Aplicações web corporativas renderizadas no servidor com SEO e performance otimizados.',
  },
  {
    name: 'SQL Server',
    category: 'Backend & Dados',
    description:
      'Motor relacional principal para Data Warehouses transacionais e analíticos.',
  },
  {
    name: 'Python',
    category: 'Backend & Dados',
    description:
      'Automação de pipelines, engenharia de features e prototipagem de modelos analíticos.',
  },
  {
    name: 'Apache Spark',
    category: 'Backend & Dados',
    description:
      'Processamento distribuído de grandes volumes de dados em cargas batch e streaming.',
  },
  {
    name: 'dbt',
    category: 'Backend & Dados',
    description:
      'Transformações versionadas e testáveis diretamente no Data Warehouse.',
  },
  {
    name: 'Apache Airflow',
    category: 'Backend & Dados',
    description:
      'Orquestração e monitoramento de pipelines de dados com dependências complexas.',
  },
  {
    name: 'Microsoft Fabric',
    category: 'Cloud & Fabric',
    description:
      'Plataforma SaaS unificada de dados: Data Factory, Synapse e Power BI sob o OneLake.',
  },
  {
    name: 'Azure Synapse',
    category: 'Cloud & Fabric',
    description:
      'Data Warehousing e engenharia de dados em escala corporativa na nuvem Microsoft.',
  },
  {
    name: 'OneLake',
    category: 'Cloud & Fabric',
    description:
      'Camada única de armazenamento Delta/Parquet compartilhada entre todos os workloads do Fabric.',
  },
  {
    name: 'Azure Data Factory',
    category: 'Cloud & Fabric',
    description:
      'Orquestração de ingestão de dados de múltiplas origens corporativas em nuvem.',
  },
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    description:
      'Dashboards executivos interativos com modelagem DAX de alta performance.',
  },
  {
    name: 'DAX',
    category: 'Business Intelligence',
    description:
      'Linguagem de cálculo para métricas e KPIs complexos em modelos analíticos.',
  },
  {
    name: 'Power Query',
    category: 'Business Intelligence',
    description:
      'Transformação e limpeza de dados de origem antes da carga nos modelos de BI.',
  },
  {
    name: 'SSAS',
    category: 'Business Intelligence',
    description:
      'Modelos tabulares corporativos para distribuição analítica em larga escala.',
  },
  {
    name: 'scikit-learn',
    category: 'Inteligência Artificial',
    description:
      'Modelos preditivos clássicos de classificação, regressão e clusterização de negócio.',
  },
  {
    name: 'TensorFlow',
    category: 'Inteligência Artificial',
    description:
      'Redes neurais aplicadas a previsão de demanda, séries temporais e visão computacional.',
  },
  {
    name: 'LangChain',
    category: 'Inteligência Artificial',
    description:
      'Orquestração de agentes de IA generativa conectados a bases de dados corporativas.',
  },
  {
    name: 'OpenAI API',
    category: 'Inteligência Artificial',
    description:
      'Modelos de linguagem para assistentes internos e automação de atendimento.',
  },
  {
    name: 'Pandas',
    category: 'Inteligência Artificial',
    description:
      'Manipulação e engenharia de features em memória para modelos analíticos.',
  },
  {
    name: 'Docker',
    category: 'DevOps & Qualidade',
    description:
      'Empacotamento de pipelines e serviços de IA em containers reproduzíveis.',
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps & Qualidade',
    description:
      'Integração e entrega contínua de pipelines de dados e aplicações web.',
  },
  {
    name: 'Git',
    category: 'DevOps & Qualidade',
    description:
      'Versionamento de código, modelos e definições de infraestrutura de dados.',
  },
]

export interface ProjectFlowStep {
  title: string
  description: string
}

/**
 * Documentação técnica e comercial completa de um projeto — alimenta o modal
 * "Ver detalhes" com resumo, problema, solução, fluxo visual e resultados.
 */
export interface ProjectDoc {
  summary: {
    client: string
    area: string
    objective: string
  }
  problem: {
    scenario: string
    pain: string
    impacts: string[]
    need: string
  }
  solution: {
    strategy: string
    architecture: string[]
    process: string[]
  }
  /** Etapas do fluxo/arquitetura renderizadas como diagrama visual. */
  flow: ProjectFlowStep[]
  results: {
    goals: string[]
    kpis: { label: string; value: string }[]
    gains: string[]
  }
}

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  year: string
  status: 'Em produção' | 'Concluído' | 'Em manutenção'
  image: string
  doc: ProjectDoc
}

export const projectsData: Project[] = [
  {
    slug: 'portal-executivo-multivarejo',
    title: 'Portal Executivo de Indicadores',
    category: 'Business Intelligence',
    description:
      'Portal web corporativo para centralizar o acesso a dashboards Power BI por diretoria, com controle de permissões e autenticação corporativa.',
    technologies: ['React', 'TypeScript', 'Power BI Embedded', 'Azure AD'],
    year: '2026',
    status: 'Em produção',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'Multivarejo Brasil — rede com 42 lojas no Sudeste',
        area: 'Diretoria Executiva / Comercial',
        objective:
          'Centralizar todos os indicadores executivos em um único portal seguro, eliminando o envio de relatórios por e-mail e planilhas paralelas.',
      },
      problem: {
        scenario:
          'Cada diretoria recebia relatórios por e-mail em formatos diferentes. Os links de dashboards ficavam espalhados em favoritos e grupos de WhatsApp.',
        pain: 'Executivos não sabiam qual versão do número era a oficial, e o acesso a dados sensíveis não tinha trilha de auditoria.',
        impacts: [
          'Reuniões de diretoria travadas discutindo qual número estava certo',
          'Dados estratégicos circulando fora do ambiente corporativo',
          'Horas de analistas gastas exportando e reenviando relatórios',
        ],
        need: 'Um ponto único de acesso, com autenticação corporativa, permissões por papel e os mesmos números para todos.',
      },
      solution: {
        strategy:
          'Construir um portal web leve sobre o Power BI Embedded, delegando autenticação ao Azure AD e mapeando permissões por diretoria — sem duplicar dados, apenas governando o acesso.',
        architecture: [
          'SPA em React + TypeScript hospedada em Azure Static Web Apps',
          'Power BI Embedded com service principal e capacidade dedicada',
          'Autenticação única (SSO) via Azure AD com grupos por diretoria',
          'RLS aplicado nos datasets para recorte automático por área',
        ],
        process: [
          'Workshops com cada diretoria para mapear os painéis essenciais',
          'Prototipação do portal e validação de navegação com usuários-chave',
          'Integração Embedded + SSO e testes de permissão por papel',
          'Rollout gradual por diretoria com treinamento de 30 minutos',
        ],
      },
      flow: [
        {
          title: 'Login corporativo',
          description: 'Usuário entra com a conta Azure AD da empresa (SSO).',
        },
        {
          title: 'Autorização por papel',
          description:
            'O portal resolve o grupo AD e monta o menu da diretoria.',
        },
        {
          title: 'Embed seguro',
          description: 'Power BI Embedded renderiza o painel com token curto.',
        },
        {
          title: 'RLS no dataset',
          description:
            'O dado é recortado automaticamente para a área do usuário.',
        },
        {
          title: 'Auditoria',
          description: 'Acessos e exportações registrados para compliance.',
        },
      ],
      results: {
        goals: [
          'Extinguir o envio de indicadores por e-mail (meta: 100%)',
          'Adoção pelos executivos em até 60 dias',
        ],
        kpis: [
          { label: 'Diretorias integradas', value: '6' },
          { label: 'Usuários ativos mensais', value: '180+' },
          { label: 'Relatórios por e-mail', value: '0' },
        ],
        gains: [
          'Fonte única de verdade para os números executivos',
          'Trilha de auditoria completa de quem viu o quê',
          'Onboarding de novos gestores em minutos, não semanas',
        ],
      },
    },
  },
  {
    slug: 'lakehouse-financeira-alfa',
    title: 'Lakehouse Corporativo Unificado',
    category: 'Engenharia de Dados',
    description:
      'Consolidação de 12 bases legadas em um Lakehouse único no Microsoft Fabric, com camadas Bronze, Silver e Gold documentadas.',
    technologies: ['Microsoft Fabric', 'OneLake', 'PySpark', 'Data Factory'],
    year: '2026',
    status: 'Em produção',
    image:
      'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'Financeira Alfa — serviços financeiros',
        area: 'Dados / Controladoria',
        objective:
          'Unificar 12 bases legadas em um Lakehouse governado no Microsoft Fabric e acelerar o fechamento contábil.',
      },
      problem: {
        scenario:
          'Doze bancos relacionais isolados, cada um com ETL próprio rodando à noite. O fechamento mensal dependia de consultas pesadas cruzando sistemas.',
        pain: 'Fechamento levava mais de 5 dias e qualquer inconsistência só aparecia no último momento, sem tempo hábil de correção.',
        impacts: [
          'Fechamento contábil de 5+ dias com equipe em regime de plantão',
          'Custo de nuvem alto com capacidades duplicadas por área',
          'Compliance validando números sem antecedência',
        ],
        need: 'Uma única plataforma de dados com ingestão contínua, camadas governadas e consulta rápida para o BI.',
      },
      solution: {
        strategy:
          'Migração faseada para o Microsoft Fabric: primeiro a ingestão para o OneLake (Bronze), depois a modelagem Silver/Gold, e por fim a troca do BI para DirectLake — sem big bang.',
        architecture: [
          'Ingestão contínua de 12 fontes via Data Factory (Fabric)',
          'OneLake com camadas medalhão em Delta/Parquet',
          'Transformações PySpark notebooks versionados no Git',
          'Modelo semântico DirectLake consumido pelo Power BI',
        ],
        process: [
          'Assessment das fontes e desenho da capacidade Fabric',
          'Ingestão Bronze com validação de paridade contra os legados',
          'Modelagem Silver/Gold com testes de qualidade automatizados',
          'Cutover do BI para DirectLake e desligamento dos ETLs antigos',
        ],
      },
      flow: [
        {
          title: '12 fontes legadas',
          description: 'ERPs, core bancário e planilhas departamentais.',
        },
        {
          title: 'Data Factory',
          description: 'Pipelines de ingestão contínua com retry e alertas.',
        },
        {
          title: 'OneLake — Bronze',
          description: 'Dado bruto aterrissa em Delta/Parquet imutável.',
        },
        {
          title: 'Silver / Gold',
          description: 'PySpark limpa, conforma e modela para análise.',
        },
        {
          title: 'DirectLake + Power BI',
          description: 'Painéis renderizando em menos de 2 segundos.',
        },
      ],
      results: {
        goals: [
          'Fechamento contábil em até 1 dia útil',
          'Reduzir o custo de nuvem consolidando capacidades',
        ],
        kpis: [
          { label: 'Fechamento mensal', value: '1 dia' },
          { label: 'Velocidade dos painéis', value: '15x +' },
          { label: 'Custo de nuvem', value: '-32%' },
        ],
        gains: [
          'Compliance validando números com uma semana de antecedência',
          'Uma única capacidade compartilhada entre engenharia e BI',
          'Economia financiou a expansão do time de dados',
        ],
      },
    },
  },
  {
    slug: 'assistente-ia-metalurgica-imperial',
    title: 'Assistente de IA para Consulta de Produção',
    category: 'Inteligência Artificial',
    description:
      'Chatbot corporativo em arquitetura RAG conectado ao Data Warehouse de produção, permitindo consultas em linguagem natural sobre KPIs fabris.',
    technologies: ['LangChain', 'OpenAI API', 'Python', 'SQL Server'],
    year: '2025',
    status: 'Em manutenção',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'Metalúrgica Imperial — indústria de base',
        area: 'Operações Industriais / PCP',
        objective:
          'Permitir que gestores consultem KPIs de produção em linguagem natural, sem depender de relatórios sob demanda.',
      },
      problem: {
        scenario:
          'Perguntas simples ("qual o OEE da planta 2 ontem?") viravam tickets para o time de BI e levavam dias para serem respondidas.',
        pain: 'A liderança industrial decidia com dados defasados e o time de BI vivia soterrado por demandas repetitivas.',
        impacts: [
          'Fila de tickets de BI com dias de espera',
          'Decisões de chão de fábrica tomadas sem o número atual',
          'Analistas sêniores gastando tempo em consultas triviais',
        ],
        need: 'Uma interface de consulta imediata, segura e que respeitasse as permissões de cada usuário.',
      },
      solution: {
        strategy:
          'Assistente RAG privado: converter a pergunta em SQL seguro contra o Data Warehouse, respeitando RLS, com IA generativa hospedada em ambiente corporativo.',
        architecture: [
          'Azure OpenAI em rede privada (dados não treinam modelos públicos)',
          'LangChain convertendo linguagem natural em consultas SQL validadas',
          'Camada de segurança que herda as permissões RLS do usuário',
          'Interface de chat integrada ao Teams corporativo',
        ],
        process: [
          'Curadoria do dicionário de dados e métricas oficiais',
          'Guardrails de SQL (somente leitura, tabelas permitidas)',
          'Piloto com 20 gestores e ajuste fino dos prompts',
          'Rollout com monitoramento de qualidade das respostas',
        ],
      },
      flow: [
        {
          title: 'Pergunta no chat',
          description: '"Qual o OEE da planta 2 na última semana?"',
        },
        {
          title: 'LangChain',
          description: 'Interpreta a intenção e gera SQL parametrizado seguro.',
        },
        {
          title: 'Validação & RLS',
          description:
            'Guardrails aprovam a consulta com as permissões do usuário.',
        },
        {
          title: 'Data Warehouse',
          description:
            'SQL Server responde sobre os dados oficiais de produção.',
        },
        {
          title: 'Resposta em segundos',
          description: 'IA redige a resposta com número, contexto e fonte.',
        },
      ],
      results: {
        goals: [
          'Responder 80% das consultas rotineiras sem abrir ticket',
          'Tempo de resposta abaixo de 10 segundos',
        ],
        kpis: [
          { label: 'Tempo médio de resposta', value: '6s' },
          { label: 'Tickets de BI evitados/mês', value: '300+' },
          { label: 'Acurácia validada', value: '96%' },
        ],
        gains: [
          'Liderança consultando o número oficial na hora da decisão',
          'Time de BI liberado para projetos analíticos de valor',
          'Zero vazamento: dados nunca saem do ambiente privado',
        ],
      },
    },
  },
  {
    slug: 'pipeline-preditivo-logistica',
    title: 'Pipeline Preditivo de Demanda Logística',
    category: 'Machine Learning',
    description:
      'Pipeline automatizado de treinamento e publicação de modelo de previsão de demanda, com retraining agendado e monitoramento de drift.',
    technologies: ['Python', 'Apache Airflow', 'LightGBM', 'Docker'],
    year: '2025',
    status: 'Em produção',
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'Multivarejo Brasil — operação logística',
        area: 'Supply Chain / Logística',
        objective:
          'Prever a demanda por loja e SKU para otimizar reabastecimento e reduzir custo de última milha.',
      },
      problem: {
        scenario:
          'Cada filial estimava a própria demanda em planilhas isoladas, sem histórico estruturado nem visão da matriz.',
        pain: 'Excesso de estoque em algumas lojas e ruptura em outras, com frete de emergência corroendo a margem.',
        impacts: [
          'Custo crescente de combustível e fretes emergenciais',
          'Ruptura de estoque nos itens de maior giro',
          'Planejamento gastando a semana refazendo cálculos manuais',
        ],
        need: 'Uma previsão central, automatizada e confiável, atualizada diariamente e conectada à operação.',
      },
      solution: {
        strategy:
          'Pipeline de ML ponta a ponta: ingestão diária do histórico, feature engineering, treino LightGBM com validação temporal e publicação automática das previsões no painel operacional.',
        architecture: [
          'Airflow orquestrando extração diária do ERP',
          'Feature store em SQL Server Data Warehouse',
          'Treino LightGBM containerizado em Docker com validação walk-forward',
          'Previsões publicadas via Power BI no centro de distribuição',
        ],
        process: [
          'Consolidação de 3 anos de histórico de vendas por loja/SKU',
          'Baseline estatístico vs. modelo — prova de valor com dados reais',
          'Automação do retraining semanal e monitoramento de drift',
          'Integração com o fluxo de reabastecimento do CD',
        ],
      },
      flow: [
        {
          title: 'ERP corporativo',
          description: 'Histórico de vendas e estoque extraído toda madrugada.',
        },
        {
          title: 'Airflow',
          description: 'Orquestra limpeza, features e validações de qualidade.',
        },
        {
          title: 'Modelo LightGBM',
          description: 'Prevê demanda por loja/SKU com validação temporal.',
        },
        {
          title: 'Monitor de drift',
          description: 'Alerta e dispara retraining quando o padrão muda.',
        },
        {
          title: 'Painel operacional',
          description: 'CD decide rotas e volumes com a previsão do dia.',
        },
      ],
      results: {
        goals: [
          'Acurácia de previsão acima de 90%',
          'Reduzir o custo logístico de última milha em 15%',
        ],
        kpis: [
          { label: 'Acurácia de previsão', value: '94.2%' },
          { label: 'Custo logístico', value: '-18%' },
          { label: 'Ruptura de estoque', value: '-27%' },
        ],
        gains: [
          'Reabastecimento orientado a dados nas 42 lojas',
          'Equipe de planejamento focada em exceções, não em cálculos',
          'Modelo se mantém saudável sozinho via retraining agendado',
        ],
      },
    },
  },
  {
    slug: 'governanca-dados-industria',
    title: 'Portal de Governança e Linhagem de Dados',
    category: 'Governança',
    description:
      'Catálogo interno de dados com linhagem visual, dicionário de métricas e fluxo de aprovação de novos relatórios corporativos.',
    technologies: ['Purview', 'Power BI', 'SQL Server', 'React'],
    year: '2025',
    status: 'Concluído',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'Metalúrgica Imperial — indústria de base',
        area: 'Dados / Governança corporativa',
        objective:
          'Dar visibilidade da origem de cada métrica e formalizar o ciclo de homologação de relatórios.',
      },
      problem: {
        scenario:
          'Mais de 200 relatórios não homologados circulavam na empresa, cada um com sua própria definição de OEE e produtividade.',
        pain: 'Ninguém confiava nos números: cada planta reportava um valor diferente para o mesmo indicador.',
        impacts: [
          'Reuniões industriais disputando qual relatório estava "certo"',
          'Retrabalho constante recriando métricas já existentes',
          'Risco regulatório por falta de rastreabilidade dos dados',
        ],
        need: 'Um catálogo central com linhagem, dicionário oficial de métricas e fluxo de aprovação de relatórios.',
      },
      solution: {
        strategy:
          'Auditar todo o parque de relatórios via API de metadados, consolidar em um dataset único homologado e disponibilizar um portal de catálogo com linhagem navegável.',
        architecture: [
          'Varredura do tenant Power BI com a API de metadados',
          'Microsoft Purview mapeando linhagem fonte → relatório',
          'Dataset único certificado com RLS por filial',
          'Portal React com dicionário de métricas e fluxo de homologação',
        ],
        process: [
          'Auditoria e classificação dos 200+ relatórios existentes',
          'Definição oficial de cada métrica com os donos do negócio',
          'Consolidação em 14 relatórios homologados',
          'Workshops de capacitação e formação de multiplicadores',
        ],
      },
      flow: [
        {
          title: 'Fontes de produção',
          description: 'ERP industrial e apontamentos de chão de fábrica.',
        },
        {
          title: 'Dataset certificado',
          description: 'Métricas oficiais, versionadas e com RLS por filial.',
        },
        {
          title: 'Purview',
          description: 'Linhagem automática de cada campo até a origem.',
        },
        {
          title: 'Portal de catálogo',
          description: 'Busca de métricas com definição e dono responsável.',
        },
        {
          title: 'Fluxo de homologação',
          description: 'Novos relatórios só publicam após aprovação formal.',
        },
      ],
      results: {
        goals: [
          'Uma única definição auditável por indicador',
          'Reduzir o parque para menos de 20 relatórios oficiais',
        ],
        kpis: [
          { label: 'Relatórios homologados', value: '14' },
          { label: 'Métricas padronizadas', value: '100%' },
          { label: 'Usuários ativos mensais', value: '450+' },
        ],
        gains: [
          'Diretoria confiando em um único número de OEE por planta',
          'Multiplicadores internos reduzindo dependência de consultoria',
          'Rastreabilidade completa para auditorias',
        ],
      },
    },
  },
  {
    slug: 'site-institucional-oneb',
    title: 'Plataforma Institucional OneB',
    category: 'Desenvolvimento Web',
    description:
      'Site institucional premium com design system proprietário, animações 3D e integração com Supabase para captação de leads.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    year: '2026',
    status: 'Em produção',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    doc: {
      summary: {
        client: 'OneB — projeto interno',
        area: 'Marketing / Geração de demanda',
        objective:
          'Transformar o site institucional em uma plataforma comercial de geração de leads qualificados.',
      },
      problem: {
        scenario:
          'O site anterior era um cartão de visitas estático: apresentava a empresa, mas não convertia visitantes em oportunidades.',
        pain: 'Tráfego qualificado chegava, navegava e ia embora sem deixar contato nem agendar conversa.',
        impacts: [
          'Zero leads rastreáveis vindos do canal digital',
          'Cases e projetos sem profundidade comercial',
          'Percepção de marca abaixo do nível técnico real da empresa',
        ],
        need: 'Uma plataforma premium com design system consistente, provas sociais fortes e funil de agendamento integrado.',
      },
      solution: {
        strategy:
          'Reconstruir o site como produto: design system único, animações consistentes, documentação comercial de projetos e um funil de captação com agendamento de diagnóstico.',
        architecture: [
          'SPA React 19 + TypeScript com Vite e Tailwind CSS 4',
          'Design system proprietário (botão único, reveals, parallax)',
          'Canvas de partículas com física gravitacional no logo',
          'Camada de leads pronta para Supabase (contato, agendamento, histórico)',
        ],
        process: [
          'Auditoria de UX e benchmark de sites SaaS premium',
          'Construção do design system e migração dos componentes',
          'Documentação comercial de cases e projetos',
          'Instrumentação do funil de leads e agendamento',
        ],
      },
      flow: [
        {
          title: 'Visitante',
          description: 'Chega por tráfego orgânico, social ou indicação.',
        },
        {
          title: 'Prova de valor',
          description: 'Cases, projetos documentados e feedbacks reais.',
        },
        {
          title: 'CTA de diagnóstico',
          description: 'Formulário fixo de reunião diagnóstica gratuita.',
        },
        {
          title: 'Lead registrado',
          description: 'Nome, empresa, interesse e histórico armazenados.',
        },
        {
          title: 'Reunião agendada',
          description: 'Confirmação com data, horário e link da reunião.',
        },
      ],
      results: {
        goals: [
          'Converter visitantes em reuniões diagnósticas',
          'Elevar a percepção de marca ao padrão SaaS premium',
        ],
        kpis: [
          { label: 'Lighthouse Performance', value: '95+' },
          { label: 'Componentes reutilizáveis', value: '30+' },
          { label: 'Páginas com animação padrão', value: '100%' },
        ],
        gains: [
          'Funil digital mensurável de ponta a ponta',
          'Base de leads estruturada com histórico de contato',
          'Site que vende a metodologia, não só apresenta a empresa',
        ],
      },
    },
  },
]

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  /** Avaliação de 1 a 5 estrelas. */
  rating: number
  /** Resultado objetivo destacado no card de feedback. */
  result: string
}

export const testimonialsData: Testimonial[] = [
  {
    name: 'Renata Cardoso',
    role: 'Diretora de Operações',
    company: 'Multivarejo Brasil',
    quote:
      'A OneB reduziu nosso custo logístico em quase 20% em menos de um trimestre. Mais que um fornecedor de relatórios, ganhamos um parceiro que entende a operação de varejo.',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    result: '-18% custo logístico',
  },
  {
    name: 'Marcelo Andrade',
    role: 'CFO',
    company: 'Financeira Alfa',
    quote:
      'Fechávamos o mês em 5 dias. Depois da migração para o Microsoft Fabric conduzida pela OneB, fechamos em 1 dia útil, com muito mais confiança nos números.',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    result: 'Fechamento 5x mais rápido',
  },
  {
    name: 'Patrícia Lemos',
    role: 'Gerente de TI',
    company: 'Metalúrgica Imperial',
    quote:
      'Tínhamos mais de 200 relatórios não homologados circulando na empresa. A OneB trouxe ordem, governança e uma cultura de self-service BI que se sustenta até hoje.',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    result: '100% métricas padronizadas',
  },
]

export const clientsData: string[] = [
  'Multivarejo Brasil',
  'Financeira Alfa',
  'Metalúrgica Imperial',
  'Grupo Vantage Log',
  'Construtora Horizonte',
  'BioSaúde Diagnósticos',
  'Cooperativa AgroMais',
  'Rede Vitalis',
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
}

export const teamData: TeamMember[] = [
  {
    name: 'Vitor Siqueira',
    role: 'Head de Engenharia de Dados',
    bio: 'Mais de 12 anos estruturando plataformas de dados para indústria, varejo e serviços financeiros.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Daniel Santos',
    role: 'Arquiteto de Dados',
    bio: 'Especialista em modelagem dimensional e performance de Data Warehouses de alta escala.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Juliana Vieira',
    role: 'Cientista de Dados e IA',
    bio: 'Lidera projetos de modelos preditivos e arquiteturas de IA generativa aplicada a negócios.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Rafael Monteiro',
    role: 'Head de Business Intelligence',
    bio: 'Responsável por dezenas de implementações Power BI e programas de capacitação analítica corporativa.',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  },
]

export interface CareerPosition {
  slug: string
  title: string
  department: string
  level: string
  location: string
  type: string
  description: string
}

export const careersData: CareerPosition[] = [
  {
    slug: 'engenheiro-de-dados-pleno',
    title: 'Engenheiro(a) de Dados Pleno',
    department: 'Engenharia de Dados',
    level: 'Pleno',
    location: 'Remoto (Brasil)',
    type: 'CLT ou PJ',
    description:
      'Construção e manutenção de pipelines ETL/ELT em Python e SQL Server, com foco em qualidade e governança de dados.',
  },
  {
    slug: 'consultor-poder-bi-senior',
    title: 'Consultor(a) Power BI Sênior',
    department: 'Business Intelligence',
    level: 'Sênior',
    location: 'Remoto (Brasil)',
    type: 'PJ',
    description:
      'Modelagem DAX avançada e desenvolvimento de dashboards executivos para clientes corporativos de médio e grande porte.',
  },
  {
    slug: 'cientista-de-dados-pleno',
    title: 'Cientista de Dados Pleno',
    department: 'Inteligência Artificial',
    level: 'Pleno',
    location: 'Híbrido (São Paulo)',
    type: 'CLT',
    description:
      'Desenvolvimento de modelos preditivos e soluções de IA generativa aplicadas a casos de uso corporativos reais.',
  },
  {
    slug: 'desenvolvedor-front-end-pleno',
    title: 'Desenvolvedor(a) Front-end Pleno',
    department: 'Desenvolvimento Web',
    level: 'Pleno',
    location: 'Remoto (Brasil)',
    type: 'CLT ou PJ',
    description:
      'Construção de portais corporativos e dashboards customizados em React, TypeScript e Tailwind CSS.',
  },
]

export type FaqCategory =
  | 'Serviços'
  | 'Projetos'
  | 'Consultoria'
  | 'Tecnologia'
  | 'Processo Comercial'
  | 'Atendimento'

export interface FaqItem {
  question: string
  answer: string
  category: FaqCategory
}

export const generalFaqData: FaqItem[] = [
  {
    question: 'Como funciona o processo de diagnóstico inicial?',
    answer:
      'Começamos com uma reunião técnica gratuita de 30 minutos para entender seus desafios de dados. A partir daí, elaboramos uma proposta técnica e comercial detalhada, sem custo e sem compromisso.',
    category: 'Processo Comercial',
  },
  {
    question: 'A OneB atende empresas de qualquer porte?',
    answer:
      'Atendemos principalmente médias e grandes empresas com operações de dados já estruturadas, mas também apoiamos empresas em estágio de maturidade analítica inicial que buscam construir uma base sólida desde o começo.',
    category: 'Atendimento',
  },
  {
    question: 'Como funciona o modelo de contratação dos projetos?',
    answer:
      'Trabalhamos com projetos de escopo fechado (com entregas e prazos definidos) ou squads dedicados em regime de célula contínua, dependendo da maturidade e da necessidade do cliente.',
    category: 'Processo Comercial',
  },
  {
    question: 'Vocês assinam acordo de confidencialidade (NDA)?',
    answer:
      'Sim. Assinamos NDA antes de qualquer análise de dados ou infraestrutura do cliente. Sigilo e segurança da informação são inegociáveis em todos os nossos contratos.',
    category: 'Processo Comercial',
  },
  {
    question: 'É possível contratar apenas uma consultoria pontual?',
    answer:
      'Sim. Além de projetos completos, oferecemos consultorias pontuais de diagnóstico, mentoria técnica e auditoria de arquitetura de dados para times internos.',
    category: 'Consultoria',
  },
  {
    question: 'Como funciona o suporte após a entrega do projeto?',
    answer:
      'Todo projeto inclui um período de garantia técnica. Após esse período, oferecemos planos de sustentação mensal com SLA definido para monitoramento, ajustes e evolução contínua.',
    category: 'Atendimento',
  },
  {
    question: 'Quais serviços a OneB oferece além de BI?',
    answer:
      'Atuamos em toda a cadeia de dados: engenharia de dados e Data Warehouse, Microsoft Fabric, inteligência artificial aplicada, desenvolvimento web de portais e sistemas, além de consultoria especializada em dados, contábil e financeira.',
    category: 'Serviços',
  },
  {
    question: 'Vocês desenvolvem soluções com o ecossistema Microsoft 365?',
    answer:
      'Sim. Construímos soluções completas com Excel, Power Query, Power Pivot, Power BI, Power Automate, Power Apps, SharePoint e Microsoft Fabric — do automação de planilhas a plataformas analíticas corporativas.',
    category: 'Serviços',
  },
  {
    question: 'Quanto tempo leva um projeto típico de dados?',
    answer:
      'Projetos de dashboards executivos ficam entre 4 e 8 semanas. Migrações de plataforma (ex: Microsoft Fabric) e projetos de IA variam de 3 a 6 meses, sempre com entregas parciais quinzenais para gerar valor desde o início.',
    category: 'Projetos',
  },
  {
    question: 'Como acompanho o andamento do meu projeto?',
    answer:
      'Cada projeto tem um canal dedicado, reuniões quinzenais de checkpoint e um painel de status com marcos, entregas e riscos — você acompanha o progresso com a mesma transparência que aplicamos aos dados.',
    category: 'Projetos',
  },
  {
    question: 'O que inclui a consultoria especializada em dados?',
    answer:
      'Diagnóstico de maturidade analítica, desenho de arquitetura, roadmap priorizado e mentoria dos times internos. Também há frentes específicas para as áreas contábil e financeira, com automação de processos e indicadores.',
    category: 'Consultoria',
  },
  {
    question: 'Quais tecnologias vocês dominam?',
    answer:
      'Ecossistema Microsoft (Power BI, Fabric, SQL Server, Azure), Python e Spark para engenharia e ciência de dados, LangChain e Azure OpenAI para IA generativa, e React/TypeScript para portais e aplicações web.',
    category: 'Tecnologia',
  },
  {
    question: 'Meus dados ficam seguros durante o projeto?',
    answer:
      'Sim. Trabalhamos dentro do seu ambiente corporativo, com criptografia em trânsito e repouso, mascaramento de dados sensíveis, RBAC e conformidade com a LGPD. Nenhum dado é usado para treinar modelos públicos de IA.',
    category: 'Tecnologia',
  },
  {
    question: 'Como funciona a proposta comercial e o orçamento?',
    answer:
      'Após a reunião diagnóstica gratuita, entregamos em até 5 dias úteis uma proposta com escopo, cronograma, investimento e resultados esperados — sem custo e sem compromisso.',
    category: 'Processo Comercial',
  },
  {
    question: 'Qual o canal de atendimento durante e após o projeto?',
    answer:
      'Você tem um gerente de conta dedicado, canal direto via Teams/WhatsApp corporativo e SLA de resposta definido em contrato para incidentes de sustentação.',
    category: 'Atendimento',
  },
]

export interface Microsoft365Tool {
  name: string
  description: string
  /** Aplicação prática entregue com a ferramenta. */
  application: string
  /** Resultado típico obtido em projetos reais. */
  result: string
}

export const microsoft365Data: Microsoft365Tool[] = [
  {
    name: 'Excel',
    description: 'Modelos analíticos avançados e automação de planilhas.',
    application:
      'Planilhas corporativas com fórmulas dinâmicas, dados conectados e camadas de validação.',
    result: 'Horas de retrabalho manual eliminadas por semana',
  },
  {
    name: 'Power Query',
    description: 'ETL self-service para limpeza e integração de dados.',
    application:
      'Consultas reutilizáveis que unificam ERPs, arquivos e APIs sem código complexo.',
    result: 'Atualização de bases em minutos, não dias',
  },
  {
    name: 'Power Pivot',
    description: 'Modelagem de dados e cálculos DAX dentro do Excel.',
    application:
      'Modelos dimensionais com milhões de linhas e KPIs calculados no próprio Excel.',
    result: 'Análises de grande volume sem sair do Excel',
  },
  {
    name: 'Power BI',
    description: 'Dashboards executivos interativos de alta performance.',
    application:
      'Painéis com modelagem Star Schema, RLS e distribuição governada por área.',
    result: '-70% no tempo de elaboração de relatórios',
  },
  {
    name: 'Power Automate',
    description: 'Automação de fluxos e processos de negócio.',
    application:
      'Aprovações, alertas e integrações automáticas entre sistemas e e-mail/Teams.',
    result: 'Processos aprovados em horas, não semanas',
  },
  {
    name: 'Power Apps',
    description: 'Aplicativos corporativos low-code sob medida.',
    application:
      'Apps de coleta e apontamento integrados ao Dataverse e SharePoint.',
    result: 'Fim das planilhas paralelas de apontamento',
  },
  {
    name: 'SharePoint',
    description: 'Portais e gestão documental corporativa.',
    application:
      'Intranets, bibliotecas com versionamento e fluxos de aprovação de documentos.',
    result: 'Documentos certos, na versão certa, para todos',
  },
  {
    name: 'Microsoft Fabric',
    description: 'Plataforma analítica unificada SaaS da Microsoft.',
    application:
      'Lakehouse OneLake, pipelines Data Factory e BI DirectLake em uma única capacidade.',
    result: 'Painéis 15x mais rápidos com -32% de custo',
  },
]

export interface ConsultingCategory {
  title: string
  icon: string
  description: string
  items: string[]
}

export const consultingData: ConsultingCategory[] = [
  {
    title: 'Dados',
    icon: 'Database',
    description:
      'Da estratégia à operação: estruturamos a inteligência analítica da sua empresa.',
    items: [
      'Business Intelligence',
      'Analytics',
      'Engenharia de dados',
      'Indicadores e KPIs',
    ],
  },
  {
    title: 'Contábil',
    icon: 'Calculator',
    description:
      'Automação e análise para uma contabilidade rápida, auditável e sem retrabalho.',
    items: [
      'Automação de rotinas contábeis',
      'Redesenho de processos',
      'Análises e conciliações',
    ],
  },
  {
    title: 'Financeiro',
    icon: 'Wallet',
    description:
      'Visibilidade e previsibilidade para decisões financeiras seguras.',
    items: [
      'Planejamento financeiro',
      'Indicadores financeiros',
      'Gestão de resultados',
    ],
  },
  {
    title: 'Desenvolvimento Web',
    icon: 'Code2',
    description:
      'Sistemas e portais sob medida, integrados ao seu ecossistema de dados.',
    items: ['Sistemas personalizados', 'Aplicações web', 'Integrações e APIs'],
  },
]
