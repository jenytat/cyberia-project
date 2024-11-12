import styled from '@emotion/styled';
import React from 'react';
import LogoFooter from './images/logo2.svg';

const FooterBlock = styled.footer`
    padding: 130px 0 150px;
    background: #262938;
    display: flex;
    margin-top: 100px;
    @media (max-width: 768px) {
        margin-top: 0px;
        padding: 32px 0 48px;
    }
`;

const Container = styled.div`
    max-width: 1270px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const LogoBlock = styled.div`
    flex: 0 0 196px;
    img {
        width: 100%;
    }
    @media (max-width: 991px) {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 38px;
        img {
            width: 102px;
        }
    }
`;

const Slogan = styled.div`
    margin-top: 29px;
    span {
        color: #fff;
        text-align: center;
    }
    @media (max-width: 991px) {
        margin-top: 11px;
    }
    @media (max-width: 768px) {
        span {
            font-size: 13px;
            line-height: 18px;
        }
    }
`;

const InfoBlock = styled.div`
    display: flex;
    flex: 1 1 auto;
    margin-left: 157px;
    @media(max-width: 991px) {
        margin-left: 0px;
        flex: 1 1 100%;
    }
`;

const ContactsBlock = styled.div`
    margin-right: 54px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 991px) {
        margin-right: 22px;
    }
    @media (max-width: 768px) {
        a {
            font-size: 13px;
            line-height: 18px;
        }
        p {
            font-size: 13px;
            line-height: 18px;
        }
    }
    a {
        display: inline-block;
        color: #fff;
        transition: all .3s ease;
        margin-bottom: 23px;
        &:hover {
            color: rgb(154, 168, 186);
        }
    }
    p {
        color: #fff;
        margin: 0;
    }
`;

const MenuFooter = styled.div`
    flex: 0 0 auto;
    @media (max-width: 991px) {
        flex: 0 1 auto;
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 768px) {
            li {
                font-size: 13px;
                line-height: 18px;
                a {
                    font-size: 13px;
                    line-height: 18px;
                }
            }
        }
        li {
            width: 50%;
            &:not(:last-child) {
                margin-bottom: 23px;
            }
            a {
                color: #fff;
                transition: all .3s ease;
                &:hover {
                    color: rgb(154, 168, 186);
                }
            }
        }
    }
`;


const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <LogoBlock>
                    <a href="/">
                        <img src={LogoFooter} alt="" />
                    </a>
                    <Slogan>
                        <span>Веб-разработка и усиление IT-команд</span>
                    </Slogan>
                </LogoBlock>
                <InfoBlock>
                    <ContactsBlock>
                        <a href="tel:+79991234567">+7 999 123 45 67</a>
                        <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
                        <p>ул.Ярных, д.35, оф.10</p>
                    </ContactsBlock>
                    <MenuFooter>
                        <ul>
                            <li>
                                <a href="#0">Агентство</a>
                            </li>
                            <li>
                                <a href="#0">Услуги</a>
                            </li>
                            <li>
                                <a href="#0">Кейсы</a>
                            </li>
                            <li>
                                <a href="#0">Блог</a>
                            </li>
                            <li>
                                <a href="#0">Контакты</a>
                            </li>
                        </ul>
                    </MenuFooter>
                </InfoBlock>
            </Container>
        </FooterBlock>
    )
}

export default Footer;