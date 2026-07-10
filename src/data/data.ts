export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Filmes' | 'Séries' | 'TV' | 'Esportes' | 'Música';
  description: string;
  features: string[];
  popular?: boolean;
  logoKey: string;
  glowColor: string;
  textColor: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: 'ben-1',
    title: 'Envio pelo Suporte',
    description: 'Os dados de login e senha são enviados rapidamente pelo nosso suporte no WhatsApp após a confirmação do pagamento.',
    iconName: 'Zap'
  },
  {
    id: 'ben-2',
    title: 'Checkout Ultra Seguro',
    description: 'Transações 100% seguras e criptografadas via PIX ou Cartão com tecnologia de nível bancário.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ben-3',
    title: 'Suporte VIP Premium',
    description: 'Equipe de suporte dedicada e atendimento humano disponível a qualquer hora via WhatsApp.',
    iconName: 'Headphones'
  },
  {
    id: 'ben-4',
    title: 'Garantia Anti-Bloqueio',
    description: 'Garantia de funcionamento com reposição imediata e automática contra instabilidades.',
    iconName: 'RotateCcw'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-netflix',
    name: 'Netflix',
    price: 19.99,
    category: 'Séries',
    description: 'A maior plataforma de streaming de séries e filmes originais do mundo.',
    features: ['Qualidade Ultra HD 4K', 'Perfis Individuais', 'Download de Vídeos', 'Sem Anúncios'],
    logoKey: 'netflix',
    glowColor: 'rgba(229, 9, 20, 0.45)',
    textColor: '#E50914',
    popular: true
  },
  {
    id: 'prod-disney',
    name: 'Disney+',
    price: 14.99,
    category: 'Filmes',
    description: 'O lar dos clássicos da Disney, Marvel, Star Wars, Pixar e National Geographic.',
    features: ['Filmes & Séries em 4K', 'Até 4 telas simultâneas', 'Downloads ilimitados', 'Ideal para a família'],
    logoKey: 'disney',
    glowColor: 'rgba(0, 114, 206, 0.35)',
    textColor: '#0072CE'
  },
  {
    id: 'prod-prime',
    name: 'Prime Video',
    price: 9.99,
    category: 'Filmes',
    description: 'Acesso individual à biblioteca padrão do Amazon Prime Video com milhares de filmes.',
    features: ['Qualidade Full HD', 'Assista offline', 'X-Ray de elenco', 'Perfil Padrão'],
    logoKey: 'prime',
    glowColor: 'rgba(0, 168, 225, 0.35)',
    textColor: '#00A8E0'
  },
  {
    id: 'prod-prime-adicionais',
    name: 'Prime com 28 Adicionais',
    price: 34.99,
    category: 'Filmes',
    description: 'Acesso completo à biblioteca do Prime Video turbinado com canais adicionais de esportes, filmes e séries premium.',
    features: ['Canais adicionais inclusos', 'HBO Max + Telecine + Premiere', 'Transmissão em 4K HDR', 'Estabilidade Garantida'],
    logoKey: 'prime-adicionais',
    glowColor: 'rgba(0, 168, 225, 0.55)',
    textColor: '#00A8E0',
    popular: true
  },
  {
    id: 'prod-globoplay',
    name: 'Globoplay',
    price: 9.99,
    category: 'Séries',
    description: 'Novelas, séries nacionais e jornalismo ao vivo com o selo de qualidade Globo.',
    features: ['Novelas brasileiras clássicas', 'Séries originais Globoplay', 'Canais ao vivo integrados', 'Full HD / 4K'],
    logoKey: 'globoplay',
    glowColor: 'rgba(255, 74, 0, 0.35)',
    textColor: '#FF4A00'
  },
  {
    id: 'prod-telecine',
    name: 'Telecine',
    price: 9.99,
    category: 'Filmes',
    description: 'O maior hub de cinema do Brasil, com grandes lançamentos mundiais das telas do cinema.',
    features: ['Exclusivos de Grandes Estúdios', 'Sinal Ao Vivo dos Canais', 'Coleções Temáticas', 'Qualidade HD'],
    logoKey: 'telecine',
    glowColor: 'rgba(235, 0, 40, 0.3)',
    textColor: '#EB0028'
  },
  {
    id: 'prod-hbomax',
    name: 'HBO Max',
    price: 9.99,
    category: 'Séries',
    description: 'Filmes da Warner Bros, séries da HBO, Champions League ao vivo e produções originais.',
    features: ['Champions League inclusa', 'Séries HBO icônicas', 'Qualidade 4K HDR', 'Múltiplos perfis de usuário'],
    logoKey: 'hbomax',
    glowColor: 'rgba(153, 51, 255, 0.45)',
    textColor: '#9933FF',
    popular: true
  },
  {
    id: 'prod-starplus',
    name: 'Star+',
    price: 14.99,
    category: 'Séries',
    description: 'Esportes da ESPN, séries populares, filmes recém-lançados e produções exclusivas.',
    features: ['Jogos ao vivo da ESPN', 'Todas as temporadas dos Simpsons', 'Filmes para adultos', 'Qualidade 4K'],
    logoKey: 'starplus',
    glowColor: 'rgba(255, 203, 5, 0.25)',
    textColor: '#E50914'
  },
  {
    id: 'prod-paramount',
    name: 'Paramount+',
    price: 9.99,
    category: 'Filmes',
    description: 'Grandes sucessos de bilheteria, montanha de entretenimento infantil, MTV e séries exclusivas.',
    features: ['Libertadores & Sul-Americana', 'Séries exclusivas Paramount', 'Conteúdo infantil da Nickelodeon', 'Qualidade HD'],
    logoKey: 'paramount',
    glowColor: 'rgba(0, 100, 255, 0.3)',
    textColor: '#0057FF'
  },
  {
    id: 'prod-discovery',
    name: 'Discovery+',
    price: 9.99,
    category: 'Séries',
    description: 'O melhor em reality shows, culinária, casa, ciência, tecnologia, crime e natureza.',
    features: ['Documentários exclusivos', 'Todas as temporadas de Realities', 'Programação infantil Discovery Kids', 'Qualidade Full HD'],
    logoKey: 'discovery',
    glowColor: 'rgba(34, 197, 94, 0.3)',
    textColor: '#22C55E'
  },
  {
    id: 'prod-skycompleta',
    name: 'SKY+ Completa',
    price: 29.99,
    category: 'TV',
    description: 'Grade completa com canais SKY+, filmes sob demanda e o melhor da TV fechada por assinatura.',
    features: ['Canais fechados SKY', 'Filmes & Esportes ao vivo', 'Grade completa de TV', 'Garantia de reposição'],
    logoKey: 'skycompleta',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    textColor: '#EF4444',
    popular: true
  },
  {
    id: 'prod-clarotv',
    name: 'Claro tv+',
    price: 19.99,
    category: 'TV',
    description: 'Grade com dezenas de canais Claro de filmes, variedades e notícias diretamente na sua Smart TV.',
    features: ['Grade Claro de canais', 'Acesso simplificado', 'Conteúdos On-Demand', 'Qualidade Full HD'],
    logoKey: 'clarotv',
    glowColor: 'rgba(229, 9, 20, 0.3)',
    textColor: '#E50914'
  },
  {
    id: 'prod-clarocompleta',
    name: 'Claro tv+ Completa',
    price: 29.99,
    category: 'TV',
    description: 'A grade completa premium da Claro tv+, incluindo todos os canais de esportes, filmes e entretenimento.',
    features: ['Grade premium total da Claro', 'Canais de esportes e filmes', 'Guia de TV eletrônico', 'Qualidade HD / 4K'],
    logoKey: 'clarocompleta',
    glowColor: 'rgba(229, 9, 20, 0.45)',
    textColor: '#E50914',
    popular: true
  },
  {
    id: 'prod-premiere',
    name: 'Premiere',
    price: 9.99,
    category: 'Esportes',
    description: 'A cobertura mais completa do futebol brasileiro ao vivo. Estaduais, Série A & Série B.',
    features: ['Todos os jogos da Série A', 'Jogos da Série B ao vivo', 'Cobertura pós-jogo completa', 'Resolução 60 FPS'],
    logoKey: 'premiere',
    glowColor: 'rgba(34, 197, 94, 0.4)',
    textColor: '#22C55E',
    popular: true
  },
  {
    id: 'prod-ufc',
    name: 'UFC Fight Pass',
    price: 14.99,
    category: 'Esportes',
    description: 'Acesso a todos os cards do UFC ao vivo, acervo histórico de lutas e eventos especiais de artes marciais.',
    features: ['UFC ao vivo e exclusivo', 'Acervo de lutas lendárias', 'Eventos de grappling e kickboxing', 'Qualidade 60 FPS'],
    logoKey: 'ufc',
    glowColor: 'rgba(229, 9, 20, 0.35)',
    textColor: '#E50914'
  },
  {
    id: 'prod-spotify',
    name: 'Spotify',
    price: 9.99,
    category: 'Música',
    description: 'Milhões de músicas e podcasts sem interrupções de comerciais para curtir de qualquer lugar.',
    features: ['Áudio sem propagandas', 'Modo offline integrado', 'Playlists personalizadas', 'Qualidade de som extrema'],
    logoKey: 'spotify',
    glowColor: 'rgba(30, 215, 96, 0.4)',
    textColor: '#1DB954'
  },
  {
    id: 'prod-youtube',
    name: 'YouTube Premium',
    price: 9.99,
    category: 'Música',
    description: 'Vídeos e músicas sem anúncios comerciais, reprodução em segundo plano e downloads ilimitados.',
    features: ['Vídeos sem anúncios', 'YouTube Music Premium incluso', 'Tocar em segundo plano', 'Download no celular'],
    logoKey: 'youtube',
    glowColor: 'rgba(255, 0, 0, 0.35)',
    textColor: '#FF0000'
  },
  {
    id: 'prod-viki',
    name: 'Rakuten Viki',
    price: 9.99,
    category: 'Séries',
    description: 'O maior acervo de doramas, k-dramas, novelas chinesas e entretenimento asiático do mercado.',
    features: ['K-Dramas exclusivos', 'Legendas profissionais em português', 'Qualidade HD sem anúncios', 'Acesso antecipado'],
    logoKey: 'viki',
    glowColor: 'rgba(0, 168, 255, 0.3)',
    textColor: '#00A8E5'
  },
  {
    id: 'prod-vivoplay',
    name: 'Vivo Play',
    price: 19.99,
    category: 'TV',
    description: 'Canais Vivo ao vivo, catálogo On-Demand de grandes estúdios e facilidade de reprodução multi-telas.',
    features: ['Grade de canais ao vivo', 'Acesso On-Demand', 'Resolução Full HD', 'Suporte multi-telas'],
    logoKey: 'vivoplay',
    glowColor: 'rgba(153, 51, 255, 0.35)',
    textColor: '#9933FF'
  },
  {
    id: 'prod-crunchyroll',
    name: 'Crunchyroll',
    price: 9.99,
    category: 'Séries',
    description: 'O maior acervo mundial de animes licenciados, com novos episódios direto do Japão.',
    features: ['Simulcast (1 hora após o Japão)', 'Qualidade Full HD sem comerciais', 'Mangás inclusos digitais', 'Dublagem exclusiva'],
    logoKey: 'crunchyroll',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    textColor: '#F97316'
  }
];

export const STATS: Stat[] = [
  { value: 15200, suffix: '+', label: 'Clientes Satisfeitos' },
  { value: 99.9, suffix: '%', label: 'Estabilidade do Sinal' },
  { value: 4.9, suffix: '/5', label: 'Avaliação Média' },
  { value: 3, suffix: ' min', label: 'Tempo Médio de Ativação' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rodrigo Medeiros',
    role: 'Assinante Claro tv+ Completa',
    comment: 'A qualidade de imagem é impecável, sem contar que o suporte me atendeu no domingo à noite em menos de 3 minutos para tirar uma dúvida sobre a configuração na minha Smart TV.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Carolina Bittencourt',
    role: 'Assinante Netflix + Disney+',
    comment: 'Já experimentei outras plataformas, mas a estabilidade dos servidores da REDFEET está em outro nível. Não há travamentos nos lançamentos de filmes. Recomendo muito.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Thiago Nogueira',
    role: 'Assinante Premiere + Esportes',
    comment: 'Como fã de Fórmula 1 e futebol, a transmissão em 60 FPS mudou a minha experiência. O delay é praticamente nulo comparado a outros streamings. Vale cada centavo.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a ativação das telinhas?',
    answer: 'O envio do seu acesso é feito de forma simples e rápida pelo nosso suporte. Logo após você enviar o comprovante de pagamento no WhatsApp, nossa equipe valida as informações e envia os dados de acesso da sua conta imediatamente.'
  },
  {
    id: 'faq-2',
    question: 'Posso utilizar minha conta em mais de um aparelho?',
    answer: 'Sim, dependendo do número de telas contratadas no simulador de combos ou no plano individual. Você pode configurar em vários aparelhos e assistir de forma simultânea de acordo com o limite do seu plano.'
  },
  {
    id: 'faq-3',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX (com liberação instantânea) e Cartões de Crédito através de nosso gateway de pagamento blindado, que garante a total segurança dos seus dados.'
  },
  {
    id: 'faq-4',
    question: 'Como funciona a Garantia de Reposição?',
    answer: 'Oferecemos garantia de reposição completa durante todo o período da sua assinatura. Caso ocorra qualquer tipo de bloqueio ou instabilidade no servidor, basta contatar o suporte no WhatsApp e um novo acesso será emitido instantaneamente.'
  }
];
