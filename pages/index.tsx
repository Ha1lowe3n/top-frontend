import type { NextPage } from "next";
import React from "react";

import { Button, Htag } from "../components";

const Home: NextPage = () => {
    return (
        <div>
            <Htag tag="h1">Hello</Htag>
            <Button appearance="primary">ntrrcn</Button>
            <Button appearance="ghost">ntrrcn</Button>
        </div>
    );
};

export default Home;
