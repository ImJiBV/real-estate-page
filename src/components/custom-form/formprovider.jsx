import PropTypes from "prop-types";
// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

export const FormProvider = ({ children, onSubmit, methods }) => {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	);
};

FormProvider.propTypes = {
	children: PropTypes.node,
	methods: PropTypes.object,
	onSubmit: PropTypes.func,
};
