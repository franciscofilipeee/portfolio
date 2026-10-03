import { TerminalOutput } from "react-terminal-ui";
import { translations, type Locale } from "~/i18n";

export default function Help({ locale }: { locale: Locale }) {
    const commands = Object.values(translations[locale].commands);
    return (
        <>
            {commands.map((command) => (
                <TerminalOutput key={command.name}>
                    <span className="text-green-500">{command.name}</span>: {command.description}
                </TerminalOutput>
            ))}
        </>
    )
}
