import { useRef, useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import Help from './help';
import { resolveCommand, translations, type Command, type Locale } from '~/i18n';

const commandOutput = (command: Command, commandId: number, locale: Locale) => {
    const outputKey = `command-${commandId}-${command}-output`;
    const t = translations[locale];

    switch (command) {
        case 'about':
            return <TerminalOutput key={outputKey}>
                {t.about.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}
            </TerminalOutput>;
        case 'projects':
            return <TerminalOutput key={outputKey}>
                <span className="text-green-500">{t.commands.projects.name}/</span> {t.projects.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}
            </TerminalOutput>;
        case 'contact':
            return <TerminalOutput key={outputKey}>
                {t.contact.map((line, index) => <span key={line}>{index > 0 && <br />}<span className={index < 2 ? 'text-green-500' : ''}>{line}</span></span>)}
            </TerminalOutput>;
        case 'resume':
            return <TerminalOutput key={outputKey}>
                <div className="resume-preview">
                    <div className="resume-preview__header">
                        <span><span className="text-green-500">{t.resume.file}</span> — {t.resume.pages}</span>
                        <a
                            className="resume-preview__download"
                            href="/curriculo-francisco-filipe.pdf"
                            download="Curriculo-Francisco-Filipe-Desenvolvedor.pdf"
                        >
                            {t.resume.download}
                        </a>
                    </div>
                    <iframe
                        className="resume-preview__frame"
                        src="/curriculo-francisco-filipe.pdf#view=FitH"
                        title={t.resume.file}
                    >
                        {t.resume.unsupported}
                    </iframe>
                </div>
            </TerminalOutput>;
        case 'skills':
            return <TerminalOutput key={outputKey}>
                {t.skills.map(([category, items], index) => <span key={category}>{index > 0 && <br />}<br /><span className="text-green-500">{category}</span><br />{items}</span>)}
            </TerminalOutput>;
        case 'education':
            return <TerminalOutput key={outputKey}>
                {t.education.map((line, index) => <span key={line}>{index > 0 && <br />}<span className="text-green-500">{line}</span></span>)}
            </TerminalOutput>;
        case 'experiences':
            return <TerminalOutput key={outputKey}>
                {t.experiences.map((line, index) => <span key={line}>{index > 0 && <br />}<span className={index === 0 ? 'text-green-500' : ''}>{line}</span></span>)}
            </TerminalOutput>;
        case 'certifications':
            return <TerminalOutput key={outputKey}>
                {t.certifications}
            </TerminalOutput>;
        default:
            return null;
    }
};

export default function TerminalController() {
    const nextCommandId = useRef(0);
    const [locale, setLocale] = useState<Locale>('en');
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput key="start1">{translations.en.welcome[0]}</TerminalOutput>,
        <TerminalOutput key="start2">{translations.en.welcome[1]}</TerminalOutput>,
        <TerminalOutput key="start3">{translations.en.welcome[2]}</TerminalOutput>,
    ]);

    const [commandHistory, setCommandHistory] = useState<string[]>([]);

    const [historyIndex, setHistoryIndex] = useState<number>(-1);

    const handleInput = (input: string) => {
        if (!input.trim()) return;

        const commandId = nextCommandId.current++;
        const newCommandHistory = [...commandHistory, input];
        setCommandHistory(newCommandHistory);
        setHistoryIndex(-1);

        const newLineData = [...terminalLineData];

        newLineData.push(
            <TerminalOutput key={`command-${commandId}-input`}>
                <span className="font-mono">
                    <span className="text-[#a2a2a2]">user@portfolio:~$</span><span className="text-white"> {input}</span>
                </span>
            </TerminalOutput>
        );

        const [enteredCommand, argument] = input.trim().toLowerCase().split(/\s+/, 2);
        const command = resolveCommand(enteredCommand, locale);
        const t = translations[locale];

        switch (command) {
            case 'help':
                newLineData.push(<Help key={`command-${commandId}-help-output`} locale={locale} />);
                setTerminalLineData(newLineData);
                break;

            case 'neofetch':
                void fetch('/ascii-art.txt')
                    .then((response) => {
                        if (!response.ok) throw new Error('ASCII art not found');
                        return response.text();
                    })
                    .then((asciiArt) => {
                        setTerminalLineData((lines) => [...lines,
                            <TerminalOutput key={`command-${commandId}-neofetch-output`}>
                                <pre className="ascii-art">{asciiArt}</pre>
                                <div className="neofetch-info">
                                    <span className="text-green-500">francisco@portfolio</span>
                                    <br />-------------------
                                    {t.neofetch.map(([label, value]) => <span key={label}><br /><span className="text-green-500">{label}:</span> {value}</span>)}
                                </div>
                            </TerminalOutput>,
                        ]);
                    })
                    .catch(() => {
                        setTerminalLineData((lines) => [...lines,
                            <TerminalOutput key={`command-${commandId}-neofetch-error`}>
                                {t.asciiError}
                            </TerminalOutput>,
                        ]);
                    });
                setTerminalLineData(newLineData);
                break;

            case 'clear':
                setTerminalLineData([]);
                break;

            case 'language': {
                const nextLocale = argument === 'pt' || argument === 'en' ? argument : null;
                newLineData.push(
                    <TerminalOutput key={`command-${commandId}-language-output`}>
                        {nextLocale ? translations[nextLocale].languageChanged : t.languageUsage}
                    </TerminalOutput>,
                );
                if (nextLocale) setLocale(nextLocale);
                setTerminalLineData(newLineData);
                break;
            }

            case 'exit':
                newLineData.push(
                    <TerminalOutput key={`command-${commandId}-exit-output`}>
                        {t.exit}
                    </TerminalOutput>
                );
                setTerminalLineData(newLineData);

                setTimeout(() => {
                    window.close();
                }, 1000);
                break;
            default:
                const output = command ? commandOutput(command, commandId, locale) : null;
                newLineData.push(output ??
                    <TerminalOutput key={`command-${commandId}-unknown-output`}>
                        {t.unknown.replace('{command}', input)}
                    </TerminalOutput>);
                setTerminalLineData(newLineData);
                break;
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (commandHistory.length === 0) return;

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            const inputEl = e.currentTarget.querySelector('.terminal-hidden-input') as HTMLInputElement | null;
            if (!inputEl) return;

            e.preventDefault();

            let nextIndex = historyIndex;

            if (e.key === 'ArrowUp') {
                nextIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
            } else if (e.key === 'ArrowDown') {
                nextIndex = historyIndex > -1 ? historyIndex - 1 : -1;
            }

            setHistoryIndex(nextIndex);

            const targetValue = nextIndex === -1
                ? ''
                : commandHistory[commandHistory.length - 1 - nextIndex] || '';

            const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            valueSetter?.call(inputEl, targetValue);

            const event = new Event('input', { bubbles: true });
            inputEl.dispatchEvent(event);
        }
    };

    return (
        <div
            className="portfolio-terminal fullscreen-terminal h-dvh w-screen overflow-hidden"
            onKeyDown={handleKeyDown}
        >
            <Terminal
                name="Portfolio - Francisco Filipe (@franciscofilipeee)"
                height="100%"
                colorMode={ColorMode.Dark}
                onInput={handleInput}
                prompt="user@portfolio:~$"
            >
                {terminalLineData}
            </Terminal>
        </div>
    );
};
