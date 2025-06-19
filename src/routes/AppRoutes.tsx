import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/Forgot';
import Home from '../pages/Home';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/forgot' element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
