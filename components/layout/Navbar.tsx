import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
}

interface SimpleNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const SimpleNavbar = ({
  logo = {
    url: "",
    src: "/images/logo-lp.png",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "HOME", url: "#" },
    { title: "PROPERTIES", url: "#" },
    { title: "AGENT", url: "#" },
    { title: "BLOG", url: "#" },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}: SimpleNavbarProps) => {
  return (
    <section className="py-4">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 lg:max-h-16"
                alt={logo.alt}
              />
            </a>
          </div>

          {/* Menu Item */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-[16px] font-semibold">
              {menu.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
                >
                  {item.title}
                </a>
              ))}
              <Button
                variant="outline"
                className="text-[16px] px-6 border-[#1DAEFF] text-[#1DAEFF]"
              >
                LOG IN
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-16" alt={logo.alt} />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#1DAEFF] text-[#1DAEFF]"
                >
                  <Menu color="#1DAEFF" className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">
                  {/* Mobile Menu Items */}
                  <div className="flex flex-col gap-4">
                    {menu.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        className="text-md font-semibold py-2 hover:text-accent-foreground"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#1DAEFF] text-[#1DAEFF]"
                    >
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SimpleNavbar };
