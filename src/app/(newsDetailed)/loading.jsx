export default function DetailSkeleton() {
  return (
    <div className="w-full animate-pulse">
      {/* HEADER */}
      <div className="bg-gray-200 py-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          {/* Logo */}
          <div className="h-10 w-72 mx-auto bg-gray-300 rounded"></div>

          {/* Subtitle */}
          <div className="h-4 w-64 mx-auto bg-gray-300 rounded"></div>

          {/* Date */}
          <div className="h-3 w-40 mx-auto bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* LEFT (MAIN ARTICLE) */}
          <div className="col-span-8">
            {/* Section title */}
            <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5">
              {/* Image */}
              <div className="w-full h-[420px] bg-gray-300 rounded-lg"></div>

              {/* Title */}
              <div className="space-y-2">
                <div className="h-6 bg-gray-300 rounded w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-5/6"></div>
              </div>

              {/* Meta / text */}
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6"></div>
              </div>

              {/* Button */}
              <div className="h-10 w-60 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-4 space-y-6">
            {/* Login section */}
            <div className="space-y-3">
              <div className="h-5 w-28 bg-gray-300 rounded"></div>

              <div className="h-10 bg-gray-300 rounded-lg"></div>
              <div className="h-10 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Social section */}
            <div className="space-y-3">
              <div className="h-5 w-28 bg-gray-300 rounded"></div>

              <div className="space-y-2">
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            {/* Q-Zone */}
            <div className="space-y-3">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>

              <div className="space-y-4">
                <div className="h-32 bg-gray-300 rounded-lg"></div>
                <div className="h-32 bg-gray-300 rounded-lg"></div>
                <div className="h-32 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
