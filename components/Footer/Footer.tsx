import Link from 'next/link'

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Home</a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://twitter.com/syndicatespanda'>
            Pandamania Twitter
          </ExternalLink>
          <ExternalLink href='https://discord.com/invite/vkMctx3PEd'>
            Discord
          </ExternalLink>
          <ExternalLink href='https://panda-six-flame.vercel.app/'>
            Whitepaper
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='https://twitter.com/HMingos'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Hashmingos Twitter
            </a>
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.Pandamania.Game'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Pandamania Game
            </a>
          </Link>
          <Link href='/team'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Team</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
