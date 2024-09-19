export function Button({ Icon, label, handleClick }) {
	return (
		<button
			onClick={handleClick}
			className='flex w-fit items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-full font-semibold'
		>
			{Icon && <Icon weight='bold' size={20} />}
			{label}
		</button>
	)
}
