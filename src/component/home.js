import React from "react";
import { 
    Select,
    Col,
    Row,
    Table,
    Button
} from "antd";
import DoughnutChart from "./doughnutChart";
import { NavLink } from "react-router-dom";
import '../assets/style/home.css';

export default function Home() {

    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    const columns = [
        {
          title: 'Risk ID',
          dataIndex: 'risk_id',
          width: 150,
        },
        {
          title: 'Risk Event',
          dataIndex: 'risk_event',
        },
        {
          title: 'Impact Count',
          dataIndex: 'impact_count',
          width: 150,
        },
        {
            title: 'Likelihood Count',
            dataIndex: 'likelihood_count',
            width: 150,
          },
      ];

    const data = [];
        for (let i = 0; i < 3; i++) {
        data.push({
          key: i,
          risk_id: `RSK_GA_3_10 ${i}`,
          risk_event: 'Faults related to maintaining impartiality of ASEC - As a secretariat, ASEC should remain neutral (cannot take sides and interpret issues against a certain party).',
          impact_count: `${i}`,
          likelihood_count: `${i}`,
        });
    }

    const columnsDetail = [
        {
            title:     (
                <span>
                    Category <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
                </span>
            ),
            dataIndex: 'category',
            key: 'category',
        },
        {
            title:     (
                <span>
                    Information <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
                </span>
            ),
            dataIndex: 'information',
            key: 'information',
        },
        {
            title:     (
              <span>
                    Remarks <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                      <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
              </span>
            ),
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title:     (
              <span>
                  Focal Point <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                      <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                  </svg> 
              </span>
            ),
            dataIndex: 'focal_point',
            key: 'focal_point',
        },
          {
            title:     (
                <span>
                    Cost (USD) <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
                </span>
            ),
            dataIndex: 'cost_usd',
            key: 'cost_usd',
          },
          {
            title:     (
                <span>
                    Due Date <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
                </span>
            ),
            dataIndex: 'due_date',
            key: 'due_date',
          },
          {
            title:     (
                <span>
                    Status <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.66667 1.33325V10.6666M5.66667 10.6666L10.3333 5.99992M5.66667 10.6666L1 5.99992" stroke="#667085" stroke-width="1.33333"/>
                    </svg> 
                </span>
            ),
            dataIndex: 'status',
            key: 'status',
          },
      ];
    
      const dataDetail = [
        {
          key: '1',
          category: 'RSK_GA_3_10',
          informatin: "-",
          remarks: '-',
          focal_point: '-',
          cost_usd: '0.00',
          due_date: '12/01/2023',
          status: '-',
        },
        {
            key: '2',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
          },
          {
            key: '3',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
          },
          {
            key: '4',
            category: 'RSK_GA_3_10',
            informatin: "-",
            remarks: '-',
            focal_point: '-',
            cost_usd: '0.00',
            due_date: '12/01/2023',
            status: '-',
          },
        
        ];

    return (<div className="main-home">
        <section className="risk-treatment-status">
            <div className="header">
                <span className="title">Impact Risk Treatment Category</span>
                <Select
                    labelInValue
                    defaultValue={{
                        value: 'Impact3',
                        label: 'Impact Risk Treatment',
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'Impact1',
                            label: 'Impact Risk Treatment',
                        },
                        {
                            value: 'Impact2',
                            label: 'Impact Risk Treatment',
                        },
                    ]}
                />
            </div>
            <div className="box">
                <Row gutter={[16, 16]}>
                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#54E69D"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">Done</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#DDDFEB"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">Cancelled</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#85B4F2"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">Not Started</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#EEF157"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">In Progress</span>
                                <span className="text2">560</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
                        <div className="cart-content">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#FFC36D"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">Near Due Date</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
                        <div className="cart-content">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="25" fill="#FF7676"/>
                                <path d="M15.625 15.3125C15.625 14.4482 14.9268 13.75 14.0625 13.75C13.1982 13.75 12.5 14.4482 12.5 15.3125V31.7188C12.5 33.877 14.248 35.625 16.4062 35.625H35.9375C36.8018 35.625 37.5 34.9268 37.5 34.0625C37.5 33.1982 36.8018 32.5 35.9375 32.5H16.4062C15.9766 32.5 15.625 32.1484 15.625 31.7188V15.3125ZM20.3125 29.375H34.375C35.2393 29.375 35.9375 28.6768 35.9375 27.8125V24.4824C35.9375 24.1113 35.8057 23.75 35.5615 23.4668L32.3486 19.7168C31.7578 19.0234 30.7031 18.9844 30.0586 19.6289L29.0332 20.6543C28.5449 21.1426 27.7441 21.1035 27.3047 20.5762L25.3906 18.2812C24.7754 17.5439 23.6475 17.5293 23.0127 18.252L19.1357 22.6855C18.8867 22.9688 18.75 23.335 18.75 23.7158V27.8174C18.75 28.6816 19.4482 29.3799 20.3125 29.3799V29.375Z" fill="white"/>
                            </svg>
                            <div className="text-cart">
                                <span className="text1">Overdue</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        <section className="risk-summary">
            <Row gutter={16}>
                <Col span={6} push={18}>
                    <div className="main-risk-treatment-category">
                        <div className="header">
                            <h2 className="title">Impact Risk Treatment Category</h2>
                        </div>
                        <div className="chat-content">
                            <DoughnutChart />
                        </div>
                    </div>
                </Col>
                <Col span={18} pull={6}>
                    <div className="header">
                        <h2 className="title">Risk Summary</h2>
                    </div>
                    <div className="table-content">
                        <Table
                            columns={columns}
                            dataSource={data}
                            // pagination={{
                            //     pageSize: 50,
                            // }}
                            scroll={{
                                y: 240,
                            }}
                            footer={() => (
                                <div className="main-footer">
                                    <Button className="btn-pre">Previous</Button>
                                    <div className="pagination-footer">
                                        <ul className="pagination">
                                            <li>Page</li>
                                            <li><a href="/#">1</a></li>
                                            <li>of</li>
                                            <li><a href="/#">10</a></li>
                                        </ul>
                                    </div>
                                    <Button className="btn-next">Next</Button>
                                </div>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        </section>
        <section className="risk-treatment-detail">
            <div className="main-table-detail">
                <div className="header">
                    <h2 className="title">Impact Risk Treatment Details</h2>
                    <div className="btn-right">
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select category"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select divisions"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Select
                            showSearch
                            style={{
                            }}
                            placeholder="Select status"
                            options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            ]}
                        />
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67"/>
                            </svg>More Filters
                        </Button>
                    </div>
                </div>
                <div className="table-detail">
                    <Table
                    dataSource={dataDetail}
                    columns={columnsDetail}
                    rowKey="key"
                    className="striped-table" 
                    />
                </div>
            </div>
        </section>
        <section className="risk-treatment-status"></section>
    </div>)
 }