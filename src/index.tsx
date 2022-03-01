import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CategoryProvider } from './category-context';
import { AuthContextProvider } from './context/auth-context';

ReactDOM.render(
	<AuthContextProvider>
		<BrowserRouter>
			<CategoryProvider>
				<App />
			</CategoryProvider>
		</BrowserRouter>
	</AuthContextProvider>,
	document.getElementById('root')
);
