import { company } from "@/lib/content";

export default function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Milas Engenharia no WhatsApp"
      className="group fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-3 rounded-full bg-moss text-paper shadow-lg shadow-ink/20 pl-4 pr-4 sm:pr-5 py-4 hover:bg-moss-light hover:text-ink transition-colors"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.36 2 11.73c0 2.02.62 3.9 1.68 5.46L2.5 21.5l4.5-1.17a10.06 10.06 0 0 0 5 1.34c5.52 0 10-4.36 10-9.73S17.52 2 12 2Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M17.3 14.6c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.42 0 1.43 1.03 2.8 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.22.48 1.64.61.69.22 1.31.19 1.8.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z"
          fill="currentColor"
        />
      </svg>
      <span className="eyebrow tracking-wide hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
