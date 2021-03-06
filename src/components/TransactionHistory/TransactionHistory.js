import React from 'react';
// import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {
    return (
        <>
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
        
          <tbody>
              {items.map(el => {
                  const {id, type, amount, currency} = el;
              return(
                    <tr key ={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                  </tr>
              );
              })}
                
          </tbody>
        </table>
        </>
            );
};


// TransactionHistory.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes,shape({
//             id: PropTypes.number.isRequred,
//             type: PropTypes.string,
//             amount: PropTypes.number.isRequred,
//             currency: PropTypes.number,
//         }).isRequired,
//     ),
// };


export default TransactionHistory;