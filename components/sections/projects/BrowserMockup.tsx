import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft, Maximize2, Globe } from "lucide-react";
interface BrowserMockupProps {
  projectId: string;
  src: string | string[];
  alt: string;
  url: string;
}
const BrowserMockup = ({ projectId, src, alt, url }: BrowserMockupProps) => {
  const images = Array.isArray(src) ? src : [src];
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="w-full h-full overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-2 md:gap-3 border-b border-white/5 bg-zinc-950/50 px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>

        <div onClick={(e) => e.stopPropagation()} className=" w-full min-w-50">
          <div className="flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono text-zinc-400 shadow-inner shadow-black/20 select-all">
            <Globe className="h-2.5 w-2.5 shrink-0 text-zinc-500" />
            <span className="truncate">{url}</span>
          </div>
        </div>

        <div
          className="shrink-0 rounded-full border border-white/10 bg-white/5 p-1.5 text-zinc-400"
          title="Preview"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="group relative h-full w-full overflow-hidden"
      >
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.prev-${projectId}`,
            nextEl: `.next-${projectId}`,
          }}
          className="h-full w-full"
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1);
          }}
          loop={images.length > 1}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={img}
                alt={`${alt} - Image ${index + 1}`}
                fill
                priority={index === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
                className="object-contain object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <>
            <button
              className={`prev-${projectId} absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-black/80 hover:text-white`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              className={`next-${projectId} absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-black/80 hover:text-white`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {currentSlide} of {images.length} slides
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default BrowserMockup;
