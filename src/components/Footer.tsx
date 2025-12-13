export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-cyan/20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-neon-cyan mb-4">SkyChess</h3>
          <p className="text-muted-foreground">Master chess openings with AI</p>
        </div>
        <div>
          <h4 className="font-bold text-neon-cyan mb-4">Product</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-neon-cyan">Courses</a></li>
            <li><a href="#" className="hover:text-neon-cyan">Pricing</a></li>
            <li><a href="#" className="hover:text-neon-cyan">Features</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-neon-cyan mb-4">Company</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-neon-cyan">About</a></li>
            <li><a href="#" className="hover:text-neon-cyan">Blog</a></li>
            <li><a href="#" className="hover:text-neon-cyan">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-neon-cyan mb-4">Legal</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-neon-cyan">Privacy</a></li>
            <li><a href="#" className="hover:text-neon-cyan">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neon-cyan/20 pt-8 text-center text-muted-foreground">
        <p>© 2025 SkyChess. All rights reserved.</p>
      </div>
    </footer>
  );
}
