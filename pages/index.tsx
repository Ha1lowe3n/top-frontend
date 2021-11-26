import type { NextPage } from "next";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Htag } from "../components/Htag";
import { Paragraph } from "../components/Paragraph";
import { Rating } from "../components/Rating";
import { Tag } from "../components/Tag";
import { withLayout } from "../layouts/Layout";

const Home: NextPage = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log(counter);
        return () => {
            console.log("unmount");
        };
    }, [counter]);

    return (
        <div>
            <Htag tag="h1">Текст</Htag>
            <Button color="primary">Узнать подрпобнее</Button>
            <Button color="ghost" arrow="right">
                Читатиь отзывы
            </Button>
            <Paragraph size={"big"}>Hello</Paragraph>
            <Paragraph size={"medium"}>Hello</Paragraph>
            <Paragraph size={"low"}>Hello</Paragraph>
            <Tag color="primary" href="#" size="small">
                привет
            </Tag>
            <Tag color="primary" href="#" size="big">
                привет
            </Tag>
            <Tag color="red" href="#" size="big">
                привет
            </Tag>
            <Rating isEditable />
        </div>
    );
};

export default withLayout(Home);
