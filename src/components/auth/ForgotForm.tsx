import { Link } from 'react-router-dom';
import FormButton from '../ui/FormButton';
import TextField from '../ui/TextField';
import { useState } from 'react';

function ForgotForm() {
	const [username, setUsername] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const validateFields = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.getAttribute('name');
		if (inputName == 'username') {
			setUsername(e.target.value);
		}
		if (inputName == 'oldPassword') {
			setOldPassword(e.target.value);
		}
		if (inputName == 'newPassword') {
			setNewPassword(e.target.value);
		}
	};

	const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className='w-md flex flex-col p-10 rounded-[3px] bg-transparent' onSubmit={validateForm}>
			<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Change Password</h2>
			<TextField fieldName='username' fieldType='text' labelName='Username' placeHolder='Enter username' value={username} customClass='mt-10' changeHandler={validateFields} />
			<TextField fieldName='oldPassword' fieldType='password' labelName='Old password' placeHolder='Enter old password' value={oldPassword} customClass='mt-6' changeHandler={validateFields} />
			<TextField fieldName='newPassword' fieldType='password' labelName='New password' placeHolder='Enter new password' value={newPassword} customClass='mt-6' changeHandler={validateFields} />
			<FormButton buttonValue='change' classes='mt-6' type='primary' />
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

export default ForgotForm;
