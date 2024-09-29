import { ArrowsLeftRight, Chat, DotsThree, Heart } from '@phosphor-icons/react'

export const TweetIcons = () => {
	return (
		<div className='flex items-center gap-20'>
			<Chat
				size={20}
				weight='bold'
				className='text-slate-500 size-fit p-1 cursor-pointer rounded-full hover:bg-slate-500/20'
			/>
			<ArrowsLeftRight
				size={20}
				weight='bold'
				className='text-slate-500 size-fit p-1 cursor-pointer rounded-full hover:bg-slate-500/20'
			/>
			<Heart
				size={20}
				weight='bold'
				className='text-slate-500 size-fit p-1 cursor-pointer rounded-full hover:bg-slate-500/20'
			/>
			<DotsThree
				size={20}
				weight='bold'
				className='text-slate-500 size-fit p-1 cursor-pointer rounded-full hover:bg-slate-500/20'
			/>
		</div>
	)
}
