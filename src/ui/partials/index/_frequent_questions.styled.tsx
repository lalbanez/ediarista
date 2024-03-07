import {styled} from "@mui/material/styles";
import {Accordion} from "@mui/material";

export const SectionContainer = styled("section")`
  padding-bottom: ${({theme}) => theme.spacing(7)};
`;


export const Wave = styled("img")`
  width: 100%;
  height: 100px;
  margin-top: -100px;
`;

export const SectionTitle = styled("h2")`
  margin: 0;
  text-align: center;
`;

export const SectionSubtitle = styled("p")`
  position: relative;
  text-align: center;
  margin: ${({theme}) => theme.spacing(2, 0, 10)};

  &::after {
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.palette.grey[200]};
    width: 96px;
    height: 6px;
    left: 50%;
    bottom: ${({theme}) => theme.spacing(-5)};;
    transform: translate(-50%);
  }
`;

export const AcortdionStyled = styled(Accordion)`
  .MuiAccordionSummary-content .MuiTypography-root {
    font-weight: bold;
  }

  &.MuiAccordion-root {
    box-shadow: none;
    border: 2px solid ${({theme}) => theme.palette.primary.main};

    &::before {
      background-color: transparent;
    }

    &,
    &.Mui-expanded {
      margin: -2px 0 0;
    }

    .MuiAccordionDetails-root {
      padding-right: ${({theme}) => theme.spacing(7)};
    }

    .MuiAccordionSummary-expandIconWrapper {
      color: ${({theme}) => theme.palette.text.secondary};
    }
  }

`;
