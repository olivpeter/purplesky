export const TweetContent = ({ content, imgSrc, imgAlt }) => {
	return (
		<div className='flex flex-col gap-2'>
			<p className='text-slate-300'>{content}</p>
			{imgSrc && <img src={imgSrc} alt={imgAlt} className='rounded-xl' />}
		</div>
	)
}
