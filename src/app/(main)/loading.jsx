"use client";

export default function SkeletonLayout() {
  return (
    // Main container (same as your layout width)
    <div className="max-w-7xl mx-auto w-full   animate-pulse">
      {/* Grid layout: left / center / right */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDEBAR */}
        <div className="col-span-3 space-y-4">
          {/* Title */}
          <div className="h-6 w-32 bg-gray-300 rounded"></div>

          {/* Category items */}
          <div className="space-y-3">
            <div className="h-12 bg-gray-300 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Bottom image */}
          <div className="h-40 bg-gray-300 rounded-lg"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-6">
          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
            {/* Top author */}
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
              <div className="h-5 bg-gray-300 rounded w-full"></div>
              <div className="h-5 bg-gray-300 rounded w-5/6"></div>
            </div>

            {/* Image */}
            <div className="w-full h-[250px] bg-gray-300 rounded-lg"></div>

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
              {/* Stars */}
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

              {/* Views */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="h-3 w-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 space-y-6">
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
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
