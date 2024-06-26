import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import { ThemeContextProvider } from './context/theme-context-provider.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
