import Link from 'next/link';


export default function NotFound() {
  return (
<section className='bg-[#081c15] min-h-screen min-w-screen' >
    <h1 className='text-[#ecf39e] text-7xl' style={{ fontFamily: 'var(--font-Harmond-ExtBdItaExp)' }}>404: Whoops! You&apos;ve hit the infinite loop. </h1>
    <p>Looks like you wandered off the path. But don’t worry, the loop goes on forever… 
        and so can you!</p>
    <Link href="/">Return Home</Link>
</section>
  )
}
