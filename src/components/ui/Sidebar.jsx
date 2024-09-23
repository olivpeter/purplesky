import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from './Input'
import { Feeds } from './Feeds'
import { Link } from './Link'

export function Sidebar() {
	return (
		<div className='pt-6 pl-4'>
			<Input.Root>
				<Input.Content>
					<Input.Icon Icon={MagnifyingGlass} />
					<Input.Label htmlFor={'search'} label={'Search'} />
					<Input.Item
						id={'search'}
						placeholder={'Search'}
						name={'search'}
						type={'search'}
					/>
				</Input.Content>
			</Input.Root>
			<Feeds.Root>
				<Feeds.Title>Discover</Feeds.Title>
				<Feeds.ItemContainer>
					<Feeds.Item link={'#'} title={'Following'} />
					<Feeds.Item link={'#'} title={'Art'} />
					<Feeds.Item link={'#'} title={'Science'} />
					<Feeds.Item link={'#'} title={'Game Dev'} />
					<Feeds.Item link={'#'} title={'📰 News'} />
					<Feeds.Item link={'#'} title={'Mutuals'} />
				</Feeds.ItemContainer>
				<Link href={'#'} label={'More feeds'} />
			</Feeds.Root>
			<div className='mt-6 flex items-center justify-between gap-2'>
				<Link href={'#'} label={'Feedback'} variant={'small'} />
				<Link href={'#'} label={'Privacy'} variant={'small'} />
				<Link href={'#'} label={'Terms'} variant={'small'} />
				<Link href={'#'} label={'Help'} variant={'small'} />
			</div>
		</div>
	)
}
