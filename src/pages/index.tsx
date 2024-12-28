// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import ResponsiveAppBar from "@/components/appbar";
// import HomePage from "@/pages/HomePage";


import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ResponsiveAppBar from "@/components/appbar";
import HomePage from "@/pages/HomePage"; // Import HomePage component
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <ResponsiveAppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }} />
      <HomePage /> {/* Render HomePage content here */}
      <Footer />
    </>
  );
}






// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <>
//       <ResponsiveAppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}></ResponsiveAppBar>
//     </>
//     );
// }







// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-radial from-blue-900 via-black to-blue-700 text-white">
//       <Navbar />
//       <main className="max-w-7xl mx-auto px-6 py-16">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
//           Welcome to MyApp
//         </h1>
//         <p className="text-lg text-center mb-12">
//           Dive into a world of modern design with gradients and vibrant colors.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-black p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <h2 className="text-2xl font-semibold mb-2">Feature 1</h2>
//             <p>
//               Learn how to create stunning UI designs with gradient backgrounds.
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-black via-blue-600 to-blue-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <h2 className="text-2xl font-semibold mb-2">Feature 2</h2>
//             <p>
//               Explore our wide range of tools and frameworks for development.
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-black p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <h2 className="text-2xl font-semibold mb-2">Feature 3</h2>
//             <p>
//               Join our community and build exciting projects together.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
