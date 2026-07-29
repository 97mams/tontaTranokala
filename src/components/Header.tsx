import { Link, useLocation } from '@tanstack/react-router'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { authClient } from '@/lib/auth-client.ts'

export default function Header() {
    const session =  authClient.useSession()
    const pathname = useLocation({
    select: (location) => location.pathname,
  })
  console.log(session)
  return (
    <header className="sticky top-0 z-50 border-b-2 border-accent px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <Link
          to="/"
        >
          <img src="/logo.png" className="w-8 h-5" alt="logo" />
        </Link>
          <Link
            to="/about"
            className={pathname === "/about" ? "border border-accent rounded-sm px-3 py-2" : "border border-background px-3 py-2"}
          >
            A propos
          </Link>
          <Link
            to="/docs"
            className={pathname === "/docs" ? "border broder-accent rounded-sm px-3 py-2" : "border border-background px-3 py-2"}
          >
            Documentation
          </Link>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          {session.data?.user ?<Button onClick={() => authClient.signOut()}>Se deconnecter</Button> : <Link to="/tranokala/singin">
            <Button>Se connecter</Button>
          </Link>
          }
          <a
            href="https://github.com/97mams/tontaTranokala"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:block"
          >
            <span className="sr-only">Go to TanStack GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <ModeToggle />

        </div>
      </nav>
    </header>
  )
}
