import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { talentProfiles } from "@/content/talentProfiles";

export function TalentProfilesSection() {
  return (
    <section className="border-t border-slate-900/80 bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Perfiles tecnológicos</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Un equipo completo para ir desde la arquitectura hasta la operación en la nube.
          </h2>
          <p className="text-sm text-slate-400">
            No hablamos solo de “desarrolladores”, sino de un equipo que cubre las piezas clave: arquitectura,
            ingeniería de software, nube, datos e IA. Puedes trabajar con todo el equipo o con los perfiles que hoy más
            necesites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {talentProfiles.map((profile) => (
            <Card key={profile.id}>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-50">{profile.name}</h3>
                <p className="text-sm text-slate-300">{profile.description}</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {profile.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
