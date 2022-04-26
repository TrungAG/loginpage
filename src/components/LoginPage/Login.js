import { withRouter } from "react-router-dom";
import React from "react";
import logo from "../Images/facebook.svg";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./login.css";
import CreateAccount from "./Modal/CreateAccount";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: "",
            inputPassword: "",
            showModalCreate: false,
        };
    }
    onChangInputEmail = (e) => {
        this.setState({
            inputEmail: e.target.value,
        });
    };
    onChangInputPassword = (e) => {
        this.setState({
            inputPassword: e.target.value,
        });
    };
    openModal = (modalName) => {
        if (modalName === "create") {
            this.setState({
                showModalCreate: true,
            });
            return;
        }
    };
    closeModal = (modalName) => {
        if (modalName === "create") {
            this.setState({
                showModalCreate: false,
            });
        }
    };

    render() {
        let { inputEmail, inputPassword, showModalCreate } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <div style={{ marginTop: "130px" }}>
                                    <img
                                        src={logo}
                                        alt=""
                                        width={"40%"}
                                        height={"100"}
                                    />
                                    <div className="text pl-3">
                                        <span>
                                            Facebook giúp bạn kết nối và chia sẻ
                                            với mọi người trong cuộc sống của
                                            bạn.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div
                                className="d-flex align-items-center"
                                style={{ height: "100vh" }}
                            >
                                <div className="login-container">
                                    <Form>
                                        <Form.Item>
                                            <Input
                                                value={inputEmail}
                                                onChange={(e) =>
                                                    this.onChangInputEmail(e)
                                                }
                                                placeholder="Email hoặc số điện thoại"
                                            ></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input.Password
                                                value={inputPassword}
                                                onChange={(e) =>
                                                    this.onChangInputPassword(e)
                                                }
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                className="btn-block"
                                            >
                                                Đăng nhập
                                            </Button>

                                            <div className="mt-3 text-center">
                                                <a href="!#">Quên mật khẩu?</a>
                                            </div>
                                        </Form.Item>
                                        <hr></hr>
                                        <Form.Item>
                                            <div className="text-center">
                                                <Button
                                                    className="btn-color"
                                                    onClick={() =>
                                                        this.openModal("create")
                                                    }
                                                >
                                                    Tạo tài khoản
                                                </Button>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                    <br></br>
                                    <p>
                                        <a href="!#" className="text-dark">
                                            <strong>Tạo Trang </strong>
                                        </a>
                                        dành cho người nổi tiếng, thương hiệu
                                        hoặc doanh nghiệp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showModalCreate && (
                        <CreateAccount
                            isShow={showModalCreate}
                            isClose={this.closeModal}
                        />
                    )}
                </div>
            </>
        );
    }
}
export default withRouter(Login);
