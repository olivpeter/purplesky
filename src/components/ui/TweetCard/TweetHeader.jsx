export const TweetHeader = ({ userName, userHandle, tweetTime }) => {
	return (
		<div className='space-x-1'>
			<strong>{userName}</strong>
			<span className='text-slate-500'>{`@${userHandle}.psky.social`}</span>
			<span className='text-slate-500'>{`• ${tweetTime}`}</span>
		</div>
	)
}
