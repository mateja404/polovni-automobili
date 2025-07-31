"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pfp from "@/public/polovni.png";
import { CircleDollarSign, House, User, LogOut, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Sidebar = ({ locale }: { locale: any }) => {
    const pathname = usePathname();
    const t = useTranslations("Sidebar");
  return (
    <aside className='h-screen w-auto max-w-[300px] bg-white rounded-xl shadow-xl'>
        <div className='w-full h-auto p-4 flex flex-row gap-x-4'>
          <div className='w-auto'>
            <Image src={pfp} alt='pfp' className='w-[50px] h-[50px] rounded-full'/>
          </div>
          <div className='w-3/5 h-auto flex flex-col'>
            <h1 className="text-black">jocopanter@gmail.com</h1>
            <h1 className="text-black/50 text-[15px]">{t("userRole")}</h1>
          </div>
        </div>
        <div className='w-full h-auto max-h-1/3'>
          <ul className='w-full h-full flex flex-col gap-y-2'>
            <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
              <h1 className='text-[13px] text-gray-500/70'>{t("firstTitle")}</h1>
              <ul className="flex flex-col w-full h-auto">
                  <li><Link href={"/myaccount"} className={pathname === `/${locale}/myaccount` ? "items-center flex gap-x-3 text-[16px] text-black/70 bg-gray-200/30 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-black/70"}><House className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("firstLabel")}</span></Link></li>
              </ul>
            </div>
            <Separator className="w-[80%] mx-auto"/>
            <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
              <h1 className='text-[13px] text-gray-500/70'>{t("secondTitle")}</h1>
              <ul className="flex flex-col w-full h-auto gap-y-3">
                  <li><Link href={"/myaccount/profile"} className={pathname === `/${locale}/myaccount/profile` ? "items-center flex gap-x-3 text-[16px] text-black/70 bg-gray-200/30 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-black/70"}><User className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("secondLabel")}</span></Link></li>
                  <li><Link href={"/myaccount/billing"} className={pathname === `/${locale}/myaccount/billing` ? "items-center flex gap-x-3 text-[16px] text-black/70 bg-gray-200/30 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-black/70"}><CircleDollarSign className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("thirdLabel")}</span></Link></li>
                  <li><Link href={"/myaccount/general"} className={pathname === `/${locale}/myaccount/general` ? "items-center flex gap-x-3 text-[16px] text-black/70 bg-gray-200/30 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-black/70"}><Settings className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("fourthLabel")}</span></Link></li>
              </ul>
            </div>
            <Separator className="w-[80%] mx-auto"/>
            <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
              <h1 className='text-[13px] text-gray-500/70'>{t("thirdTitle")}</h1>
              <ul className="flex flex-col w-full h-auto gap-y-3">
                  <li><Link href={"/myaccount"} className={pathname === `/${locale}/profile` ? "items-center flex gap-x-3 text-[16px] text-black/70 bg-gray-200/30 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-black/70"}><User className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("fifthLabel")}</span></Link></li>
              </ul>
            </div>
            <Separator className="w-[80%] mx-auto"/>
            <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
              <ul className="flex flex-col w-full h-auto gap-y-3">
                  <li><Link href={"/myaccount"} className="items-center flex gap-x-3 text-[16px] text-white bg-red-500 p-2 rounded-md"><LogOut className="w-[21px] h-[21px]"/><span className="transition-all duration-150 hover:text-white">{t("logOutButton")}</span></Link></li>
              </ul>
            </div>
          </ul>
        </div>
    </aside>
  )
}

export default Sidebar;