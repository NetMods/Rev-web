import { useRef, useState } from "react";
import Image from "next/image";
import { UpdateWaitlist } from "@/actions/waitlist";
import {
  AppStoreLogoIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LinuxLogoIcon,
  WindowsLogoIcon,
  XIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

export default function Register({ isOpen, onClose }) {
  const [selectedOS, setSelectedOS] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const modalRef = useRef(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValid = selectedOS && isValidEmail(email);

  const handleSubmit = async () => {
    if (!isValid || loading) return;

    try {
      setLoading(true);
      const res = await UpdateWaitlist({ os: selectedOS, email });
      setLoading(false);
      setSuccess(true);
      setResponse(res.data.status);
    } catch (err) {
      console.error("Waitlist update failed:", err);
      setLoading(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
  };

  return (
    <article
      className={cn(
        "pointer-events-auto fixed inset-0 z-[80] bg-black/50 backdrop-blur-md transition-opacity duration-300 ease-in-out",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        loading && "cursor-wait",
      )}
      onClick={handleOutsideClick}
    >
      <div className="flex size-full items-center justify-center font-sans">
        <div
          ref={modalRef}
          className={cn(
            "bg-background relative w-full max-w-xl overflow-hidden rounded-lg border border-white/15",
            "text-foreground shadow-2xl backdrop-blur-lg transition-all",
            isOpen ? "translate-0" : "translate-y-5",
          )}
        >
          <Image
            src={"/wave.jpg"}
            alt="image"
            width={400}
            height={400}
            className="absolute inset-0 z-[-10] size-full rotate-180 opacity-60"
          />
          <div className="px-6 py-6">
            <div className="flex justify-between">
              <h2 className="mb-1 text-3xl font-semibold">Join the waitlist</h2>
              <button
                className="bg-foreground/10 hover:bg-foreground/20 cursor-pointer rounded-md px-3"
                onClick={onClose}
              >
                <XIcon />
              </button>
            </div>
            <p className="text-foreground/70 mb-6 text-sm">
              Revord is coming! Want to try it first-hand?
            </p>

            <div className="mb-6 flex flex-wrap justify-start gap-3 *:cursor-pointer">
              {[
                { name: "MacOS", Icon: AppStoreLogoIcon },
                { name: "Linux", Icon: LinuxLogoIcon },
                { name: "Windows", Icon: WindowsLogoIcon },
              ].map(({ name, Icon }) => (
                <button
                  key={name}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/30",
                    selectedOS === name && "border-white/20 bg-white/25",
                  )}
                  onClick={() => setSelectedOS(name)}
                >
                  <Icon size={20} /> {name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-md bg-white/20 p-1">
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || success}
                className="text-md flex-1 border-none bg-transparent px-4 py-2 text-white placeholder-gray-300 outline-none focus:ring-0"
              />
              <button
                className={cn(
                  "flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-white/90 px-3 py-3 text-black transition disabled:cursor-not-allowed disabled:opacity-50",
                  !isValid && "cursor-not-allowed opacity-50",
                )}
                onClick={handleSubmit}
                disabled={!isValid || loading || success}
              >
                {loading ? (
                  <svg
                    className="h-5 w-5 animate-spin cursor-wait text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : success ? (
                  <CheckCircleIcon size={20} />
                ) : (
                  <ArrowRightIcon />
                )}
              </button>
            </div>
            <div className="text-foreground mt-2 text-sm">
              {response.length > 0 && response}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
