import React, { useEffect, useState } from 'react';
import * as actionsOrders from '../../redux/actions/order';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initialState from '../../redux/reducers/orderReducer';
import Select from './Select';
import style from './index.module.scss';

import Button from '../Button';

import { ButtonsWrapper } from './styles';

const TableOrder = ({ state, getAllOrdersAction, setFinalizedOrderAction, setConfirmOrderAction, setDeliveredOrderAction, setPreparedOrderAction, setRejectOrderAction, setSendOrderAction }) => {
  const history = useHistory();

  useEffect(() => {
    getAllOrdersAction()
  }, []);

  useEffect(() => {
    getAllOrdersAction();
  }, [initialState.orderReadOnly,
      initialState.orderUpdate,
      initialState.orderDetail
  ]);

  let orders = initialState.allOrders;

  const handleChange = async (e, id, address) => {
    let resp = window.confirm(`Desea cambiar el estado de la orden a ${e.target.value}`);

    if (resp === true) {
      switch (e.target.value) {
        case 'DELIVERED':
          await setDeliveredOrderAction(id, address)
          break;
        case 'CONFIRMED':
          await setConfirmOrderAction(id, address)
          break;
        case 'SEND':
          await setSendOrderAction(id)
          break;
        case 'REJECTED':
          await setRejectOrderAction(id)
          break;
        case 'PREPARING':
          await setPreparedOrderAction(id, address)
          break;
        case 'FINALIZED':
          await setFinalizedOrderAction(id)
          break;
        default:
          break;
      }
    }
  }

  const [filter, setFilter] = useState('id');
  const [order, setOrder] = useState(true);

  const handleFilter = (e) => {
    e.preventDefault();
    setOrder(!order);
    setFilter(e.target.name);
    if (filter === 'status') {
      orders = order ? orders.sort((a, b) => a[filter].toUpperCase() > b[filter].toUpperCase() ? 1 : -1) : orders.sort((a, b) => a[filter].toUpperCase() < b[filter].toUpperCase() ? 1 : -1);
    } else {
      orders = order ? orders.sort((a, b) => a[filter] > b[filter] ? 1 : -1) : orders.sort((a, b) => a[filter] < b[filter] ? 1 : -1);
    }
  }

  return (
    <div className="App">
      <h2>Order Table</h2>
      <section>
        <table className = {style.table}>
          <thead>
            <tr>
              <th style={{ width: '3rem' }}><ButtonsWrapper><Button className={ filter === 'id' ? order ? style.asc : style.des  : null } name = 'id' onClick = {handleFilter}>ID</Button></ButtonsWrapper></th>
              <th><ButtonsWrapper><Button className = { filter === 'user' ? order ? style.asc : style.des  : null } name = 'user' onClick = {handleFilter}>User</Button></ButtonsWrapper></th>
              <th><ButtonsWrapper><Button className = { filter === 'status' ? order ? style.asc : style.des  : null } name = 'status' onClick = {handleFilter}>Status</Button></ButtonsWrapper></th>
              <th><ButtonsWrapper><Button className = { filter === 'creation' ? order ? 'asc' : 'desc' : null } name = 'creation' onClick = {handleFilter}>Creation Date</Button></ButtonsWrapper></th>
              <th><ButtonsWrapper><Button className = { filter === 'update' ? order ? style.asc : style.des  : null } name = 'update' onClick = {handleFilter}>Modification Date</Button></ButtonsWrapper></th>
              <th style = {{width: '176px'}}></th>
            </tr>
          </thead>
          <tbody>
          {orders !== undefined &&
            orders.map(({ id, userId, status, createdAt, updatedAt, address}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{status}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
                <td>{new Date(updatedAt).toLocaleString()}</td>

                
                <td style={{ display: "flex" }}>
                <ButtonsWrapper>
                  <Button onClick={() => history.push(`/admin/orders/${id}`)}>
                  <i className="fas fa-search"></i>                
                </Button>
                </ButtonsWrapper>
                <Select status = {status} id = {id} handleChange = {handleChange} address = {address}/>
              </td>            
              </tr> 
            ))}
                {/* <td>1</td>
                <td>1</td>
                <td>En proceso</td>
                <td>16/12/2020</td>
                <td>17/12/2020</td>
                <td>1</td>
                <td>5</td>
                <td>Finalizado</td>
                <td>12/12/2020</td>
                <td>15/12/2020</td> */}
          </tbody>
        </table>
      </section>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    state: state.orders_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsOrders, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOrder);