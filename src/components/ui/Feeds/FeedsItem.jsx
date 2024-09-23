export function FeedsItem({ isActive, link, title }) {
	return (
		<li
			className={`text-slate-500 hover:underline hover:underline-offset-4 hover:text-slate-400 transition ${isActive ? 'font-bold text-slate-50' : ''}`}
		>
			<a href={link}>{title}</a>
		</li>
	)
}
