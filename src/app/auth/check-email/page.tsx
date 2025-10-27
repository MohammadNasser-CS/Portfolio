import Link from "next/link"

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-sm p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
            <p className="text-muted-foreground">
              We've sent you a confirmation email. Please check your inbox and click the link to verify your account.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              After confirming your email, you'll need to be added as an admin user to access the dashboard.
            </p>

            <Link
              href="/auth/login"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Go to Login
            </Link>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
