import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-black text-gray-200">
      {/* Make navbar absolute like homepage */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Content stays below */}
      <div className="relative z-10">{children}</div>

      <Footer />
    </main>
  );
}
