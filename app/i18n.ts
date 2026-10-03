export type Locale = 'en' | 'pt';

type Command = 'help' | 'neofetch' | 'about' | 'projects' | 'contact' | 'resume' | 'clear' | 'skills' | 'education' | 'experiences' | 'certifications' | 'language' | 'exit';

type Translation = {
    commands: Record<Command, { name: string; description: string }>;
    welcome: [string, string, string];
    about: string[];
    projects: string[];
    contact: string[];
    skills: Array<[string, string]>;
    education: string[];
    experiences: string[];
    certifications: string;
    resume: { file: string; pages: string; download: string; unsupported: string };
    neofetch: Array<[string, string]>;
    unknown: string;
    exit: string;
    asciiError: string;
    languageChanged: string;
    languageUsage: string;
};

export const translations: Record<Locale, Translation> = {
    en: {
        commands: {
            help: { name: 'help', description: 'Displays a list of available commands.' },
            neofetch: { name: 'neofetch', description: 'Shows my profile like a system information tool.' },
            about: { name: 'about', description: 'Provides information about me and my background.' },
            projects: { name: 'projects', description: 'Shows the kinds of projects I build.' },
            contact: { name: 'contact', description: 'Provides my contact information.' },
            resume: { name: 'resume', description: 'Previews and downloads my résumé.' },
            clear: { name: 'clear', description: 'Clears the terminal screen.' },
            skills: { name: 'skills', description: 'Displays my technical skills and proficiencies.' },
            education: { name: 'education', description: 'Provides my educational background.' },
            experiences: { name: 'experiences', description: 'Shows my professional focus and background.' },
            certifications: { name: 'certifications', description: 'Lists my certifications and achievements.' },
            language: { name: 'language', description: 'Switches language: language en or language pt.' },
            exit: { name: 'exit', description: 'Exits the terminal.' },
        },
        welcome: ['👋 Welcome to my profile!', '🖥️ I am Francisco Filipe, a Full Stack Developer passionate about technology, cars and innovation.', "⌨️ Type 'help' for a list of available commands."],
        about: ['Francisco Filipe is a Full Stack Developer building web and mobile experiences that solve real problems.', 'He enjoys connecting every layer of a product: interfaces, APIs, databases, infrastructure and deployment.', 'Outside of software, he is passionate about cars, engineering, performance and attention to detail.'],
        projects: ['Web and mobile experiences, software solutions and infrastructure-focused experiments.', 'Project case studies will be available here soon.'],
        contact: ['GitHub: github.com/franciscofilipeee', 'LinkedIn: linkedin.com/in/franciscofilipeee', "Have an idea or technical challenge? Let's talk."],
        skills: [['Frontend & Mobile', 'TypeScript · JavaScript · React · React Native · Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend & Data', 'PHP · Laravel · Java · Spring · MySQL'], ['Cloud, Infrastructure & Systems', 'Google Cloud · AWS · DigitalOcean · Docker · Docker Swarm · Kubernetes · Linux · Ubuntu · Windows'], ['Design & Collaboration', 'Figma · Trello · Discord · Git · GitHub · GitLab · Azure DevOps']],
        education: ['Software Engineering — PUC Minas (currently studying)', 'Technical Degree in Information Technology — POLIMIG, Belo Horizonte'],
        experiences: ['Focus: Full Stack Development', 'Building useful, fast and carefully crafted products across web, mobile, APIs, data and infrastructure.'],
        certifications: 'No certifications listed yet. This section will be updated with new achievements.',
        resume: { file: 'resume.pdf', pages: '2 pages', download: '↓ Download PDF', unsupported: 'Your browser does not support PDF previews. Use the download link above.' },
        neofetch: [['Role', 'Full Stack Developer'], ['Education', 'Software Engineering @ PUC Minas'], ['Technical degree', 'IT @ POLIMIG'], ['Frontend', 'TypeScript · JavaScript · React · React Native'], ['UI', 'Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend', 'PHP · Laravel · Java · Spring'], ['Data', 'MySQL'], ['Cloud', 'Google Cloud · AWS · DigitalOcean'], ['DevOps', 'Docker · Swarm · Kubernetes · Linux'], ['Workflow', 'Git · GitHub · GitLab · Azure DevOps · Figma'], ['Interests', 'Technology · infrastructure · cars'], ['GitHub', 'github.com/franciscofilipeee'], ['LinkedIn', 'linkedin.com/in/franciscofilipeee'], ['Shell', 'portfolio-terminal']],
        unknown: "Unknown command: {command}. Type 'help' to see available commands.",
        exit: 'Exiting the terminal...', asciiError: 'Unable to load neofetch artwork.', languageChanged: 'Language changed to English.', languageUsage: 'Usage: language en | language pt',
    },
    pt: {
        commands: {
            help: { name: 'ajuda', description: 'Exibe a lista de comandos disponíveis.' },
            neofetch: { name: 'neofetch', description: 'Mostra meu perfil como uma ferramenta de sistema.' },
            about: { name: 'sobre', description: 'Exibe informações sobre mim e minha trajetória.' },
            projects: { name: 'projetos', description: 'Mostra os tipos de projetos que desenvolvo.' },
            contact: { name: 'contato', description: 'Exibe minhas informações de contato.' },
            resume: { name: 'curriculo', description: 'Exibe e permite baixar meu currículo.' },
            clear: { name: 'limpar', description: 'Limpa a tela do terminal.' },
            skills: { name: 'habilidades', description: 'Exibe minhas habilidades técnicas.' },
            education: { name: 'formacao', description: 'Exibe minha formação acadêmica.' },
            experiences: { name: 'experiencias', description: 'Exibe meu foco e experiência profissional.' },
            certifications: { name: 'certificacoes', description: 'Lista minhas certificações e conquistas.' },
            language: { name: 'idioma', description: 'Altera o idioma: idioma pt ou idioma en.' },
            exit: { name: 'sair', description: 'Sai do terminal.' },
        },
        welcome: ['👋 Bem-vindo ao meu perfil!', '🖥️ Eu sou Francisco Filipe, Desenvolvedor Full Stack apaixonado por tecnologia, carros e inovação.', "⌨️ Digite 'ajuda' para ver os comandos disponíveis."],
        about: ['Francisco Filipe é Desenvolvedor Full Stack e cria experiências web e mobile que resolvem problemas reais.', 'Gosta de conectar todas as camadas de um produto: interfaces, APIs, bancos de dados, infraestrutura e deploy.', 'Além do software, é apaixonado por carros, engenharia, desempenho e atenção aos detalhes.'],
        projects: ['Experiências web e mobile, soluções de software e experimentos voltados à infraestrutura.', 'Os estudos de caso dos projetos estarão disponíveis em breve.'],
        contact: ['GitHub: github.com/franciscofilipeee', 'LinkedIn: linkedin.com/in/franciscofilipeee', 'Tem uma ideia ou desafio técnico? Vamos conversar.'],
        skills: [['Frontend & Mobile', 'TypeScript · JavaScript · React · React Native · Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend & Dados', 'PHP · Laravel · Java · Spring · MySQL'], ['Cloud, Infraestrutura & Sistemas', 'Google Cloud · AWS · DigitalOcean · Docker · Docker Swarm · Kubernetes · Linux · Ubuntu · Windows'], ['Design & Colaboração', 'Figma · Trello · Discord · Git · GitHub · GitLab · Azure DevOps']],
        education: ['Engenharia de Software — PUC Minas (cursando)', 'Técnico em Informática — POLIMIG, Belo Horizonte'],
        experiences: ['Foco: Desenvolvimento Full Stack', 'Crio produtos úteis, rápidos e bem elaborados em web, mobile, APIs, dados e infraestrutura.'],
        certifications: 'Nenhuma certificação cadastrada ainda. Esta seção será atualizada com novas conquistas.',
        resume: { file: 'curriculo.pdf', pages: '2 páginas', download: '↓ Baixar PDF', unsupported: 'Seu navegador não suporta preview de PDF. Use o link de download acima.' },
        neofetch: [['Cargo', 'Desenvolvedor Full Stack'], ['Formação', 'Engenharia de Software @ PUC Minas'], ['Curso técnico', 'Informática @ POLIMIG'], ['Frontend', 'TypeScript · JavaScript · React · React Native'], ['UI', 'Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend', 'PHP · Laravel · Java · Spring'], ['Dados', 'MySQL'], ['Cloud', 'Google Cloud · AWS · DigitalOcean'], ['DevOps', 'Docker · Swarm · Kubernetes · Linux'], ['Workflow', 'Git · GitHub · GitLab · Azure DevOps · Figma'], ['Interesses', 'Tecnologia · infraestrutura · carros'], ['GitHub', 'github.com/franciscofilipeee'], ['LinkedIn', 'linkedin.com/in/franciscofilipeee'], ['Shell', 'portfolio-terminal']],
        unknown: "Comando desconhecido: {command}. Digite 'ajuda' para ver os comandos disponíveis.",
        exit: 'Saindo do terminal...', asciiError: 'Não foi possível carregar a arte do neofetch.', languageChanged: 'Idioma alterado para Português.', languageUsage: 'Uso: idioma pt | idioma en',
    },
};

export const commandAliases = (locale: Locale) => Object.fromEntries(
    Object.entries(translations[locale].commands).map(([command, value]) => [value.name, command as Command]),
) as Record<string, Command>;

export function resolveCommand(input: string, locale: Locale) {
    return commandAliases(locale)[input] ?? commandAliases('en')[input] ?? commandAliases('pt')[input];
}

export type { Command };
