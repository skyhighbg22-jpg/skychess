import React from 'react';
export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if ((this.state as any).hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neon-cyan mb-4">Oops! Something went wrong</h1>
            <p className="text-muted-foreground mb-8">Please try refreshing the page</p>
            <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold">
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return (this.props as any).children;
  }
}
