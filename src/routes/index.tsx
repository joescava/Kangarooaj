import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import {
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "@/config/site";

const LandingPage = lazy(() =>
  import("@/features/landing/components/LandingPage").then((module) => ({
    default: module.LandingPage,
  })),
);

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
      {
        rel: "alternate",
        hrefLang: "en-US",
        href: SITE_URL,
      },
      {
        rel: "alternate",
        hrefLang: "es-CO",
        href: SITE_URL,
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: SITE_URL,
      },
    ],
    meta: [
      {
        title: SITE_TITLE,
      },
      {
        name: "description",
        content: SITE_DESCRIPTION,
      },
      { name: "author", content: "Kangaroo AJ S.A.S." },
      {
        property: "og:title",
        content: SITE_TITLE,
      },
      {
        property: "og:description",
        content: SITE_DESCRIPTION,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: SITE_OG_IMAGE,
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        name: "twitter:title",
        content: SITE_TITLE,
      },
      {
        name: "twitter:description",
        content: SITE_DESCRIPTION,
      },
      {
        name: "twitter:image",
        content: SITE_OG_IMAGE,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
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
