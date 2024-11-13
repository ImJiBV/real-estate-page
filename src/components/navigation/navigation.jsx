import NavList from "./navlist";

export const NavSection = ({ open, config }) => {
	return (
		<div>
			{config.map((group) => {
				const key = group.subheader || group.items[0].title;

				return (
					<div key={key}>
						{group.subheader && (
							<span
								className={`block text-xs font-bold leading-6 text-gray-500 uppercase ${
									open ? `block` : `xl:hidden`
								}`}
							>
								{group.subheader}
							</span>
						)}
						{group.items.map((list) => (
							<NavList
								key={list.title + list.path}
								data={list}
								depth={1}
								isNavOpen={open}
							/>
						))}
					</div>
				);
			})}
		</div>
	);
};
