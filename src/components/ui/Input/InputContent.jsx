export function InputContent({ children }) {
	return (
		<form
			action='search'
			className='py-2 px-3 rounded-full bg-slate-800 flex items-center gap-2 w-full focus-within:ring-2 focus-within:ring-violet-600'
		>
			{children}
		</form>
	)
}
