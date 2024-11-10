// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/management";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
	root: ROOTS_AUTH,
	login: path(ROOTS_AUTH, "/login"),
};

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
};
