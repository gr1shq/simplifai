import Image from "next/image";
import Link from "next/link";

interface BlogMetaProps {
  title: string;
  date: string;
  image?: string;
  summary?: string;
  toolLogos?: string[]; // Optional tool logos from blog.json
}

export default function BlogMeta({ title, date, image, summary, toolLogos }: BlogMetaProps) {
  return (
    <div className="pt-4 mb-12">
      {image ? (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">No image available</span>
        </div>
      )}
      <div className="space-y-4">
        <p className="text-base text-gray-500">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {summary && (
          <p className="text-xl text-gray-600">
            {summary}
          </p>
        )}
        {toolLogos && toolLogos.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {toolLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Tool logo ${index + 1}`}
                width={32}
                height={32}
                className="rounded-full"
              />
            ))}
          </div>
        )}
        <div className="mt-6">
          <Link href="/quiz">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
              Take the Quiz to Find Your AI Tool →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}