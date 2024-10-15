import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Enhance Your Learnings with Us! On EdiFi <br /> No kidding.
          </span>
        }
        // badge={
        //   <Link href="https://peerlist.io/manuarora">
        //     <Badge className="h-10 w-10 transform -rotate-12" />
        //   </Link>
        // }
        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Logo_of_the_University_of_Wisconsin-Madison.svg" // Replace with your actual image URL
        showGradient={false}
      />
    </div>
  );
}

// Uncomment and modify the Badge component if you need it
// const Badge = ({ className }: { className?: string }) => {
//   return (
//     <img
//       src="https://example.com/your-badge-image-url.jpg" // Replace with your actual badge image URL
//       alt="Badge"
//       className={`h-10 w-10 transform -rotate-12 ${className}`}
//     />
//   );
// };
