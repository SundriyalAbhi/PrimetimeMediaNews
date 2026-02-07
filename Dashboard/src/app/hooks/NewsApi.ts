import { baseURL } from "@/Utils/Utils";
import { useCallback, useEffect, useState } from "react";



export interface NewsItem {
  title: string;
  slug: string;
  category: string;
  subCategory?: string;
  summary?: string;
  content: string;
  image?: string;
  tags: string[];
  business?: any; 
}

export interface ApiResponse<T = any> {
  success: boolean;
  news?: T;
  data?: T;
  msg: string;
  total?: number;
}

class NewsService {
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${baseURL}/news${endpoint}`;
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
  }

  addNews = (news: Omit<NewsItem, "id"> & { section: string }): Promise<ApiResponse<NewsItem>> =>
    this.request("/addnews", { method: "POST", body: JSON.stringify(news) });

  getAllNews = (): Promise<ApiResponse<NewsItem[]>> => this.request("/getallnews");

  getNewsBySection = (section: string): Promise<ApiResponse<NewsItem[]>> =>
    this.request(`/getnewsbysection/${section}`);

  getNewsBySlug = (section: string, slug: string): Promise<ApiResponse<NewsItem>> =>
    this.request(`/getnewsbyslug/${section}/${slug}`);

  updateNews = (params: { section: string; slug: string; data: Partial<NewsItem> }): Promise<ApiResponse<NewsItem>> =>
    this.request(`/updatenews/${params.section}/${params.slug}`, { 
      method: "PUT", 
      body: JSON.stringify(params.data) 
    });

  deleteNews = (params: { section: string; slug: string }): Promise<ApiResponse<{ deleted: boolean }>> =>
    this.request(`/deletenews/${params.section}/${params.slug}`, { method: "DELETE" });
}

export const newsService = new NewsService();

export const useNewsBySection = (section: string) => {
  return useApi(() => newsService.getNewsBySection(section));
};

export const useNewsBySlug = (section: string, slug: string) => {
  return useApi(() => newsService.getNewsBySlug(section, slug));
};

export const useAllNews = () => {
  return useApi(() => newsService.getAllNews());
};

export const useAddNews = () => {
  return useApiMutation(newsService.addNews);
};

export const useUpdateNews = (section: string) => {
  return useApiMutation((data: { slug: string; news: Partial<NewsItem> }) => 
    newsService.updateNews({ section, slug: data.slug, data: data.news })
  );
};

export const useDeleteNews = (section: string) => {
  return useApiMutation((data: { slug: string }) => 
    newsService.deleteNews({ section, slug: data.slug })
  );
};

export const useApi = <T>(fetchFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchFn()
      .then((res) => {
        if (mounted) {
          if (!res.success) throw new Error(res.msg || "API Error");
          setData(res.news || res.data);
          setError(null);
        }
      })
      .catch((err) => mounted && setError(err.message))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [fetchFn]);

  return { data, loading, error, refetch: () => fetchFn() };
};

export const useApiMutation = <T>(mutateFn: (data?: any) => Promise<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (data?: any) => {
    setLoading(true);
    setError(null);
    try {
      const res = await mutateFn(data);
      if (!res.success) throw new Error(res.msg || "Mutation failed");
      return res;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [mutateFn]);

  return { mutate, loading, error };
};
