import { useGetRandomPupFact } from './hooks/useGetRandomPupFact';
import { useThemeContext } from './hooks/useThemeContext';
import { ThemeType, themeValues } from './types/theme';

export const App = () => {
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
					<option
						// selected={themeValue === theme ? true : false}
						value={themeValue}
					>
						{themeValue.charAt(0).toUpperCase() +
							themeValue.slice(1)}
					</option>
				))}
			</select>

			{randomPupfact ? <p>{randomPupfact}</p> : null}
		</>
	);
};
