"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function EmailModal() {
  const [formData, setFormData] = useState({
    senderEmail: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ senderEmail: "", subject: "", message: "" });
      setStatus("success");
    } else {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000); // Auto-reset message
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-xl bg-slate-800 px-5 py-2 text-sm font-medium text-white shadow hover:bg-slate-700 transition-colors duration-200">
          Contact Steven
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-800 p-6 shadow-2xl">
          <Dialog.Title className="text-2xl font-semibold text-slate-50 mb-6">
            Send a message
          </Dialog.Title>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm text-slate-100"
          >
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.senderEmail}
                onChange={(e) =>
                  setFormData({ ...formData, senderEmail: e.target.value })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Let's work together!"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me what you want."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-slate-100 hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg border border-slate-300 px-4 py-2 text-slate-100 hover:bg-slate-700 transition"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-3 flex items-center text-green-600 text-sm gap-1">
                <CheckCircle size={16} /> Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 flex items-center text-red-600 text-sm gap-1">
                <XCircle size={16} /> Something went wrong. Try again.
              </p>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
