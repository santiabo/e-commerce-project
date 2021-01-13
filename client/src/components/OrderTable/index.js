import React, { useEffect, useState } from 'react';
import { getAllOrdersAction, setFinalizedOrderAction, setConfirmOrderAction, setDeliveredOrderAction, setPreparedOrderAction, setRejectedOrderAction, setSendOrderAction } from '../../redux/actions/order';
import { useHistory } from 'react-router';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from './Select';
import style from './index.module.scss';

import Button from '../Button';

import { ButtonsWrapper } from './styles';
import { Link } from 'react-router-dom';

const TableOrder = ({ getAllOrdersAction, setFinalizedOrderAction, setConfirmOrderAction, setDeliveredOrderAction, setPreparedOrderAction, setRejectedOrderAction, setSendOrderAction }) => {
  const history = useHistory();


  useEffect(() => {
    getAllOrdersAction() 
  }, [getAllOrdersAction]);

  // useEffect(() => {
  //   getAllOrdersAction();
  // }, [initialState.orderReadOnly,
  //     initialState.orderUpdate,
  //     initialState.orderDetail
  // ]);

  let orders = useSelector(state=> state.order.allOrders)

  const handleChange = async (e, id) => {
    let resp = window.confirm(`Desea cambiar el estado de la orden a ${e.target.value}`);

    if (resp === true) {
      switch (e.target.value) {
        case 'DELIVERED':
          await setDeliveredOrderAction(id)
          break;
        case 'CREATED':
          await setConfirmOrderAction(id)
          break;
        case 'SEND':
          await setSendOrderAction(id)
          break;
        case 'CANCELLED':
          await setRejectedOrderAction(id)
          break;
        case 'PROCESSING':
          await setPreparedOrderAction(id)
          break;
        case 'COMPLETED':
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
      <h2 id='prodList' class="alert alert-info">Orders List</h2>
      <div id='ordTabl'>
        <Link to='/admin' >
          <button className="btn btn-info">Products</button>
        </Link>
        <Link to='/users' >
          <button className="btn btn-info">Users</button>
        </Link>
      </div>
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
            orders.map(({ id, user, status, createdAt, updatedAt, address}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{user.email}</td>
                <td>{status}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
                <td>{new Date(updatedAt).toLocaleString()}</td>

                
                <td style={{ display: "flex" }}>
                <ButtonsWrapper>
                  <Button onClick={() => history.push(`/orders/${id}`)}>
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
                <td>17/12/2020</td> */}
                {/* <td>1</td>
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
  return bindActionCreators({ getAllOrdersAction, setFinalizedOrderAction, setConfirmOrderAction, setDeliveredOrderAction, setPreparedOrderAction, setRejectedOrderAction, setSendOrderAction } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOrder);