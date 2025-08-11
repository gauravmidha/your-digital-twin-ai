import { useEffect } from "react";

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any> | string;
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, json: string) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = json;
}

export const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
      upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    }
    if (title) {
      upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
      upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    }
    const href = canonical || (typeof window !== 'undefined' ? window.location.href : '/');
    if (href) upsertLink("canonical", href);

    if (jsonLd) {
      const payload = typeof jsonLd === "string" ? jsonLd : JSON.stringify(jsonLd);
      upsertJsonLd("seo-json-ld", payload);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};
