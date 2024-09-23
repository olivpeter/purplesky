import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { TweetModal } from '../../components/ui/TweetModal'

export function Home() {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-[230px_1fr_230px] px-6  h-screen'>
			<Navbar />
			<main className='p-6 border-x border-slate-800 flex flex-col'>
				<TweetModal />
			</main>
			<Sidebar />
		</div>
	)
}
