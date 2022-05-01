import type { NextPage } from "next";
import React from "react";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log(counter);
        return () => {
            console.log("unmount");
        };
    }, [counter]);

    return <div></div>;
};
