export interface Article {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  dataPublicacao: string;
  tempoLeitura: string;
  link: string;
}

const cmsMockData: Record<string, Article[]> = {
  'pt-BR': [
    {
      id: 1,
      titulo: 'Desbravando o Headless CMS com React e TypeScript',
      descricao: 'Descubra como acoplar um CMS moderno ao seu front-end React de forma escalável e com segurança de tipos completa usando TypeScript.',
      categoria: 'Desenvolvimento',
      dataPublicacao: '14 de Julho, 2026',
      tempoLeitura: '5 min',
      link: 'https://react.dev/learn/typescript'
    },
    {
      id: 2,
      titulo: 'Internacionalização sem Segredos utilizando i18next',
      descricao: 'Aprenda as melhores práticas para estruturar a internacionalização (i18n) em sua aplicação, cobrindo traduções estáticas e dinâmicas.',
      categoria: 'Arquitetura',
      dataPublicacao: '12 de Julho, 2026',
      tempoLeitura: '7 min',
      link: 'https://react.i18next.com/'
    },
    {
      id: 3,
      titulo: 'O Futuro do Desenvolvimento Web com Vite',
      descricao: 'Entenda os motivos que tornaram o Vite o bundler padrão do mercado e veja dicas de como otimizar o seu fluxo de build.',
      categoria: 'Ferramentas',
      dataPublicacao: '10 de Julho, 2026',
      tempoLeitura: '4 min',
      link: 'https://vite.dev/'
    }
    // {
    //   id: 4,
    //     titulo: 'Teste de cms',
    //     descricao: 'Testeeeeeeeeeeeeeeee',
    //     categoria: 'Ferramentas',
    //     dataPublicacao: '31 de Fevereiro, 2026',
    //     tempoLeitura: '3 dias',
    //     link: 'https://vite.dev/'
    // }
  ],
  'en-US': [
    {
      id: 1,
      titulo: 'Mastering Headless CMS with React and TypeScript',
      descricao: 'Discover how to connect a modern CMS to your React front-end in a scalable way with full type safety using TypeScript.',
      categoria: 'Development',
      dataPublicacao: 'July 14, 2026',
      tempoLeitura: '5 min',
      link: 'https://strapi.io/blog/build-a-blog-with-react-and-strapi'
    },
    {
      id: 2,
      titulo: 'Internationalization Made Simple with i18next',
      descricao: 'Learn the best practices to structure internationalization (i18n) in your app, covering both static and dynamic translations.',
      categoria: 'Architecture',
      dataPublicacao: 'July 12, 2026',
      tempoLeitura: '7 min',
      link: 'https://react.i18next.com/'
    },
    {
      id: 3,
      titulo: 'The Future of Web Development with Vite',
      descricao: 'Understand why Vite became the default bundler in the market and see tips on how to optimize your build workflow.',
      categoria: 'Tools',
      dataPublicacao: 'July 10, 2026',
      tempoLeitura: '4 min',
      link: 'https://vite.dev/'
    }
  ]
};

// GET /api/artigos?locale={locale} simulado
export async function fetchArticlesFromCMS(locale: string): Promise<Article[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cmsMockData[locale] || cmsMockData['pt-BR']);
    }, 600);
  });
}
