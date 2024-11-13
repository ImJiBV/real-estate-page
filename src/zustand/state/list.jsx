import axios from "axios";
import { create } from "zustand";
import { initialState } from "../zustand";
import { GETSESSION } from "../../auth/utils";
import { HOST_API_KEY } from "@/config-global";

export const useGetData = create((set, get) => ({
	...initialState,
	payload: {},
	execute: async () => {
		set({ ...initialState, loading: true });
		const payload = useGetData.getState().payload;

		try {
			const res = await axios.get(
				"http://192.168.0.215:3000/api/houselisting",
				{
					headers: { authorization: GETSESSION(), "x-api-key": HOST_API_KEY },
					params: payload,
				}
			);

			set({ ...initialState, success: true, data: res.data });
		} catch (err) {
			console.error("Error in data fetch:", err);
			set({ ...initialState, error: true, errorData: err.message });
		}
	},
}));
