import { useTranslation } from "../i18n";

const languages = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      className="bg-zinc-900/70 border border-white/20 rounded-full text-xs md:text-sm uppercase tracking-wide px-3 py-1 text-white hover:border-emerald-300 focus:outline-emerald-400"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
