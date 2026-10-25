interface IconProps {
  readonly className?: string;
}

const common = { 'aria-hidden': true, focusable: false } as const;

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="20" height="20" {...common}>
      <path
        fill="currentColor"
        d="M16.004 3C8.82 3 3 8.82 3 16c0 2.293.6 4.533 1.74 6.507L3 29l6.66-1.707A12.94 12.94 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.6c-1.98 0-3.92-.533-5.613-1.54l-.4-.24-3.953 1.013 1.053-3.853-.26-.4A10.56 10.56 0 0 1 5.4 16c0-5.847 4.76-10.6 10.604-10.6 5.84 0 10.596 4.753 10.596 10.6 0 5.847-4.756 10.6-10.596 10.6Zm5.813-7.94c-.32-.16-1.88-.927-2.173-1.033-.293-.107-.507-.16-.72.16-.213.32-.827 1.033-1.013 1.247-.187.213-.373.24-.693.08-.32-.16-1.347-.497-2.567-1.587-.947-.847-1.587-1.893-1.773-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.623-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.36.527 1.823.673.767.244 1.464.21 2.016.127.615-.092 1.88-.768 2.147-1.51.267-.74.267-1.375.187-1.508-.08-.133-.293-.213-.613-.373Z"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" {...common}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" {...common}>
      <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" {...common}>
      <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
