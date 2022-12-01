import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo);
  }


  reset = () => {
    this.setState({ hasError: false })
  }

  render() {
    const { hasError, error } = this.state;
    const { FallbackComponent, reset } = this.props
    if (hasError) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} resetErrorBoundary={reset ?? this.reset}/>
      }

      if(this.props.fallbackRender) {
        return <this.props.fallbackRender
          error={error}
          resetErrorBoundary={reset ?? this.reset}
        />
      }
    }

    return this.props.children;
  }
}