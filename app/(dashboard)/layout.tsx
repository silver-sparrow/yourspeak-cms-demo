"use client";
import Header from "@/components/shared/common/Header";
import Loader from "@/components/shared/common/Loader";
import { AppSidebar } from "@/components/shared/common/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //EXTRACT
  const router = useRouter();

  //REDUX
  const { access_token, isGlobalLoading } = useSelector(
    (state: RootState) => state.auth
  );

  //STATES
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  //USE EFFECT
  useEffect(() => {
    if (!access_token) {
      router.push("/auth");
    }
    setIsCheckingAuth(false);
  }, [access_token, router]);

  if (isCheckingAuth || !access_token) {
    return null;
  }

  return (
    <>
      {isGlobalLoading && <Loader />}
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1 flex-col gap-4 px-2 sm:px-6 py-4 bg-page rounded-xl">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
