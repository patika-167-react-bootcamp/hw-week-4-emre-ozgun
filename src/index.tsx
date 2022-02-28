import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CategoryProvider } from './category-context';

ReactDOM.render(
	<BrowserRouter>
		<CategoryProvider>
			<App />
		</CategoryProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
