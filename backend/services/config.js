const port = process.env.PORT || 5000;
const url = process.env.BACKEND_URL;
const baseURL = `${url}${port}`;
require('dotenv').config();

module.exports = {
    // The secret for the encryption of the jsonwebtoken
    JWTsecret: 'mysecret',
    baseURL: baseURL,
    port: port,
    // The credentials and information for OAuth2
    oauth2Credentials: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        project_id: process.env.GOOGLE_PROJECT_ID, // The name of your project
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uris: [
            `${baseURL}/auth/google/redirect`
        ],
        scopes: [
            'profile'
        ]
    }
};