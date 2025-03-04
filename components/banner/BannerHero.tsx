import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BannerHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900">
      <Image
        src="/assets/banner-hero.jpg"
        alt="Modern tech devices showcase"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-900/40">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-heading1-bold text-white sm:text-[56px] md:text-[64px] lg:text-[72px]">
              Next-Gen
              <br />
              <span className="text-blue-400">Tech & Innovation</span>
            </h1>
            <p className="text-body-medium text-zinc-300 max-w-xl">
              Discover cutting-edge devices designed for those who demand performance, innovation, and seamless
              integration.
            </p>
            <div className="flex gap-4 max-[465px]:flex-col">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 px-8 py-6 text-base-semibold text-white">
                Shop Devices
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-400 hover:bg-sky-500/10 px-8 py-6 text-base-semibold text-white"
              >
                Explore Tech
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

