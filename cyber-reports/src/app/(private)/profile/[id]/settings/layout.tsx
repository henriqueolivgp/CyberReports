"use client";
import { ProfileLi } from "@/components/profile/sidebar/profile-li";
import SideBar from "@/components/profile/sidebar/sidebar";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <section className="flex min-h-screenw-full min-h-32 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg">
        <SideBar className="relative " sectionUlStyle="relative px-0">
          <ProfileLi
            to="/profile/1/settings/general"
            name="General"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"profile"}
            LinkStyle="rounded-none text-sm"
          />
          <ProfileLi
            to="/profile/1/settings/account"
            name="Account"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"editprofile"}
            LinkStyle="rounded-none text-sm"
          />
          <ProfileLi
            to="/profile/1/settings/security-and-privacity"
            name="Security & Privacity"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"reports"}
            LinkStyle="rounded-none text-sm"
          />
          <ProfileLi
            to="/profile/1/settings/report-problem"
            name="Report Problem"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"chat"}
            LinkStyle="rounded-none text-sm"
          />
          <ProfileLi
            to="/profile/1/settings/notifications"
            name="Notifications"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"userhistoric"}
            LinkStyle="rounded-none text-sm"
          />
          <ProfileLi
            to="/profile/1/settings/billing"
            name="Billing"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"userhistoric"}
            LinkStyle="rounded-none text-sm"
          />
        </SideBar>
        {children}
      </section>
    </>
  );
}
