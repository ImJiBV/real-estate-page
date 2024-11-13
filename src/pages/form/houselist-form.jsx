import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProvider } from "@/components/custom-form/formprovider";
import { useCallback, useEffect, useState } from "react";
import { FormInput, FormInputImage } from "@/components/custom-form/input";
import { Payloader } from "@/helper/Payloader";

// Config
import { HOST_API } from "@/config-global";

// API
import { FINDBYID, PATCHREQUEST, POSTREQUEST } from "../api/request";

export const CreateEditHouseList = ({ open, name, status, load, hlNo }) => {
	const { toast } = useToast();

	const [container, intoContain] = useState([]);

	const FormSchema = z
		.object({
			houseImage: z
				.instanceof(File, { message: "Valid image file is required" })
				.refine((file) => file.type.startsWith("image/"), {
					message: "Only image files are allowed",
				}),

			houseName: z.string().min(1, { message: "Name is required" }),
			totalCarCapacity: z.coerce
				.number()
				.min(1, { message: "Capacity is required" }),
			totalBaths: z.coerce
				.number()
				.min(1, { message: "Total Baths is required" }),
			totalPax: z.coerce.number().min(1, { message: "Total Pax is required" }),
		})
		.required();

	const defaultValues = {
		houseImage: new File([], ""),
		houseName: "" || container?.houseName,
		totalCarCapacity: 0 || container?.totalCarCapacity,
		totalBaths: 0 || container?.totalBaths,
		totalPax: 0 || container?.totalPax,
	};

	const methods = useForm({
		resolver: zodResolver(FormSchema),
	});

	const {
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = methods;

	const [isEdit, setIsEdit] = useState(false);

	const onSubmit = async (data) => {
		try {
			const result = isEdit
				? await PATCHREQUEST(
						`http://192.168.0.215:3000/api/houselisting/${hlNo}`,
						Payloader(data, container, isEdit)
				  )
				: await POSTREQUEST(
						`http://192.168.0.215:3000/api/houselisting`,
						Payloader(data, [], isEdit)
				  );
			result;
			if (result) {
				toast({
					description:
						name === "Create" ? "Created successfully" : "Updated Successfully",
				});
			}
			if (!result) {
				toast({
					variant: "destructive",
					title:
						name === "Create" ? "Data is not added." : "Update data failed.",
					description: "There was a problem with your request.",
				});
			}
			load();
		} catch (error) {}
	};

	const [imageAsTemp, setImageAsTemp] = useState();

	useEffect(() => {
		if (hlNo !== "" && hlNo !== undefined) {
			const get = async () => {
				const retrieve = await FINDBYID(
					`http://192.168.0.215:3000/api/houselisting/${hlNo}`
				);
				intoContain(retrieve);
			};

			get();
		}
	}, [hlNo]);

	const handleDrop = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith("image/")) {
			const newFile = Object.assign(file, {
				preview: URL.createObjectURL(file),
			});
			setValue("houseImage", newFile, { shouldValidate: true });
		}
	};

	useEffect(() => {
		setIsEdit(name === "Create" ? false : true);
		reset(defaultValues);
	}, [open]);

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="bg-blue-600 hover:bg-blue-500">{name}</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{name}</DialogTitle>
						<DialogDescription>
							Click {name} when you're done.
						</DialogDescription>
					</DialogHeader>
					<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-4">
							{isEdit && (
								<img
									src={
										imageAsTemp || HOST_API.concat("/", container.houseImage)
									}
									alt="image"
									className="w-full h-48 object-cover"
								/>
							)}

							<div className="space-y-1">
								<FormInputImage
									name="houseImage"
									placeholder={`${name === "Create" ? "Add" : "Update"}`}
									onChange={handleDrop}
								/>
							</div>
							<div className="space-y-1">
								<FormInput name="houseName" placeholder="Name" type="text" />
							</div>
							<div className="space-y-1">
								<FormInput
									name="totalCarCapacity"
									placeholder="Total Car Capacity"
									type="number"
								/>
							</div>
							<div className="space-y-1">
								<FormInput
									name="totalBaths"
									placeholder="Total Baths"
									type="number"
								/>
							</div>
							<div className="space-y-1">
								<FormInput
									name="totalPax"
									placeholder="Total Pax"
									type="number"
								/>
							</div>
							<div className="flex justify-end">
								<Button
									type="submit"
									className="bg-blue-600 hover:bg-blue-500 right-0"
								>
									{name}
								</Button>
							</div>
						</div>
					</FormProvider>
				</DialogContent>
			</Dialog>
		</>
	);
};
