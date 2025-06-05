import {Metadata} from "next";
import {UsersComponent} from "@/components/users/UsersComponent";
import React from "react";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Users page title",

    }
}

const UsersPage = () => {

    return (
        <div>
            <UsersComponent/>
            users page content
        </div>
    );
};

export default UsersPage;