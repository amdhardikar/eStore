import { Link } from "react-router-dom";

interface TextFieldProps {
	fieldName: string;
	classes: string;
	page: string; // Define the type of fieldName
}

type FieldType = Record<string, string>;

function TextField({ fieldName, classes, page }: TextFieldProps) {
	const fieldType: FieldType = {
		username: "text",
		password: "password",
		old_password: "password",
		new_password: "password",
		email: "email",
	};

	return (
		<>
			<div className={`flex items-center justify-between ${classes}`}>
				<label
					htmlFor={fieldName}
					className="block text-base font-normal text-gray-900 capitalize"
				>
					{fieldName == "old_password"
						? "Old Password"
						: fieldName == "new_password"
						? "New Password"
						: fieldName}
				</label>
				{page == "login" && fieldName == "password" ? (
					<div className="text-base">
						<Link
							to={{
								pathname: "/forgot",
							}}
							className="font-semibold"
						>
							Forgot password?
						</Link>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="mt-2">
				<input
					id={fieldName}
					name={fieldName}
					type={fieldType[fieldName]}
					required
					placeholder="Enter username"
					className="block w-full rounded-[3px] text-base placeholder:font-normal font-semibold bg-white px-3 py-2  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
				/>
			</div>
		</>
	);
}

export default TextField;
