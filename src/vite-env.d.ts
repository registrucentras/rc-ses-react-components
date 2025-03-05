/// <reference types="vite/client" />

// eslint-disable-next-line prettier/prettier
export declare global {
  interface Window {
    ENV: EnvVariables;
    ENV_MFE: MFEEnvVariables;
  }
}

export type EnvVariables = {
  ENV_BUILD_VERSION: string;

  ENV_PUBLIC_PORTAL_URL: string;
  ENV_LEGACY_PORTAL_CART_URL: string;
  ENV_CONTRACT_CUSTOMERS_URL: string;

  ENV_SERVICE_PROVIDER_DOMAIN: string;
  ENV_SERVICE_PROVIDER_MFE_BASENAME: string;
  ENV_SERVICE_PROVIDER_SERVICE_PATH: string;
  ENV_SERVICE_PROVIDER_OWNED_PROPERTIES_PATH: string;

  ENV_FRONTEND_DEFAULT_LANG: string;

  ENV_AUTH_TOKEN_COOKIE_HOST: string;
  ENV_AUTH_TOKEN_COOKIE_NAME: string;
  ENV_REFRESH_TOKEN_COOKIE_NAME: string;
  ENV_LANGUAGE_COOKIE_NAME: string;
  ENV_FONT_SIZE_COOKIE_NAME: string;

  ENV_FRONTEND_API_URL: string;

  ENV_RECAPTCHA_SITE_KEY: string;

  ENV_KEYCLOAK_REALM: string;
  ENV_KEYCLOAK_CLIENT_ID: string;
  ENV_KEYCLOAK_SERVER_URL: string;
}

export type MFEEnvVariables = {
  ENV_SERVICE_ROUTES: { path: string, application: string }[];
  ENV_OWNED_PROPERTIES_ROUTES: { path: string, application: string }[];
}

interface ImportMetaEnv {
  readonly VITE_BUILD_VERSION: string;

  readonly VITE_PUBLIC_PORTAL_URL: string;
  readonly VITE_LEGACY_PORTAL_CART_URL: string;
  readonly VITE_CONTRACT_CUSTOMERS_URL: string;

  readonly VITE_SERVICE_PROVIDER_DOMAIN: string;
  readonly VITE_SERVICE_PROVIDER_MFE_BASENAME: string;
  readonly VITE_SERVICE_PROVIDER_SERVICE_PATH: string;
  readonly VITE_SERVICE_PROVIDER_OWNED_PROPERTIES_PATH: string;

  readonly VITE_FRONTEND_DEFAULT_LANG: string;

  readonly VITE_AUTH_TOKEN_COOKIE_HOST: string;
  readonly VITE_AUTH_TOKEN_COOKIE_NAME: string;
  readonly VITE_REFRESH_TOKEN_COOKIE_NAME: string;
  readonly VITE_LANGUAGE_COOKIE_NAME: string;
  readonly VITE_FONT_SIZE_COOKIE_NAME: string;

  readonly VITE_FRONTEND_API_URL: string;

  readonly VITE_RECAPTCHA_SITE_KEY: string;

  readonly VITE_KEYCLOAK_REALM: string;
  readonly VITE_KEYCLOAK_CLIENT_ID: string;
  readonly VITE_KEYCLOAK_SERVER_URL: string;

  readonly VITE_SERVICE_ROUTES: { path: string, application: string }[];
  readonly VITE_OWNED_PROPERTIES_ROUTES: { path: string, application: string }[];
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
