import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./config";

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center">
            <div className="locale-switcher">
                <select
                    value={i18n.resolvedLanguage}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                    {Object.entries(supportedLanguages).map(([code, name]) => (
                        <option value={code} key={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}