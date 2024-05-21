import { About } from './pages/about';
import { Home } from './pages/home';
import { Footer } from './pages/partials/footer';
import { Navigation } from './pages/partials/navigation';
import { Routes, Route } from 'react-router-dom';

export const App = () => (
	<div id="App" className="">
		<Navigation className={'h-20'} />

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>

		<Footer className={'h-20'} />
	</div>
);
