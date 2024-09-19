export function NavigationItem({ href, label, Icon, isActive }) {
	return (
		<a
			className={
				isActive
					? `text-lg font-semibold text-slate-100 hover:bg-slate-900 transition rounded-full px-4 py-2 flex items-center gap-2`
					: `text-lg text-slate-100 hover:bg-slate-900 transition rounded-full px-4 py-2 flex items-center gap-2`
			}
			href={href}
		>
			<Icon weight={isActive ? 'fill' : 'bold'} size={20} />
			{label}
		</a>
	)
}
