"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
  {
    src: "/projects/bonniecraft.png",
    alt: "Bonniecraft Minecraft Store",
  },
  {
    src: "/projects/zpleumverify.png",
    alt: "zPleumVerify",
  },
  {
    src: "/projects/zpleumcore.png",
    alt: "zPleumCORE",
  },
];

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-transparent">
        <main className="flex-1 flex flex-col items-center px-4 sm:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl"
          >
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <motion.div 
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.4 + (index * 0.1) // เพิ่ม delay ตามลำดับรูป
                  }}
                  className="relative aspect-video rounded-xl overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
}