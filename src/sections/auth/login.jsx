import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuthContext } from "@/auth/useAuthContext";

import { FormProvider } from "@/components/custom-form/formprovider";
import { zodResolver } from "@hookform/resolvers/zod";

import { Building2 } from "lucide-react";
import { FormInput } from "@/components/custom-form/input";
import { Button } from "@/components/ui/button";

export default function Login() {
	const { login } = useAuthContext();

	const FormSchema = z
		.object({
			email: z.string().email({ message: "Invalid email" }),
			password: z.string().min(1, { message: "Password is required" }),
		})
		.required();

	const defaultValues = {
		email: "Daisha_Sanford@yahoo.com",
		password: "!test12345",
	};

	const methods = useForm({
		resolver: zodResolver(FormSchema),
		defaultValues,
	});

	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = async (data) => {
		try {
			await login(data.email, data.password);
		} catch (error) {
			reset();
			setError("afterSubmit", {
				...error,
				message: error.message,
			});
		}
	};

	return (
		<>
			<div className="flex justify-center items-center h-screen bg-gray-100 font-default p-2">
				<div className="w-full sm:w-3/5 md:w-1/2 lg:w-2/6 xl:w-1/4 flex rounded-lg shadow-lg">
					<div className="w-full bg-white px-8 py-20 rounded-lg">
						<div className="space-y-2">
							<div className="flex items-center justify-center space-x-2">
								<Building2 className="text-amber-500" />
								<div>
									<p className="font-medium text-base">Real-Estate</p>
									<p className="text-xs font-light">Management</p>
								</div>
							</div>
							<span className="block text-center text-xs font-normal leading-6 text-gray-900">
								Login to access our System
							</span>

							<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
								<div className="flex flex-col gap-4">
									<div className="space-y-1">
										<FormInput name="email" placeholder="Email" type="text" />
									</div>
									<div className="space-y-1">
										<FormInput
											name="password"
											placeholder="Password"
											type="password"
										/>
									</div>

									<Button
										type="submit"
										className="bg-blue-600 hover:bg-blue-500 right-0 mt-6"
									>
										Login
									</Button>
								</div>
							</FormProvider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
