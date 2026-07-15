import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções declaradas diretamente aqui no arquivo de config para simplificar 
const resources = {
  'pt-BR': {
    translation: {
      "app": {
        "title": "Portal Headless CMS",
        "subtitle": "Internacionalização dinâmica de dados e elementos estáticos",
        "loading": "Carregando artigos...",
        "error": "Erro ao carregar artigos.",
        "footer": "© 2026 Portal de Notícias. Todos os direitos reservados."
      },
      "switcher": {
        "label": "Idioma"
      },
      "article": {
        "readMore": "Leia mais",
        "date": "Publicado em",
        "noArticles": "Nenhum artigo encontrado para o idioma selecionado."
      }
    },
  },
  'en-US': {
    translation: {
      "app": {
        "title": "Headless CMS Portal",
        "subtitle": "Dynamic internationalization of data and static elements",
        "loading": "Loading articles...",
        "error": "Error loading articles.",
        "footer": "© 2026 News Portal. All rights reserved."
      },
      "switcher": {
        "label": "Language"
      },
      "article": {
        "readMore": "Read more",
        "date": "Published on",
        "noArticles": "No articles found for the selected language."
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
