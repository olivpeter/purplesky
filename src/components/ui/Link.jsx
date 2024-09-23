export const Link = ({ href, label, variant }) => {
	return (
		<a
			href={href}
			className={`text-violet-500 hover:text-violet-400 hover:underline hover:underline-offset-4 transition ${variant === 'small' && 'text-sm'}`}
		>
			{label}
		</a>
	)
}
