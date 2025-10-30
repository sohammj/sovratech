export default function Footer() {
  return (
    <footer className="bg-black text-center py-8 border-t border-neutral-800 text-gray-500 text-sm">
      © {new Date().getFullYear()} SovraTech. All rights reserved.
    </footer>
  );
}
