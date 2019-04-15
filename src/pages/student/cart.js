import React, { Component } from 'react';
import { Table } from "reactstrap";
import ModalConfirmation from '../../components/ModalConfirmation';
import ModalInvoice from "../../components/ModalInvoice";


export default class cart extends Component {
  render() {
    return (
      <div className="sectio">
          <div className="box2"> 
                <h2 style={{textShadow: "-1px -2px 2px #233142", color:"white"}}> Class Cart</h2>
          </div>

          <div className="box1"> 
                <Table bordered className="table">
                            <thead style={{backgroundColor:"#4f9da6", borderRadius:"3%"}}>
                              <tr>
                                <th>NO</th>
                                <th>ID</th>
                                <th>CLASS NAME</th>
                                <th>MENTOR</th>
                                <th>PRICE</th>
                                <th>PAYMENT</th>
                              </tr>
                            </thead>
                            
                                <tbody style={{backgroundColor:"white"}}>
                                <tr>
                                  <th scope="row"> </th>
                                  <td> 123456789</td>
                                  <td> testing</td>
                                  <td> testing</td>
                                  <td> testing</td>
                                  <td> <ModalConfirmation InitialModalState={false}/></td>
                                </tr>
                              </tbody>  

                              <tbody style={{backgroundColor:"white"}}>
                                <tr>
                                  <th scope="row"> </th>
                                  <td> 987654421</td>
                                  <td> testing</td>
                                  <td> testing</td>
                                  <td> testing</td>
                                  <td> <ModalInvoice InitialModalState={false}/></td>
                                </tr>
                              </tbody>  
                    </Table>
          </div>
      </div>
    )
  }
}
