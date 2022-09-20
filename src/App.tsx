import { Refine } from "@pankod/refine-core";
import React from "react";
import 'App.css'
import 'index.css';
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { postList } from "pages/posts";
import { categoryList } from "pages/categories";
import { userList } from "pages/users";
import { eventList } from "pages/events";
import { Layout } from "components/Layout";

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            resources={[{ name: "posts", list: postList }, { name: "categories", list: categoryList }, { name: "users", list: userList }, { name: "events", list: eventList }]}
            Layout={Layout}
        />
    );
};

export default App;
