// Eleventy v3 - ESM
import { EleventyI18nPlugin, EleventyHtmlBasePlugin } from "@11ty/eleventy";
import Image from "@11ty/eleventy-img";
import path from "node:path";
import fs from "node:fs";

export default function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/manifest.webmanifest": "manifest.webmanifest" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });

  // Plugins oficiales
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "es",
    // Enlaces multilenguaje; las cadenas van por el filtro t()
  });

  // Filtro i18n simple para cadenas desde _data/i18n/{lang}.json
  eleventyConfig.addFilter("i18n", function (key, lang = this.ctx.lang || "es") {
    const p = path.join("src/_data/i18n", `${lang}.json`);
    const fallback = path.join("src/_data/i18n", "es.json");
    const dict = JSON.parse(fs.readFileSync(fs.existsSync(p) ? p : fallback, "utf8"));
    return key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), dict) ?? key;
  });

  // Shortcode de imágenes responsivas (AVIF/WEBP  PNG fallback)
  eleventyConfig.addNunjucksAsyncShortcode(
    "img",
    async function (src, alt, widths = [320, 640, 960, 1280], sizes = "100vw") {
      const outDir = "_site/assets/images/optimized";
      const urlPath = "/assets/images/optimized";
      const metadata = await Image(src, {
        widths,
        formats: ["avif", "webp", "png"],
        outputDir: outDir,
        urlPath,
      });
      const imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        fetchpriority: "low",
      };
      return Image.generateHTML(metadata, imageAttributes);
    },
  );

  // Minificación HTML ligera (sin romper SSR estático)
  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      return content.replace(/\n\s+/g, "\n").replace(/\s{2,}/g, " ");
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
  };
}
