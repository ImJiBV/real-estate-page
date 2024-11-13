import axios from "axios";
import { GETSESSION } from "@/auth/utils";

import { HOST_API_KEY } from "@/config-global";

export const PATCHREQUEST = async (URL, payload) => {
	try {
		const res = await axios.patch(URL, payload, {
			headers: { authorization: GETSESSION(), "x-api-key": HOST_API_KEY },
		});
		console.log(res);
		return res;
	} catch (err) {
		console.log(err);

		return false;
	}
};

export const POSTREQUEST = async (URL, payload) => {
	try {
		const res = await axios.post(URL, payload, {
			headers: { authorization: GETSESSION(), "x-api-key": HOST_API_KEY },
		});
		return res;
	} catch (err) {
		return false;
	}
};

export const FINDBYID = async (URL) => {
	try {
		const res = await axios.get(URL, {
			headers: { authorization: GETSESSION(), "x-api-key": HOST_API_KEY },
		});
		return res.data;
	} catch (err) {
		return false;
	}
};

export const DELETEREQUEST = async (URL) => {
	try {
		const res = await axios.delete(URL, {
			headers: { authorization: GETSESSION(), "x-api-key": HOST_API_KEY },
		});

		return res;
	} catch (err) {
		return false;
	}
};
