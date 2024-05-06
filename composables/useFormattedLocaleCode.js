export function useLocaleFormatting() {
    const { locale } = useI18n();
    const formattedLocaleCode = computed(() => (locale.value === 'pl' ? '' : locale.value));
    const generateURL = (path) => {
        if (formattedLocaleCode.value === '') {
            return path;
        } else {
            return `/${formattedLocaleCode.value}${path}`;
        }
    }

    return {
        formattedLocaleCode, generateURL
    }
}