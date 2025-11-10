'use client'

import Gallery from "@/components/pages/Gallery";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KiambuYouthWeek() {
    const galleryImages = [
    "/images/KIAMBU-COUNTY-YOUTH/image-1.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-2.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-3.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-4.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-5.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-6.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-7.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-8.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-9.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-10.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-11.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-12.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-13.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-14.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-15.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-16.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-17.jpg",
    "/images/KIAMBU-COUNTY-YOUTH/image-18.jpg",
  ];

  return (
    <main className="min-h-screen bg-white px-4 lg:px-8">
      <section className="rounded-2xl mt-20 lg:mt-22 relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden">
          <Image
              src="/images/KIAMBU-COUNTY-YOUTH/image-16.jpg"
              alt="254 Youth Entrepreneurship Awards & Mentorship Program"
              fill
              priority
              className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl px-4 lg:text-4xl max-w-3xl font-bold text-white text-center"
          >
            254 Youth Entrepreneurship Awards & Mentorship Program
          </motion.h1>
          </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        {/* <div className="text-center mb-12">

          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            One of Sevenstone’s’ Signature Events Focusing on Entrepreneurship Excellence,  The 254 Youth Entrepreneurship Awards & Mentorship Program  “254Yeamp” gives young entrepreneurs an opportunity to get recognized for their entrepreneurship prowess, meet and network with Captain’s of Industries, potential investors and business partners.
          </p>
        </div> */}

        {/* Shared reusable gallery */}
        <Gallery title="Event Highlights" images={galleryImages} />
      </section>
    </main>
  );
}
// "use client";

// import Gallery from "@/components/pages/Gallery";
// import Image from "next/image";
// import { motion } from "framer-motion";


// export default function KiambuYouthWeek() {

//    const galleryImages = [
//     "/images/KIAMBU-COUNTY-YOUTH/image-1.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-2.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-3.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-4.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-5.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-6.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-7.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-8.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-9.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-10.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-11.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-12.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-13.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-14.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-15.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-16.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-17.jpg",
//     "/images/KIAMBU-COUNTY-YOUTH/image-18.jpg",
//   ];
  
//   return (
//     <main className="min-h-screen bg-white px-4 lg:px-8">
//        <section className="rounded-2xl mt-20 lg:mt-22 relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden">
//           <Image
//               src="/images/KIAMBU-COUNTY-YOUTH/image-16.jpg"
//               alt="Kiambu County Youth Innovation and Entrepreneurship Week"
//               fill
//               priority
//               className="object-cover object-top"
//           />
//           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//           <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-xl px-4 lg:text-4xl max-w-3xl font-bold text-white text-center"
//           >
//             Kiambu County Youth Innovation and Entrepreneurship Week
//           </motion.h1>
//           </div>
//       </section>

//       <section className="py-16 max-w-6xl mx-auto px-6">
//         {/* Hero Section */}
//         {/* <div className="text-center mb-12">

//           <p className="text-gray-700 max-w-3xl mx-auto text-center">
//             One of Sevenstone’s’ Signature Events Focusing on Entrepreneurship Excellence,  The 254 Youth Entrepreneurship Awards & Mentorship Program  “254Yeamp” gives young entrepreneurs an opportunity to get recognized for their entrepreneurship prowess, meet and network with Captain’s of Industries, potential investors and business partners.
//           </p>
//         </div> */}

//         {/* Shared reusable gallery */}
//         <Gallery title="Event Highlights" images={galleryImages} />
//       </section>
//     </main>
//   );
// }
