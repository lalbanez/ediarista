import {
    AcortdionStyled,
    SectionContainer,
    SectionSubtitle,
    SectionTitle,
    Wave
} from "@patials/index/_frequent_questions.styled";
import {AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import {useState} from "react";

const FrequentQuestions = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    function isOpen(accordionIndex: number): boolean {
        return activeAccordion === accordionIndex;
    }

    function changeOpenAccordion(accordionIndex: number): void {
        if(isOpen(accordionIndex)) {
            setActiveAccordion(0);
        } else {
            setActiveAccordion(accordionIndex);
        }
    }

    function getIcon(accordionIndex: number): string {
        return isOpen(accordionIndex) ? "twf-minus" : "twf-plus";
    }

    return (
        <SectionContainer>
            <Wave src={"/img/home/waves.svg"}/>

            <Container>
                <SectionTitle> Ainda está com dúvida? </SectionTitle>
                <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>
                {questionsList.map((item, index) => (
                    <AcortdionStyled key={index}
                    expanded={isOpen(index+1)}
                    onChange={() => changeOpenAccordion(index+1)}>
                        <AccordionSummary expandIcon={<i className={getIcon(index+1)}/>}>
                            <Typography color={"primary"}>{item.question}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                    </AcortdionStyled>
                ))};

            </Container>

        </SectionContainer>
    );
};

export default FrequentQuestions;

const questionsList = [
    {
        question: "Dúvida 1",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
            "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release " +
            "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software " +
            "like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        question: "Dúvida 2",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
            "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release " +
            "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software " +
            "like Aldus PageMaker including versions of Lorem Ipsum",
    }, {
        question: "Dúvida 3",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
            "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release " +
            "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software " +
            "like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        question: "Dúvida 4",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
            "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release " +
            "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software " +
            "like Aldus PageMaker including versions of Lorem Ipsum",
    },

];