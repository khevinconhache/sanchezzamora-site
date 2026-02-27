export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div
        className="h-10 w-10 rounded-full border-2 border-gold/30 border-t-gold"
        style={{
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
