import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchArticlesFromCMS, type Article } from '../services/cms';
import { Card, Text, Badge, Button, SimpleGrid, Loader, Center } from '@mantine/core';

export const ArticleList = () => {
  const { t, i18n } = useTranslation();
  const [artigos, setArtigos] = useState<Article[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Efeito simples reativo sem checagem de concorrência ou cancelamento
  useEffect(() => {
    setCarregando(true);
    fetchArticlesFromCMS(i18n.language)
      .then((dados) => {
        setArtigos(dados);
        setCarregando(false);
      });
  }, [i18n.language]);

  if (carregando) {
    return (
      <Center my="xl">
        <Loader size="xs" />
        <Text ml="xs">{t('app.loading')}</Text>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
      {artigos.map((item) => (
        <Card key={item.id} shadow="xs" padding="xs" radius="xs" withBorder style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ marginBottom: 5 }}>
            <Badge color="red" variant="filled">
              {item.categoria}
            </Badge>
          </div>
          <Text fw={700} size="sm" mb="xs">
            {item.titulo}
          </Text>
          <Text size="xs" c="dimmed" mb="md" style={{ flexGrow: 1 }}>
            {item.descricao}
          </Text>
          <div style={{ marginTop: 'auto' }}>
            <Text size="10px" c="dimmed">
              {t('article.date')}: {item.dataPublicacao} ({item.tempoLeitura})
            </Text>
            
            {/* Redirecionamento real nos botões dos cards */}
            <Button
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              variant="filled"
              color="blue"
              fullWidth
              mt="xs"
              style={{ cursor: 'pointer' }}
            >
              {t('article.readMore')}
            </Button>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
};
