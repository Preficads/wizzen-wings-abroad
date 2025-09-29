import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

type Props = { isOpen: boolean; onClose: () => void };

export default function Popup({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  // ✅ Lock scroll when popup is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // ✅ Send form via EmailJS
    emailjs
      .sendForm(
        "your_service_id",    // 🔹 Replace with EmailJS Service ID
        "your_template_id",   // 🔹 Replace with EmailJS Template ID
        formRef.current,
        "your_public_key"     // 🔹 Replace with EmailJS Public Key
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("Email send error:", err);
        alert("❌ Failed to send. Try again later.");
      });
  };

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
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

          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            One step away!
          </h2>

          {success ? (
            <p className="text-green-600 text-center font-medium">
              ✅ Successfully applied! Our team will contact you soon.
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"   // ✅ Must match EmailJS {{name}}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"  // ✅ Must match {{email}}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"  // ✅ Must match {{phone}}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Study Abroad */}
              <div className="rounded-lg border">
                <div className="px-4 py-2 font-medium text-gray-800">
                  Study Abroad Countries
                </div>
                <div className="max-h-40 overflow-y-auto px-4 pb-3 space-y-2">
                  {[
                    "Canada",
                    "United Kingdom (UK)",
                    "Australia",
                    "Germany",
                    "New Zealand",
                    "USA",
                    "Ireland",
                    "France",
                    "Italy",
                    "Netherlands",
                    "Poland",
                  ].map((c) => (
                    <label key={c} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name="countries" value={c} /> {c}
                    </label>
                  ))}
                </div>
              </div>

              {/* Immigration */}
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
                      <input type="checkbox" name="immigration" value={c} /> {c}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="text"
                name="qualification" // ✅ Must match {{qualification}}
                placeholder="Highest Qualification (Optional)"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="consent"  // ✅ Must match {{consent}}
                  className="h-4 w-4"
                  required
                />
                <label className="text-sm text-gray-700">
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
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
