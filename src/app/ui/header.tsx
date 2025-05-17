import Link from 'next/link';
import { FilmIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link key="homepage-link" href="/" className="flex justify-center gap-2 text-2xl font-bold hover:text-blue-600"><FilmIcon width={24} />Movie Database</Link>
    </header>
  );
}