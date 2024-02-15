'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinkStyle =
  'border-b-2 border-gray-400/20 p-1 text-indigo-600 hover:border-gray-400 hover:text-indigo-800';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex gap-4 bg-gradient-to-r from-stone-300/50 to-stone-300/75 px-4 py-2'>
      <Link
        className={`${navLinkStyle} ${pathname === '/' ? 'border-gray-400/100' : ''}`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`${navLinkStyle} ${pathname === '/details' ? 'border-gray-400/100' : ''}`}
        href='/details'
      >
        Details
      </Link>
      <Link
        className={`${navLinkStyle} ${pathname === '/about' ? 'border-gray-400/100' : ''}`}
        href='/about'
      >
        About
      </Link>
    </nav>
  );
}
