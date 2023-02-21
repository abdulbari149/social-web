import Button from "@/components/Button";
import { TextField } from "@/components/Field";
import Link from "next/link";

const Signup = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="mx-[25px] w-screen md:w-6/12 h-5/6 flex flex-col rounded-lg border-2 space-y-[20px] px-[3.5%] py-[2%] border-gray-600">
				{/* form title */}
				<h2 className="text-center text-[30px] text-bold">Signup</h2>
				<div className="w-full flex space-x-4">
					<TextField
						label="First Name"
						name="first_name"
						type="text"
						placeholder="Enter your first name"
						id="signup-first_name"
					/>

					<TextField
						label="Last Name"
						name="last_name"
						type="text"
						placeholder="Enter your last name"
						id="signup-last_name"
					/>
				</div>

				<TextField
					label="Phone Number"
					name="phone"
					type="number"
					placeholder="Enter your Phone Number"
					id="signup-phone"
				/>

				<TextField
					label="Email"
					name="email"
					type="email"
					placeholder="Enter your email address"
					id="signup-email"
				/>

				<TextField
					label="Password"
					name="password"
					type="password"
					placeholder="Enter your password here"
					id="signup-password"
				/>

				<Button type="submit">Register</Button>

				<div className="border-b-[1px] border-gray-400 w-full"></div>

				<div className="flex flex-col items-center w-full">
					<p className="font-bold">OR</p>
					<p className="text-[16px] text-normal">
						Already have an account?
					</p>
					<Link
						href="/auth/login"
						className="pl-2 text-blue-500 text-[16px] underline"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
