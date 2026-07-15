import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ArticleList } from './components/ArticleList';
import { Container, Title, Text, Group, Divider } from '@mantine/core';

function App() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="md">
      {/* Topo do site com switcher importado */}
      <Group justify="space-between" mb="md" style={{ borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
        <Title order={3}>Portal do Aluno</Title>
        <LanguageSwitcher />
      </Group>

      {/* Titulo do portal */}
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <Title order={1}>{t('app.title')}</Title>
        <Text c="dimmed">{t('app.subtitle')}</Text>
      </div>

      <Divider my="md" />

      {/* Componente da Lista de Artigos importada */}
      <ArticleList />

      {/* Rodapé simples */}
      <footer style={{ marginTop: 50, borderTop: '1px solid #ccc', paddingTop: 10, textAlign: 'center' }}>
        <Text size="xs" c="dimmed">
          {t('app.footer')}
        </Text>
      </footer>
    </Container>
  );
}

export default App;
