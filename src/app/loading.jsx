"use client";

export default function loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F7F5]">
      <div className="h-10 w-10 animate-[morph_1.4s_ease-in-out_infinite] rounded-full bg-[#111111]" />

      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            transform: scale(0.7) rotate(0deg);
            border-radius: 9999px;
          }

          50% {
            transform: scale(1) rotate(180deg);
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
}