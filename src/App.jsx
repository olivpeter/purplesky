import logo from '../public/purplesky_logo.svg'

export function App() {
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-2'>
			<img
				src={logo}
				alt='Purple Sky Logo'
				className='size-8 animate-pulse'
			/>
			<h1 className='text-xl font-semibold'>PurpleSky</h1>
			<p className='text-md text-slate-500'>
				Discover a hole new world of colors
			</p>
			<button className='bg-violet-600 rounded-full px-4 py-2 font-semibold hover:bg-violet-700 mt-4'>
				Get Started
			</button>
		</div>
	)
}
