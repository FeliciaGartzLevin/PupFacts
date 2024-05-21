import { useGetRandomPupFact } from '../hooks/use-get-random-pup-fact';
import { useThemeContext } from '../hooks/use-theme-context';
import { ThemeType, themeValues } from '../types/theme';

export const Home = () => {
	const themeContext = useThemeContext();
	const randomPupfact = useGetRandomPupFact();

	const { theme, changeTheme } = themeContext;

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as ThemeType);
	};

	return (
		<>
			<p>PupFacts</p>
			<p>Theme: {theme}</p>

			<label htmlFor="themePicker">Choose theme:</label>

			<select
				name="theme"
				id="themePicker"
				value={theme}
				onChange={handleChange}
			>
				{themeValues.map((themeValue) => (
					<option key={themeValue} value={themeValue}>
						{themeValue.charAt(0).toUpperCase() +
							themeValue.slice(1)}
					</option>
				))}
			</select>

			{randomPupfact ? <p>{randomPupfact}</p> : null}
		</>
	);
};
