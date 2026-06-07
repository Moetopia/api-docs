import type {ZudokuConfig} from "zudoku";

const config: ZudokuConfig = {
    site: {
        logo: {
            src: {light: "/L logo.png", dark: "/L logo.png"},
            alt: "Moetopia",
            width: "130px",
        },
        title: "Moetopia API",
        footer: {
            position: "center",
            social: [
                {icon: "github", href: "https://github.com/Moetopia"},
            ],
            copyright: `© ${new Date().getFullYear()} Moetopia & Sakura Society. All rights reserved.`,
        }
    },
    navigation: [
        {
            type: "category",
            label: "Documentation",
            items: [
                {
                    type: "category",
                    label: "Getting Started",
                    icon: "sparkles",
                    items: [
                        "/introduction",
                    ],
                },
                {
                    type: "category",
                    label: "API目录",
                    icon: "compass",
                    items: [
                        {
                            type: "link",
                            icon: "folder-cog",
                            badge: {
                                label: "New",
                                color: "purple",
                            },
                            label: "主站 API",
                            to: "/api-backend",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "其他链接",
                    collapsible: false,
                    icon: "link",
                    items: [
                        {
                            type: "link",
                            icon: "link-2",
                            label: "文档 Github",
                            to: "https://github.com/Moetopia/api-docs",
                        },
                    ],
                },
            ],
        },
        {
            type: "link",
            to: "/api-backend",
            label: "主站API",
        },
    ],
    redirects: [{from: "/", to: "/introduction"}],
    catalogs: {
        path: "/catalog",
        label: "API Catalog",
    },
    apis: [
        {
            type: "file",
            input: "./apis/openapi.json",
            path: "/api-backend",
        }
    ],
    docs: {
        files: "/pages/**/*.{md,mdx}",
    },
    theme: {
        light: {
            background: "#fbfbfb",
            foreground: "#8d706e",
            card: "#f7f5f4",
            cardForeground: "#8d706e",
            popover: "#f7f5f4",
            popoverForeground: "#8d706e",
            primary: "#dfa7a1",
            primaryForeground: "#0d0100",
            secondary: "#ecdedb",
            secondaryForeground: "#8d706e",
            muted: "#ecdedb",
            mutedForeground: "#827d7c",
            accent: "#ecdcd2",
            accentForeground: "#8d706e",
            destructive: "#c78673",
            destructiveForeground: "#4b2d25",
            border: "#e6d7d4",
            input: "#e6d7d4",
            ring: "#ca9892",
            radius: "0.625rem",
        },
        dark: {
            background: "#252525",
            foreground: "#fafafa",
            card: "#343434",
            cardForeground: "#fafafa",
            popover: "#343434",
            popoverForeground: "#fafafa",
            primary: "#eaeaea",
            primaryForeground: "#343434",
            secondary: "#444444",
            secondaryForeground: "#fafafa",
            muted: "#444444",
            mutedForeground: "#b4b4b4",
            accent: "#444444",
            accentForeground: "#fafafa",
            destructive: "#da9384",
            destructiveForeground: "#fafafa",
            border: "#ffffff1a", // 10% alpha
            input: "#ffffff26",  // 15% alpha
            ring: "#8a8a8a",
            radius: "0.625rem",
        },
    },
    "sitemap": {
        "siteUrl": "https://api-docs.moetopia.top/",
        "changefreq": "daily",
        "priority": 0.7,
        "outDir": "sitemaps/",
        "autoLastmod": true,
        "exclude": ["/404", "/private/page"]
    },
    search: {
        type: "pagefind",
        // Optional: Maximum number of sub results per page
        maxSubResults: 3,
        // Optional: Configure search result ranking (defaults shown below)
        ranking: {
            termFrequency: 0.8,
            pageLength: 0.6,
            termSimilarity: 1.2,
            termSaturation: 1.2,
        },
    },
    metadata: {
        title: "%s - Moetopia API",
        description: "Moetopia API Documentation",
        favicon: "/favicon.ico",
        applicationName: "Moetopia API",
    },
};

export default config;
