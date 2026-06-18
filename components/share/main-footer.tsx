import Link from "next/link"
import { FeatherIcon, GithubIcon, TwitterIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { appRoutes } from "@/lib/app-routes"

const navLinks = [
  { label: "Home", href: appRoutes.home },
  { label: "Blogs", href: appRoutes.blogs },
  { label: "Tools", href: appRoutes.tools },
  { label: "Me", href: appRoutes.me },
]

const socials = [
  { label: "GitHub", href: "https://github.com", icon: GithubIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
]

const MainFooter = () => {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-300 px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FeatherIcon className="size-4" />
              <span className="font-medium">Arash</span>
            </div>
            <p className="max-w-56 text-sm text-muted-foreground">
              Writing about engineering, design, and the things in between.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Pages
              </span>
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Social
              </span>
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-3.5" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arash. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default MainFooter
