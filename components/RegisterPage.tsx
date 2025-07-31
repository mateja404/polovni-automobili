"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { AuthForm } from "@/components/Auth-Form";
import loginbg from "@/public/polovni.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import router from "next/router";
import { useEffect, useState } from "react";

export default function RegisterPage({ locale }: any) {
  const t = useTranslations("RegisterPage");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, [router]);
  
      if (isLoading) {
        return (
          <div className='loader'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        )
      }
  return (
    <div className={isLoading ? "hidden" : "grid min-h-svh lg:grid-cols-2"}>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {t('title')}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AuthForm type={"register"} locale={locale}/>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={loginbg}
          alt="Image"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}