import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Hero />

        <Header />
      </div>
      <div className="border-t-2 pt-8">
        <Featured />
      </div>
    </div>
  );
}
