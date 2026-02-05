const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>
    </main>
  );
};

export default PageContainer;
