export function UserProfileImg({ src, alt }) {
	return (
		<img
			src={src}
			alt={alt}
			className='rounded-full size-12 border border-slate-500 cursor-pointer'
		/>
	)
}
