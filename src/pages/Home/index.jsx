import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'

export function Home() {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-[230px_1fr_230px] px-6  h-screen'>
			<Navbar />
			<main className='p-6 border-x border-slate-800'>Content</main>
			<Sidebar />
		</div>
	)
}
