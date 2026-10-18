import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">
        AI Knowledge Workspace
      </h1>

      <p className="mt-3 text-gray-600">
        Upload documents, search their contents, and ask questions.
      </p>

      <Link
        href="/documents"
        className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white"
      >
        View Documents
      </Link>
    </main>
  );
}