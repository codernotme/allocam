import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-700 shadow-sm bg-background w-screen h-16">
      <a href="/" className="flex items-center gap-4">
        <img src="/logo.svg" alt="Allocam Logo" className="w-8 h-8" />
        <div className="text-3xl font-bold font-sans text-yellow-500">Allocam</div>
      </a>
      <ModeToggle />
    </header>
  );
}
