export const InputItem = ({ type, name, id, placeholder }) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			className='bg-transparent placeholder:text-slate-500 text-slate-300 w-full outline-none'
		/>
	)
}
