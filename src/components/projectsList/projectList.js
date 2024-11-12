import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fetchProjects } from "../../api/api";

import ProjectCategories from '../categories/projectCategories';

const List = styled.div`
    @media (max-width: 768px) {
        margin-bottom: 48px;
    }
    ul {
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px 40px;
        list-style: none;
        width: 100%;
        @media (max-width: 991px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px 0px;
        }
        li {
            width: 100%;
            position: relative;
            display: none;
            &.active {
                display: block;
            }
            a {
                overflow: hidden;
                display: block;
            }
            a:hover {
                svg {
                    transform: translate(-6px, 6px);
                }
                @media (max-width: 768px) {
                    svg {
                        transform: translate(0px, -6px);
                    }
                }
            }
        }
    }
`;

const Image = styled.div`
    width: 100%;
    height: 378px;
    @media (max-width: 768px) {
        height: 320px;
    }
    img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 12px;
        @media (max-width: 768px) {
            border-radius: 6px;
        }
    }
`;

const ProjectTitle = styled.div`
    width: 122px;
    height: 122px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 23px;
    right: 27px;
    background: #262938;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    text-align: center;
    @media (max-width: 768px) {
        width: auto;
        height: auto;
        background: transparent;
        flex-direction: column-reverse;
        align-items: flex-start;
        font-size: 18px;
        line-height: 21px;
        top: auto;
        right: auto;
        left: 29px;
        bottom: 83px;
        z-index: 5;
        transition: all .3s ease;
    }
    svg {
        position: absolute;
        top: -6px;
        right: -6px;
        transition: all .3s ease;
        @media (max-width: 768px) {
            position: relative;
            top: auto;
            right: auto;
            width: 17px;
            height: 17px;
            margin-bottom: 7px;
            rect {
                fill: #fff;
            }
        }
    }
`;

const TextInfo = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 23px 44px 23px 29px;
    border-radius: 6px;
    align-items: flex-end;
    font-size: 13px;
    line-height: 18px;
    background: linear-gradient(360deg, #090B21 0%, rgba(49, 51, 65, 0) 70.08%);
    @media (max-width: 768px) {
        display: flex;
    }
`;

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const loadProjects = async () => {
        const data = await fetchProjects();
        setProjects(data.items);
      };
  
      loadProjects();
    }, []);
  
    return (
        <div>
            <ProjectCategories/>
            <List>
                <ul>
                    {projects.map(project => (
                        <li className="project-item active" data-tab={project.categories.map(category => category.name).join(', ')}>
                            <a href={project.project_url}>
                                <Image>
                                    <img src={project.image} alt={project.title} />
                                </Image>
                                <ProjectTitle>
                                    {project.title}
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24.9999" height="5.46874" rx="1" transform="matrix(1 0 0 -1 0 24.9995)" fill="#2D76F9"/>
                                        <rect width="14.0625" height="5.46874" rx="1" transform="matrix(1 0 0 -1 10.938 14.0625)" fill="#2D76F9"/>
                                        <rect width="24.9999" height="5.46874" rx="1" transform="matrix(0 1 1 0 0 0.00012207)" fill="#2D76F9"/>
                                        <rect width="14.0625" height="5.46874" rx="1" transform="matrix(0 1 1 0 10.938 0.00012207)" fill="#2D76F9"/>
                                    </svg>
                                </ProjectTitle>
                                <TextInfo>
                                    Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение и т.д.
                                </TextInfo>
                            </a>
                        </li>
                    ))}
                </ul>
            </List>
        </div>
    );
};
  
export default ProjectList;