import { useFormContext } from "react-hook-form";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const FormInput = ({ name, placeholder, ...other }) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{placeholder}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} {...other} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export const FormInputImage = ({ name, placeholder }) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field: { value, onChange, ...fieldProps } }) => (
				<FormItem>
					<FormLabel>{placeholder}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type="file"
							accept="image/*"
							onChange={(event) =>
								onChange(event.target.files && event.target.files[0])
							}
							{...fieldProps}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
