import { withRouter } from "react-router-dom";
import React from "react";
import { Table, Tag, Space } from "antd";
const { Column, ColumnGroup } = Table;
class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                key: "1",
                firstName: "Nguyễn Văn",
                lastName: "A",
                age: 32,
                address: "Thủ Đức",
            },
            {
                key: "2",
                firstName: "Nguyễn Văn",
                lastName: "B",
                age: 42,
                address: "Bình Tân",
            },
            {
                key: "3",
                firstName: "Nguyễn Văn",
                lastName: "C",
                age: 32,
                address: "Tân Bình",
            },
        ];
    }
    render() {
        let { data } = this;
        console.log(data);
        return (
            <Table dataSource={data}>
                <ColumnGroup title="Name">
                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Column
                        title="Last Name"
                        dataIndex="lastName"
                        key="lastName"
                    />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />

                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}
export default withRouter(CreateAccount);
