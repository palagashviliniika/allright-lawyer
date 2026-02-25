export const heroQuery = `*[_type == "hero" && locale == $locale][0] {
  title,
  subtitle
}`;

export const servicesQuery = `*[_type == "services" && locale == $locale][0] {
  title,
  items[] {
    key,
    title,
    description
  }
}`;

export const whyChooseUsQuery = `*[_type == "whyChooseUs" && locale == $locale][0] {
  title,
  images[] {
    alt,
    "url": asset->url
  }
}`;

export const trustedClientsQuery = `*[_type == "trustedClients" && locale == $locale][0] {
  title,
  partners[] {
    name,
    "logoUrl": logo.asset->url
  }
}`;

export const faqQuery = `*[_type == "faq" && locale == $locale][0] {
  title,
  items[] {
    question,
    answer
  }
}`;

export const howWeWorkQuery = `*[_type == "howWeWork" && locale == $locale][0] {
  titlePrefix,
  titleHighlight,
  left {
    caseHeader,
    description
  },
  middle {
    caseHeader,
    bullets
  },
  right {
    caseHeader,
    description,
    bullets
  }
}`;
