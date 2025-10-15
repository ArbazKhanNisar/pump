export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated spinner with glow */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-4 border-blue-100 animate-ping"></div>
        <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-semibold text-gray-800 tracking-wide">
        Loading pumps...
      </p>

      {/* Subtext shimmer */}
      <p className="mt-2 text-sm text-gray-500 animate-pulse">
        Please wait while we prepare your data
      </p>
    </section>
  );
}
