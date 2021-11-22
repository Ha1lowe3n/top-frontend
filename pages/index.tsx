import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Htag } from "../components/Htag";
import { Paragraph } from "../components/Paragraph";
import { Tag } from "../components/Tag";

const Home: NextPage = () => {
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
        </div>
    );
};

export default Home;
