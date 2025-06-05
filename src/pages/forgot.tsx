import { Link } from 'react-router-dom';
import FormButton from '../components/formButton';
import TextField from '../components/textField';

function ForgotPassword() {
	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<form action='#' method='POST' className='w-md flex flex-col p-10 rounded-[3px] bg-white'>
				<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900'>Change Password</h2>
				<TextField fieldName='username' fieldType='text' labelName='Username' placeHolder='Enter username' value='' customClass='mt-10' />
				<TextField fieldName='oldPassword' fieldType='password' labelName='Old password' placeHolder='Enter old password' value='' customClass='mt-6' />
				<TextField fieldName='newPassword' fieldType='password' labelName='New password' placeHolder='Enter new password' value='' customClass='mt-6' />
				<FormButton buttonValue='change' classes='mt-6' />
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

export default ForgotPassword;
