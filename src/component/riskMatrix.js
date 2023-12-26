import { 
    Row,
    Col,
    Select,
    Table,
    Button
} from 'antd';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/style/risk_matrix.css';

const RiskMatrix = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const dataSource = [
        {
          key: '1',
          name: '5 - Almost Always',
          very_low: 'Medium Risk Count: 0',
          low: 'Significant Risk Count: 4',
          moderate: 'Significant Risk Count: 1',
          high: 'Very Significant Risk Count: 1',
          very_high: 'Very Significant Risk Count: 1',
        },
        {
            key: '2',
            name: '4 - Almost Always',
            very_low: 'Medium Risk Count: 0',
            low: 'Significant Risk Count: 4',
            moderate: 'Significant Risk Count: 1',
            high: 'Very Significant Risk Count: 1',
            very_high: 'Very Significant Risk Count: 1',
          },
          {
            key: '3',
            name: '3 - Almost Always',
            very_low: 'Medium Risk Count: 0',
            low: 'Significant Risk Count: 4',
            moderate: 'Significant Risk Count: 1',
            high: 'Very Significant Risk Count: 1',
            very_high: 'Very Significant Risk Count: 1',
          },
          {
            key: '4',
            name: '2 - Almost Always',
            very_low: 'Medium Risk Count: 0',
            low: 'Significant Risk Count: 4',
            moderate: 'Significant Risk Count: 1',
            high: 'Very Significant Risk Count: 1',
            very_high: 'Very Significant Risk Count: 1',
          },
          {
            key: '5',
            name: '1 - Almost Always',
            very_low: 'Medium Risk Count: 0',
            low: 'Significant Risk Count: 4',
            moderate: 'Significant Risk Count: 1',
            high: 'Very Significant Risk Count: 1',
            very_high: 'Very Significant Risk Count: 1',
          },
    ];
      
    const columns = [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '1 - Very Low',
          dataIndex: 'very_low',
          key: 'very_low',
        //   render: (text, record) => {
        //     // const customClassName = text > 25 ? 'custom-highlight' : ''; 
        //     return <span className="columns-color-green">{text}</span>;
        //   },
        },
        {
          title: '2 - Low',
          dataIndex: 'low',
          key: 'low',
        },
        {
            title: '3 - Moderate',
            dataIndex: 'moderate',
            key: 'moderate',
          },
          {
            title: '4 - High',
            dataIndex: 'high',
            key: 'high',
          },
          {
            title: '5 - Very High',
            dataIndex: 'very_high',
            key: 'very_high',
          },
    ];

    

    const columnsDetail = [
        {
            title: 'Risk ID',
            dataIndex: 'risk_id',
            key: 'risk_id',
        },
        {
            title: 'Event',
            dataIndex: 'event',
            key: 'event',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Directorate',
            dataIndex: 'directorate',
            key: 'directorate',
        },
        {
            title: 'Division',
            dataIndex: 'division',
            key: 'division',
        },
        {
            title: 'Inherent Risk Score',
            dataIndex: 'inherent_risk_score',
            key: 'inherent_risk_score',
        },
        {
            title: 'Residual Risk Score',
            dataIndex: 'residual_risk_score',
            key: 'residual_risk_score',
        },
    ];
    
    const dataDetail = [
        {
            key: '1',
            risk_id: 'RSK_GA_3_10',
            event: "-",
            department: '-',
            directorate: '-',
            division: '0.00',
            inherent_risk_score: '12/01/2023',
            residual_risk_score: '-',
        },
        {
            key: '2',
            risk_id: 'RSK_GA_3_10',
            event: "-",
            department: '-',
            directorate: '-',
            division: '0.00',
            inherent_risk_score: '12/01/2023',
            residual_risk_score: '-',
        },
        {
            key: '3',
            risk_id: 'RSK_GA_3_10',
            event: "-",
            department: '-',
            directorate: '-',
            division: '0.00',
            inherent_risk_score: '12/01/2023',
            residual_risk_score: '-',
        },
        {
            key: '4',
            risk_id: 'RSK_GA_3_10',
            event: "-",
            department: '-',
            directorate: '-',
            division: '0.00',
            inherent_risk_score: '12/01/2023',
            residual_risk_score: '-',
        },
    
    ];

    return(
        <div className="main-matrix">
            <section className="risk-matrix">
                <div className="header"> 
                    <h3 className="title">Risk Matrix</h3>
                </div>

                <div className='box-content'>
                    <Row gutter={16}>
                        <Col span={12}>
                            <div className='box'>
                                <div className='icon chart1'>
                                    <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                                </div>
                                <div className='text'>
                                    <span>Number Of Risk With Rating</span>
                                    <h3>150</h3>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div className='box'>
                                <div className='icon chart2'>
                                    <FontAwesomeIcon className='icon-chart-area' icon={faChartArea} />
                                </div>
                                <div className='text'>
                                    <span>Number Of Risk With Rating</span>
                                    <h3>150</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className='residual-risk-matrix'>
                <div className='header'>
                    <h3 className='title'>Residual Risk Matrix</h3>
                    <Select
                        defaultValue="Inherent Risk Matrix"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                            {
                                value: 'Inherent Risk Matrix',
                                label: 'Inherent Risk Matrix',
                            },
                        ]}
                    />
                </div>

                <div className='teable-content'>
                    <Table dataSource={dataSource} columns={columns} pagination={false}/>
                </div>
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
        </div>
    );
}

export default RiskMatrix;