import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center bg-white dark:bg-gray-950 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Please sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
