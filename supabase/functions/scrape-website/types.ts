// Request type for the scrape-website function
export interface ScrapeWebsiteRequest {
  url: string;
}

// Response types for the Firecrawl API
export interface ScrapeWebsiteResponse {
  success: boolean;
  data?: ScrapeWebsiteData;
  error?: string;
}

export interface ScrapeWebsiteData {
  markdown: string;
  html: string | null;
  rawHtml: string | null;
  screenshot: string | null;
  links: string[];
  actions: {
    screenshots: string[];
  };
  metadata: {
    title: string;
    description: string;
    language: string | null;
    sourceURL: string;
    statusCode: number;
    error: string | null;
    [key: string]: any;
  };
  llm_extraction: Record<string, any>;
  warning: string | null;
}
