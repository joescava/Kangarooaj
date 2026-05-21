import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() =>
  import("@/features/landing/components/LandingPage").then((module) => ({
    default: module.LandingPage,
  })),
);

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title:
          "Kangaroo AJ | Senior Software, Automation & Applied AI for B2B Operations",
      },
      {
        name: "description",
        content:
          "Kangaroo AJ gives B2B companies in the United States, Colombia and global remote-first markets direct access to senior software engineering, business automation and applied AI execution.",
      },
      { name: "author", content: "Kangaroo AJ S.A.S." },
      {
        property: "og:title",
        content: "Kangaroo AJ | Senior Software, Automation & Applied AI",
      },
      {
        property: "og:description",
        content:
          "Premium boutique senior technology partner for B2B software engineering, business automation and applied AI execution.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content:
          "https://johancantev.github.io/kangaroo-aj-website/og-image.jpg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://johancantev.github.io/kangaroo-aj-website/",
      },
      {
        rel: "alternate",
        hrefLang: "en-US",
        href: "https://johancantev.github.io/kangaroo-aj-website/",
      },
      {
        rel: "alternate",
        hrefLang: "es-CO",
        href: "https://johancantev.github.io/kangaroo-aj-website/",
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: "https://johancantev.github.io/kangaroo-aj-website/",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LandingPage />
    </Suspense>
  );
}
