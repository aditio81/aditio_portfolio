import type { Metadata } from "next";

// Halaman CV tidak perlu muncul di hasil pencarian (menghindari data kontak terindeks).
export const metadata: Metadata = {
  title: "CV | Aditio Dwi Novanto",
  robots: { index: false, follow: false }, // follow:false agar PDF tidak ditelusuri mesin pencari
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
