export default function DashboardLayoutSkeleton() {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <div className="flex">
        <div className="w-64 border-r border-neon-cyan/20 p-6">
          <div className="h-6 bg-neon-cyan/20 rounded w-32 mb-8"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (<div key={i} className="h-4 bg-neon-cyan/20 rounded w-24"></div>))}
          </div>
        </div>
        <div className="flex-1 p-8">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (<div key={i} className="h-20 bg-neon-cyan/20 rounded"></div>))}
          </div>
        </div>
      </div>
    </div>
  );
}
