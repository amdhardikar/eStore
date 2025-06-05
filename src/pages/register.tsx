import TextField from '../components/textField';
import FormButton from '../components/formButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const validateFields = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.getAttribute('name');
		if (inputName == 'email') {
			setEmail(e.target.value);
		}
		if (inputName == 'username') {
			setUsername(e.target.value);
		}
		if (inputName == 'password') {
			setPassword(e.target.value);
		}
	};

	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<form action='#' method='POST' className='w-md flex flex-col p-10 rounded-[3px] bg-white'>
				<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Register Now</h2>
				<TextField fieldName='email' fieldType='email' labelName='Email address' placeHolder='Enter email address' value={email} customClass='mt-10' changeHandler={validateFields} />
				<TextField fieldName='username' fieldType='text' labelName='Username' placeHolder='Enter username' value={username} customClass='mt-6' changeHandler={validateFields} />
				<TextField fieldName='password' fieldType='password' labelName='Password' placeHolder='Enter password' value={password} customClass='mt-6' changeHandler={validateFields} />
				<FormButton buttonValue='sign up' classes='mt-6' />
				<div className='mt-5 flex justify-center'>
					<p className='mr-3 text-gray-500'>Already a member</p>
					<Link
						to={{
							pathname: '/login',
						}}
						className='text-blue-600 font-semibold'>
						Sign in now
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Register;
