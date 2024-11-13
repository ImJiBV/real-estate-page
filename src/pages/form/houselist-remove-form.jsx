import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { FormProvider } from "@/components/custom-form/formprovider";
import { useEffect, useState } from "react";

// API
import { DELETEREQUEST, FINDBYID } from "../api/request";
import { Bath, Car, Hash, Trash } from "lucide-react";
import { HOST_API } from "@/config-global";

export const RemoveHouseList = ({ status, load, hlNo }) => {
	const { toast } = useToast();

	const [container, intoContain] = useState([]);

	const onSubmit = () => {
		try {
			const result = DELETEREQUEST(
				`http://192.168.0.215:3000/api/houselisting/${hlNo}`
			);
			result;

			if (result) {
				toast({
					variant: "destructive",
					title: "Data Deleted Successfully",
					description:
						"The item has been removed from the system without any issues.",
				});
			}
			load();
		} catch (error) {}
	};

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

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="bg-red-600 hover:bg-red-500">
						<Trash />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{status}</DialogTitle>
						<DialogDescription className="text-red-500">
							Are you sure you want to delete this item? This action cannot be
							undone.
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-4">
						<div
							key={container.hlNo}
							className="w-full bg-white rounded-lg shadow-lg overflow-hidden font-default h-fit"
						>
							<img
								src={HOST_API.concat("/", container.houseImage)}
								alt="Malto House"
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-base font-semibold">
									{container.houseName}
								</h2>
							</div>
							<div className="grid grid-cols-3 divide-x text-center text-xs font-semibold py-2">
								<div className="flex justify-center items-center space-x-2">
									<Car className="w-4" />
									<span className="">{container.totalCarCapacity}</span>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<Bath className="w-4" />
									<span className="">{container.totalBaths}</span>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<Hash className="w-4" />
									<span className="">{container.totalPax}</span>
								</div>
							</div>
						</div>
						<div className="flex justify-end">
							<Button
								type="submit"
								className="bg-red-600 hover:bg-red-500 right-0"
								onClick={() => onSubmit()}
							>
								{status}
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
