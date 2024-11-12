import React from 'react';
import styled from '@emotion/styled';

import ProjectList from '../projectsList/projectList';
import FeedbackForm from '../feedbackForm/feedbackForm';

const Container = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 15px;
`;

const PageBlock = styled.div`
    h1 {
        margin: 0 0 65px;
        font-size: 48px;
        font-weight: 600;
        line-height: 58px;
        color: #EEF3FF;
        @media (max-width: 991px) {
            font-size: 35px;
            line-height: 42px;
            margin-bottom: 47px;
        }
        @media (max-width: 768px) {
            font-size: 21px;
            line-height: 25px;
            font-weight: 500;
        }
    }
`;

const Page = () => {
    return (
        <PageBlock>
            <Container>
                <h1>Кейсы</h1>
                <ProjectList/>
                <FeedbackForm/>
            </Container>
        </PageBlock>
    );
}

export default Page;