import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
        margin: 5px 0 130px;
        @media (max-width: 991px) {
            margin: 46px 0 29px;
        }
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
            li:not(:last-child) {
                &::after {
                    content: '/';
                    margin: 0 5px;
                    font-size: 18px;
                    line-height: 22px;
                    color: #9AA8BA;
                    @media (max-width: 991px) {
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 14px;
                    }
                }
            }
            li {
                span {
                    color: #C4D2E3;
                    @media (max-width: 991px) {
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 14px;
                    }
                }
                a {
                    @media (max-width: 991px) {
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 14px;
                    }
                    span {
                        color: #9AA8BA;
                        position: relative;
                        display: inline-block;
                        &::after {
                            content: '';
                            position: absolute;
                            width: 0%;
                            height: 1px;
                            background: #9AA8BA;
                            bottom: 0;
                            left: 0;
                            transition: all .3s ease;
                        }
                    }
                    &:hover span {
                        &::after {
                            width: 100%;
                        }
                    }
                }
            }
        }
    `;

const Container = styled.div`
    max-width: 1270px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;`;

const BreadcrumbsProject = () => {
    return (
        <Div>
            <Container>
                <ul>
                    <li>
                        <a href="./">
                            <span>Главная</span>
                        </a>
                    </li>
                    <li>
                        <span>Кейсы</span>
                    </li>
                </ul>
            </Container>
        </Div>
    );
}

export default BreadcrumbsProject;