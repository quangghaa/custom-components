import { Button, Card, Divider, Image, Space } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./data_table_detail.scss";
import dayjs from "dayjs";

const DataTableDetail = () => {
  const location = useLocation();
  const item = location.state;
  const formatedDob = dayjs(item.dob.date)?.format("DD-MM-YYYY");
  const formatedIDRegistered = dayjs(item.registered.date)?.format(
    "DD-MM-YYYY"
  );
  const userLocation = item.location;
  const locationStr = `${userLocation.street.number} - ${userLocation.street.name} - ${userLocation.city} - ${userLocation.city}`;

  useEffect(() => {
    console.log(">> detaiL: ", item);
  }, []);

  return (
    <div className="data-table-detail">
      {!item ? (
        <Card>No data found</Card>
      ) : (
        <>
          <Card>
            <div className="detail-row">
              <div className="detail-row__label">Picture</div>
              <div className="detail-row__value">
                <Image src={item.picture.large} />
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">ID</div>
              <div className="detail-row__value">{`${item.id?.name} | ${item.id?.value}`}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">ID registered</div>
              <div className="detail-row__value">{formatedIDRegistered}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Name</div>
              <div className="detail-row__value">{`${item.name?.title}. ${item.name?.first} ${item.name?.last}`}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Gender</div>
              <div className="detail-row__value">{item.gender}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Date of birth</div>
              <div className="detail-row__value">{formatedDob}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Age</div>
              <div className="detail-row__value">{item.dob.age}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Nation</div>
              <div className="detail-row__value">{item.nat}</div>
            </div>
            <Divider />
            <div className="detail-row">
              <div className="detail-row__label">Email</div>
              <div className="detail-row__value">{item.email}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Cell</div>
              <div className="detail-row__value">{item.cell}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Phone</div>
              <div className="detail-row__value">{item.phone}</div>
            </div>
            <div className="detail-row">
              <div className="detail-row__label">Location</div>
              <div className="detail-row__value">{locationStr}</div>
            </div>
            <Divider />
            <div className="detail-row">
              <div className="detail-row__label">Username</div>
              <div className="detail-row__value">{item.login.username}</div>
            </div>
          </Card>
          <Card style={{marginTop: "16px"}}>
            <Space>
                <Button>Edit</Button>
                <Button danger>Delete</Button>
            </Space>
          </Card>
        </>
      )}
    </div>
  );
};
export default DataTableDetail;
