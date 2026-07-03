// Config do projeto Firebase (Estúdio FMV).
// Não é segredo — a segurança real vem das Realtime Database Rules,
// não de esconder esta config (ela é pública em qualquer app frontend).
export const firebaseConfig = {
  apiKey: "AIzaSyDvqqxSwWyzBrxIK6S7p3FUD8K955cV-js",
  authDomain: "estudio-facsmv.firebaseapp.com",
  databaseURL: "https://estudio-facsmv-default-rtdb.firebaseio.com",
  projectId: "estudio-facsmv",
  storageBucket: "estudio-facsmv.firebasestorage.app",
  messagingSenderId: "499461039134",
  appId: "1:499461039134:web:26ba491d5a6044cad23a0f"
};

// Normaliza um e-mail para uma chave válida do Realtime Database
// (chaves do RTDB não podem conter '.', '#', '$', '[', ']', '/').
export function emailParaChave(email) {
  return email.trim().toLowerCase().replace(/[.#$/[\]]/g, "_");
}
