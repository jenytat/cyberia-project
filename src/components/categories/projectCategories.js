import React, { useEffect, useState } from 'react';
import { fetchProjectCategories } from '../../api/api';
import styled from '@emotion/styled';

const Categories = styled.div`
    margin-bottom: 35px;
    @media(max-width: 991px) {
        margin-bottom: 23px;
    }
    ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        justify-content: space-between;
        li {
            background: rgb(49, 51, 65);
            box-shadow: 8px 15px 29px 0px rgba(23, 27, 44, 0.41);
            padding: 10px 29px;
            cursor: pointer;
            border-radius: 7px;
            font-size: 24px;
            line-height: 29px;
            transition: all .3s ease;
            margin-bottom: 17px;
            @media(max-width: 991px) {
              padding: 8px 38px;
              font-size: 14px;
              line-height: 18px;
            }
            @media(max-width: 768px) {
              font-size: 12px;
              line-height: 16px;
              padding: 8px 5px;
              text-align: center;
              min-width: 150px;
            }
            &.active {
              background: #2D76F9;
            }
            &:hover {
                box-shadow: none;
            }
        }
    }
`;

const ProjectCategories = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const loadCategories = async () => {
        const data = await fetchProjectCategories();
        setCategories(data.items);
      };
  
      loadCategories();
    }, []);

  
    return (
      <Categories>
        <ul>
            {categories.map(category => (
                <li key={category.name}
                    className='category-title'
                    data-tab={category.name}>
                    {category.name}
                </li>
            ))}
        </ul>
      </Categories>
    );
  };
  
  export default ProjectCategories;