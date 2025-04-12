import { notFound } from 'next/navigation';
import ToolCard from '@/app/(components)/ToolCard';
import type { Tool } from '@/app/types';
import Header from '@/app/(components)/Header';



async function getToolsByCategory(category: string): Promise<Tool[]> {
  const res = await import('../../../data/tools.json');
  return res.default.map((tool: any) => ({
    ...tool,
    howToUse: tool.howToUse || tool.how_to_use || '' // Provide default value
  })).filter((tool: Tool) => 
    tool.category.toLowerCase() === category.toLowerCase()
  );
}

export default async function CategoryPage({
  params
}: {
  params: { category: string };
}) {
  const tools = await getToolsByCategory(params.category);
  if (tools.length === 0) notFound();

  const formattedCategory = params.category
    .replace('-', ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="">
        <div>
            <Header />
        </div>
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mt-20">{formattedCategory} Tools</h1>
          <p className="text-gray-600 mt-2">
            {tools.length} carefully curated AI tools for {formattedCategory.toLowerCase()}
          </p>
        </div>
        <div className="flex gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {tools.length}+ Tools
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            {tools.filter(t => t.pros.includes('Free plan available')).length} Free Options
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
    </div>
  );
}