export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 relative bg-background">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Dharshika S. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-muted hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="text-muted hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
