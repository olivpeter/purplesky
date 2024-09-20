import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '../../components/ui/Input'

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
		</div>
	)
}
