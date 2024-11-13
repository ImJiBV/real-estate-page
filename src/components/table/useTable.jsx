import { useState, useCallback } from "react";

// ----------------------------------------------------------------------

export default function useTable(props) {
	const [order, setOrder] = useState(props?.defaultOrder || "asc");

	const [page, setPage] = useState(props?.defaultCurrentPage || 1);

	const [rowsPerPage, setRowsPerPage] = useState(
		props?.defaultRowsPerPage || 5
	);

	const onChangePage = (newPage) => {
		setPage(newPage);
	};

	const onChangeRowsPerPage = useCallback((event) => {
		setPage(1);
		setRowsPerPage(parseInt(event.target.value, 10));
	}, []);

	return {
		order,
		page,
		rowsPerPage,
		//
		onChangePage,
		onChangeRowsPerPage,
		//
		setPage,
		setOrder,
		setRowsPerPage,
	};
}
