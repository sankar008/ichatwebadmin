import React from 'react';
import styled from 'styled-components';
import EyeIcon from 'mdi-react/EyeIcon';
import { 
  Col, Container, Row,
} from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormFieldButton,
  FormGroupLabel,
  FormButtonToolbar,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const FormPage = () => (
  <MainSection>
    <Container>
      <SectionGap>
        <Row>
          <Col md={12}>
            <h3 className="page-title">Form layouts</h3>
            <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <CardTitleWrap>
                  <CardTitle>Form</CardTitle>
                  <CardSubhead>Labels are left from fields</CardSubhead>
                </CardTitleWrap>
                <FormContainer>
                  <Row className="w-100">
                    <Col md={6}>
                      <FormGroup>
                        <FormGroupLabel>Username</FormGroupLabel>
                        <FormGroupField>
                          <input
                            name="username"
                            type="text"
                            placeholder="Name"
                          />
                        </FormGroupField>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <FormGroupLabel>E-mail</FormGroupLabel>
                        <FormGroupField>
                          <input
                            name="email"
                            type="email"
                            placeholder="example@gmail.com"
                          />
                        </FormGroupField>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <FormGroupLabel>Password</FormGroupLabel>
                        <FormGroupField>
                          <input
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                          <FormFieldButton
                            type="button"
                          >
                            <EyeIcon />
                          </FormFieldButton>
                        </FormGroupField>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <FormGroupLabel>Confirm Password</FormGroupLabel>
                        <FormGroupField>
                          <input
                            name="password"
                            type="password"
                            placeholder="Confirm Password"
                          />
                          <FormFieldButton
                            type="button"
                          >
                            <EyeIcon />
                          </FormFieldButton>
                        </FormGroupField>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <FormGroupField>
                      <label className="checkbox-input" htmlFor="checkbox1">
                        Remember me
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                    </FormGroupField>
                  </FormGroup>
                  <FormButtonToolbar>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant="secondary" type="button">
                      Cancel
                    </Button>
                  </FormButtonToolbar>
                </FormContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </SectionGap>
    </Container>
  </MainSection>
);

export default FormPage;

const SectionGap = styled.div`
  margin-bottom:50px;
  .input-search {
    max-width:250px;
    margin-left:auto;
  }
  .btn-toolbar {
    display:flex;
    justify-content:space-between;
    width:100%;
  }
`;
const MainSection = styled.div`
  padding: 50px 0;
    .checkbox-input{
    display: block;
    position: relative;
    line-height: 18px;
    padding-left: 28px;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    color:#ddd;
    }

    .checkbox-input input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border:1px solid #ddd;
    border-radius:2px;
    }
    .checkbox-input input:checked ~ .checkmark {
    border-color:#4ce1b6;
    }

    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    .checkbox-input input:checked ~ .checkmark:after {
    display: block;
    }
    .checkbox-input .checkmark:after {
    left: 5px;
    top: 3px;
    width: 4px;
    height: 7px;
    border: solid #4ce1b6;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
`;




