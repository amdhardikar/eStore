import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/forgot' element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}

export default App;
