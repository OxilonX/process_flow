"use client";
//shadcn comps imports
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//nextjs Imports
import Image from "next/image";
//lucid reacts icon
import { Play, User } from "lucide-react";
interface videoCardDataType {
  id: number;
  channel: string;
  title: string;
  url: string;
}
export default function RessourcesTuto() {
  const data: videoCardDataType[] = [
    {
      id: 1,
      channel: "Learn with Meet",
      title: "Shortest Remaining Time First (SRTF)",
      url: "https://youtu.be/WQEzlKTrDIM",
    },
    {
      id: 2,
      channel: "Simple Snippets",
      title:
        "Shortest Remaining Time (SRT) CPU Scheduling Algorithm - Operating Systems",
      url: "https://youtu.be/Nr4nANJjddg",
    },
    {
      id: 3,
      channel: "Graphic Design",
      title: "SRTF - Shortest-remaining-time-first",
      url: "https://youtu.be/CXwXnVbmX6c",
    },
    {
      id: 4,
      channel: "Neso Academy",
      title: "Scheduling Algorithms - Shortest Job First (SJF)",
      url: "https://youtu.be/t0g9b3SJECg",
    },
    {
      id: 5,
      channel: "المقررات المفتوحة - Open Courses",
      title: "Operating Systems | C4-L8 | Preemptive SJF scheduling",
      url: "https://youtu.be/4EDUz-T1H00",
    },
    {
      id: 6,
      channel: "Gate Smashers",
      title:
        "L-2.4: Shortest Job First(SJF) Scheduling Algorithm with Example | Operating System",
      url: "https://youtu.be/VCIVXPoiLpU",
    },
  ];
  function getYouTubeThumbnail(url: string): string | null {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length == 11 ? match[2] : false;
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    return null;
  }

  return (
    <section
      id="ressources-tuto-section"
      className="container px-6 min-h-screen"
    >
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Resources
          </p>
          <h1 className="text-4xl font-light tracking-tight">
            SJF & SRT Tutorials
          </h1>
        </div>

        <p className="text-center self-center text-sm text-muted-foreground max-w-xl">
          Deep dive into Shortest Job First and Shortest Remaining Time
          algorithms with these curated technical walkthroughs.
        </p>
      </div>
      <Carousel className="w-[1100px] mx-auto">
        <CarouselContent className="-ml-1">
          {data.map((video, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="flex items-start  p-2">
                <Card className="relative mx-auto w-full max-w-sm pt-0 h-80">
                  <Image
                    onClick={() => window.open(video.url, "_blank")}
                    src={
                      getYouTubeThumbnail(video.url) ||
                      "/processflow_black_logo_no_bg.svg"
                    }
                    width={200}
                    height={200}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-70 hover:brightness-90 transition-all duration-300 cursor-pointer"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Play
                        size={15}
                        className="shrink-0 text-[var(--color-foreground)]"
                      />
                      <CardTitle className="leading-6 line-clamp-2">
                        {video.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-4">
                      <User size={15} color="gray" className="shrink-0" />
                      <CardDescription>{video.channel}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
