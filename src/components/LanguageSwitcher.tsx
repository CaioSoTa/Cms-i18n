import { useTranslation } from 'react-i18next';
import { Group, Button, Text } from '@mantine/core';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <Group gap="xs">
      <Text size="sm">{t('switcher.label')}:</Text>
      <Button
        size="xs"
        variant={i18n.language === 'pt-BR' ? 'filled' : 'outline'}
        onClick={() => i18n.changeLanguage('pt-BR')}
        style={{ cursor: 'pointer' }}
      >
        PT
      </Button>
      <Button
        size="xs"
        variant={i18n.language === 'en-US' ? 'filled' : 'outline'}
        onClick={() => i18n.changeLanguage('en-US')}
        style={{ cursor: 'pointer' }}
      >
        EN
      </Button>
    </Group>
  );
};
