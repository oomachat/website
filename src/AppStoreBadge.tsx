export function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/us/app/ooma-7-day-hormone-forecast/id6760321287"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform hover:scale-105 active:scale-95 ${className}`}
      aria-label="Download on the App Store"
    >
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1726444800"
        alt="Download on the App Store"
        className="h-[44px] sm:h-[52px] w-auto"
      />
    </a>
  );
}
