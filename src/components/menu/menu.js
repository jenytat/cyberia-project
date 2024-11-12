import styled from '@emotion/styled';
import React from 'react';

const MenuBlock = styled.div`
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        @media (max-width: 991px) {
            display: none;
        }
        li {
            a {
                color: #fff;
                transition: all .3s ease;
            }
            &:hover {
                a {
                    color: rgb(154, 168, 186);
                }    
            }
            &:not(:last-child) {
                margin-right: 60px;
            }
        }
    }
`;

const Menu = () => {
    return (
        <MenuBlock>
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
        </MenuBlock>
    )
}

export default Menu;