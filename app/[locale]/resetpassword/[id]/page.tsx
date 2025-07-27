"use client";

import { FormEventHandler, useState } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
    const t = useTranslations("ResetPasswordPage");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");

    async function handleOnSubmit(e: any) {
        e.preventDefault();
        try {
            const res = await axios.post("/api/changepw", { password });
            toast.success(res.data.message.message);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <section className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Toaster/>
      <div className="w-full max-w-sm">
            <div className={"flex flex-col gap-6"}>
                <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <a href="#" className="flex flex-col items-center gap-2 font-medium" >
                        <div className="flex size-8 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-6" />
                        </div>
                        </a>
                        <h1 className="text-xl font-bold">{t("title")}</h1>
                        <h2 className="text-md font-normal text-zinc-700">{t("subtitle")}</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="password">{t("label")}</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="******"
                                className="focus-visible:ring-0"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="password">{t("label2")}</Label>
                            <Input
                                id="confirmpassword"
                                type="password"
                                placeholder="******"
                                className="focus-visible:ring-0"
                                onChange={(e) => setConfirmedPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full cursor-pointer">{t("button")}</Button>
                    </div>
                    </div>
                </form>
            </div>
      </div>
    </section>
  )
}

export default page