import type { HeadConfig, PageData, SiteData } from '../../types/shared';
export type { Awaitable, DefaultTheme, HeadConfig, Header, LocaleConfig, LocaleSpecificConfig, MarkdownEnv, PageData, PageDataPayload, SSGContext, SiteData } from '../../types/shared';
export declare const EXTERNAL_URL_RE: RegExp;
export declare const APPEARANCE_KEY = "vitepress-theme-appearance";
export declare const inBrowser: boolean;
export declare const notFoundPageData: PageData;
export declare function isActive(currentPath: string, matchPath?: string, asRegex?: boolean): boolean;
export declare function isExternal(path: string): boolean;
export declare function getLocaleForPath(siteData: SiteData | undefined, relativePath: string): string;
/**
 * this merges the locales data to the main data by the route
 */
export declare function resolveSiteDataByRoute(siteData: SiteData, relativePath: string): SiteData;
/**
 * Create the page title string based on config.
 */
export declare function createTitle(siteData: SiteData, pageData: PageData): string;
export declare function mergeHead(prev: HeadConfig[], curr: HeadConfig[]): HeadConfig[];
export declare function sanitizeFileName(name: string): string;
export declare function slash(p: string): string;
export declare function treatAsHtml(filename: string): boolean;
export declare function escapeRegExp(str: string): string;
/**
 * @internal
 */
export declare function escapeHtml(str: string): string;
