import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Link as LinkIcon, Code, FileText } from "lucide-react";

interface ScrapedData {
  markdown?: string;
  html?: string | null;
  rawHtml?: string | null;
  screenshot?: string | null;
  links?: string[];
  actions?: {
    screenshots?: string[];
  };
  metadata?: {
    title?: string;
    description?: string;
    language?: string | null;
    sourceURL?: string;
    statusCode?: number;
    error?: string | null;
    [key: string]: any;
  };
  llm_extraction?: any;
  warning?: string | null;
}

interface WebScraperProps {
  initialUrl?: string;
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  if (!markdown) return "";

  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    // Links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    )
    // Lists
    .replace(/^\s*\d+\.\s+(.*$)/gim, "<li>$1</li>")
    .replace(/^\s*\*\s+(.*$)/gim, "<li>$1</li>")
    // Paragraphs
    .replace(/^(?!<[hl]|<li|<p|<\/|\s*$)(.*$)/gim, "<p>$1</p>");

  // Wrap lists
  let inOrderedList = false;
  let inUnorderedList = false;

  const lines = html.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.match(/<li>/) && !inOrderedList && !inUnorderedList) {
      if (line.match(/^<li>\d+\./)) {
        lines[i] = "<ol>" + line;
        inOrderedList = true;
      } else {
        lines[i] = "<ul>" + line;
        inUnorderedList = true;
      }
    } else if (!line.match(/<li>/) && (inOrderedList || inUnorderedList)) {
      if (inOrderedList) {
        lines[i - 1] += "</ol>";
        inOrderedList = false;
      } else {
        lines[i - 1] += "</ul>";
        inUnorderedList = false;
      }
    }
  }

  // Close any open lists at the end
  if (inOrderedList) {
    lines.push("</ol>");
  } else if (inUnorderedList) {
    lines.push("</ul>");
  }

  return lines.join("\n");
}

export default function WebScraper({ initialUrl = "" }: WebScraperProps) {
  const [url, setUrl] = useState<string>(initialUrl);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [scrapedData, setScrapedData] = useState<ScrapedData | null>(null);

  const handleScrape = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setScrapedData(null);

      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-scrape-website",
        {
          body: { url },
        },
      );

      console.log("Response from edge function:", data, error);

      if (error) {
        throw new Error(error.message);
      }

      // The edge function returns data wrapped in a data property
      setScrapedData(data?.data || data);
    } catch (err: any) {
      setError(err.message || "Failed to scrape website");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white">
      <CardHeader>
        <CardTitle>Web Scraper</CardTitle>
        <CardDescription>
          Enter a URL to scrape website content using Firecrawl
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex space-x-2">
          <Input
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleScrape}
            disabled={isLoading}
            className="bg-[#808000] hover:bg-[#5a5a00]"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scraping...
              </>
            ) : (
              "Scrape"
            )}
          </Button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}

        {scrapedData && (
          <div className="mt-6 space-y-4">
            {/* Content Preview Section - Prioritized with Tabs */}
            {(scrapedData.html || scrapedData.markdown) && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2">Content</h3>
                <Tabs defaultValue="formatted" className="w-full">
                  <TabsList className="mb-2">
                    <TabsTrigger
                      value="formatted"
                      className="flex items-center gap-1"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Formatted</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="raw"
                      className="flex items-center gap-1"
                    >
                      <Code className="h-4 w-4" />
                      <span>Raw Data</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="formatted" className="mt-0">
                    <div className="bg-white p-4 rounded shadow-sm overflow-y-auto max-h-[500px]">
                      <div className="prose prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-strong:font-semibold prose-strong:text-gray-900 prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5 max-w-none">
                        {scrapedData.html ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: scrapedData.html,
                            }}
                          />
                        ) : scrapedData.markdown ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: markdownToHtml(scrapedData.markdown),
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="raw" className="mt-0">
                    <div className="bg-white p-4 rounded shadow-sm overflow-y-auto max-h-[500px]">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-gray-50 p-3 rounded">
                        {JSON.stringify(scrapedData, null, 2)}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {/* Screenshot Section */}
            {scrapedData.screenshot && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2">Screenshot</h3>
                <div className="bg-white p-2 rounded shadow-sm">
                  <img
                    src={scrapedData.screenshot}
                    alt="Website screenshot"
                    className="rounded-md border border-gray-200 max-w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Links Section */}
            {scrapedData.links && scrapedData.links.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2">
                  Links ({scrapedData.links.length})
                </h3>
                <div className="bg-white p-3 rounded shadow-sm">
                  <ul className="divide-y divide-gray-100">
                    {scrapedData.links.slice(0, 10).map((link, index) => (
                      <li
                        key={index}
                        className="py-2 flex items-center gap-2 overflow-hidden"
                      >
                        <LinkIcon className="h-4 w-4 flex-shrink-0 text-blue-500" />
                        <span className="text-blue-600 truncate text-sm">
                          {link}
                        </span>
                      </li>
                    ))}
                    {scrapedData.links.length > 10 && (
                      <li className="py-2 text-sm text-gray-500 italic">
                        ...and {scrapedData.links.length - 10} more links
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}

            {/* Metadata Section - Collapsed */}
            <div className="bg-gray-50 p-4 rounded-md">
              <details className="group">
                <summary className="text-lg font-medium mb-2 cursor-pointer list-none flex items-center">
                  <span>Metadata</span>
                  <svg
                    className="ml-2 h-5 w-5 group-open:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {scrapedData.metadata?.title && (
                    <div className="bg-white p-3 rounded shadow-sm">
                      <h4 className="text-sm font-medium text-gray-500">
                        Title
                      </h4>
                      <p className="text-base">{scrapedData.metadata.title}</p>
                    </div>
                  )}

                  {scrapedData.metadata?.description && (
                    <div className="bg-white p-3 rounded shadow-sm md:col-span-2">
                      <h4 className="text-sm font-medium text-gray-500">
                        Description
                      </h4>
                      <p className="text-base">
                        {scrapedData.metadata.description}
                      </p>
                    </div>
                  )}

                  {scrapedData.metadata?.language && (
                    <div className="bg-white p-3 rounded shadow-sm">
                      <h4 className="text-sm font-medium text-gray-500">
                        Language
                      </h4>
                      <p className="text-base">
                        {scrapedData.metadata.language}
                      </p>
                    </div>
                  )}

                  {scrapedData.metadata?.statusCode && (
                    <div className="bg-white p-3 rounded shadow-sm">
                      <h4 className="text-sm font-medium text-gray-500">
                        Status Code
                      </h4>
                      <p className="text-base">
                        {scrapedData.metadata.statusCode}
                      </p>
                    </div>
                  )}

                  {scrapedData.metadata?.sourceURL && (
                    <div className="bg-white p-3 rounded shadow-sm md:col-span-2">
                      <h4 className="text-sm font-medium text-gray-500">
                        Source URL
                      </h4>
                      <p className="text-base break-all">
                        {scrapedData.metadata.sourceURL}
                      </p>
                    </div>
                  )}
                </div>
              </details>
            </div>

            {/* Raw HTML Section - Collapsed */}
            {scrapedData.rawHtml && (
              <div className="bg-gray-50 p-4 rounded-md">
                <details className="group">
                  <summary className="text-lg font-medium mb-2 cursor-pointer list-none flex items-center">
                    <span>Raw HTML</span>
                    <svg
                      className="ml-2 h-5 w-5 group-open:rotate-180 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="bg-white p-3 rounded shadow-sm max-h-60 overflow-y-auto mt-2">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 overflow-x-auto">
                      {scrapedData.rawHtml || scrapedData.html}
                    </pre>
                  </div>
                </details>
              </div>
            )}

            {/* Warning Section */}
            {scrapedData.warning && (
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <h3 className="text-lg font-medium mb-2 text-yellow-700">
                  Warning
                </h3>
                <p className="text-yellow-600">{scrapedData.warning}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500 pt-4">
        Powered by Firecrawl
      </CardFooter>
    </Card>
  );
}
