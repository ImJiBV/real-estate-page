export const Wrapper = ({ open, children }) => {
	return (
		<div
			className={`relative max-w-[1400px] w-full ml-auto mr-auto p-4 pt-36 lg:px-24 xl:pr-16 ${
				open ? "xl:pl-80" : "xl:px-24"
			}`}
		>
			{children}
		</div>
	);
};
