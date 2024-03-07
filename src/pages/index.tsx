import type {GetStaticProps, NextPage} from 'next'
import Presentation from "@patials/index/_presentation";
import Advantages from "@patials/index/_advantages";
import FrequentQuestions from "@patials/index/_frequent_questions";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: ''
        }
    }
}

const Index: NextPage<{ title: string }> = (props) => {
    const title = `Titulo: ${props.title}`;
    return (
        <div>
            <Presentation />
            <Advantages />
            <FrequentQuestions />
        </div>
    );
};

export default Index
