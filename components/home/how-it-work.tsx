import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF doument or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and anlysis your document instantly",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Recieve a clear , concise summary of your document",
  },
];

export default function HowItWorksSetion() {
  return (
    <section className="relative overflow-hidden bg-gray-50 ">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        {/**Add the Background Gradient */}
        <div className="text-center mb-16 ">
          <h2 className="text-rose-500 font-bold text-xl uppercase mb-4 ">
            How it works
          </h2>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto ">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <div className="relative flex items-stretch" key={idx}>
              <StepItem {...step} />
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <MoveRight
                    className="text-rose-500"
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-ful ">
      <div className="flex flex-col h-full gap-4">
        <div
          className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-r 
            from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors 
            "
        >
          <div className="text-rose-500">{icon}</div>
        </div>
        <div className="flex flex-col gap-1 flex-1 justify-between">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
