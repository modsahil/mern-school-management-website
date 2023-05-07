import React from 'react'
import '../components/fee/fee.css'
import Layout from '../components/layout/Layout'
import PAYIMAGE from '../Assests/pay.jpg'

const Fee = () => {
  return (
    <Layout>
      <div className="fees">
        <h4>Pay Fee</h4>
        <div className="box">
          <div className="box-content">
            <img src={PAYIMAGE} alt="" className='pay-image' />

            <ul className="payinfo">
              <li><p>In case of any problem / query related to online fee payment, parents can contact at : +91 004278054</p></li>
              <li><p>Click on tab Pay Online Fee  available on the school website’s Home Page - http://davsawang.in</p></li>
              <li><p>Click on PAY ONLINE NOW  tab available at the bottom of the instructions.</p></li>
              <li><p>To login use Admission Number of your ward as User Id and Date of birth as password.</p></li>
              <li><p>Select the Month you want to pay.</p></li>
              <li><p>Students fee details will be displayed.</p></li>
              <li><p>Before Click on PAY NOW button Please check all the details of the student.</p></li>
              <li><p>Select the desired option for fee payment i.e. Debit Card / Credit Card / Internet Banking etc.</p></li>
              <li><p>Click on PAY NOW button.</p></li>
              <li><p>After processing Fee Receipt will be generated.</p></li>
              <li><p>Parents can print the receipt or can check the paid fee from PAID FEE link (available on top left of the webpage).</p></li>
              <li><p>Logout  the account from the link available on top right of the screen.</p></li>
              <li className="note"><p><span>Note:</span> *Please checfonwk the fee description carefully before payment, incase you make payment and do not get the receipt due to net connectivity, kindly wait for 24 hours for automatically Re-generation of receipt.</p></li>
            </ul>
            <a href="#" className="pay-btn">Pay Now</a>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Fee