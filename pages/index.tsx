import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Htag } from "../components/Htag";

const Home: NextPage = () => {
    return (
        <div>
            <Htag tag="h1">Текст</Htag>
            <Button color="primary">Узнать подрпобнее</Button>
            <Button color="ghost">Читатиь отзывы</Button>
        </div>
    );
};

export default Home;
