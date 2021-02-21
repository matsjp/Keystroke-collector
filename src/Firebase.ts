import admin from'firebase-admin'
import dotenv from 'dotenv';
dotenv.config();

if (process.env.TYPE == null){
    throw Error("TYPE does not exist in .env");   
}
else if (process.env.PROJECT_ID == null){
    throw Error("PROJECT_ID does not exist in .env")
}
else if (process.env.PRIVATE_KEY_ID == null){
    throw Error("PRIVATE_KEY_ID does not exist in .env")
}
else if (process.env.PRIVATE_KEY == null){
    throw Error("PRIVATE_KEY does not exist in .env")
}
else if (process.env.CLIENT_EMAIL == null){
    throw Error("CLIENT_EMAIL does not exist in .env")
}
else if (process.env.CLIENT_ID == null){
    throw Error("CLIENT_ID does not exist in .env")
}
else if (process.env.AUTH_URI == null){
    throw Error("AUTH_URI does not exist in .env")
}
else if (process.env.TOKEN_URI == null){
    throw Error("TOKEN_URI does not exist in .env")
}
else if (process.env.CLIENT_X509_SERT_URL == null){
    throw Error("CLIENT_X509_SERT_URL does not exist in .env")
}
else if (process.env.AUTH_PROVIDER_X509_SERT_URL == null){
    throw Error("AUTH_PROVIDER_X509_SERT_URL does not exist in .env")
}


const serviceAccount = {
    type: process.env.TYPE,
    projectId: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_SERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_SERT_URL
  }
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin.firestore();