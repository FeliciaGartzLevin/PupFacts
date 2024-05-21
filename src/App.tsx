import { About } from './pages/about';
import { Home } from './pages/home';
import { Footer } from './pages/partials/footer';
import { Navigation } from './pages/partials/navigation';
import { Routes, Route } from 'react-router-dom';
import './index.css';

//install clsx and conditionally render font and bg colors based on current theme

export const App = () => (
	<div id="App" className="bg-gray-800 text-white">
		<div className="h-[10%] w-full full-app-side-spacing">
			<Navigation />
		</div>

		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>

		<div className="h-[20%] w-full full-app-side-spacing">
			<Footer className={'h-20 py-full-app-py'} />
		</div>
	</div>
);
