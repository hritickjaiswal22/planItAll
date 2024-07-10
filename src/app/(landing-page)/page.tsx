import Title from "./components/title";
import { Button } from "@/components/ui/button";
import AppBanner from "../../../public/appBanner.png";

import React from "react";
import Image from "next/image";

function LandingPage() {
  return (
    <React.Fragment>
      <section className="px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <Title
          pill="Organise your workspace"
          title="All-In-One Collaboration and Productivity Tool"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
          <Button
            variant="secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            PlanItAll Free
          </Button>
        </div>
        <div className="relative my-8">
          <Image src={AppBanner} alt="Application Banner" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingPage;
