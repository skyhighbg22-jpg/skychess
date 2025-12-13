import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
          <div className="max-w-md w-full text-center">
            <div className="text-6xl mb-6 text-neon-red">⚠️</div>
            <h1 className="text-4xl font-bold text-neon-cyan mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-2 text-lg">
              An unexpected error occurred while rendering this page.
            </p>
            <p className="text-neon-red/70 font-mono text-sm mb-8 break-words">
              {this.state.error?.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.resetError}
                className="px-8 py-3 rounded-lg bg-neon-cyan text-black font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition transform hover:scale-105"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan/10 transition"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
