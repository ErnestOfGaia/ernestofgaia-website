// Workaround: lucide-react v0.577.0 ships without bundled .d.ts files.
// Catch-all declaration — allows any named icon import from lucide-react.
declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = React.FC<LucideProps>;

  // Explicit exports for icons used in this project
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Bot: LucideIcon;
  export const Brain: LucideIcon;
  export const Target: LucideIcon;
  export const Zap: LucideIcon;
  export const Star: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Check: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Instagram: LucideIcon;
  export const Twitter: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Youtube: LucideIcon;
  export const Facebook: LucideIcon;
  export const PenTool: LucideIcon;
  export const Compass: LucideIcon;
  export const Sparkles: LucideIcon;
}
