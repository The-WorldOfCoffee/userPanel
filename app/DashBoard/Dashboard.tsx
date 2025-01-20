"use client";

import { useState } from "react";
import Image from "next/image";

const DashBoard = () => {
  const [activePanel, setActivePanel] = useState("profile");

  const navigation = (panelName:any) => {
    setActivePanel(panelName);
  };

  return (
    <div style={{ background: "#A79277" }} className="text-black w-screen h-screen flex justify-center items-center">
      <div style={{ background: "#D1BB9E" }} className="w-11/12 h-5/6 flex flex-col rounded-xl">
        <header
          style={{ background: "#EAD8C0" }}
          className="h-20 flex rounded-tl-lg rounded-tr-lg justify-between px-5 py-7"
        >
          <div className="flex gap-2">
            <Image src="/header/icon.png" alt="Icon" width={24} height={24} />
            <Image src="/logo/logo.svg" alt="Logo" width={100} height={24} />
          </div>
          <div className="flex gap-3">
            <button
              style={{ background: "#FFF2E1" }}
              className="w-7 rounded-full flex items-center justify-center p-2 h-7"
            >
              <Image src="/icon/vector.png" alt="Vector Icon" width={24} height={24} />
            </button>
            <button
              style={{ background: "#FFF2E1" }}
              className="w-7 rounded-full flex items-center justify-center h-7"
            >
              <Image src="/icon/notif.png" alt="Notification Icon" width={24} height={24} />
            </button>
            <button
              style={{ background: "#FFF2E1" }}
              className="w-7 rounded-full flex items-center justify-center h-7"
            >
              <Image src="/icon/notif.png" alt="Notification Icon" width={24} height={24} />
            </button>
          </div>
        </header>
        <div className="flex flex-1">
          <aside
            style={{ background: "#FFF2E1" }}
            className="lg:w-1/4 w-1/6 rounded-bl-lg h-full"
          >
            <div className="w-full h-full">
              <button
                onClick={() => navigation("profile")}
                className={`bg-inherit h-12 sidebar_button w-full ${
                  activePanel === "profile" ? "font-bold" : ""
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => navigation("order")}
                className={`bg-inherit h-12 sidebar_button w-full ${
                  activePanel === "order" ? "font-bold" : ""
                }`}
              >
                Order
              </button>
              <button
                onClick={() => navigation("settings")}
                className={`bg-inherit h-12 sidebar_button w-full ${
                  activePanel === "settings" ? "font-bold" : ""
                }`}
              >
                Settings
              </button>
              <button
                onClick={() => navigation("signout")}
                className={`bg-inherit h-12 sidebar_button w-full ${
                  activePanel === "signout" ? "font-bold" : ""
                }`}
              >
                Signout
              </button>
            </div>
          </aside>
          <div
            style={{ background: "#FDFDFD" }}
            className="w-full h-full panel flex items-center justify-center"
          >
            {/* Dynamic panel rendering */}
            {activePanel === "profile" && <div>Profile Panel</div>}
            {activePanel === "order" && <div>Order Panel</div>}
            {activePanel === "settings" && <div>Settings Panel</div>}
            {activePanel === "signout" && <div>Signout Panel</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
