import React from "react";
import { withRouter } from "react-router-dom";
import { Radio, Space, Input, Select, Button } from "antd";
import "antd/dist/antd.css";
import "./create.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFistName: "",
            inputLastName: "",
            inputPhone: "",
            inputPassword: "",
            value: 1,
        };
    }
    onChange = (e) => {
        console.log("radio checked", e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    onChangeFistName = (e) => {
        this.setState({
            inputFistName: e.target.value,
        });
    };
    onChangeLastName = (e) => {
        this.setState({
            inputLastName: e.target.value,
        });
    };
    onChangePhone = (e) => {
        this.setState({
            inputPhone: e.target.value,
        });
    };
    onChangInputPassword = (e) => {
        this.setState({
            inputPassword: e.target.value,
        });
    };
    render() {
        let { inputFistName, inputLastName, inputPhone, inputPassword, value } =
            this.state;
        let { isShow, isClose } = this.props;
        return (
            <Modal isOpen={isShow}>
                <ModalHeader>
                    <div className="col-sm-12">
                        <h2 className="pl-3">Đăng ký</h2>
                    </div>
                </ModalHeader>
                <ModalBody className="p-3">
                    <div className="row col-12">
                        <br></br>
                        <div className="mt-2 col-6">
                            <Input
                                value={inputFistName}
                                onChange={(e) => this.onChangeFistName(e)}
                                placeholder="Họ"
                            />
                        </div>
                        <div className="mt-2 col-6">
                            <Input
                                value={inputLastName}
                                onChange={(e) => this.onChangeLastName(e)}
                                placeholder="Tên"
                            />
                        </div>
                        <div className="mt-2 col-12">
                            <Input
                                value={inputPhone}
                                onChange={(e) => this.onChangePhone(e)}
                                placeholder="Số điện thọai di động hoặc email"
                            />
                        </div>
                        <div className="mt-2 col-6 col-12">
                            <Input.Password
                                value={inputPassword}
                                onChange={(e) => this.onChangInputPassword(e)}
                                placeholder="Mật khẩu mới"
                            />
                        </div>
                        <div className="mt-2 pl-3 col-12">
                            <p>sinh nhật</p>
                        </div>
                        <div className="form-group col-12">
                            <Select className="form-control col-4">
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                                <Select.Option value="3">3</Select.Option>
                                <Select.Option value="4">4</Select.Option>
                                <Select.Option value="5">5</Select.Option>
                                <Select.Option value="6">6</Select.Option>
                                <Select.Option value="7">7</Select.Option>
                                <Select.Option value="8">8</Select.Option>
                                <Select.Option value="9">9</Select.Option>
                                <Select.Option value="10">10</Select.Option>
                                <Select.Option value="11">11</Select.Option>
                                <Select.Option value="12">12</Select.Option>
                                <Select.Option value="13">13</Select.Option>
                                <Select.Option value="14">14</Select.Option>
                                <Select.Option value="15">15</Select.Option>
                            </Select>
                            <Select className=" form-control col-4">
                                <Select.Option value="1">tháng 1</Select.Option>
                                <Select.Option value="2">tháng 2</Select.Option>
                                <Select.Option value="3">tháng 3</Select.Option>
                                <Select.Option value="4">tháng 4</Select.Option>
                                <Select.Option value="5">tháng 5</Select.Option>
                                <Select.Option value="6">tháng 6</Select.Option>
                                <Select.Option value="7">tháng 7</Select.Option>
                                <Select.Option value="8">tháng 8</Select.Option>
                                <Select.Option value="9">tháng 9</Select.Option>
                                <Select.Option value="10">
                                    tháng 10
                                </Select.Option>
                                <Select.Option value="11">
                                    tháng 11
                                </Select.Option>
                                <Select.Option value="12">
                                    tháng 12
                                </Select.Option>
                            </Select>
                            <Select className=" form-control col-4">
                                <Select.Option value="1"> 2001</Select.Option>
                                <Select.Option value="2"> 2002</Select.Option>
                                <Select.Option value="3"> 2003</Select.Option>
                                <Select.Option value="4"> 2004</Select.Option>
                                <Select.Option value="5"> 2005</Select.Option>
                                <Select.Option value="6"> 2006</Select.Option>
                                <Select.Option value="7"> 2007</Select.Option>
                                <Select.Option value="8"> 2008</Select.Option>
                                <Select.Option value="9"> 2009</Select.Option>
                                <Select.Option value="10"> 2010</Select.Option>
                                <Select.Option value="11"> 2011</Select.Option>
                                <Select.Option value="12"> 2012</Select.Option>
                            </Select>
                        </div>

                        <div className="pl-3 col-sm-12">
                            <p>giới tính</p>
                        </div>

                        <Radio.Group
                            onChange={this.onChange}
                            value={value}
                            className="form-group pl-3"
                        >
                            <Space direction="vertical">
                                <Radio value={1}>Nữ </Radio>
                                <Radio value={2}>Nam </Radio>
                                <Radio value={3}>Tùy chọn C</Radio>
                            </Space>
                        </Radio.Group>

                        <div className="col-sm-12 mt-2">
                            <p>
                                Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều
                                khoản, Chính sách dữ liệu và Chính sách cookie
                                của chúng tôi. Bạn có thể nhận được thông báo
                                của chúng tôi qua SMS và hủy nhận bất kỳ lúc
                                nào.
                            </p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="justify-content-right ">
                    <div className="float-right">
                        <Button className="btn-color">Đăng ký</Button>
                        <Button
                            type="primary"
                            onClick={() => isClose("create")}
                        >
                            Đóng
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}
export default withRouter(CreateAccount);
