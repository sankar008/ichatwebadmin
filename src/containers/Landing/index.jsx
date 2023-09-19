import React from 'react';
import styled from 'styled-components';
// import { Field, Form } from 'react-final-form';
// import renderCheckBoxField from '@/shared/components/form/CheckBox';
import { 
  Col, Container, Row,
} from 'react-bootstrap';

const Landing = () => (
  <MainSection>
    <Container>
      <SectionGap>
        <Row>
          <Col lg={4} md={6}>
            <h3 className="page-title">Col 1</h3>
            <p className="subhead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </Col>
          <Col lg={4} md={6}>
            <h3 className="page-title">Col 2</h3>
            <p className="subhead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </Col>
          <Col lg={4} md={6}>
            <h3 className="page-title">col 3</h3>
            <p className="subhead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </Col>
        </Row>
      </SectionGap>
    </Container>
  </MainSection>
);

export default Landing;

const SectionGap = styled.div`
  margin-bottom:50px;
  .input-search {
    max-width:250px;
    margin-left:auto;
  }
`;
const MainSection = styled.div`
  padding: 50px 0;
`;




