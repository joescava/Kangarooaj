"use client";

import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

function buildMailtoUrl(form: HTMLFormElement): string {
  const { email } = siteConfig.company;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "");
  const company = String(formData.get("company") || "");
  const topic = String(formData.get("topic") || "");
  const message = String(formData.get("message") || "");

  const subject = encodeURIComponent("Contacto Kangaroo AJ");
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmpresa: ${company}\nInterés principal: ${topic}\n\nDetalle:\n${message}`,
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault();
  const form = event.currentTarget;
  const mailtoUrl = buildMailtoUrl(form);
  window.location.href = mailtoUrl;
}

export function ContactFormSection() {
  const { email, phone } = siteConfig.company;

  return (
    <section
      id="contacto"
      className="border-t border-slate-900/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-16 sm:py-20"
    >
      <Container className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            Hablemos
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Alineemos tecnología, negocio y ejecución en una misma conversación.
          </h2>
          <p className="text-sm text-slate-300">
            Cuéntanos en qué punto está tu empresa y qué quieres lograr. A partir de ahí, diseñamos un
            camino realista, con prioridades claras y un plan accionable.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Correo
              </span>
              <a
                href={`mailto:${email}?subject=Contacto%20Kangaroo%20AJ`}
                className="text-sm text-emerald-300 hover:text-emerald-200"
              >
                {email}
              </a>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Teléfono
              </span>
              <span>{phone}</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-black/50">
          <p className="mb-4 text-sm font-medium text-slate-100">
            Comparte el contexto de tu proyecto.
          </p>
          <p className="mb-6 text-xs text-slate-400">
            Este formulario prepara la conversación. El envío abre tu cliente de correo para que tengas
            una copia completa de lo que compartes.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-medium text-slate-200">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/60 placeholder:text-slate-500 focus:border-brand-400 focus:ring-2"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="company" className="text-xs font-medium text-slate-200">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/60 placeholder:text-slate-500 focus:border-brand-400 focus:ring-2"
                placeholder="Nombre de la empresa o proyecto"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="topic" className="text-xs font-medium text-slate-200">
                ¿Qué te interesa trabajar?
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="software">Arquitectura o desarrollo de software</option>
                <option value="fashion">Moda, marca o ecommerce</option>
                <option value="agro">Proyecto o iniciativa agrícola</option>
                <option value="other">Otro tipo de proyecto</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-medium text-slate-200">
                Contexto del proyecto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/60 placeholder:text-slate-500 focus:border-brand-400 focus:ring-2"
                placeholder="Cuéntanos brevemente la situación actual y qué te gustaría lograr."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/40 transition hover:bg-brand-600"
            >
              Enviar contexto por correo
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}