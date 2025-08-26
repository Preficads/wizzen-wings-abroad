import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type Props = { isOpen: boolean; onClose: () => void };

export default function Popup({ isOpen, onClose }: Props) {
  // lock body scroll while open (prevents background shifting and misalignment)
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Render to <body> so header/layout/z-index can't affect placement
  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal (kept same styling; just guaranteed centering) */}
      <div className="fixed left-1/2 top-1/2 w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 animate-[fadeInScale_0.35s_ease-out_forwards]">
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            One step away!
          </h2>

          {/* Your existing form content (unchanged) */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Study Abroad Countries (scrollable list) */}
            <div className="rounded-lg border">
              <div className="px-4 py-2 font-medium text-gray-800">
                Study Abroad Countries
              </div>
              <div className="max-h-40 overflow-y-auto px-4 pb-3 space-y-2">
                {["Canada","United Kingdom (UK)","Australia","Germany","New Zealand","USA","Ireland","France","Italy","Netherlands","Poland"].map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="h-4 w-4" /> {c}
                  </label>
                ))}
              </div>
            </div>

            {/* Immigration / PR Destinations */}
            <div className="rounded-lg border">
              <div className="px-4 py-2 font-medium text-gray-800">
                Immigration / PR Destinations
              </div>
              <div className="max-h-40 overflow-y-auto px-4 pb-3 space-y-2">
                {[
                  "Canada (PR, Work Permit)",
                  "Australia (PR, Work Permit)",
                  "Germany (Job Seeker Visa, Work Visa)",
                ].map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="h-4 w-4" /> {c}
                  </label>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Highest Qualification (Optional)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="consent" className="h-4 w-4" />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I agree to be contacted by Wizzen Overseas.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-2"
            >
              Submit
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              Our counselor will contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
