import { PATH_DASHBOARD } from "@/routes/paths";
import { HomeIcon } from "lucide-react";

const Config = [
	{
		subheader: "management",
		items: [
			{
				title: "House Listing",
				roles: ["isAdmin"],
				path: PATH_DASHBOARD.management.houseList,
				icon: <HomeIcon />,
			},
		],
	},
];

export default Config;
