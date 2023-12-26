import React from "react";
import { 
    Select,
    Col,
    Row,
    Table,
    Button
} from "antd";
import DoughnutChart from "./doughnutChart";
import { 
    faChartArea, 
    faArrowDown, 
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    Category <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'category',
            key: 'category',
        },
        {
            title:     (
                <span>
                    Information <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'information',
            key: 'information',
        },
        {
            title:     (
              <span>
                    Remarks <FontAwesomeIcon icon={faArrowDown} />
              </span>
            ),
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title:     (
              <span>
                  Focal Point <FontAwesomeIcon icon={faArrowDown} />
              </span>
            ),
            dataIndex: 'focal_point',
            key: 'focal_point',
        },
          {
            title:     (
                <span>
                    Cost (USD) <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'cost_usd',
            key: 'cost_usd',
          },
          {
            title:     (
                <span>
                    Due Date <FontAwesomeIcon icon={faArrowDown} />
                </span>
            ),
            dataIndex: 'due_date',
            key: 'due_date',
          },
          {
            title:     (
                <span>
                    Status <FontAwesomeIcon icon={faArrowDown} />
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
                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <div className='icon chart1'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
                            <div className="text-cart">
                                <span className="text1">Done</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <div className='icon chart2'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
                            <div className="text-cart">
                                <span className="text1">Cancelled</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <div className='icon chart3'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
                            <div className="text-cart">
                                <span className="text1">Not Started</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4} span={6}>
                        <div className="cart-content">
                            <div className='icon chart4'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
                            <div className="text-cart">
                                <span className="text1">In Progress</span>
                                <span className="text2">560</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4}>
                        <div className="cart-content">
                            <div className='icon chart5'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
                            <div className="text-cart">
                                <span className="text1">Near Due Date</span>
                                <span className="text2">150</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={4} xl={4} xxl={4}>
                        <div className="cart-content">
                            <div className='icon chart6'>
                                <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                            </div>
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
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={24} lg={18}>
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
                <Col xs={24} sm={24} md={24} lg={6}>
                    <div className="main-risk-treatment-category">
                        <div className="header">
                            <h2 className="title">Impact Risk Treatment Category</h2>
                        </div>
                        <div className="chat-content">
                            <DoughnutChart />
                        </div>
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
                        <Button className="btn-bar-filter">
                            <FontAwesomeIcon className='icon-bars-filter' icon={faBars} />More Filters
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