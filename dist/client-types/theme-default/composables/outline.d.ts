import type { DefaultTheme } from 'vitepress/theme';
import { type Ref } from 'vue';
import type { Header } from '../../shared';
export type MenuItem = Omit<Header, 'slug' | 'children'> & {
    element: HTMLHeadElement;
    children?: MenuItem[];
};
export declare function resolveTitle(theme: DefaultTheme.Config): string;
export declare function getHeaders(range: DefaultTheme.Config['outline']): MenuItem[];
export declare function resolveHeaders(headers: MenuItem[], range?: DefaultTheme.Config['outline']): MenuItem[];
export declare function useActiveAnchor(container: Ref<HTMLElement>, marker: Ref<HTMLElement>): void;
