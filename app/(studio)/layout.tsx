// app/(studio)/layout.tsx
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Just return children — root layout already provides <html><body>
  return <>{children}</>;
}