import React, { ReactNode, createContext, useState } from 'react';
import { ThemeType } from '../types/theme';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ThemeContextType = {
	theme: ThemeType;
	changeTheme: (change: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children: ReactNode;
};

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'dark');
	// const [storedTheme, setStoredTheme] =

	const changeTheme = (choice: ThemeType) => {
		setTheme(choice);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
		>
			<>{children}</>
		</ThemeContext.Provider>
	);
};
