"use client";
import "@/styles/globals.css";
import SideBar from "@/components/profile/sidebar/sidebar";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ProfileLi } from "@/components/profile/sidebar/profile-li";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <SideBar>
        <section className="">
          <ProfileLi
            to="/profile"
            name="Profile"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"profile"}
          />
          <ProfileLi
            to="/profile/1/edit-profile"
            name="Edit-Profile"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"editprofile"}
          />
          <ProfileLi
            to="/profile/1/chat"
            name="Chat"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"chat"}
          />
          <ProfileLi
            to="/profile/1/historic"
            name="Historic Reports"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"userhistoric"}
          />
          {/* {isSpecialist && (
                            <ProfileLi to="/profile/all-reports" name="All Reports" activeTo={pathname} activeLocal={pathname} svg={'chat'} />
                            )}
                            {isAdmin && (
                                <ProfileLi to="/profile/admin" name="Admin Control" activeTo={pathname} activeLocal={pathname} svg={'admin'} />
                            )} */}
          <ProfileLi
            to="/profile/1/settings"
            name="Settings"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"settings"}
          />
        </section>
        <section className="w-full">
          <ProfileLi
            to="#"
            name="logout"
            activeTo={pathname}
            activeLocal={pathname}
            svg={"logout"}
          />
        </section>
      </SideBar>
      <section className="flex-1">
        <section className="p-4 sm:ml-64 w-[calc(100%-16rem)]">
          {children}
        </section>
        <section className=" bottom-0 p-0 sm:ml-64 w-[calc(100%-16rem)]">
          <Footer />
        </section>
      </section>
    </>
  );
}
