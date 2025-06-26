import { Link } from 'react-router-dom';
import FormButton from '../ui/FormButton';
import TextField from '../ui/TextField';
import { useState } from 'react';

function RegisterForm() {
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

	const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newUser = {
			username,
			email,
			password,
		};

		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		})
			.then((response) => {
				if (response.ok) {
					console.log('User Created!!');
				} else {
					throw new Error('Something went wrong');
				}
			})
			.catch((error) => {
				console.log(error);
			});

		return false;
	};

	return (
		<form className='w-md flex flex-col p-10 rounded-[3px] bg-transparent' onSubmit={validateForm}>
			<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Register Now</h2>
			<TextField fieldName='email' fieldType='email' labelName='Email address' placeHolder='Enter email address' value={email} customClass='mt-10' changeHandler={validateFields} />
			<TextField fieldName='username' fieldType='text' labelName='Username' placeHolder='Enter username' value={username} customClass='mt-6' changeHandler={validateFields} />
			<TextField fieldName='password' fieldType='password' labelName='Password' placeHolder='Enter password' value={password} customClass='mt-6' changeHandler={validateFields} />
			<FormButton buttonValue='sign up' classes='mt-6' type='primary' />
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
	);
}

export default RegisterForm;
