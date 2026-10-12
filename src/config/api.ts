const envName = process.env.NODE_ENV;
let configuredBaseUrl: string | undefined;

switch (envName) {
    case "development":
        configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
        break;
    case "production":
        configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL_PRD;
        break;
    default:
        configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
}

export const API_BASE_URL = configuredBaseUrl
    ? configuredBaseUrl.replace(/\/+$/, "")
    : "http://localhost:8080";
