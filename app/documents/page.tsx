const documents = [
  { name: "system-design.pdf", status: "processed" },
  { name: "database-architecture.pdf", status: "processing" },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">My Documents</h1>

      <p className="mt-3 text-gray-600">Manage your uploaded documents.</p>

      <ul className="mt-6 space-y-4">
        {documents.map((doc) => (
          <li
            key={doc.name}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
          >
            <span className="font-medium">{doc.name}</span>
            <span
              className={
                doc.status === "processed"
                  ? "rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                  : "rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800"
              }
            >
              {doc.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
