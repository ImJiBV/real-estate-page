import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Bath, Car, Hash } from "lucide-react";

import { Wrapper } from "@/components/wrapper";
import { CreateEditHouseList } from "../form/houselist-form";
import { DATA } from "@/mock/housing-mock";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetData } from "@/zustand/state/list";
import useTable from "@/components/table/useTable";
import { Skeleton } from "@/components/ui/skeleton";
import { NoDataIcon } from "@/assets/icon/table-icon";
import { HOST_API } from "@/config-global";
import { RemoveHouseList } from "../form/houselist-remove-form";

export default function HouseListing() {
	const [status, setStatus] = useState("Create" || "Update");

	const [open, setBehavior] = useState(false);
	const handle = () => {
		setBehavior(!open);
		setStatus("Create");
	};

	const [hlNo, sethlNo] = useState("");

	const handleUpdate = (hlNo) => {
		sethlNo(hlNo);
		setBehavior(!open);
		setStatus("Update");
	};

	const { page, onChangePage } = useTable();

	const getData = useGetData();

	const load = () => {
		getData.payload = {
			page: page,
			rowsPerPage: 9,
		};
		getData.execute();
	};

	useEffect(() => {
		load();
	}, [page]);

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-bold">House Listing</h1>
				<CreateEditHouseList
					open={open}
					name={"Create"}
					handle={() => handle()}
					status={status}
					load={load}
				/>
			</div>

			<div className="mt-20 h-4/6">
				<div className="flex flex-row flex-wrap gap-4 h-full overflow-x-auto">
					{getData.loading ? (
						<>
							{[...Array(8)].map((i, k) => (
								<Skeleton key={k} className="h-[250px] w-[250px] rounded-xl" />
							))}
						</>
					) : (
						<>
							{getData?.data?.data?.map((house, i) => {
								return (
									<div
										key={house.hlNo}
										className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden font-default h-fit"
									>
										<img
											src={HOST_API.concat("/", house.houseImage)}
											alt="Malto House"
											className="w-full h-48 object-cover"
										/>
										<div className="p-4 flex justify-between">
											<h2 className="text-base font-semibold">
												{house.houseName}
											</h2>
											<div className="flex items-center justify-center space-x-2">
												<CreateEditHouseList
													open={open}
													name={"Update"}
													status={status}
													load={load}
													hlNo={house.hlNo}
												/>
												<RemoveHouseList
													open={open}
													name={"Remove"}
													status={"Remove"}
													load={load}
													hlNo={house.hlNo}
												/>
											</div>
										</div>
										<div className="grid grid-cols-3 divide-x text-center text-xs font-semibold py-2">
											<div className="flex justify-center items-center space-x-2">
												<Car className="w-4" />
												<span className="">{house.totalCarCapacity}</span>
											</div>
											<div className="flex justify-center items-center space-x-2">
												<Bath className="w-4" />
												<span className="">{house.totalBaths}</span>
											</div>
											<div className="flex justify-center items-center space-x-2">
												<Hash className="w-4" />
												<span className="">{house.totalPax}</span>
											</div>
										</div>
									</div>
								);
							})}
						</>
					)}
					{getData?.data?.data?.length === 0 && !getData.loading && (
						<div className="w-full h-full">
							<div
								className={`bg-gray-50 rounded-lg w-full p-4 h-full flex justify-center items-center text-gray-400 text-center`}
							>
								<div>
									<LoadSvg Icon={NoDataIcon} />
									<span className="font-bold text-lg">No Data</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<Pagination className="w-fit p-4">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							className={`${
								page === 1 &&
								`text-gray-400 cursor-not-allowed pointer-events-none`
							}`}
							onClick={() => onChangePage(page != 1 ? page - 1 : page)}
						/>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink>{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext
							className={`${
								getData?.data?.totalPages === page ||
								getData?.data?.totalPages === 0 ||
								getData?.data?.totalPages === undefined
									? `text-gray-400 cursor-not-allowed pointer-events-none`
									: ``
							}`}
							onClick={() =>
								onChangePage(
									page != getData?.data?.totalPages ? page + 1 : page
								)
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
}

const LoadSvg = ({ Icon }) => {
	return <Icon />;
};
