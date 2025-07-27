"use client";

import { FormEventHandler, useState } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import axios from "axios";

function ForgotPasswordPage({className, ...props }: React.ComponentProps<"div">) {
    const t = useTranslations("ForgotPasswordPage");
    const [email, setEmail] = useState<string>("");

    async function handleOnSubmit(e: any) {
        e.preventDefault();
        try {
            const res = await axios.post("/api/submitemail", { email });
        } catch (error) {}
    };
  return (
    <section className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
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
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={t("placeholder")}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <Button type="submit" className="w-full cursor-pointer">{t("button")}</Button>
                        <div className="text-center text-sm">
                            {t("donthaveacc")}{" "}
                            <a href="#" className="underline underline-offset-4">
                                {t("anchor")}
                            </a>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
      </div>
    </section>
  )
}

export default ForgotPasswordPage;