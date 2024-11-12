import styled from '@emotion/styled';
import React from 'react';
import Menu from '../menu/menu';
import Logo from './images/logo.svg';

const Container = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;`;

const HeaderBlock = styled.header`
    padding: 64px 0;
    position: relative;
    .hamburger {
        width: 24px;
        height: 14px;
        display: none;
        cursor: pointer;
        margin-left: auto;
        @media (max-width: 991px) {
            display: block;
        }
        &.active {
            span {
                &:nth-child(1) {
                    transform: translate(0px, 6px) rotate(45deg);
                }
                &:nth-child(2) {
                    transform: scale(0);
                }
                &:nth-child(3) {
                    transform: translate(0px, -10px) rotate(-45deg);
                }
            }
        }
        span {
            width: 24px;
            height: 2px;
            border-radius: 2px;
            background: #EEF3FF;
            display: block;
            margin-bottom: 6px;
            transition: all 0.3s;
        }
    }
    @media (max-width: 991px) {
        padding: 27px 0;
        background: #20212C;
    }
`;

const LogoBlock = styled.div`
    flex: 0 0 131px;
    margin-right: 190px;
    img {
        width: 100%;
    }
    @media (max-width: 768px) {
        flex: 0 0 93px;
        margin-right: 0;
    }
`;

const MobileMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #20212C;
    z-index: 10;
    padding: 0 0 180px 0;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    &.is-open {
        opacity: 1;
        visibility: visible;
    }
    ul {
        display: block;
        margin: 0 0 47px 0;
        li {
            &:not(:last-child) {
                margin-bottom: 30px;
            }
            a {
                color: rgb(238, 243, 255);
                font-size: 18px;
                line-height: 25px;
                transition: all .3s ease;
                &:hover {
                    color: rgb(154, 168, 186);
                }
            }
        }
    }
`;

const MobileContacts = styled.div`
    padding: 38px 0 44px 0;
    width: 100%;
    border-top: 2px solid rgb(43, 45, 58);
    border-bottom: 2px solid rgb(43, 45, 58);
    border-raius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h5 {
        margin: 0 0 42px 0;
        color: rgb(154, 168, 186);
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
    }
    a {
        color: rgb(154, 168, 186);
        font-size: 16px;
        line-height: 22px;
        transition: all .3s ease;
        margin-bottom: 19px;
        &:hover {
            color: rgb(238, 243, 255)
        }
    }
    p {
        color: rgb(154, 168, 186);
        font-size: 16px;
        line-height: 22px;
        margin: 0;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <Container>
                <LogoBlock>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </LogoBlock>
                <Menu/>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Container>
            <MobileMenu className='mobile-menu'>
                <Container>
                    <Menu/>
                    <MobileContacts>
                        <h5>Контакты:</h5>
                        <a href="tel:+79991234567">+7 999 123 45 67</a>
                        <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
                        <p>ул.Ярных, д.35, оф.10</p>
                    </MobileContacts>
                </Container>
            </MobileMenu>
        </HeaderBlock>
    )
}

export default Header;