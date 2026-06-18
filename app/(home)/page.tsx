import Link from "next/link"
import {
  CodeIcon,
  PenLineIcon,
  SparklesIcon,
  WrenchIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { appRoutes } from "@/lib/app-routes"
import type { Category } from "@/lib/dto/category.dto"

const categoryMeta: Record<string, { icon: React.ElementType; gradient: string }> = {
  engineering: { icon: CodeIcon,     gradient: "from-blue-500 to-violet-500" },
  design:      { icon: SparklesIcon, gradient: "from-rose-400 to-orange-400" },
  life:        { icon: PenLineIcon,  gradient: "from-emerald-400 to-teal-500" },
  tools:       { icon: WrenchIcon,   gradient: "from-amber-400 to-yellow-300" },
}

const categories: Category[] = [
  {
    id: "engineering",
    label: "Engineering",
    gradient: "from-blue-500 to-violet-500",
    posts: [
      { slug: "1", title: "Building type-safe APIs with tRPC and Zod", excerpt: "How I stopped fighting TypeScript and let it do the heavy lifting across the full stack.", date: "Jun 10, 2026", readTime: "6 min" },
      { slug: "2", title: "React Server Components are not scary", excerpt: "A practical breakdown of where RSC fits and where it gets in your way.", date: "May 28, 2026", readTime: "8 min" },
      { slug: "3", title: "Postgres full-text search is good enough", excerpt: "Before reaching for Elasticsearch, try what your database already ships with.", date: "May 14, 2026", readTime: "5 min" },
      { slug: "4", title: "Rethinking error handling in TypeScript", excerpt: "Using discriminated unions instead of try/catch for predictable error paths.", date: "Apr 30, 2026", readTime: "7 min" },
      { slug: "5", title: "CSS container queries in the real world", excerpt: "Replacing media queries for component-level responsiveness that actually scales.", date: "Apr 12, 2026", readTime: "4 min" },
    ],
  },
  {
    id: "design",
    label: "Design",
    gradient: "from-rose-400 to-orange-400",
    posts: [
      { slug: "6", title: "The case for boring typography", excerpt: "Why restraint in type choices leads to more readable and trustworthy interfaces.", date: "Jun 5, 2026", readTime: "5 min" },
      { slug: "7", title: "Spacing systems that don't break down", excerpt: "How a single base unit keeps your layouts coherent across every breakpoint.", date: "May 20, 2026", readTime: "6 min" },
      { slug: "8", title: "Dark mode is not just inverted colors", excerpt: "The nuances of designing for dark mode that most tutorials skip entirely.", date: "May 3, 2026", readTime: "7 min" },
      { slug: "9", title: "Motion design for developers", excerpt: "A minimal set of animation principles that make UI feel polished without overdoing it.", date: "Apr 18, 2026", readTime: "5 min" },
      { slug: "10", title: "Designing with real content first", excerpt: "Lorem ipsum is a lie. Here's how working with real data changes every decision.", date: "Apr 1, 2026", readTime: "4 min" },
    ],
  },
  {
    id: "life",
    label: "Life & Thoughts",
    gradient: "from-emerald-400 to-teal-500",
    posts: [
      { slug: "11", title: "Two years working remotely across time zones", excerpt: "What changed, what stayed hard, and the small rituals that kept me sane.", date: "Jun 1, 2026", readTime: "9 min" },
      { slug: "12", title: "On learning in public and the fear of being wrong", excerpt: "Publishing half-formed ideas is uncomfortable. It's also the fastest way to learn.", date: "May 10, 2026", readTime: "6 min" },
      { slug: "13", title: "Reading logs: books that shifted my thinking", excerpt: "Five books from the last year and the single idea I took from each.", date: "Apr 25, 2026", readTime: "5 min" },
      { slug: "14", title: "The trap of optimizing your tools forever", excerpt: "When configuring your environment becomes the work instead of a means to it.", date: "Apr 8, 2026", readTime: "4 min" },
      { slug: "15", title: "Slow mornings as a productivity strategy", excerpt: "Why the first hour without a screen changed the rest of my workday completely.", date: "Mar 22, 2026", readTime: "5 min" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Resources",
    gradient: "from-amber-400 to-yellow-300",
    posts: [
      { slug: "16", title: "My terminal setup in 2026", excerpt: "Zsh, Starship, tmux, and a handful of aliases that save me keystrokes every day.", date: "May 30, 2026", readTime: "5 min" },
      { slug: "17", title: "Git aliases I can't live without", excerpt: "Ten commands shortened to two letters each. Your muscle memory will thank you.", date: "May 16, 2026", readTime: "3 min" },
      { slug: "18", title: "Browser devtools tricks most people skip", excerpt: "Features hiding in plain sight that make debugging layout and network issues faster.", date: "May 2, 2026", readTime: "6 min" },
      { slug: "19", title: "Obsidian as a second brain for engineers", excerpt: "How I structure notes so they're actually useful when I come back to them later.", date: "Apr 14, 2026", readTime: "7 min" },
      { slug: "20", title: "Free tools I use every single week", excerpt: "A short, opinionated list with no affiliate links. Just things that genuinely work.", date: "Mar 30, 2026", readTime: "4 min" },
    ],
  },
]

const IndexPage = () => {
  return (
    <div className="flex flex-col gap-20 py-16">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">Personal Blog</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Writing about things<br />I actually care about.
          </h1>
          <p className="max-w-lg text-base text-muted-foreground">
            I&apos;m Arash — a software engineer with a taste for design. Here I write about
            building products, thinking through ideas, and the tools that make work better.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href={appRoutes.blogs}>Read the blog</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={appRoutes.me}>About me</Link>
          </Button>
        </div>
      </section>

      {/* Category carousels */}
      {categories.map(({ id, label, gradient, posts }) => {
        const { icon: Icon } = categoryMeta[id]
        return (
          <section key={id} className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-muted-foreground" />
                <h2 className="text-lg font-medium">{label}</h2>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={appRoutes.blogs} className="flex items-center gap-1 text-sm text-muted-foreground">
                  See all <ArrowRightIcon className="size-3.5" />
                </Link>
              </Button>
            </div>

            <div className="relative px-10">
              <Carousel opts={{ align: "start", dragFree: true }}>
                <CarouselContent>
                  {posts.map((post) => (
                    <CarouselItem key={post.slug} className="basis-72 sm:basis-80">
                      <Link href={`${appRoutes.post}/${post.slug}`} className="block h-full">
                        <Card className="h-full transition-shadow hover:shadow-md">
                          <div className={`h-36 w-full bg-gradient-to-br ${gradient} opacity-80`} />
                          <CardHeader>
                            <CardTitle className="line-clamp-2 text-sm">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="line-clamp-2 text-xs text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="size-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <ClockIcon className="size-3" />
                              {post.readTime}
                            </span>
                          </CardFooter>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default IndexPage
