/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_URL: readonly string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
