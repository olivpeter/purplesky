export function Button({ Icon, label, handleClick, variant }) {
	return (
		<button
			onClick={handleClick}
			className={`flex w-fit items-center gap-2 bg-violet-600 hover:bg-violet-700 transition ${variant === 'small' ? 'text-sm px-3 py-1' : 'px-4 py-2'} rounded-full font-semibold`}
		>
			{Icon && <Icon weight='bold' size={20} />}
			{label}
		</button>
	)
}

export function ButtonLink({ Icon, label, handleClick }) {
	return (
		<button
			onClick={handleClick}
			className='flex w-fit items-center gap-2 text-violet-400 hover:bg-violet-700/30 transition text-sm px-3 py-1 rounded-full font-semibold'
		>
			{Icon && <Icon weight='bold' size={20} />}
			{label}
		</button>
	)
}
