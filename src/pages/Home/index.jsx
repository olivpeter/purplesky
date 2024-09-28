import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { MainContent } from './Main'

export function Home() {
	return (
		<div className='max-w-6xl mx-auto grid grid-cols-[230px_1fr_230px] px-6 h-screen'>
			<Navbar />
			<MainContent />
			<Sidebar />
		</div>
	)
}
