import { Link } from 'react-router-dom';

interface TextFieldProps {
	labelName: string;
	fieldName: string;
	fieldType: string;
	placeHolder: string;
	value: string;
	changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	blurHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	success?: boolean;
	customClass?: string;
	pageName?: string;
}

function TextField({ labelName, fieldName, fieldType, customClass, pageName, placeHolder, value, changeHandler, error, success }: TextFieldProps) {

	const renderForgotPassword = () => {
		if (pageName == 'login' && fieldName == 'password') {
			return (
				<Link to={{ pathname: '/forgot' }} className='font-semibold text-base'>
					Forgot password?
				</Link>
			);
		}
	};

	return (
		<>
			<div className={`${customClass}`}>
				<div className={`flex items-center justify-between`}>
					<label htmlFor={fieldName} className='block text-base font-normal text-gray-900 capitalize'>
						{labelName}
					</label>
					{renderForgotPassword()}
				</div>
				<div className='mt-2'>
					<input
						id={fieldName}
						name={fieldName}
						type={fieldType}
						value={value}
						required
						placeholder={placeHolder}
						onChange={changeHandler}
						className={`block w-full rounded-[3px] text-base placeholder:font-normal font-semibold px-3 py-2  text-gray-900 outline-1 -outline-offset-1  placeholder:text-gray-400 ${
							error ? 'outline-red-500 outline-2 bg-red-50' : 'outline-gray-300 bg-gray-50'
						} ${success ? 'outline-green-500 bg-green-50' : 'outline-gray-300 bg-gray-50'}`}
					/>
				</div>
			</div>
		</>
	);
}

export default TextField;
