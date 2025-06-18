interface FormButtonProps {
	buttonValue: string;
	classes?: string;
	clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type: string;
}

function FormButton(props: FormButtonProps) {
	let butnClasses: string = '';
	if (props.type == 'primary') {
		butnClasses = 'bg-gray-950 text-white';
	} else {
		butnClasses = 'bg-blue-700 text-white';
	}

	return (
		<div className={`${props.classes}`}>
			<button type='submit' className={`flex w-full justify-center rounded-[3px] px-3 py-2.5 text-md font-semibold shadow-xs capitalize ${butnClasses}`} onClick={props.clickHandler}>
				{props.buttonValue}
			</button>
		</div>
	);
}

export default FormButton;
