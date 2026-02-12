import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WelcomeResponse {
  message: string;
}

export default function WelcomePage() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/bff/welcome")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: WelcomeResponse) => setMessage(data.message))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6">
      <div
        className={cn(
          "w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-sm",
          "text-card-foreground"
        )}
      >
        <h1 className="mb-4 text-2xl font-semibold tracking-tight">
          Quizmaker
        </h1>
        {loading && (
          <p className="text-muted-foreground">Loading welcome message…</p>
        )}
        {error && (
          <p className="text-destructive">
            Could not reach backend: {error}. Make sure the backend is running on port 8080.
          </p>
        )}
        {!loading && !error && message && (
          <p className="text-lg text-foreground">{message}</p>
        )}
      </div>
    </div>
  );
}
