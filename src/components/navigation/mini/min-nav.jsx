import NavList from "./min-navlist";

export const NavSectionMini = ({ open, config }) => {
	return (
		<>
			{config.map((group) => {
				const key = group.subheader || group.items[0].title;
				return (
					<div key={key}>
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
		</>
	);
};
