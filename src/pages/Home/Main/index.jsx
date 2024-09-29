import { Tweet } from '../../../components/ui/TweetCard'
import { TabBar } from './TabBar'

export const MainContent = () => {
	return (
		<div className='border-x border-slate-800 flex flex-col'>
			<TabBar />
			<Tweet
				userImgSrc={'https://github.com/olivpeter.png'}
				userImgAlt={'Pedro Oliveira'}
				userName={'Pedro 💀'}
				userHandle={'olivpeter'}
				tweetTime={'4h'}
				content={
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi temporibus dolore amet velit nobis eos culpa impedit in nisi, modi totam eveniet, illum repellat odit ipsam laudantium ducimus? Aliquid, explicabo?'
				}
			/>
			<Tweet
				userImgSrc={
					'https://cdn.bsky.app/img/avatar/plain/did:plc:trulbuvjyvxktqivee663kf2/bafkreifmvawtlk355e26sfywttf2hmie2hzrgmvhpwqjm6h5fgefwuhboq@jpeg'
				}
				userImgAlt={'Muriel Bernardo'}
				userName={'Muri🌻'}
				userHandle={'muri-bc'}
				tweetTime={'5h'}
				content={
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
				}
				imgSrc={
					'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:qt6kiranq67zmjsiydkwuxld/bafkreigwj6qgh47lcuaanc7idtjnb44vnfr5pzk66tbylflllcczh3axfe@jpeg'
				}
			/>
		</div>
	)
}
