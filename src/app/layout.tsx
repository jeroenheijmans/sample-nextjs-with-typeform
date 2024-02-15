import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import NavBar from './components/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS with Typeform Sample',
  description:
    'Example application showcasing Typeform inside a NextJS application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center border bg-gradient-to-br from-stone-100 via-stone-200 via-40% to-stone-400'>
          <div className='mx-auto flex w-full max-w-[800px] flex-col p-2 md:p-4 lg:p-8'>
            <NavBar />
            <div className='min-h-48'>{children}</div>
            <footer className='mt-auto w-full text-sm'>
              <div className='mx-auto mt-8 max-w-[800px]'>
                <div className='border-t border-t-stone-400/50 p-4'>
                  <Link
                    className='text-indigo-800 underline hover:text-indigo-950'
                    href='https://github.com/jeroenheijmans/sample-nextjs-with-typeform'
                    target='_blank'
                  >
                    GitHub source
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
