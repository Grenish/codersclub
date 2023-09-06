import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://iyicdecacsjmxiuqcmsa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5aWNkZWNhY3NqbXhpdXFjbXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjQ5MDksImV4cCI6MjAwOTUwMDkwOX0.QTUg94fKnF_mkQhGpSAihwjPSUymvZ4Arx4jvl2UZ1o"
);
