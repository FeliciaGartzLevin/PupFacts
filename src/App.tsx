import { useGetRandomPupFact } from './hooks/useGetRandomPupFact';
import { useThemeContext } from './hooks/useThemeContext';

export const App = () => {
	const themeContext = useThemeContext();
	const randomPupfact = useGetRandomPupFact();

	const { theme } = themeContext;

	return (
		<>
			<p>PupFacts</p>
			<p>{theme}</p>

			{randomPupfact ? <p>{randomPupfact}</p> : null}
		</>
	);
};
