import Image from "next/image";

interface BlogMetaProps {
  title: string;
  date: string;
  image?: string;
  summary?: string;
}

export default function BlogMeta({ title, date, image, summary }: BlogMetaProps) {
  return (
    <div className="mb-12">
      {image && (
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {summary && (
          <p className="text-lg text-gray-600">
            {summary}
          </p>
        )}
      </div>
    </div>
  );
}