import { useThemeContext } from './hooks/useThemeContext';

export const App = () => {
  const themeContext = useThemeContext();

  const { theme } = themeContext;

  return (
    <>
      <p>PupFacts</p>
      <p>{theme}</p>
    </>
  );
};
