import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex rounded-b-3xl w-10/12 lg:w-9/12 flex-col items-center justify-start gap-y-4 p-6 lg:p-24 bg-gray-200 bg-opacity-30 mx-auto mb-12	">
      <p>Aradığınız sayfaya ulaşılamamıştır.</p>
      <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-100 hover:scale-105 transition-all">

      <Link href="/">Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
}
