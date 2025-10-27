import "./globals.css";
export const metadata = { title: "Novion Dynamics", description: "Automotive LiDAR & Perception Systems" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>);
}
