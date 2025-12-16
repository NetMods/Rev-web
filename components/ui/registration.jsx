import { useEffect, useEffectEvent, useRef, useState } from "react";
import { UpdateWaitlist } from "@/actions/waitlist";
import {
  AppStoreLogoIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LinuxLogoIcon,
  WindowsLogoIcon,
  XIcon,
} from "@phosphor-icons/react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

export default function Register({ isOpen, onClose }) {
  const [selectedOS, setSelectedOS] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const modalRef = useRef(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValid = selectedOS.length > 0 && isValidEmail(email);

  const handleOsSelection = (name) => {
    setSelectedOS((prev) => {
      if (prev.indexOf(name) === -1) {
        return [...prev, name];
      } else {
        return prev.filter((val) => val != name);
      }
    });
  };

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

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === "Escape" || ((e.ctrlKey || e.metaKey) && e.key === "c")) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <article
      className={cn(
        "pointer-events-auto fixed inset-0 z-80 bg-black/50 backdrop-blur-md transition-opacity duration-100 ease-linear",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        loading && "cursor-wait",
      )}
      onClick={handleOutsideClick}
    >
      <div className="flex size-full items-center justify-center font-sans">
        <div
          ref={modalRef}
          className={cn(
            "bg-background relative m-4 h-fit w-full max-w-4xl min-w-[352px] overflow-hidden md:h-1/2",
            "text-foreground grid-cols-2 transition-all md:grid",
          )}
        >
          <div
            className="bg-foreground/10 flex w-full justify-center object-contain max-md:hidden"
            style={{
              backgroundImage: "url('myself-bg.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right top",
              backgroundAttachment: "fixed",
            }}
          >
            <img src={"myself.png"} alt="revord" className="object-cover" />
          </div>

          <div className="p-2 md:p-3">
            <div className="flex justify-between">
              <h2 className="mb-1 text-3xl tracking-tighter">
                Join the waitlist
              </h2>
              <button
                className="bg-foreground/10 hover:bg-foreground/20 cursor-pointer px-3"
                onClick={onClose}
              >
                <XIcon />
              </button>
            </div>

            <Balancer className="text-foreground/70 mb-6 text-sm">
              Revord is coming! Want to try it first-hand?
            </Balancer>

            <div className="mb-6 flex flex-wrap justify-start gap-3 *:cursor-pointer">
              {[
                { name: "MacOS", Icon: AppStoreLogoIcon },
                { name: "Linux", Icon: LinuxLogoIcon },
                { name: "Windows", Icon: WindowsLogoIcon },
              ].map(({ name, Icon }) => (
                <button
                  key={name}
                  className={cn(
                    "border-foreground/10 bg-foreground/5 inline-flex items-center justify-center gap-2 border px-4 py-2 text-sm transition hover:bg-white/30",
                    selectedOS.includes(name) &&
                      "border-foreground/80 bg-white/30",
                  )}
                  onClick={() => handleOsSelection(name)}
                >
                  <Icon size={20} /> {name}
                </button>
              ))}
            </div>

            <div className="bg-foreground/20 flex items-center gap-2 p-1">
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || success}
                className="text-md text-foreground placeholder-foreground/60 flex-1 border-none bg-transparent px-4 py-2 outline-none focus:ring-0"
              />
              <button
                className={cn(
                  "bg-background flex h-[42px] w-[42px] cursor-pointer items-center justify-center",
                  "text-foreground px-3 py-3 transition disabled:cursor-not-allowed disabled:bg-white disabled:opacity-50",
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

            {response.length > 0 && (
              <div className="text-foreground mt-2 text-sm"> {response} </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
