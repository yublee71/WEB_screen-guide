import { Metadata } from "next";
import { Navigation } from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Screen Guide",
    default: "Screen Guide",
  },
  description: "Latest movie recommendation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
