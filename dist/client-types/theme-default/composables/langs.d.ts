export declare function useLangs({ correspondingLink }?: {
    correspondingLink?: boolean | undefined;
}): {
    localeLinks: import("vue").ComputedRef<{
        text: string;
        link: string;
    }[]>;
    currentLang: import("vue").ComputedRef<{
        label: string;
        link: string;
    }>;
};
