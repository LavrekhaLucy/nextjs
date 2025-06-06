import type {Metadata} from "next";
import Menu from "@/components/Menu";
import React from "react";

export const metadata: Metadata = {
    title: "Cars Metadata",

};

export default function CarsLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>

        <Menu/>
        <hr/>
        {children}

        </div>
    );
}
