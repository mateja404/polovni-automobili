"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff, Eye } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

interface AuthFormProps {
  type: "login" | "register"
  className?: React.ComponentProps<"form">
}

export function AuthForm({ type, className, ...props }: AuthFormProps) {
    const t = useTranslations("LoginPage");
    const registerT = useTranslations("RegisterPage");
    const router = useRouter();
    const [showPass, setShowPass] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function loginUser(e: any) {
      e.preventDefault();
      try {
          const res = await axios.post(`/api/login`, { email: email, password: password });
          toast.success(res.data.message);
          router.push("/");
      } catch (error: any) {
          console.log(error);
          toast.error(error);
      }
    }

    async function registerUser(e: any) {
      e.preventDefault();
      try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, { email: email, password: password });
          toast.success(res.data.message);
      } catch (error: any) {
          console.log(error);
          toast.error(error);
      }
    }
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <Toaster/>
      <div className="flex flex-col items-center gap-2 text-center">
        {type === "login" ? <h1 className="text-2xl font-bold">{t("secondtitle")}</h1> : <h1 className="text-2xl font-bold">{registerT("secondtitle")}</h1>}
        {type === "login" ? <p className="text-muted-foreground text-sm text-balance">{t("paragraph")}</p> : <p className="text-muted-foreground text-sm text-balance">{registerT("paragraph")}</p>}
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">{t("emailLabel")}</Label>
          <Input id="email" type="email" placeholder="polovniautomobili@gmail.com" className="focus-visible:ring-0" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="grid gap-3 relative">
          <div className="flex items-center">
            <Label htmlFor="password">{t("passwordLabel")}</Label>
            {type === "login" ? <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">{t("forgotPasswordAnchor")}</a> : ""}
          </div>
          <Input id="password" type={showPass ? "text" : "password"} placeholder="******" className="focus-visible:ring-0" onChange={(e) => setPassword(e.target.value)} required />
          {!showPass ? <Eye className="absolute right-3 cursor-pointer bottom-0 w-[17px] -translate-y-1" onClick={() => setShowPass(true)}/> : <EyeOff className="absolute right-3 cursor-pointer bottom-0 w-[17px] -translate-y-1" onClick={() => setShowPass(false)}/>}
        </div>
        {type === "register" ? (
          <div className="grid gap-3">
          <div className="flex items-center gap-x-1">
            <Checkbox className="focus-visible:ring-0"/>
            <Label className="-translate-y-[2px] text-zinc-700/70">{registerT("tosCheckbox")}</Label>
          </div>
          <div className="flex gap-x-1">
            <Checkbox className="focus-visible:ring-0"/>
            <Label className="-translate-y-[2px] text-zinc-700/70">{registerT("ageConfirmCheckbox")}</Label>
          </div>
        </div>
        ) : ""}
        {type === "login" ? <Button type="submit" className="w-full cursor-pointer" onClick={(e) => loginUser(e)}>{t("loginButton")}</Button> : <Button type="submit" className="w-full cursor-pointer" onClick={(e) => registerUser(e)}>{registerT("registerButton")}</Button>}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">{t("orcontinuetext")}</span>
        </div>
        <Button variant="outline" className="w-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"/></svg>
          {t("googleauthbutton")}
        </Button>
      </div>
        {
            type === "login" ? (
            <div className="text-center text-sm">
                {t("donthaveacc")} {" "}
                <Link href="/register" className="underline underline-offset-4">{t("registeranchor")}</Link>
            </div>
            ) : (
                <div className="text-center text-sm">
                    {registerT("alreadyhaveacc")}{" "}
                    <a href="/login" className="underline underline-offset-4">{registerT("registeranchor")}</a>
                </div>
            )
        }
    </form>
  )
}
