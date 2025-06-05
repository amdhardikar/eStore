import TextField from '../components/textField';
import FormButton from '../components/formButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [userData, setUserData] = useState([]);

	const validateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const usernameValue = e.target.value;
		setUsername(usernameValue);
	};

	const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const passwordValue = e.target.value;
		setPassword(passwordValue);
	};

	useEffect(() => {}, []);

	const validateLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		fetch('http://localhost:3000/users', { method: 'GET' })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUserData(data);
				const flag = data.find((user: { username: string; password: string }) => user.username == username && user.password == password);
				if (flag) {
					console.log('Login successful');
				} else {
					console.log('Invalid credentials');
				}
			});
	};

	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<form action='#' method='POST' className='w-md flex flex-col p-10 rounded-[3px] bg-white'>
				<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Welcome Back</h2>
				<TextField labelName='username' pageName='login' fieldName='username' fieldType='text' customClass='mt-10' value={username} changeHandler={validateUserName} placeHolder='Enter username' />
				<TextField
					labelName='password'
					pageName='login'
					fieldName='password'
					fieldType='password'
					customClass='mt-6'
					value={password}
					changeHandler={validatePassword}
					placeHolder='Enter password'
				/>
				<FormButton buttonValue='sign in' classes='mt-6' clickHandler={validateLogin} />
				<div className='mt-6 flex justify-center'>
					<p className='mr-3 text-gray-500'>Not a member?</p>
					<Link
						to={{
							pathname: '/register',
						}}
						className='text-blue-600 font-semibold cursor-pointer'>
						Sign up now
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Login;
