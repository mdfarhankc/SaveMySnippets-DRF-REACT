import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <main className="flex-1">
      <section className="container max-w-7xl mx-auto py-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your code snippets</p>
          </div>
          <Button>New Snippet</Button>
        </div>
      </section>
      <Separator />
      <section className="container max-w-7xl mx-auto py-5">
        <div className="grid grid-cols-1 gap-6">
          
        </div>
      </section>
    </main>
  );
}
