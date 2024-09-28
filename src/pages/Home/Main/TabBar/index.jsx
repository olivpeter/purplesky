import { TabBarLink } from './TabBarLink'

export const TabBar = () => {
	return (
		<div className='border-b border-slate-800 flex items-center justify-between'>
			<TabBarLink href='#' label='Discover' isActive />
			<TabBarLink href='#' label='Following' />
			<TabBarLink href='#' label='Art' />
			<TabBarLink href='#' label='Science' />
			<TabBarLink href='#' label='Game Dev' />
			<TabBarLink href='#' label='📰 News' />
			<TabBarLink href='#' label='Mutals' />
		</div>
	)
}
