import React from "react";
import { useTranslation } from "react-i18next";
import { Search, Plus, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionContainer from "~/components/shared/SectionContainer";
import { recentItems } from "./constants/recentItems";
import type { TItem } from "./types/types";
import { NavLink } from "react-router";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <SectionContainer>
      <div className="w-full mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
          <h2 className="text-heading2 mb-4">{t("quickActions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NavLink to={"/create-new-project"} className={"w-full"}>
              <Button
                variant="default"
                className="justify-start w-full h-14 px-6"
              >
                <div className="h-6 w-6 rounded-full flex justify-center items-center bg-white">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                {t("createNewProject")}
              </Button>
            </NavLink>
            <NavLink to={"/create-interview-sheet"}>
              <Button
                variant="success"
                className="justify-start w-full h-14 px-6"
              >
                <div>
                  <FileText size={28} />
                </div>
                {t("interviewSheetCreation")}
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Recent Access History Section */}
        <div>
          <h2 className="text-heading2 mb-6">{t("recentAccessHistory")}</h2>
          <div className="border border-border overflow-hidden rounded-md">
            {recentItems.map((item: TItem, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-card border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="basis-[60%]">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-heading3 text-card-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <span className="text-muted-foreground text-body3">
                    {item.team}
                  </span>
                </div>
                <div className="text-caption1 lg:text-end basis-[40%] text-muted-foreground">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;
