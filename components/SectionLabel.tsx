import { Sparkle } from "lucide-react";

type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <Sparkle aria-hidden="true" size={28} strokeWidth={2.6} />
      <span>{children}</span>
    </div>
  );
}
