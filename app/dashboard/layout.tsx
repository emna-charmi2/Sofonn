export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* TODO: Add sidebar or dashboard navigation here */}
      <main>
        {children}
      </main>
    </div>
  );
}
