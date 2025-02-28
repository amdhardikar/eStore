import TextField from "../components/textField";
import FormButton from "../components/formButton";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<form
				action="#"
				method="POST"
				className="w-md flex flex-col p-10 rounded-[3px] bg-white"
			>
				<h2 className="text-center text-4xl font-bold tracking-tight text-gray-900">
					Register Now
				</h2>
				<TextField page="register" fieldName="username" classes="mt-10" />
				<TextField page="register" fieldName="email" classes="mt-6" />
				<TextField page="register" fieldName="password" classes="mt-6" />
				<FormButton buttonValue="sign up" classes="mt-6" />
				<div className="mt-5 flex justify-center">
					<p className="mr-3 text-gray-500">Already a member</p>
					<Link
						to={{
							pathname: "/login",
						}}
						className="text-blue-600 font-semibold"
					>
						Sign in now
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Register;
