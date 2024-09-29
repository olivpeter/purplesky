import { TweetCard } from './TweetCard'
import { TweetContent } from './TweetContent'
import { TweetContentWrapper } from './TweetContentWrapper'
import { TweetHeader } from './TweetHeader'
import { TweetIcons } from './TweetIcons'
import { TweetRoot } from './TweetRoot'
import { UserProfileImg } from '../../ui/UserProfileImg'

export const Tweet = ({
	userImgSrc,
	userImgAlt,
	userName,
	userHandle,
	tweetTime,
	content,
	imgSrc,
	imgAlt,
}) => {
	return (
		<TweetRoot>
			<TweetCard>
				<TweetContentWrapper>
					<UserProfileImg src={userImgSrc} alt={userImgAlt} />
					<div className='flex flex-col gap-1'>
						<TweetHeader
							userName={userName}
							userHandle={userHandle}
							tweetTime={tweetTime}
						/>
						<TweetContent
							content={content}
							imgSrc={imgSrc}
							imgAlt={imgAlt}
						/>
						<TweetIcons />
					</div>
				</TweetContentWrapper>
			</TweetCard>
		</TweetRoot>
	)
}
