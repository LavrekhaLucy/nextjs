import {Metadata} from "next";
import React from "react";

export const metadata: Metadata={
    title: "Cars Metadata",

}
type Props = {children: React.ReactNode};

const CarsLayout = ({children}:Props) => {
    return (
        <div>
            <h4>Cars layout</h4>

            {children}
            <hr/>
        </div>
    );
};

export default CarsLayout;
