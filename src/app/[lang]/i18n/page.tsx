import { getDictionary } from "~/lang/dictionaries";
import { type Locale } from "~/lang/i18n";
import LocaleSwitcher from "./locale-switcher";

export default async function Test3({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);

    return (
        <>
            <LocaleSwitcher />
            <div>{dict.welcome}</div>
        </>
    );
}
