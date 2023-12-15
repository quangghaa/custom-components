import { Button, Card, Col, Divider, Row, Table } from "antd";
import "./data-card.scss";
import {
  DashboardOutlined,
  EllipsisOutlined,
  FallOutlined,
  FileTextOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { columns, statisticData, tableData } from "./constant";

const DataCard = () => {
  return (
    <div className="data-card">
      <Row gutter={[16, 0]}>
        <Col span={16}>
          <div className="section">
            <div className="headline">
              <div className="label">Dashboard</div>
              <div className="actions">
                <EllipsisOutlined />
              </div>
            </div>
            <Row gutter={[8, 0]}>
              <Col span={6}>
                <Card>
                  <div className="db-item">
                    <div className="circle">
                      <DashboardOutlined />
                    </div>
                    <div className="summary">
                      <div className="summary__label">Total</div>
                      <div className="summary__value">2,040</div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="db-item">
                    <div className="circle">
                      <DashboardOutlined />
                    </div>
                    <div className="summary">
                      <div className="summary__label">Total</div>
                      <div className="summary__value">2,040</div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="db-item">
                    <div className="circle">
                      <DashboardOutlined />
                    </div>
                    <div className="summary">
                      <div className="summary__label">Total</div>
                      <div className="summary__value">2,040</div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="db-item">
                    <div className="circle">
                      <DashboardOutlined />
                    </div>
                    <div className="summary">
                      <div className="summary__label">Total</div>
                      <div className="summary__value">2,040</div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="section">
            <div className="headline">
              <div className="label">Statistics</div>
              <div className="actions">
                <EllipsisOutlined />
              </div>
            </div>
            <Card>
              <LineChart width={500} height={300} data={statisticData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <div className="section">
            <div className="headline">
              <div className="label">Reports</div>
              <div className="actions">
                <EllipsisOutlined />
              </div>
            </div>
            <Card>
              <div className="report-content">
                <div className="circle">
                  <FileTextOutlined />
                </div>
                <div className="report-summary">
                  The report summary goes here
                </div>
              </div>
              <div className="report-footer">
                <div className="upadte-time">1 minutes ago</div>
                <Button type="link">DETAIL</Button>
              </div>
            </Card>
            <Card style={{ marginTop: "8px" }}>
              <div className="report-content">
                <div className="circle">
                  <FileTextOutlined />
                </div>
                <div className="report-summary">
                  The report summary goes here
                </div>
              </div>
              <div className="report-footer">
                <div className="upadte-time">1 minutes ago</div>
                <Button type="link">DETAIL</Button>
              </div>
            </Card>
            <Card style={{ marginTop: "8px" }}>
              <div className="report-content">
                <div className="circle">
                  <FileTextOutlined />
                </div>
                <div className="report-summary">
                  The report summary goes here
                </div>
              </div>
              <div className="report-footer">
                <div className="upadte-time">1 minutes ago</div>
                <Button type="link">DETAIL</Button>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 0]} style={{ marginTop: "16px" }}>
        <Col span={16}>
          <div className="section">
            <div className="headline">
              <div className="label">Latest</div>
              <div className="actions">
                <EllipsisOutlined />
              </div>
            </div>
            <Table columns={columns} dataSource={tableData} />
          </div>
        </Col>
        <Col span={8}>
          <div className="section">
            <div className="headline">
              <div className="label">Balance</div>
              <div className="actions">
                <EllipsisOutlined />
              </div>
            </div>
            <Card>
              <div className="balance-item">
                <div className="circle">
                  <RiseOutlined />
                </div>
                <div className="balance-item__content">
                  <div className="bc-label">Income</div>
                  <div className="bc-value">$120.000</div>
                </div>
              </div>
              <div className="balance-item">
                <div className="circle">
                  <FallOutlined />
                </div>
                <div className="balance-item__content">
                  <div className="bc-label">Outcome</div>
                  <div className="bc-value">$80.000</div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DataCard;
