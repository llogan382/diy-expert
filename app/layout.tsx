import { ClerkProvider, SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <div className="menu-section">
              <p>Diy<span>Expert</span></p>
              <ul>
                <li>

                  <Link href="/sign-in">Sign in</Link>

                </li>
                <li>
                  <Link href="/sign-up">Sign up</Link>

                </li>
              </ul>
            </div>

          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}