export const INSTRUCTOR_PORTRAIT_ALT = "Dylan Flogaus, Certified Flight Instructor";

type InstructorPortraitProps = {
  /** Matches layout width for responsive WebP selection. */
  sizes?: string;
};

export function InstructorPortrait({
  sizes = "(min-width: 900px) 320px, min(100vw - 2.5rem, 560px)",
}: InstructorPortraitProps) {
  return (
    <picture>
      <source type="image/webp" srcSet="/instructor-portrait.webp 560w" sizes={sizes} />
      <img
        src="/instructor-portrait.jpeg"
        alt={INSTRUCTOR_PORTRAIT_ALT}
        width={917}
        height={1024}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}
