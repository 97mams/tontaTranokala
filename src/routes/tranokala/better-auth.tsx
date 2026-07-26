import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { authClient } from '#/lib/auth-client'
import { SignupForm } from '#/components/singup-form'

export const Route = createFileRoute('/tranokala/better-auth')({
  component: BetterAuthDemo,
})

function BetterAuthDemo() {
  const { data: session, isPending } = authClient.useSession()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // if (isPending) {
  //   return (
  //     <main className="demo-page demo-center">
  //       <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900 dark:border-neutral-800 dark:border-t-neutral-100" />
  //     </main>
  //   )
  // }

  if (session?.user) {
    return (
      <main className="demo-page demo-center">
        <section className="demo-panel w-full max-w-md space-y-6">
          <div className="space-y-1.5">
            <p className="island-kicker mb-2">Better Auth</p>
            <h1 className="demo-title">Welcome back</h1>
            <p className="demo-muted text-sm">
              You're signed in as {session.user.email}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {session.user.image ? (
              <img src={session.user.image} alt="" className="h-10 w-10" />
            ) : (
              <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {session.user.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {session.user.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                {session.user.email}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              void authClient.signOut()
            }}
            className="demo-button demo-button-secondary w-full"
          >
            Sign out
          </button>

          <p className="demo-muted text-center text-xs">
            Built with{' '}
            <a
              href="https://better-auth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              BETTER-AUTH
            </a>
            .
          </p>
        </section>
      </main>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        const result = await authClient.signUp.email({
          email,
          password,
          name,
        })
        if (result.error) {
          setError(result.error.message || 'Sign up failed')
        }
      } else {
        const result = await authClient.signIn.email({
          email,
          password,
        })
        if (result.error) {
          setError(result.error.message || 'Sign in failed')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-150 w-150 m-auto'>
      <SignupForm />
    </div>
  )
}
