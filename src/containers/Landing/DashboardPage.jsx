import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { 
  Col, Container, Row,
} from 'react-bootstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import {
    Card, CardTitleWrap, CardTitle,
  } from '@/shared/components/Card';
  import {
    DashboardHealthChartCard,
    DashboardHealthChartInfo,
    DashboardHealthChartNumber,
    DashboardHealthChartUnits,
    DashboardHealthChartWrap,
    DashboardHealthGoal,
  } from '../Dashboards/Fitness/DashboardHealthChartElements';

  const data1 = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];
  const data2 = [{ value: 360, fill: '#f6da6e' },
  { value: 140, fill: '#eeeeee' }];
  const data3 = [{ value: 1200, fill: '#4ce1b6' },
  { value: 800, fill: '#eeeeee' }];
  const data4 = [{ value: 3.8, fill: '#70bbfd' },
  { value: 0.2, fill: '#eeeeee' }];

const DashboardPage = () => (
  <MainSection>
    <Container>
      <SectionGap>
        <Row>
          <Col md={12}>
            <h3 className="page-title">Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12} xl={3} lg={6} sm={12} xs={12}>
            <Card>
              <DashboardHealthChartCard>
                <CardTitleWrap>
                  <CardTitle>Heartrate</CardTitle>
                </CardTitleWrap>
                <DashboardHealthChartWrap>
                  <ResponsiveContainer height={180}>
                    <PieChart>
                      <Pie data={data1} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                    </PieChart>
                  </ResponsiveContainer>
                  <DashboardHealthChartInfo>
                    <HeartOutlineIcon style={{ fill: '#ff4861' }} />
                    <DashboardHealthChartNumber>96</DashboardHealthChartNumber>
                    <DashboardHealthChartUnits>b/min</DashboardHealthChartUnits>
                  </DashboardHealthChartInfo>
                </DashboardHealthChartWrap>
                <DashboardHealthGoal>Reference: 58-120</DashboardHealthGoal>
              </DashboardHealthChartCard>
            </Card>
          </Col>
          <Col md={12} xl={3} lg={6} sm={12} xs={12}>
            <Card>
              <DashboardHealthChartCard>
                <CardTitleWrap>
                  <CardTitle>Calories burn</CardTitle>
                </CardTitleWrap>
                <DashboardHealthChartWrap>
                  <ResponsiveContainer height={180}>
                    <PieChart>
                      <Pie data={data2} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                    </PieChart>
                  </ResponsiveContainer>
                  <DashboardHealthChartInfo>
                    <HeartOutlineIcon style={{ fill: '#f6da6e' }} />
                    <DashboardHealthChartNumber>360</DashboardHealthChartNumber>
                    <DashboardHealthChartUnits>kKal</DashboardHealthChartUnits>
                  </DashboardHealthChartInfo>
                </DashboardHealthChartWrap>
                <DashboardHealthGoal>Goal: 500 kKal</DashboardHealthGoal>
              </DashboardHealthChartCard>
            </Card>
          </Col>
          <Col md={12} xl={3} lg={6} sm={12} xs={12}>
            <Card>
              <DashboardHealthChartCard>
                <CardTitleWrap>
                  <CardTitle>Steps</CardTitle>
                </CardTitleWrap>
                <DashboardHealthChartWrap>
                  <ResponsiveContainer height={180}>
                    <PieChart>
                      <Pie data={data3} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                    </PieChart>
                  </ResponsiveContainer>
                  <DashboardHealthChartInfo>
                    <HeartOutlineIcon style={{ fill: '#4ce1b6' }} />
                    <DashboardHealthChartNumber>1.2k</DashboardHealthChartNumber>
                    <DashboardHealthChartUnits>steps</DashboardHealthChartUnits>
                  </DashboardHealthChartInfo>
                </DashboardHealthChartWrap>
                <DashboardHealthGoal>Goal: 2000 steps</DashboardHealthGoal>
              </DashboardHealthChartCard>
            </Card>
          </Col>
          <Col md={12} xl={3} lg={6} sm={12} xs={12}>
            <Card>
              <DashboardHealthChartCard>
                <CardTitleWrap>
                  <CardTitle>Distance</CardTitle>
                </CardTitleWrap>
                <DashboardHealthChartWrap>
                  <ResponsiveContainer height={180}>
                    <PieChart>
                      <Pie data={data4} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                    </PieChart>
                  </ResponsiveContainer>
                  <DashboardHealthChartInfo>
                    <HeartOutlineIcon style={{ fill: '#70bbfd' }} />
                    <DashboardHealthChartNumber>3.8</DashboardHealthChartNumber>
                    <DashboardHealthChartUnits>km</DashboardHealthChartUnits>
                  </DashboardHealthChartInfo>
                </DashboardHealthChartWrap>
                <DashboardHealthGoal>Goal: 4 km</DashboardHealthGoal>
              </DashboardHealthChartCard>
            </Card>
          </Col>
        </Row>
      </SectionGap>
    </Container>
  </MainSection>
);

export default DashboardPage;

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



