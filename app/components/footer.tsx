export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-[#159C47] mt-16">
      <div className="max-w-6xl mx-auto py-8 px-6 flex flex-col items-center text-center gap-2">
        {/* Brand logo */}
        <img src="/padisquare.svg" alt="" />
        <p className="text-sm text-gray-600">Your trusted multi-vendor marketplace.</p>
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Padisquare. All rights reserved.</p>
      </div>
    </footer>
  );
}
