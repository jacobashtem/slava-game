export function useFormattedLocaleCode() {
    const { locale } = useI18n();
    const formattedLocaleCode = computed(() => (locale.value === 'pl' ? '' : locale.value));
    return {
        formattedLocaleCode
    }
}