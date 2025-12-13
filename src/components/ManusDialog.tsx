import { useState } from 'react';
export default function ManusDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition">
        Open Dialog
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-black border-2 border-neon-cyan rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Dialog Title</h2>
            <p className="text-muted-foreground mb-6">This is a modal dialog component with cyberpunk styling.</p>
            <div className="flex gap-4 justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition">
                Cancel
              </button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
