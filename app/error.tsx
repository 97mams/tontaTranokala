"use client";

export default function ErrorBoundary({ error }: { error: string }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-red-500 text-white">
      <p>{error}</p>
    </div>
  );
}
