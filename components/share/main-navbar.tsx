import Link from "next/link"
import { HomeIcon, BookOpenIcon, WrenchIcon, UserIcon, FeatherIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { appRoutes } from "@/lib/app-routes"

const navLinks = [
  { label: "Home", href: appRoutes.home, icon: HomeIcon },
  { label: "Blogs", href: appRoutes.blogs, icon: BookOpenIcon },
  { label: "Tools", href: appRoutes.tools, icon: WrenchIcon },
  { label: "Me", href: appRoutes.me, icon: UserIcon },
]

const MainNavbar = () => {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-14 max-w-300 items-center justify-between px-4">
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <Button key={href} variant="ghost" asChild>
              <Link href={href} className="flex items-center gap-2">
                <Icon className="size-4" />
                {label}
              </Link>
            </Button>
          ))}
        </nav>
        <FeatherIcon className="size-5" />
      </div>
    </header>
  )
}

export default MainNavbar
