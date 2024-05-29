import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

// type RootLayoutProps = {
//   children: ReactNode;
// };
export const metadata: Metadata = {
  title: "Loom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo/svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
