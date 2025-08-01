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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }
  return (
    <>
        <aside className='h-screen w-auto max-w-[300px] bg-white rounded-xl shadow-xl hidden lg:block'>
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
        <nav className="block lg:hidden w-screen h-auto">
            <button onClick={() => toggleMenu()} className="md:hidden absolute z-20 top-5 right-5 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-zinc-700 group" aria-label="Toggle menu">
                <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
                    <span className={`absolute w-5 h-[2px] bg-black rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45 bg-white" : "-translate-y-1.5"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-black rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-black rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45 bg-white" : "translate-y-1.5"}`}></span>
                </div>
            </button>
            <div className={isSidebarOpen ? "w-full h-screen flex items-center justify-center flex-col bg-black text-white translate-y-0 z-1 transition ease-in-out duration-300" : "hidden -translate-y-100 transition ease-in-out duration-300"}>
                <ul className='mt-20 w-full h-full flex flex-col gap-y-2'>
                    <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
                        <h1 className='text-[13px] text-gray-500/70'>{t("firstTitle")}</h1>
                        <ul className="flex flex-col w-full h-auto">
                            <li><Link href={"/myaccount"} className={pathname === `/${locale}/myaccount` ? "items-center flex gap-x-3 text-[16px] text-white bg-white/10 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-white"}><House className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("firstLabel")}</span></Link></li>
                        </ul>
                    </div>
                    <Separator className="w-[80%] mx-auto"/>
                    <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
                        <h1 className='text-[13px] text-gray-500/70'>{t("secondTitle")}</h1>
                        <ul className="flex flex-col w-full h-auto gap-y-3">
                            <li><Link href={"/myaccount/profile"} className={pathname === `/${locale}/myaccount/profile` ? "items-center flex gap-x-3 text-[16px] text-white bg-white/10 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-white"}><User className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("secondLabel")}</span></Link></li>
                            <li><Link href={"/myaccount/billing"} className={pathname === `/${locale}/myaccount/billing` ? "items-center flex gap-x-3 text-[16px] text-white bg-white/10 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-white"}><CircleDollarSign className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("thirdLabel")}</span></Link></li>
                            <li><Link href={"/myaccount/general"} className={pathname === `/${locale}/myaccount/general` ? "items-center flex gap-x-3 text-[16px] text-white bg-white/10 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-white"}><Settings className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("fourthLabel")}</span></Link></li>
                        </ul>
                    </div>
                    <Separator className="w-[80%] mx-auto"/>
                    <div className='w-full h-auto pt-3 pb-3 pl-5 pr-5 gap-y-4 flex flex-col'>
                        <h1 className='text-[13px] text-gray-500/70'>{t("thirdTitle")}</h1>
                        <ul className="flex flex-col w-full h-auto gap-y-3">
                            <li><Link href={"/myaccount"} className={pathname === `/${locale}/profile` ? "items-center flex gap-x-3 text-[16px] text-white bg-white/10 p-2 rounded-md" : "items-center flex gap-x-3 text-[16px] text-white"}><User className="w-[21px] h-[21px] hover:text-black/70"/><span className="hover:text-black transition-all duration-150">{t("fifthLabel")}</span></Link></li>
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
        </nav>
    </>
  );
};

export default Sidebar;