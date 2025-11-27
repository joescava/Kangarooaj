// Punto futuro de integración para envío de correos desde backend propio o un proveedor externo.
// En despliegue estático sobre GitHub Pages este módulo NO se ejecuta en el servidor.

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// Placeholder para documentar intención arquitectónica.
export async function sendContact(_payload: ContactPayload): Promise<void> {
  // Implementar cuando se disponga de backend (API propia o servicio externo).
  return Promise.resolve();
}
