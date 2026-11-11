// Dipakai di server saat build: membaca spesifikasi file Lottie di /public secara otomatis,
// jadi angka durasi/fps/ukuran tidak perlu ditulis manual dan tidak bisa salah ketik.
import fs from "node:fs";
import path from "node:path";

export interface LottieSpec {
  fps: number;
  frames: number;
  durationSec: number;
  width: number;
  height: number;
  layers: number;
  sizeKB: number;
}

export function readLottieSpec(publicSrc: string): LottieSpec | null {
  try {
    const file = path.join(process.cwd(), "public", publicSrc.replace(/^\//, ""));
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const frames = data.op - data.ip;
    return {
      fps: data.fr,
      frames,
      durationSec: frames / data.fr,
      width: data.w,
      height: data.h,
      layers: Array.isArray(data.layers) ? data.layers.length : 0,
      sizeKB: fs.statSync(file).size / 1024,
    };
  } catch {
    return null; // file tidak ditemukan atau bukan Lottie: halaman tetap tampil tanpa angka
  }
}
