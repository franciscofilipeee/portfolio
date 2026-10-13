export type Locale = 'en' | 'pt';

type Command = 'help' | 'neofetch' | 'about' | 'projects' | 'contact' | 'resume' | 'clear' | 'skills' | 'education' | 'experiences' | 'work' | 'certifications' | 'language' | 'exit';

type Translation = {
    commands: Record<Command, { name: string; description: string }>;
    welcome: [string, string, string];
    about: string[];
    projects: { technologiesLabel: string; visitLabel: string; entries: Array<{ name: string; description: string; technologies: string; url?: string }> };
    contact: string[];
    skills: Array<[string, string]>;
    education: string[];
    experiences: string[];
    work: {
        periodLabel: string;
        activitiesLabel: string;
        entries: Array<{ company: string; period: string; role: string; activities: string }>;
    };
    certifications: Array<{ name: string; institution: string; period: string; duration: string }>;
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
            projects: { name: 'projects', description: 'Lists projects I worked on and their technologies.' },
            contact: { name: 'contact', description: 'Provides my contact information.' },
            resume: { name: 'resume', description: 'Previews and downloads my résumé.' },
            clear: { name: 'clear', description: 'Clears the terminal screen.' },
            skills: { name: 'skills', description: 'Displays my technical skills and proficiencies.' },
            education: { name: 'education', description: 'Provides my educational background.' },
            experiences: { name: 'experiences', description: 'Shows my professional focus and background.' },
            work: { name: 'work', description: 'Lists companies, employment periods and professional activities.' },
            certifications: { name: 'certifications', description: 'Lists my certifications and achievements.' },
            language: { name: 'language', description: 'Switches language: language en or language pt.' },
            exit: { name: 'exit', description: 'Exits the terminal.' },
        },
        welcome: ['👋 Welcome to my profile!', '🖥️ I am Francisco Filipe, a Full Stack Developer passionate about technology, cars and innovation.', "⌨️ Type 'help' for a list of available commands."],
        about: ['Francisco Filipe is a Full Stack Developer building web and mobile experiences that solve real problems.', 'He enjoys connecting every layer of a product: interfaces, APIs, databases, infrastructure and deployment.', 'Outside of software, he is passionate about cars, engineering, performance and attention to detail.'],
        projects: {
            technologiesLabel: 'Technologies', visitLabel: 'Visit website',
            entries: [
                { name: 'Modfy Brasil', description: 'Web project developed with React, Laravel and MySQL.', technologies: 'React · Laravel · MySQL · Google Cloud · Cloudflare · Tailwind CSS · Docker · Kubernetes', url: 'https://modfybrasil.com' },
                { name: 'BS Commerce', description: 'Brunsker e-commerce project.', technologies: 'Magento · Knockout.js', url: 'https://brunsker.com.br' },
                { name: 'BS Notas', description: 'Brunsker solution for managing tax documents.', technologies: 'Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'BS Chatbot', description: 'Brunsker solution for customer communication and process and sales automation.', technologies: 'Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'BS Chatbot Mobile', description: 'Mobile application for BS Chatbot, developed with React Native and Expo.', technologies: 'React Native · Expo', url: 'https://brunsker.com.br' },
                { name: 'BS Portal do Vendedor', description: 'Brunsker web platform for sales management and access to product and performance information.', technologies: 'C# · Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'CSF', description: 'Web project developed with Laravel and Blade, backed by MySQL and hosted on DigitalOcean with Nginx.', technologies: 'Laravel · MySQL · Nginx · DigitalOcean · Blade' },
            ],
        },
        contact: ['GitHub: github.com/franciscofilipeee', 'LinkedIn: linkedin.com/in/franciscofilipeee', "Have an idea or technical challenge? Let's talk."],
        skills: [['Frontend & Mobile', 'TypeScript · JavaScript · React · React Native · Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend & Data', 'PHP · Laravel · Java · Spring · MySQL'], ['Cloud, Infrastructure & Systems', 'Google Cloud · AWS · DigitalOcean · Docker · Docker Swarm · Kubernetes · Linux · Ubuntu · Windows'], ['Design & Collaboration', 'Figma · Trello · Discord · Git · GitHub · GitLab · Azure DevOps']],
        education: ['Software Engineering — PUC Minas (currently studying)', 'Technical Degree in Information Technology — POLIMIG, Belo Horizonte'],
        experiences: ['Focus: Full Stack Development', 'Building useful, fast and carefully crafted products across web, mobile, APIs, data and infrastructure.'],
        work: {
            periodLabel: 'Period',
            activitiesLabel: 'Activities',
            entries: [
                { company: 'Brunsker Tecnologia LTDA', period: 'October 2025 – present', role: 'Junior Developer / Development Intern', activities: 'Development of B2B/B2C e-commerce with Magento and integration with the Winthor ERP. Development with PHP, Laravel, Inertia.js, React and JavaScript/jQuery, as well as HTML and CSS for other web solutions. Work with Linux/Ubuntu servers, Azure DevOps and Docker.' },
                { company: 'Fabrika de Softwares SVF LTDA', period: 'August 2022 – October 2025', role: 'Full Stack Web Developer — Young Apprentice', activities: 'Development and maintenance of custom software, automation of manual workflows and productivity improvements. Work with PHP, Laravel, Blade, Vue.js, Inertia.js, Tailwind CSS, Bootstrap 5 and MySQL, as well as AWS, DigitalOcean, Linux and Docker.' },
                { company: 'Freelance', period: 'May 2021 – July 2022', role: 'Audiovisual Producer', activities: 'Video and image editing with After Effects, Illustrator, Photoshop and Premiere. Video rendering, compression and conversion with HandBrake, and audio editing with Audacity. Creation of streaming media kits, logos, thumbnails and images for social media.' },
            ],
        },
        certifications: [
            { name: 'Docker for Developers (with Docker Swarm and Kubernetes)', institution: 'Udemy', period: 'December 2025', duration: '13.5 hours' },
            { name: 'Cloud DevOps Immersion — Docker and Google Cloud', institution: 'Alura', period: 'May 2025', duration: '3 hours' },
            { name: 'PHP Programming with Laravel, Livewire and SQLite', institution: 'Curso Online de PHP', period: 'November 2024', duration: '6 hours' },
            { name: 'PHP Programming with Laravel, MySQL/SQLite, Livewire and Inertia.js', institution: 'Pinguim Academy', period: 'May – July 2024', duration: '50 hours' },
            { name: 'Laravel Course', institution: 'Hora de Codar', period: 'November 2023', duration: '6 hours' },
        ],
        resume: { file: 'resume.pdf', pages: '2 pages', download: '↓ Download PDF', unsupported: 'Your browser does not support PDF previews. Use the download link above.' },
        neofetch: [['Role', 'Full Stack Developer'], ['Current work', 'Junior Developer @ Brunsker Tecnologia LTDA (October 2025 - ...)'], ['Education', 'Software Engineering @ PUC Minas'], ['Technical degree', 'IT @ POLIMIG'], ['Frontend', 'TypeScript · JavaScript · React · React Native'], ['UI', 'Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend', 'PHP · Laravel · Java · Spring'], ['Data', 'MySQL'], ['Cloud', 'Google Cloud · AWS · DigitalOcean'], ['DevOps', 'Docker · Swarm · Kubernetes · Linux'], ['Workflow', 'Git · GitHub · GitLab · Azure DevOps · Figma'], ['Interests', 'Technology · infrastructure · cars'], ['GitHub', 'github.com/franciscofilipeee'], ['LinkedIn', 'linkedin.com/in/franciscofilipeee'], ['Shell', 'portfolio-terminal']],
        unknown: "Unknown command: {command}. Type 'help' to see available commands.",
        exit: 'Exiting the terminal...', asciiError: 'Unable to load neofetch artwork.', languageChanged: 'Language changed to English.', languageUsage: 'Usage: language en | language pt',
    },
    pt: {
        commands: {
            help: { name: 'ajuda', description: 'Exibe a lista de comandos disponíveis.' },
            neofetch: { name: 'neofetch', description: 'Mostra meu perfil como uma ferramenta de sistema.' },
            about: { name: 'sobre', description: 'Exibe informações sobre mim e minha trajetória.' },
            projects: { name: 'projetos', description: 'Lista projetos em que trabalhei e suas tecnologias.' },
            contact: { name: 'contato', description: 'Exibe minhas informações de contato.' },
            resume: { name: 'curriculo', description: 'Exibe e permite baixar meu currículo.' },
            clear: { name: 'limpar', description: 'Limpa a tela do terminal.' },
            skills: { name: 'habilidades', description: 'Exibe minhas habilidades técnicas.' },
            education: { name: 'formacao', description: 'Exibe minha formação acadêmica.' },
            experiences: { name: 'experiencias', description: 'Exibe meu foco e experiência profissional.' },
            work: { name: 'trabalhos', description: 'Lista empresas, períodos e atividades profissionais.' },
            certifications: { name: 'certificacoes', description: 'Lista minhas certificações e conquistas.' },
            language: { name: 'idioma', description: 'Altera o idioma: idioma pt ou idioma en.' },
            exit: { name: 'sair', description: 'Sai do terminal.' },
        },
        welcome: ['👋 Bem-vindo ao meu perfil!', '🖥️ Eu sou Francisco Filipe, Desenvolvedor Full Stack apaixonado por tecnologia, carros e inovação.', "⌨️ Digite 'ajuda' para ver os comandos disponíveis."],
        about: ['Francisco Filipe é Desenvolvedor Full Stack e cria experiências web e mobile que resolvem problemas reais.', 'Gosta de conectar todas as camadas de um produto: interfaces, APIs, bancos de dados, infraestrutura e deploy.', 'Além do software, é apaixonado por carros, engenharia, desempenho e atenção aos detalhes.'],
        projects: {
            technologiesLabel: 'Tecnologias', visitLabel: 'Visitar site',
            entries: [
                { name: 'Modfy Brasil', description: 'Projeto web desenvolvido com React, Laravel e MySQL.', technologies: 'React · Laravel · MySQL · Google Cloud · Cloudflare · Tailwind CSS · Docker · Kubernetes', url: 'https://modfybrasil.com' },
                { name: 'BS Commerce', description: 'Projeto de e-commerce da Brunsker.', technologies: 'Magento · Knockout.js', url: 'https://brunsker.com.br' },
                { name: 'BS Notas', description: 'Solução da Brunsker para gestão de documentos fiscais.', technologies: 'Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'BS Chatbot', description: 'Solução da Brunsker para comunicação com clientes e automação de processos e vendas.', technologies: 'Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'BS Chatbot Mobile', description: 'Aplicativo mobile do BS Chatbot, desenvolvido com React Native e Expo.', technologies: 'React Native · Expo', url: 'https://brunsker.com.br' },
                { name: 'BS Portal do Vendedor', description: 'Plataforma web da Brunsker para gestão de vendas e acesso a informações de produtos e desempenho.', technologies: 'C# · Angular · Docker · Portainer', url: 'https://brunsker.com.br' },
                { name: 'CSF', description: 'Projeto web desenvolvido com Laravel e Blade, banco de dados MySQL e hospedagem na DigitalOcean com Nginx.', technologies: 'Laravel · MySQL · Nginx · DigitalOcean · Blade' },
            ],
        },
        contact: ['GitHub: github.com/franciscofilipeee', 'LinkedIn: linkedin.com/in/franciscofilipeee', 'Tem uma ideia ou desafio técnico? Vamos conversar.'],
        skills: [['Frontend & Mobile', 'TypeScript · JavaScript · React · React Native · Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend & Dados', 'PHP · Laravel · Java · Spring · MySQL'], ['Cloud, Infraestrutura & Sistemas', 'Google Cloud · AWS · DigitalOcean · Docker · Docker Swarm · Kubernetes · Linux · Ubuntu · Windows'], ['Design & Colaboração', 'Figma · Trello · Discord · Git · GitHub · GitLab · Azure DevOps']],
        education: ['Engenharia de Software — PUC Minas (cursando)', 'Técnico em Informática — POLIMIG, Belo Horizonte'],
        experiences: ['Foco: Desenvolvimento Full Stack', 'Crio produtos úteis, rápidos e bem elaborados em web, mobile, APIs, dados e infraestrutura.'],
        work: {
            periodLabel: 'Período',
            activitiesLabel: 'Atividades',
            entries: [
                { company: 'Brunsker Tecnologia LTDA', period: 'Outubro de 2025 – atual', role: 'Desenvolvedor Júnior / Estagiário de Desenvolvimento', activities: 'Desenvolvimento de e-commerces B2B/B2C com Magento e integração com o ERP Winthor. Desenvolvimento com PHP, Laravel, Inertia.js, React e JavaScript/jQuery, além de HTML e CSS para outras soluções web. Atuação com servidores Linux/Ubuntu, Azure DevOps e Docker.' },
                { company: 'Fabrika de Softwares SVF LTDA', period: 'Agosto de 2022 – outubro de 2025', role: 'Desenvolvedor Web Fullstack — Jovem Aprendiz', activities: 'Desenvolvimento e manutenção de softwares sob demanda, automação de fluxos manuais e melhoria de produtividade. Atuação com PHP, Laravel, Blade, Vue.js, Inertia.js, Tailwind CSS, Bootstrap 5 e MySQL, além de AWS, DigitalOcean, Linux e Docker.' },
                { company: 'Freelancer', period: 'Maio de 2021 – julho de 2022', role: 'Produtor audiovisual', activities: 'Edição de vídeos e imagens com After Effects, Illustrator, Photoshop e Premiere. Renderização, compressão e conversão de vídeos com HandBrake e edição de áudio com Audacity. Criação de media kits para transmissões, logos, thumbnails e imagens para redes sociais.' },
            ],
        },
        certifications: [
            { name: 'Docker para Desenvolvedores (com Docker Swarm e Kubernetes)', institution: 'Udemy', period: 'Dezembro de 2025', duration: '13,5 horas' },
            { name: 'Imersão Cloud DevOps — Docker e Google Cloud', institution: 'Alura', period: 'Maio de 2025', duration: '3 horas' },
            { name: 'Programação em PHP com Laravel, Livewire e SQLite', institution: 'Curso Online de PHP', period: 'Novembro de 2024', duration: '6 horas' },
            { name: 'Programação em PHP com Laravel, MySQL/SQLite, Livewire e Inertia.js', institution: 'Pinguim Academy', period: 'Maio – julho de 2024', duration: '50 horas' },
            { name: 'Curso de Laravel', institution: 'Hora de Codar', period: 'Novembro de 2023', duration: '6 horas' },
        ],
        resume: { file: 'curriculo.pdf', pages: '2 páginas', download: '↓ Baixar PDF', unsupported: 'Seu navegador não suporta preview de PDF. Use o link de download acima.' },
        neofetch: [['Cargo', 'Desenvolvedor Full Stack'], ['Trabalho atual', 'Desenvolvedor Júnior @ Brunsker Tecnologia LTDA (Outubro de 2025 - ...)'], ['Formação', 'Engenharia de Software @ PUC Minas'], ['Curso técnico', 'Informática @ POLIMIG'], ['Frontend', 'TypeScript · JavaScript · React · React Native'], ['UI', 'Tailwind CSS · Bootstrap · HTML · CSS'], ['Backend', 'PHP · Laravel · Java · Spring'], ['Dados', 'MySQL'], ['Cloud', 'Google Cloud · AWS · DigitalOcean'], ['DevOps', 'Docker · Swarm · Kubernetes · Linux'], ['Workflow', 'Git · GitHub · GitLab · Azure DevOps · Figma'], ['Interesses', 'Tecnologia · infraestrutura · carros'], ['GitHub', 'github.com/franciscofilipeee'], ['LinkedIn', 'linkedin.com/in/franciscofilipeee'], ['Shell', 'portfolio-terminal']],
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
