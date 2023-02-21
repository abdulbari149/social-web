import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
}
const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
	const { label, ...inputProps } = props;
	return (
		<div className="space-y-1 flex flex-col w-full text-slate-800">
			<label htmlFor={inputProps.id} className="text-start text-[16px] pl-2 font-normal">{label}</label>
			<input
				{...inputProps}
				className="rounded-md border-2 border-gray-600 px-3 py-2 text-[15px] text-slate-600"
			/>
			<span className="text-red-500 pl-2 text-[12px]"></span>
		</div>
	);
};
export default TextField;
