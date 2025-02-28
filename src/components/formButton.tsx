interface FormButtonProps {
	buttonValue: string;
	classes: string;
}

function FormButton({ buttonValue, classes }: FormButtonProps) {
	return (
		<div className={`${classes}`}>
			<button
				type="submit"
				className="flex w-full justify-center bg-gray-950 rounded-[3px] px-3 py-2.5 text-md font-semibold text-white shadow-xs capitalize"
			>
				{buttonValue}
			</button>
		</div>
	);
}

export default FormButton;
