export function NavigationItem({ href, label, Icon, isActive }) {
	return (
		<a
			className={`text-lg text-slate-100 hover:bg-slate-900 transition rounded-full px-4 py-2 flex items-center gap-2 ${isActive ? 'font-bold' : ''}`}
			href={href}
		>
			<Icon weight={isActive ? 'fill' : 'bold'} size={20} />
			{label}
		</a>
	)
}
