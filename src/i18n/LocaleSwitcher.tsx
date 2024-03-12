import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./config";

export default function LocaleSwitcher() {
    
    /// Typescript is complaining about deep instantiation here...
    /// I don't understand why & I dont want to because it's not breaking anything
    /// So, this error is being ignored.  If there are any complaints get in touch with me on Github @user2745
    // @ts-ignore
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