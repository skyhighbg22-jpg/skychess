export default function Map() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-neon-cyan/30 flex items-center justify-center bg-gradient-to-br from-neon-darkblue/20 to-transparent">
      <div className="text-center">
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="text-neon-cyan font-bold mb-2">Interactive Map</h3>
        <p className="text-muted-foreground">Chess tournament locations worldwide</p>
      </div>
    </div>
  );
}
