interface FormButtonProps {
	buttonValue: string;
	classes?: string;
	clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function FormButton({ buttonValue, classes, clickHandler }: FormButtonProps) {
	return (
		<div className={`${classes}`}>
			<button type='submit' className='flex w-full justify-center bg-gray-950 rounded-[3px] px-3 py-2.5 text-md font-semibold text-white shadow-xs capitalize' onClick={clickHandler}>
				{buttonValue}
			</button>
		</div>
	);
}

export default FormButton;
