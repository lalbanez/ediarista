import {ButtonContainer, HeaderAppBar, HeaderDrawer, HeaderLogo} from "./Header.styled";
import {Container, Divider, IconButton, MenuItem, MenuList, Toolbar} from "@mui/material";
import Link from "../../navigation/Liink/Link";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import {useState} from "react";
import useIsMobile from "../../../../data/hooks/useIsMobile";

const Header: React.FC = () => {
    const isMobile = useIsMobile();

    return isMobile ? <HeaderMobile/> : <HeaderDesktop/>;
}

export default Header;

const HeaderDesktop: React.FC = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href="/">
                    <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista"/>
                </Link>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>

                <ButtonContainer>
                    <Link Component={RoundedButton} mui={{variant: "contained", color: "primary"}}
                          href="/cadastro/diarista">Seja uma diarista</Link>
                    <Link Component={RoundedButton} href="/login">Login</Link>
                </ButtonContainer>
            </Toolbar>
        </HeaderAppBar>
    );
}

const HeaderMobile: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton edge={"start"} color={"inherit"} onClick={() => setDrawerOpen(true)}>
                    <i className="twf-bars"/>
                </IconButton>
                <Link href="/">
                    <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista"/>
                </Link>
                <HeaderDrawer
                    open={isDrawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    onClick={() => setDrawerOpen(false)}
                >
                    <MenuList>
                        <Link Component={MenuItem} href="/cadastro/diarista">Seja uma diarista</Link>
                        <Divider/>
                        <Link Component={MenuItem} href="/login">Login</Link>
                    </MenuList>
                </HeaderDrawer>
            </Toolbar>
        </HeaderAppBar>
    )
}