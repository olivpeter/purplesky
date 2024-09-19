import { Sidebar } from './Sidebar'

export function Home() {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-[230px_1fr_230px] px-6  h-screen'>
			<Sidebar />
			<main className='p-4 border-x border-slate-800'>Content</main>
			<aside className='p-4'>Discover</aside>
		</div>
	)
}
