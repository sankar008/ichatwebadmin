import React from 'react';
import styled from 'styled-components';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import { 
  Col, Container, Row, Badge, Pagination, Stack, 
} from 'react-bootstrap';
import { Table } from '@/shared/components/TableElements';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
} from '@/shared/components/form/FormElements';

const TablePage = () => (
  <MainSection>
    <Container>
      <SectionGap>
        <Row>
          <Col md={12}>
            <h3 className="page-title">Basic tables</h3>
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
                  <CardTitle>Basic table</CardTitle>
                  <CardSubhead>Use default table</CardSubhead>
                </CardTitleWrap>
                <FormContainer>
                  <FormGroup>
                    <FormGroupField>
                      <input 
                        className="input-search"
                        type="search"
                        placeholder="Seach"
                      />
                      <FormGroupIcon>
                        <MagnifyIcon />
                      </FormGroupIcon>
                    </FormGroupField>
                  </FormGroup>
                </FormContainer>
                <TableSection>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@dragon</td>
                        <td>abc1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Badge bg="primary" className="mr-2">Edit</Badge>
                            <Badge bg="danger">Delete</Badge>
                            <Badge bg="success">Add</Badge>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>@dragon</td>
                        <td>abc1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Badge bg="primary" className="mr-2">Edit</Badge>
                            <Badge bg="danger">Delete</Badge>
                            <Badge bg="success">Add</Badge>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>@dragon</td>
                        <td>abc1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Badge bg="primary" className="mr-2">Edit</Badge>
                            <Badge bg="danger">Delete</Badge>
                            <Badge bg="success">Add</Badge>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>@dragon</td>
                        <td>abc1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Badge bg="primary" className="mr-2">Edit</Badge>
                            <Badge bg="danger">Delete</Badge>
                            <Badge bg="success">Add</Badge>
                          </Stack>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </TableSection>
                <PaginationSection>
                  <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item active>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </PaginationSection>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </SectionGap>
    </Container>
  </MainSection>
);

export default TablePage;

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
const PaginationSection = styled.div`
  margin-top:40px;
  ul {
    justify-content:flex-end;
    .active > .page-link, .page-link.active {
      background-color: #232329;
      border-color:#33333a;
    }
    li {
      .page-link {
        background:#2a2a31;
        color:#dddddd;
        border-color:#33333a;
        border-radius:0!important;
        @media only screen and (max-width: 767px) {
          padding:6px 10px;
        }
      }
    }
  }
`;
const TableSection = styled.div`
  table {
    td,th {
      padding:10px;
    }
  }
`;



