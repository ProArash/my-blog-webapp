import { ReactNode } from "react"
import MainNavbar from "@/components/share/main-navbar"
import MainFooter from "@/components/share/main-footer"

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavbar />
      <main className="mx-auto w-full max-w-300 flex-1 px-4">
        {children}
      </main>
      <MainFooter />
    </div>
  )
}

export default HomeLayout
