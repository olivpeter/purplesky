export const InputLabel = ({ label, htmlFor }) => {
	return (
		<label htmlFor={htmlFor} className='sr-only'>
			{label}
		</label>
	)
}
