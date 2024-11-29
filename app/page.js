export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <main className="max-w-2xl mx-auto flex flex-col gap-12 items-center text-center">
        <h1 className="text-2xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Maybe in another universe, Labafilm would survive...
        </h1>

        <a
          className="group relative overflow-hidden rounded-lg bg-black dark:bg-white px-8 py-4 transition-transform hover:scale-105"
          href="https://github.com/jacwida/labafilm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative z-10 flex items-center text-white dark:text-black font-medium">
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Source Code
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          You can build on top of it. Feel free to use it as a starting point
          for your own project.
        </p>
      </main>
    </div>
  );
}
