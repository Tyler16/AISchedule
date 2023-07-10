declare global {
    namespace NodeJS {
        interface ProcessEnv {
            AUTH0_DOMAIN: String;
            AUTH0_CLIENT_ID: String;
        }
    }
}

export {}