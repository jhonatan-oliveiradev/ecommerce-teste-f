"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Search from "./search";

const HeroBanner = () => {
  return (
    <section className="w-full">
      <Search onSearch={() => {}} />
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/banner-home-01.png"
              alt="banner home 01"
              height={0}
              width={0}
              className="h-auto w-full object-contain"
              sizes="100vw"
              quality={100}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/banner-home-02.png"
              alt="banner home 02"
              height={0}
              width={0}
              className="h-auto w-full object-contain"
              sizes="100vw"
              quality={100}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/banner-home-03.png"
              alt="banner home 03"
              height={0}
              width={0}
              className="h-auto w-full object-contain"
              sizes="100vw"
              quality={100}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden opacity-50 md:left-4 md:flex" />
        <CarouselNext className="hidden opacity-50 md:right-4 md:flex" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;
