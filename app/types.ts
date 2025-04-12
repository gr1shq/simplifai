export interface Tool {
    name: string;
    description: string;
    url: string;
    logo: string;
    category: string;
    howToUse: string;
    how_to_use?: string;
    pros: string[];
    cons: string[];
}

export type ContentType = 'paragraph' | 'heading' | 'link' | 'divider';

export interface ContentBlock {
  type: ContentType;
  text?: string;
  href?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  summary: string;
  content: ContentBlock[];
}