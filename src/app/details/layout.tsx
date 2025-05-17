import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <Link className="mb-10 text-gray-950 inline-block underline hover:no-underline" href="/">Back to Home page</Link>
        {children}
      </div>
    </div>
  );
}