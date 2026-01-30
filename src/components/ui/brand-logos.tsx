import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

// Dropbox Logo
export function DropboxLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 5L3 9.5L9.5 14L16 9.5L9.5 5Z"
        fill="#0061FF"
      />
      <path
        d="M22.5 5L16 9.5L22.5 14L29 9.5L22.5 5Z"
        fill="#0061FF"
      />
      <path
        d="M3 18.5L9.5 23L16 18.5L9.5 14L3 18.5Z"
        fill="#0061FF"
      />
      <path
        d="M22.5 14L16 18.5L22.5 23L29 18.5L22.5 14Z"
        fill="#0061FF"
      />
      <path
        d="M9.5 24.5L16 20L22.5 24.5L16 29L9.5 24.5Z"
        fill="#0061FF"
      />
    </svg>
  );
}

// Slack Logo
export function SlackLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 18.5C8.5 19.88 7.38 21 6 21C4.62 21 3.5 19.88 3.5 18.5C3.5 17.12 4.62 16 6 16H8.5V18.5Z" fill="#E01E5A"/>
      <path d="M9.75 18.5C9.75 17.12 10.87 16 12.25 16C13.63 16 14.75 17.12 14.75 18.5V26C14.75 27.38 13.63 28.5 12.25 28.5C10.87 28.5 9.75 27.38 9.75 26V18.5Z" fill="#E01E5A"/>
      <path d="M12.25 8.5C10.87 8.5 9.75 7.38 9.75 6C9.75 4.62 10.87 3.5 12.25 3.5C13.63 3.5 14.75 4.62 14.75 6V8.5H12.25Z" fill="#36C5F0"/>
      <path d="M12.25 9.75C13.63 9.75 14.75 10.87 14.75 12.25C14.75 13.63 13.63 14.75 12.25 14.75H5C3.62 14.75 2.5 13.63 2.5 12.25C2.5 10.87 3.62 9.75 5 9.75H12.25Z" fill="#36C5F0"/>
      <path d="M22.25 12.25C22.25 10.87 23.37 9.75 24.75 9.75C26.13 9.75 27.25 10.87 27.25 12.25C27.25 13.63 26.13 14.75 24.75 14.75H22.25V12.25Z" fill="#2EB67D"/>
      <path d="M21 12.25C21 13.63 19.88 14.75 18.5 14.75C17.12 14.75 16 13.63 16 12.25V5C16 3.62 17.12 2.5 18.5 2.5C19.88 2.5 21 3.62 21 5V12.25Z" fill="#2EB67D"/>
      <path d="M18.5 22.25C19.88 22.25 21 23.37 21 24.75C21 26.13 19.88 27.25 18.5 27.25C17.12 27.25 16 26.13 16 24.75V22.25H18.5Z" fill="#ECB22E"/>
      <path d="M18.5 21C17.12 21 16 19.88 16 18.5C16 17.12 17.12 16 18.5 16H26C27.38 16 28.5 17.12 28.5 18.5C28.5 19.88 27.38 21 26 21H18.5Z" fill="#ECB22E"/>
    </svg>
  );
}

// Notion Logo
export function NotionLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.5C6.16 5.03 6.42 5 7.5 4.91L23.5 3.82C23.76 3.82 23.56 3.56 23.47 3.53L20.97 1.72C20.53 1.4 19.94 1.03 18.81 1.12L3.44 2.36C2.88 2.39 2.75 2.72 2.97 2.91L5.5 4.5ZM6.22 8.06V27.06C6.22 28.03 6.69 28.36 7.78 28.3L25.03 27.28C26.12 27.22 26.25 26.56 26.25 25.78V6.88C26.25 6.1 25.94 5.68 25.28 5.75L7.31 6.81C6.59 6.88 6.22 7.28 6.22 8.06ZM23.19 9.03C23.31 9.56 23.19 10.09 22.66 10.15L21.91 10.28V24.34C21.25 24.72 20.62 24.94 20.09 24.94C19.25 24.94 19.03 24.69 18.41 23.91L12.81 15.25V23.62L14.38 23.97C14.38 23.97 14.38 24.94 13.03 24.94L9.5 25.16C9.38 24.94 9.5 24.41 9.88 24.31L10.81 24.06V12.56L9.5 12.44C9.38 11.91 9.66 11.15 10.47 11.09L14.25 10.84L20.06 19.66V11.91L18.75 11.75C18.63 11.09 19.12 10.62 19.72 10.56L23.19 9.03Z"
        fill="#000000"
      />
    </svg>
  );
}

// Stripe Logo
export function StripeLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#635BFF"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8 11.2C14.8 10.24 15.6 9.84 16.88 9.84C18.72 9.84 21.04 10.4 22.88 11.36V6.56C20.88 5.76 18.88 5.44 16.88 5.44C12.56 5.44 9.6 7.76 9.6 11.44C9.6 17.12 17.44 16.16 17.44 18.64C17.44 19.76 16.48 20.16 15.12 20.16C13.12 20.16 10.56 19.36 8.48 18.24V23.12C10.8 24.16 13.12 24.56 15.12 24.56C19.52 24.56 22.72 22.32 22.72 18.56C22.64 12.4 14.8 13.52 14.8 11.2Z"
        fill="white"
      />
    </svg>
  );
}

// Microsoft Logo
export function MicrosoftLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="11" height="11" fill="#F25022"/>
      <rect x="17" y="4" width="11" height="11" fill="#7FBA00"/>
      <rect x="4" y="17" width="11" height="11" fill="#00A4EF"/>
      <rect x="17" y="17" width="11" height="11" fill="#FFB900"/>
    </svg>
  );
}

// Google Logo
export function GoogleLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.8 16.36c0-.96-.08-1.88-.24-2.76H16v5.22h7.18c-.31 1.66-1.24 3.06-2.64 4v3.34h4.28c2.5-2.3 3.98-5.7 3.98-9.8z" fill="#4285F4"/>
      <path d="M16 29c3.58 0 6.58-1.18 8.78-3.22l-4.28-3.34c-1.18.8-2.7 1.26-4.5 1.26-3.46 0-6.38-2.34-7.42-5.48H4.16v3.44C6.34 26.14 10.84 29 16 29z" fill="#34A853"/>
      <path d="M8.58 18.22c-.26-.8-.42-1.64-.42-2.52s.16-1.72.42-2.52V9.74H4.16A12.96 12.96 0 003 15.7c0 2.1.5 4.08 1.38 5.84l4.2-3.32z" fill="#FBBC05"/>
      <path d="M16 8.18c1.96 0 3.7.68 5.08 2l3.8-3.8C22.56 4.32 19.56 3 16 3 10.84 3 6.34 5.86 4.16 10.34l4.42 3.44c1.04-3.14 3.96-5.6 7.42-5.6z" fill="#EA4335"/>
    </svg>
  );
}

// Figma Logo
export function FigmaLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 28C12.98 28 15 25.98 15 23.5V19H10.5C8.02 19 6 21.02 6 23.5S8.02 28 10.5 28Z" fill="#0ACF83"/>
      <path d="M6 13.5C6 11.02 8.02 9 10.5 9H15V18H10.5C8.02 18 6 15.98 6 13.5Z" fill="#A259FF"/>
      <path d="M6 4.5C6 2.02 8.02 0 10.5 0H15V9H10.5C8.02 9 6 6.98 6 4.5Z" fill="#F24E1E"/>
      <path d="M15 0H19.5C21.98 0 24 2.02 24 4.5S21.98 9 19.5 9H15V0Z" fill="#FF7262"/>
      <path d="M24 13.5C24 15.98 21.98 18 19.5 18C17.02 18 15 15.98 15 13.5C15 11.02 17.02 9 19.5 9C21.98 9 24 11.02 24 13.5Z" fill="#1ABCFE"/>
    </svg>
  );
}

// Spotify Logo
export function SpotifyLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#1DB954"/>
      <path
        d="M22.5 21.5c-.25 0-.5-.1-.7-.25-3-2-6.75-2.5-11.05-1.5-.4.1-.8-.15-.9-.55-.1-.4.15-.8.55-.9 4.7-1.1 8.85-.6 12.2 1.6.35.25.45.75.2 1.1-.15.25-.4.35-.65.35h.35zm1.5-3.5c-.3 0-.6-.15-.8-.35-3.45-2.15-8.7-2.75-12.75-1.5-.5.15-1-.1-1.15-.6-.15-.5.1-1 .6-1.15 4.6-1.4 10.35-.7 14.3 1.75.45.25.6.85.35 1.3-.2.35-.55.55-.9.55h.35zm.15-4c-.35 0-.65-.15-.9-.4-4-2.45-10.55-2.65-14.35-1.45-.55.15-1.1-.15-1.25-.7-.15-.55.15-1.1.7-1.25 4.35-1.35 11.55-1.1 16.1 1.7.5.3.65.95.35 1.45-.2.4-.6.65-1 .65h.35z"
        fill="white"
      />
    </svg>
  );
}

// Adobe Logo
export function AdobeLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2H12.5L2 28V2Z" fill="#FF0000"/>
      <path d="M30 2H19.5L30 28V2Z" fill="#FF0000"/>
      <path d="M16 10L22.5 28H18.5L16.5 22H11L16 10Z" fill="#FF0000"/>
    </svg>
  );
}

// GitHub Logo
export function GitHubLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C8.265 2 2 8.265 2 16c0 6.195 4.008 11.427 9.572 13.282.7.123.963-.297.963-.665 0-.332-.018-1.434-.018-2.607-3.517.647-4.427-.86-4.707-1.65-.157-.402-.84-1.65-1.435-1.983-.49-.263-1.19-.912-.018-.93 1.102-.017 1.888 1.015 2.152 1.435 1.26 2.117 3.273 1.523 4.078 1.155.122-.91.49-1.523.892-1.873-3.115-.35-6.37-1.557-6.37-6.912 0-1.523.543-2.783 1.435-3.763-.14-.35-.63-1.785.14-3.71 0 0 1.173-.368 3.85 1.435a12.99 12.99 0 013.5-.472c1.19 0 2.38.157 3.5.472 2.677-1.82 3.85-1.435 3.85-1.435.77 1.925.28 3.36.14 3.71.892.98 1.435 2.222 1.435 3.763 0 5.372-3.273 6.562-6.387 6.912.507.438.944 1.278.944 2.59 0 1.873-.018 3.378-.018 3.85 0 .368.263.805.963.665A14.022 14.022 0 0030 16c0-7.735-6.265-14-14-14z"
        fill="#171717"
      />
    </svg>
  );
}

// Twitch Logo
export function TwitchLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2L3 8V27H9V30H12L15 27H20L28 19V2H6ZM25 18L21 22H15L12 25V22H7V5H25V18Z"
        fill="#9146FF"
      />
      <path d="M21 9H18V16H21V9Z" fill="#9146FF"/>
      <path d="M15 9H12V16H15V9Z" fill="#9146FF"/>
    </svg>
  );
}

// Netflix Logo
export function NetflixLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 3H12L16 18.5L20 3H25V29H20V13L16.5 26H15.5L12 13V29H7V3Z" fill="#E50914"/>
    </svg>
  );
}

// LinkedIn Logo
export function LinkedInLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#0A66C2"/>
      <path d="M10.5 13H7V25H10.5V13Z" fill="white"/>
      <path d="M8.75 11.5C9.99264 11.5 11 10.4926 11 9.25C11 8.00736 9.99264 7 8.75 7C7.50736 7 6.5 8.00736 6.5 9.25C6.5 10.4926 7.50736 11.5 8.75 11.5Z" fill="white"/>
      <path d="M17 13H13.5V25H17V18.5C17 16.5 17.5 15 19.5 15C21.5 15 21.5 17 21.5 18.5V25H25V17.5C25 14 24 13 20.5 13C18.5 13 17.5 14 17 15V13Z" fill="white"/>
    </svg>
  );
}

// PayPal Logo
export function PayPalLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.5 8.5C24 5 21 3 17 3H8.5C7.5 3 7 3.5 6.5 4.5L3 25.5C3 26 3 26.5 3.5 26.5H8L9 20L9.5 19.5H12C17.5 19.5 21 17 22 12C22.5 10 22.5 8.5 24.5 8.5Z" fill="#003087"/>
      <path d="M26 11C25.5 15.5 22.5 19 17 19.5H13.5L12 28.5H8C7.5 28.5 7 28 7 27.5L7.5 24.5L9 16H13C18.5 16 22 13.5 23 9C24.5 9 25.5 9.5 26 11Z" fill="#009CDE"/>
    </svg>
  );
}

// Amazon Logo
export function AmazonLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.5 20c-4.5 3.5-11 5-16.5 3.5-.5 0-.5.5 0 .5 5.5 3.5 14.5 4 20 0 .5-.5 0-1-.5-.5l-3-3.5z" fill="#FF9900"/>
      <path d="M20 18c-.5-.5-3 .5-4 .5s-6.5-4-6.5-8c0-2 1-4 3-5 .5 0 0-.5-.5-.5-3 1-5 4-5 7 0 5 4.5 9 9 9 2.5 0 4.5-1.5 4.5-2.5s-.5-1-.5-.5z" fill="#FF9900"/>
      <path d="M20.5 11c0-3-2.5-5-6-5s-6.5 2-7.5 5c0 .5.5.5.5 0 1-2 3-3.5 6-3.5s4.5 1.5 4.5 4c0 1.5-1 3-2 4-.5.5 0 .5.5.5 2.5-1.5 4-3 4-5z" fill="#232F3E"/>
    </svg>
  );
}

// Wise Logo
export function WiseLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8L10 24L16 12L22 24L29 8H25L22 16L16 4L10 16L7 8H3Z" fill="#9FE870"/>
    </svg>
  );
}

// Webflow Logo
export function WebflowLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 8C24 8 21.5 16 21 17.5C21 17 21 8 21 8H16C16 8 18.5 16 19 17.5L14 8H9C9 8 14 20 14.5 21.5C14.5 21.5 11.5 24 8 24V24C8 24 16.5 28 21 21.5L24 14V24H29V8H24Z" fill="#4353FF"/>
    </svg>
  );
}

// Framer Logo
export function FramerLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 4H24V12H16L8 4Z" fill="#0055FF"/>
      <path d="M8 12H16L24 20H16V28L8 20V12Z" fill="#0055FF"/>
    </svg>
  );
}

// HubSpot Logo - Official sprocket icon
export function HubSpotLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.027 6.222a3.33 3.33 0 0 0-1.209-1.201c-.382-.222-.777-.363-1.223-.424V3a1.17 1.17 0 0 0 .722-1.097 1.2 1.2 0 0 0-1.2-1.206 1.21 1.21 0 0 0-1.21 1.206c0 .49.26.908.707 1.097v1.588a3.49 3.49 0 0 0-1.064.334L3.275 1.685c.03-.113.056-.23.056-.353 0-.738-.598-1.336-1.336-1.336S.66.594.66 1.332s.598 1.336 1.336 1.336c.252 0 .485-.074.686-.195l.28.212L6.797 5.45c-.203.186-.392.398-.543.636-.306.485-.493 1.018-.493 1.6v.12a3.35 3.35 0 0 0 .21 1.156c.116.316.286.604.497.864l-1.274 1.277c-.377-.14-.8-.047-1.085.238-.194.193-.303.456-.302.73s.108.535.303.73.456.303.73.303.537-.108.73-.303.303-.456.302-.73a1.03 1.03 0 0 0-.048-.31l1.316-1.316c.18.125.375.23.585.32a3.42 3.42 0 0 0 1.369.288h.09c.552 0 1.073-.13 1.562-.395a3.23 3.23 0 0 0 1.224-1.153c.307-.49.475-1.033.475-1.63v-.03c0-.587-.136-1.128-.42-1.624zM10.42 8.984c-.357.397-.768.642-1.232.642H9.1c-.265 0-.525-.073-.778-.207a1.8 1.8 0 0 1-.682-.621c-.184-.26-.284-.544-.284-.845v-.09c0-.296.057-.577.2-.842.153-.3.36-.515.635-.694s.558-.265.88-.265h.03c.29 0 .567.057.827.19a1.75 1.75 0 0 1 .65.591 1.88 1.88 0 0 1 .291.83l.007.187c0 .407-.156.784-.467 1.126z"
        fill="#FF7A59"
      />
    </svg>
  );
}

// Zendesk Logo - Simplified icon
export function ZendeskLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#03363D"/>
      <path d="M8 12H20L12 20H24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="12" r="2" fill="white"/>
      <circle cx="10" cy="20" r="2" fill="white"/>
    </svg>
  );
}

// Fathom Analytics Logo - Purple stylized icon
export function FathomLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#836BFF"/>
      <path
        d="M8 10h12M8 16h10M8 22h6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Map of brand names to logo components
export const BrandLogos: Record<string, React.FC<BrandLogoProps>> = {
  dropbox: DropboxLogo,
  slack: SlackLogo,
  notion: NotionLogo,
  stripe: StripeLogo,
  microsoft: MicrosoftLogo,
  google: GoogleLogo,
  figma: FigmaLogo,
  spotify: SpotifyLogo,
  adobe: AdobeLogo,
  github: GitHubLogo,
  twitch: TwitchLogo,
  netflix: NetflixLogo,
  linkedin: LinkedInLogo,
  paypal: PayPalLogo,
  amazon: AmazonLogo,
  wise: WiseLogo,
  webflow: WebflowLogo,
  framer: FramerLogo,
  hubspot: HubSpotLogo,
  zendesk: ZendeskLogo,
  fathom: FathomLogo,
};

// Get a brand logo component by name
export function getBrandLogo(brand: string): React.FC<BrandLogoProps> | null {
  const normalizedBrand = brand.toLowerCase().replace(/[^a-z]/g, '');
  return BrandLogos[normalizedBrand] || null;
}

// Brand Logo component that renders the appropriate logo
interface BrandLogoComponentProps extends BrandLogoProps {
  brand: string;
  fallback?: string;
}

export function BrandLogo({ brand, fallback, className, size = 32 }: BrandLogoComponentProps) {
  const LogoComponent = getBrandLogo(brand);

  if (LogoComponent) {
    return <LogoComponent className={className} size={size} />;
  }

  // Fallback to initials with a colored background
  const initials = (fallback || brand).slice(0, 2).toUpperCase();
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500',
    'bg-pink-500', 'bg-teal-500', 'bg-indigo-500', 'bg-red-500'
  ];
  const colorIndex = brand.charCodeAt(0) % colors.length;

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg text-white font-medium text-sm",
        colors[colorIndex],
        className
      )}
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
}
