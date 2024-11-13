const removeEmptyStrings = (obj) => {
	const formData = new FormData();
	const newObj = {};

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (obj[key] !== "") {
				newObj[key] = obj[key];
			}
		}
	}

	for (const key in newObj) {
		if (newObj.hasOwnProperty(key)) {
			formData.append(key, newObj[key]);
		}
	}

	return formData;
};

const replaceNullWithEmptyString = (obj) => {
	for (const key in obj) {
		if (obj[key] === null) {
			obj[key] = "";
		}
	}
	return obj;
};

const getChanges = (newInputData, container) => {
	const formData = new FormData();
	const changes = {};

	container = replaceNullWithEmptyString(container);

	const arraysEqual = (arr1, arr2) => {
		if (arr1.length !== arr2.length) return false;
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false;
		}
		return true;
	};

	for (const key in newInputData) {
		if (container.hasOwnProperty(key)) {
			if (
				newInputData[key] instanceof File &&
				typeof container[key] === "string"
			) {
				if (newInputData[key].name !== container[key].split("/").pop()) {
					changes[key] = newInputData[key];
				}
			} else if (
				Array.isArray(newInputData[key]) &&
				Array.isArray(container[key])
			) {
				if (!arraysEqual(newInputData[key], container[key])) {
					changes[key] = newInputData[key];
				}
			} else if (container[key] !== newInputData[key]) {
				changes[key] = newInputData[key];
			}
		}
	}

	for (const key in changes) {
		if (changes.hasOwnProperty(key)) {
			formData.append(key, changes[key]);
		}
	}

	console.log(formData);

	return formData;
};

export const Payloader = (data, container, isEdit) => {
	return isEdit ? getChanges(data, container) : removeEmptyStrings(data);
};
