import {
    AppList,
    FooterContainer,
    FooterGrid,
    FooterListItem, FooterSocialList,
    FooterTitle,
    SocialButton,
    SocialContainer
} from "./Footer.styled";
import {Box, List, Typography} from "@mui/material";
import Link from "../../navigation/Liink/Link";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <div>
                    <FooterTitle> Menu </FooterTitle>
                    <List>
                        <FooterListItem>
                            <Link href={"/encontrar-diarista"} mui={{color: "inherit", variant: "body2"}}>
                                Encontrar um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={"/encontrar-diarista"} mui={{color: "inherit", variant: "body2"}}>
                                Seja um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={"/encontrar-diarista"} mui={{color: "inherit", variant: "body2"}}>
                                Por que usar o E-diarista?
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link href={"/encontrar-diarista"} mui={{color: "inherit", variant: "body2"}}>
                                Principais dúvidas
                            </Link>
                        </FooterListItem>
                    </List>
                </div>
                <Box sx={{maxWidth: "400px"}}>
                    <FooterTitle> Quem somos </FooterTitle>
                    <Typography variant="body2" sx={{mt: 2}}>
                        E-Diaristas te ajuda a encontrar um profissional perfeito para
                        realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
                        com total segurança e praticidade! São milhares de clientes
                        satisfeitos por todo o país.
                    </Typography>
                </Box>

                <SocialContainer>
                    <div>
                        <FooterTitle> Baixe nosso aplicativo </FooterTitle>
                        <AppList>
                            <li>
                                <a
                                    href='http://google.com'
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img src='/img/logos/app-store.png' alt='app store'/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='http://google.com'
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img src='/img/logos/google-play.png' alt='app store'/>
                                </a>
                            </li>
                        </AppList>
                    </div>
                    <div>
                    <FooterTitle> Redes Sociais </FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                                <SocialButton href="/">
                                    <i className="twf-facebook-f"/>
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href="/">
                                    <i className="twf-instagram"/>
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href="/">
                                    <i className="twf-youtube"/>
                                </SocialButton>
                            </FooterListItem>
                        </FooterSocialList>
                    </div>
                </SocialContainer>
            </FooterGrid>
        </FooterContainer>
    );
};

export default Footer;