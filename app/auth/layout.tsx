"use client";
import Loader from "@/components/shared/common/Loader";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //REDUX
  const { isGlobalLoading } = useSelector((state: RootState) => state.auth);

  return (
    <div className="bg-page h-screen w-full flex justify-center items-center">
      {isGlobalLoading && <Loader />}
      {children}
    </div>
  );
}
