export const TabBarLink = ({ href, label, isActive }) => {
	return (
		<a
			className={`p-4 transition ${isActive ? 'text-slate-50 font-bold border-b-2 border-violet-500' : 'hover:bg-slate-800 hover:text-slate-400 text-slate-500 '}`}
			href={href}
		>
			{label}
		</a>
	)
}
