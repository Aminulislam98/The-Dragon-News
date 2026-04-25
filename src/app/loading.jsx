export default function HomeSkeleton() {
  return (
    // FULL PAGE WRAPPER
    <div className="w-full bg-gray-100 animate-pulse">
      {/* HEADER */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          {/* Logo */}
          <div className="h-10 w-72 mx-auto bg-gray-300 rounded"></div>

          {/* Subtitle */}
          <div className="h-4 w-64 mx-auto bg-gray-300 rounded"></div>

          {/* Date */}
          <div className="h-3 w-40 mx-auto bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* LATEST BAR */}
      <div className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Latest badge */}
          <div className="h-8 w-20 bg-gray-300 rounded"></div>

          {/* Scrolling text */}
          <div className="h-4 w-full bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center relative">
          {/* Center links */}
          <div className="flex gap-6">
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
          </div>

          {/* Login (right side) */}
          <div className="absolute right-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDEBAR */}
          <div className="col-span-3 space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>

            <div className="space-y-3">
              <div className="h-12 bg-gray-300 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>

            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>

          {/* CENTER CARD */}
          <div className="col-span-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
              {/* Author */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  <div className="w-5 h-5 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-5 bg-gray-300 rounded w-5/6"></div>
              </div>

              {/* Image */}
              <div className="h-[250px] bg-gray-300 rounded-lg"></div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

              {/* Read more */}
              <div className="h-4 w-24 bg-gray-300 rounded"></div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-3 border-t">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-3 w-8 bg-gray-300 rounded"></div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <div className="h-3 w-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 space-y-6">
            <div className="space-y-3">
              <div className="h-5 w-28 bg-gray-300 rounded"></div>
              <div className="h-10 bg-gray-300 rounded-lg"></div>
              <div className="h-10 bg-gray-300 rounded-lg"></div>
            </div>

            <div className="space-y-3">
              <div className="h-5 w-28 bg-gray-300 rounded"></div>
              <div className="space-y-2">
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-40 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
