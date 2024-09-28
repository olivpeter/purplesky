import {
	FilmStrip,
	Gif,
	ImageSquare,
	ShieldWarning,
	Smiley,
} from '@phosphor-icons/react'
import { Button, ButtonLink } from './Button'
import { UserProfileImg } from './UserProfileImg'
import { useEffect, useRef, useState } from 'react'

export function TweetModal({ setModalOpen }) {
	const [tweetCouter, setTweetCounter] = useState(0)
	const [tweetBody, setTweetBody] = useState('')
	const textAreaRef = useRef(null)

	useEffect(() => {
		textAreaRef.current.style.height = 'auto'
		textAreaRef.current.style.height =
			textAreaRef.current.scrollHeight + 'px'
	}, [tweetCouter])

	function handleTweet({ target }) {
		setTweetCounter(target.value.length)
		setTweetBody(target.value)
	}

	return (
		<div className='fixed inset-0 bg-zinc-950/80 pt-24'>
			<div className='border border-slate-700 bg-slate-900 p-4 rounded-lg flex flex-col gap-4 max-w-xl mx-auto'>
				<header className='flex items-center justify-between'>
					<ButtonLink
						handleClick={() => setModalOpen(false)}
						label={'Cancel'}
					/>
					<div className='flex items-center gap-2'>
						<ShieldWarning
							weight='bold'
							size={24}
							className='text-violet-500 opacity-50 hover:opacity-100 cursor-pointer'
						/>
						<Button label={'Post'} variant={'small'} />
					</div>
				</header>
				<div className='flex gap-4'>
					<UserProfileImg
						src={'https://github.com/olivpeter.png'}
						alt={'Olivpeter'}
					/>
					<textarea
						name='tweetBody'
						id='tweetBody'
						rows={3}
						value={tweetBody}
						maxLength={300}
						placeholder='What’s up?'
						className='flex-1 bg-transparent placeholder:text-slate-500 placeholder:font-medium text-slate-300 w-full outline-none resize-none overflow-hidden transition h-auto'
						onChange={handleTweet}
						ref={textAreaRef}
					/>
				</div>
				<footer className='border-t border-slate-700 pt-4 flex items-center justify-between'>
					<div className='flex items-center'>
						<ImageSquare
							weight='bold'
							size={20}
							className='p-2 size-fit text-violet-500 hover:bg-violet-700/30 transition cursor-pointer rounded-full'
						/>
						<FilmStrip
							weight='bold'
							size={20}
							className='p-2 size-fit text-violet-500 hover:bg-violet-700/30 transition cursor-pointer rounded-full'
						/>
						<Gif
							weight='bold'
							size={20}
							className='p-2 size-fit text-violet-500 hover:bg-violet-700/30 transition cursor-pointer rounded-full'
						/>
						<Smiley
							weight='bold'
							size={20}
							className='p-2 size-fit text-violet-500 hover:bg-violet-700/30 transition cursor-pointer rounded-full'
						/>
					</div>
					<span
						className={`${tweetCouter > 250 ? 'text-rose-500 font-bold' : ''}`}
					>
						{300 - tweetCouter}
					</span>
				</footer>
			</div>
		</div>
	)
}
