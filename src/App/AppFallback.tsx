export default function AppFallback({ error, resetErrorBoundary}) {
  return (
    <div>
      <h1>An error ocurred</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}