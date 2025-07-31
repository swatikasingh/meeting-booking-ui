import React, { useState } from 'react';
import { Table, Tag, Button, Space, Card, Typography, Modal, message } from 'antd';
import { ArrowLeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const MyReservationStatus = ({ onBack }) => {
  const [reservations, setReservations] = useState([
    {
      key: '1',
      status: 'Confirmed',
      topic: 'DSM',
      place: 'Phoenix',
      floor: '5',
      room: 'London',
      date: 'July 27 2025',
      daysOfWeek: 'Wed, Thu, Fri',
      time: '11:00 to 11:30',
      type: 'General Meeting',
      modify: 'Modify',
      cancel: 'Cancel'
    },
    {
      key: '2',
      status: 'Confirmed',
      topic: 'DSM',
      place: 'Phoenix',
      floor: '5',
      room: 'London',
      date: 'July 27 2025',
      daysOfWeek: 'Wed, Thu, Fri',
      time: '11:00 to 11:30',
      type: 'General Meeting',
      modify: 'Modify',
      cancel: 'Cancel'
    },
    {
      key: '3',
      status: 'Confirmed',
      topic: 'DSM',
      place: 'Phoenix',
      floor: '5',
      room: 'London',
      date: 'July 27 2025',
      daysOfWeek: 'Wed, Thu, Fri',
      time: '11:00 to 11:30',
      type: 'General Meeting',
      modify: 'Modify',
      cancel: 'Cancel'
    }
  ]);

  const handleModifyReservation = (record) => {
    message.info(`Modify functionality for reservation ${record.key} would open here`);
  };

  const handleCancelReservation = (record) => {
    Modal.confirm({
      title: 'Cancel Reservation',
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to cancel the reservation for ${record.topic} in ${record.room}?`,
      okText: 'Yes, Cancel',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setReservations(prev => prev.filter(r => r.key !== record.key));
        message.success('Reservation cancelled successfully');
      },
    });
  };

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => (
        <Tag color={status === 'Confirmed' ? 'blue' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
    },
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
    },
    {
      title: 'Floor',
      dataIndex: 'floor',
      key: 'floor',
    },
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Days of Week',
      dataIndex: 'daysOfWeek',
      key: 'daysOfWeek',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Modify',
      dataIndex: 'modify',
      key: 'modify',
      width: 80,
      render: (_, record) => (
        <Button 
          type="link" 
          size="small" 
          style={{ color: '#1890ff' }}
          onClick={() => handleModifyReservation(record)}
        >
          Modify
        </Button>
      ),
    },
    {
      title: 'Cancel',
      dataIndex: 'cancel',
      key: 'cancel',
      width: 80,
      render: (_, record) => (
        <Button 
          type="link" 
          size="small" 
          style={{ color: '#ff4d4f' }}
          onClick={() => handleCancelReservation(record)}
        >
          Cancel
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#f5f5f5', minHeight: '100vh' }}>
      <Card>
        <div style={{ marginBottom: '24px' }}>
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={onBack}
            style={{ marginBottom: '16px' }}
          >
            Back
          </Button>
          <Title level={3} style={{ margin: 0 }}>
            📅 Book a Meeting Room
          </Title>
          <div style={{ color: '#666', marginTop: '8px' }}>
            My Workspace &gt; Book a Meeting Room &gt; My Reservation
          </div>
        </div>
        
        <Title level={4} style={{ marginBottom: '16px' }}>
          My Reservation Status
        </Title>
        
        <Table
          columns={columns}
          dataSource={reservations}
          pagination={false}
          size="small"
          scroll={{ x: 1200 }}
          style={{
            background: 'white',
            borderRadius: '8px'
          }}
        />
      </Card>
    </div>
  );
};

export default MyReservationStatus;