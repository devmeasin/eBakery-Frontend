import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons';

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        radius="md"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[4],
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={22} stroke={1.5} />
        ) : (
          <IconMoon size={22} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
