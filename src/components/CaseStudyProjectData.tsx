import type { Project } from "../types/Project";
import { getProjectTypes } from "../utils/projectType";

const surfaceClassName =
    "rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_16px_40px_rgba(18,22,29,0.07)] backdrop-blur-md md:p-7";

const cleanList = (values: string[]) =>
    values.map((value) => value.trim()).filter((value) => value !== "");

export default function CaseStudyProjectData({ project }: { project: Project }) {
    const facts = [
        { label: "Client", value: project.client.trim() },
        { label: "Annee", value: `${project.year}` },
        { label: "Secteur", value: project.secteur.trim() },
        { label: "Type", value: getProjectTypes(project).join(" / ") },
    ].filter((item) => item.value !== "");

    const narratives = [
        { title: "Description", value: project.description.trim() },
        { title: "Contexte", value: project.Contexte.trim() },
        { title: "Reponse", value: project.Reponse.trim() },
    ].filter((item) => item.value !== "");

    const lists = [
        { title: "Missions", items: cleanList(project.missions) },
        { title: "Outils", items: cleanList(project.outils) },
        { title: "Technologies", items: cleanList(project.technologies) },
    ].filter((item) => item.items.length > 0);

    return (
        <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {facts.map((fact) => (
                    <article key={fact.label} className={surfaceClassName}>
                        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-neutral-500">
                            {fact.label}
                        </p>
                        <p className="mt-4 text-2xl leading-tight tracking-[-0.03em] text-neutral-950">
                            {fact.value}
                        </p>
                    </article>
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {narratives.map((item) => (
                    <article key={item.title} className={surfaceClassName}>
                        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-neutral-500">
                            {item.title}
                        </p>
                        <p className="mt-4 text-base leading-8 text-neutral-600">
                            {item.value}
                        </p>
                    </article>
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {lists.map((list) => (
                    <article key={list.title} className={surfaceClassName}>
                        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-neutral-500">
                            {list.title}
                        </p>
                        <ul className="mt-4 m-0 grid gap-3 p-0 text-base leading-7 text-neutral-600">
                            {list.items.map((item) => (
                                <li key={item} className="list-none border-b border-black/6 pb-3 last:border-b-0 last:pb-0">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    );
}
