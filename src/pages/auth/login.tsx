import Button from "@/components/Button";
import TextField from "@/components/Field/TextField";
import Link from "next/link";
import React from "react";
const Login = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="mx-[25px] w-screen md:w-6/12 h-4/6 flex flex-col rounded-lg border-2 space-y-[20px] px-[3.5%] py-[5%] border-gray-600">
				{/* form title */}
				<h2 className="text-center text-[30px] text-bold">Login</h2>

				<TextField
					label="Email"
					name="email"
					type="email"
					placeholder="Enter your email address"
					id="login-email"
				/>

				<TextField
					label="Password"
					name="password"
					type="password"
					placeholder="Enter your password here"
					id="login-password"
				/>

				<Button type="submit">Submit</Button>
				{/* line */}
				<div className="border-b-[1px] border-gray-400 w-full"></div>

				<div className="flex flex-col items-center w-full">
					<p className="font-bold">OR</p>
					<p className="text-[16px] text-normal">
						Don&apos;t have an account yet?
					</p>
					<Link href="/auth/signup" className="pl-2 text-blue-500 text-[16px] underline">
						Create An Account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
