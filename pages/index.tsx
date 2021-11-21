import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Htag } from "../components/Htag";
import { Paragraph } from "../components/Paragraph";

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
        </div>
    );
};

export default Home;
