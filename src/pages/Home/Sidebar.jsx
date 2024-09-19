import {
	Bell,
	ChatCircle,
	GearSix,
	Hash,
	House,
	ListBullets,
	MagnifyingGlass,
	NotePencil,
	UserCircle,
} from '@phosphor-icons/react'
import { Button } from '../../components/ui/Button'
import { UserProfileImg } from '../../components/ui/UserProfileImg'
import { Navigation } from '../../components/ui/Navigation'

export function Sidebar() {
	return (
		<aside className='p-4 flex flex-col gap-4'>
			<div className='ml-4'>
				<UserProfileImg
					src={'https://github.com/olivpeter.png'}
					alt={'Olivpeter'}
				/>
			</div>

			<Navigation.Root>
				<Navigation.Item
					href={'#'}
					label={'Home'}
					Icon={House}
					isActive
				/>
				<Navigation.Item
					href={'#'}
					label={'Search'}
					Icon={MagnifyingGlass}
				/>
				<Navigation.Item
					href={'#'}
					label={'Notifications'}
					Icon={Bell}
				/>
				<Navigation.Item href={'#'} label={'Chat'} Icon={ChatCircle} />
				<Navigation.Item href={'#'} label={'Feeds'} Icon={Hash} />
				<Navigation.Item
					href={'#'}
					label={'Lists'}
					Icon={ListBullets}
				/>
				<Navigation.Item
					href={'#'}
					label={'Profile'}
					Icon={UserCircle}
				/>
				<Navigation.Item href={'#'} label={'Settings'} Icon={GearSix} />
			</Navigation.Root>

			<Button
				handleClick={() => {
					alert('Add New Post')
				}}
				Icon={NotePencil}
				label={'New Post'}
			/>
		</aside>
	)
}
