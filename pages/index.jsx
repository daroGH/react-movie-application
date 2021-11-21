import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/movie-list");
  }, [router]);
  return <div></div>;
}
