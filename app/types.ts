export interface Tool {
    name: string;
    description: string;
    url: string;
    logo: string;
    category: string;
    howToUse: string;
    pros: string[];
    cons: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    image?: string;
    summary: string;
    content: ContentBlock[];
  }
  
  export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'link' | 'divider';
    text?: string;
    href?: string;
  }