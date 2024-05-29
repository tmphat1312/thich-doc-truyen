import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Section from "@/ui/common/section";
import SearchKeyword from "@/ui/tim-kiem/search-keyword";
import SearchResultList from "@/ui/tim-kiem/search-result-list";
import SearchResultListSkeleton from "@/ui/tim-kiem/search-result-list-skeleton";
import { Suspense } from "react";

export type PageProps = Readonly<{
  searchParams: SearchParams;
}>;

export async function generateMetadata({ searchParams }: PageProps) {
  const keyword = getSearchParam({ searchParams, key: "q" });

  return {
    title: "Kết quả tìm kiếm: " + keyword,
  };
}

export default function Page({ searchParams }: PageProps) {
  const keyword = getSearchParam({ searchParams, key: "q" });
  const page = Number(getSearchParam({ searchParams, key: "page" }) || "1");

  return (
    <div>
      <SearchKeyword keyword={keyword} />
      <main className="container py-4">
        <Section title={`Kết quả tìm kiếm - Trang ${page}`} className="my-2">
          <Suspense fallback={<SearchResultListSkeleton />}>
            <SearchResultList keyword={keyword} page={page} />
          </Suspense>
        </Section>
      </main>
    </div>
  );
}
