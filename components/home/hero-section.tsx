import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { link } from "fs";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative mx-auto flex flex-col z-0 items-center justify-center
     py-16 sm:py-20 lg:pb-28 transition-all  animate-in lg:px-12 max-w-7xl
    
    
    "
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center mb-8">
          <div className="relative text-white p-[2px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="relative px-6 py-2 text-base 
              font-medium bg-white group-hover:bg-rose-200 rounded-full transition-colors [&>svg]:!size-6 duration-200"
            >
              <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered by AI</p>
            </Badge>
          </div>
        </div>
        <h1 className="font-bold py-6 text-center">
        Transform PDFs into{' '}
          <span className="relative inline-block ">
             <span className="relative z-10 px-2">concise</span>
             <span className="absolute inset-0 bg-rose-300/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span> 
          </span>
          {' '}summaries
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600 mb-8">
          Get a beautiful summary reel of the document in seconds
        </h2>
        <Button
          variant={"rose"}
          className="mt-6 sm:text-lg lg:text-xl rounded-full px-8 
                sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 bg-linear-to-r from-slate-900 to-rose-500 
                hover:from-rose-500 hover:to-slate-900 transition-all duration-300 font-bold shadow-lg
        "
        >
          <Link href="/#pricing" className="flex gap-2 items-center ">
            <span className="">Try Sommaire</span>
            <ArrowRight className="animate-pulse " />
          </Link>
        </Button>
      </div>
    </section>
  );
}
