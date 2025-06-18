import { Link } from 'react-router-dom';
import FormButton from '../ui/formButton';
import TextField from '../ui/textField';
import { useState } from 'react';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// const [userData, setUserData] = useState([]);

	const validateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const usernameValue = e.target.value;
		setUsername(usernameValue);
	};

	const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const passwordValue = e.target.value;
		setPassword(passwordValue);
	};

	const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch('http://localhost:3000/users', { method: 'GET' })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const flag = data.find((user: { username: string; password: string }) => user.username == username && user.password == password);
				if (flag) {
					console.log('Login successful');
				} else {
					console.log('Invalid credentials');
				}
			});
	};

	return (
		<form className='w-md flex flex-col p-10 rounded-[3px] bg-transparent' onSubmit={validateForm}>
			<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Welcome Back</h2>
			<TextField labelName='username' pageName='login' fieldName='username' fieldType='text' customClass='mt-10' value={username} changeHandler={validateUserName} placeHolder='Enter username' />
			<TextField labelName='password' pageName='login' fieldName='password' fieldType='password' customClass='mt-6' value={password} changeHandler={validatePassword} placeHolder='Enter password' />
			<FormButton buttonValue='sign in' classes='mt-6' type='primary' />
			<div className='mt-6 flex justify-center'>
				<p className='mr-3 text-gray-500'>Not a member?</p>
				<Link
					to={{
						pathname: '/register',
					}}
					className='text-blue-700 font-semibold cursor-pointer'>
					Sign up now
				</Link>
			</div>
		</form>
	);
}

export default LoginForm;
