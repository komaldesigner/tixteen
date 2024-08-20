// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for API requests

// function Invoice() {
//     const [orderDetails, setOrderDetails] = useState({});
//     const [clientDetails, setClientDetails] = useState({});
//     const [invoiceDetails, setInvoiceDetails] = useState([]);
//     const [amountInWords, setAmountInWords] = useState('');
//     const orderId = new URLSearchParams(window.location.search).get('orderid');

//     useEffect(() => {
//         // Fetch order details from the server
//         const fetchData = async () => {
//             const response = await axios.get(`/api/orders/${orderId}`);
//             const data = response.data;
//             setOrderDetails(data.order);
//             setClientDetails(data.client);
//             setInvoiceDetails(data.invoiceDetails);
//             setAmountInWords(convertAmountToWords(data.order.total));
//         };

//         fetchData();
//     }, [orderId]);

//     // Function to convert amount to words
//     const convertAmountToWords = (amount) => {
//         const changeWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
//             "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//         const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//         const hereDigits = ["", "Hundred", "Thousand", "Lakh", "Crore"];
        
//         let num = Math.floor(amount);
//         let amountAfterDecimal = Math.round((amount - num) * 100);
//         let string = [];
//         let x = 0;

//         while (num > 0) {
//             let getDivider = (x === 2) ? 10 : 100;
//             let amount = Math.floor(num % getDivider);
//             num = Math.floor(num / getDivider);
//             x += getDivider === 10 ? 1 : 2;
//             if (amount) {
//                 let addPlural = (string.length && amount > 9) ? 's' : '';
//                 let amtHundred = (string.length === 1 && string[0]) ? ' and ' : '';
//                 string.push((amount < 21) ? changeWords[amount] + ' ' + hereDigits[string.length] + addPlural + ' ' + amtHundred
//                     : tensWords[Math.floor(amount / 10)] + ' ' + changeWords[amount % 10] + ' ' + hereDigits[string.length] + addPlural + ' ' + amtHundred);
//             } else {
//                 string.push(null);
//             }
//         }

//         const implodeToRupees = string.reverse().join('');
//         const getPaise = amountAfterDecimal > 0 ? "And " + (changeWords[Math.floor(amountAfterDecimal / 10)] + " " + changeWords[amountAfterDecimal % 10]) + ' Paise' : '';

//         return (implodeToRupees ? implodeToRupees + 'Rupees ' : '') + getPaise;
//     };

//     return (
//         <div className="invoice" id="generatePDF">
//             <div className="inclbrdr">
//                 <div className="tixteenimg">
//                     <img src="../assets/img/logo.png" alt="tixteen" />
//                 </div>
//                 <div className="invoicehdr">
//                     <h3>TAX INVOICE</h3>
//                 </div>
//                 <div className="invoicdeetal">
//                     <div className="row" style={{ alignItems: 'center' }}>
//                         <div className="col-6 invidttlbrdr">
//                             <div className="invoinum"></div>    
//                         </div>
//                         <div className="col-6">
//                             <div className="invoinum">
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <div className="invodat">
//                                             <p>Invoice Date</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-6">
//                                         <div className="invonumdttl">
//                                             <p>{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>  
//                         </div>
//                     </div>
//                 </div>
//                 <div className="inviocrecesndr">
//                     <div className="row">
//                         <div className="col-6" style={{ paddingRight: 0 }}>
//                             <div className="invoicereciver">
//                                 <div className="invirecehdr">
//                                     <h3>Details Of Receiver</h3>
//                                 </div>
//                                 <div className="invoicrcrdettail">
//                                     <div className="row">
//                                         <div className="col-6">
//                                             <div className="invodat">
//                                                 <p>Name</p>
//                                                 <p>Address</p>
//                                                 <br /><br />
//                                                 <p>Contact</p>
//                                                 <p>GSTIN</p>
//                                             </div>
//                                         </div>
//                                         <div className="col-6">
//                                             <div className="invonumdttl">
//                                                 <p>{clientDetails.ClientClientName}</p>
//                                                 <p>{clientDetails.ClientCity}, {clientDetails.ClientState}, {clientDetails.ClientNation}</p>
//                                                 <br /><br />
//                                                 <p>{clientDetails.Clientphone}</p>
//                                                 <p>{clientDetails.ClientGSTNo}</p>
//                                                 <br /><br />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-6" style={{ paddingLeft: 0 }}>
//                             <div className="invoicereciver">
//                                 <div className="invirecehdr">
//                                     <h3>Details Of Sender</h3>
//                                 </div>
//                                 <div className="invoicrcrdettail">
//                                     <div className="row">
//                                         <div className="col-6">
//                                             <div className="invodat">
//                                                 <p>Name</p>
//                                                 <p>Address</p>
//                                                 <br /><br />
//                                                 <p>Contact</p>
//                                                 <p>GSTIN</p>
//                                                 <p>State</p>
//                                                 <p>State Code</p>
//                                                 <br /><br />
//                                             </div>
//                                         </div>
//                                         <div className="col-6">
//                                             <div className="invonumdttl">
//                                                 <p>: Tixteen Pvt.Ltd.</p>
//                                                 <p>: SCF-61,BLOCK-F,BHAI RANDHIR SINGH NAGAR,Ludhiana, Punjab 141001</p>
//                                                 <p>: 9501900577</p>
//                                                 <p>: 03AAJCT2066K1Z9</p>
//                                                 <p>: Punjab</p>
//                                                 <p>: 03</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="invocprduammt">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Sno</th>
//                                 <th>Name Of Product/Service</th>
//                                 <th>HSN ACS</th>
//                                 <th>Qty</th>
//                                 <th>Rate</th>
//                                 <th>Taxable Amount</th>
//                                 <th>CGST Rate</th>
//                                 <th>CGST Amount</th>
//                                 <th>SGST Rate</th>
//                                 <th>SGST Amount</th>
//                                 <th>IGST Rate</th>
//                                 <th>IGST Amount</th>
//                                 <th>Total</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {invoiceDetails.map((item, index) => (
//                                 <React.Fragment key={index}>
//                                     <tr>
//                                         <td>1</td>
//                                         <td>{item.contentname}</td>
//                                         <td></td>
//                                         <td>{item.influencer}</td>
//                                         <td>{item.amt}</td>
//                                         <td>{item.amt}</td>
//                                         <td>0.00%</td>
//                                         <td>0</td>
//                                         <td>0.00%</td>
//                                         <td>0</td>
//                                         <td>18.00%</td>
//                                         <td>{item.taxamt}</td>
//                                         <td>{item.total}</td>
//                                     </tr>
//                                     <tr>
//                                         <td></td>
//                                         <td>TOTAL</td>
//                                         <td></td>
//                                         <td>{item.influencer}</td>
//                                         <td></td>
//                                         <td>{item.amt}</td>
//                                         <td></td>
//                                         <td>0</td>
//                                         <td></td>
//                                         <td>0</td>
//                                         <td>{item.total}</td>
//                                     </tr>
//                                 </React.Fragment>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="invoittl">
//                     <div className="row">
//                         <div className="col-6" style={{ paddingRight: 0 }}>
//                             <div className="invoittl1">
//                                 <p>Total Invoice Amount in Words:</p>
//                                 <p><b>{amountInWords}</b></p>
//                             </div>
//                         </div>
//                         <div className="col-6" style={{ paddingLeft: 0 }}>
//                             <div className="incttlamoutdttl">
//                                 <table>
//                                     <tbody>
//                                         <tr>
//                                             <td>Total Amount Before Tax</td>
//                                             <td>{orderDetails.amt}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Add CGST</td>
//                                             <td>0</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Add SGST</td>
//                                             <td>0</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Add IGST</td>
//                                             <td>18%</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Total GST</td>
//                                             <td>{orderDetails.taxamt}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Total Amount After Tax</td>
//                                             <td>{orderDetails.total}</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Final Amount</td>
//                                             <td>{orderDetails.total}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <div className="invoittl">
//                     <div className="row">
//                         <div className="col-8" style={{ paddingRight: 0 }}>
//                             <div className="invoicterm">
//                                 <p><b>PLEASE NOTE: IF THERE WILL BE ANY DELIVERY CHARGES OF PRODUCT FROM AMAZON THE BRAND WILL REFUND THE DELIVERY CHARGES COST.</b></p>
//                                 <p>Terms and Conditions</p>
//                                 <p>1. All disputes are subject to Ludhiana jurisdiction.</p>
//                                 <p>2. In case of Goods, our responsibility ceases once goods either delivered or handed over for transportation, save as otherwise mutually decided.</p>
//                                 <p>3. Interest will be automatically charged @36% on per annum basis, if the payment is not made within the 30 Days.</p>
//                                 <p>4. In case of any clarification or discrepancy, kindly let us know within 15 days of receipt of invoice, in case of no communication invoice shall be considered in order and accepted.</p>
//                             </div>
//                         </div>
//                         <div className="col-4" style={{ paddingLeft: 0 }}>
//                             <div className="invoicterm2">
//                                 <p><b>BANK DETAILS</b></p>
//                                 <p>BANK NAME: ICICI BANK</p>
//                                 <p>ACCOUNT NAME: TIXTEEN PRIVATE LIMITED</p>
//                                 <p>ACCOUNT NUMBER: 064205001254</p>
//                                 <p>IFSC CODE: ICIC0000642</p>
//                                 <br /><br />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <div className="invoittl">
//                     <div className="invirecehdr">
//                         <h3>Certificate</h3>
//                     </div>
//                     <div className="invoicterm">
//                         <p>Certified that the particulars given above are true and correct, and, the amount indicated represents the price, the receiver has actually charged and that there is no flow of additional consideration directly or indirectly in relation to goods or services.</p>
//                         <br /><br /><br /><br /><br /><br />
//                         <div className="invoicseign">
//                             <div className="image">
//                                 <img src="../assets/Stamp and Sign.png" alt="Stamp and Sign" />
//                             </div>
//                             <p>Authorized Signatory</p>
//                             <p>This is a system-generated Invoice, hence doesn't require a physical signature or stamp.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Invoice;


import React from 'react';
import "../../../styles/brand/invoice/Invoice.css";

function Invoice() {
    // Dummy data to simulate fetched data
    const orderDetails = {
        invoiceNumber: 'TXT222302',
        invoiceDate: new Date().toLocaleDateString('en-IN'),
        client: {
            name: 'Client Name',
            address: 'Client Address',
            city: 'Client City',
            state: 'Client State',
            nation: 'Client Nation',
            phone: 'Client Phone',
            gstNo: 'Client GSTIN'
        },
        items: [
            {
                sno: 1,
                name: 'Product/Service Name',
                hsn: '',
                qty: 10,
                rate: 500,
                taxableAmount: 5000,
                cgstRate: 0,
                cgstAmount: 0,
                sgstRate: 0,
                sgstAmount: 0,
                igstRate: 18,
                igstAmount: 900,
                total: 5900
            }
        ],
        amt: 5000,
        taxamt: 900,
        total: 5900
    };

    // Function to convert amount to words (simplified version)
    const convertAmountToWords = (amount) => {
        const words = [
            '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
            'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
        ];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        const scales = ['', 'Thousand', 'Million', 'Billion'];

        let start = 0, end = amount.toString().length;
        let word = '';
        let chunk = parseInt(amount.toString().substring(start, end), 10);

        if (chunk) {
            let chunkStr = '';
            let hundreds = Math.floor(chunk / 100);
            chunk -= hundreds * 100;
            let tensUnits = chunk;

            if (hundreds) {
                chunkStr += words[hundreds] + ' Hundred ';
            }
            if (tensUnits) {
                if (tensUnits < 20) {
                    chunkStr += words[tensUnits];
                } else {
                    chunkStr += tens[Math.floor(tensUnits / 10)];
                    if (tensUnits % 10) {
                        chunkStr += '-' + words[tensUnits % 10];
                    }
                }
            }
            word = chunkStr + ' Rupees';
        }
        return word;
    };

    const amountInWords = convertAmountToWords(orderDetails.total);

    return (
        <div className="invoice" id="generatePDF">
            <div className="inclbrdr">
                <div className="tixteenimg">
                    <img src="../assets/img/logo.png" alt="tixteen" />
                </div>
                <div className="invoicehdr">
                    <h3>TAX INVOICE</h3>
                </div>
                <div className="invoicdeetal">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-6 invidttlbrdr">
                            <div className="invoinum">
                                <div className="invodat">
                                    <p>Invoice Number</p>
                                </div>
                                <div className="invonumdttl">
                                    <p>{orderDetails.invoiceNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="invoinum">
                                <div className="invodat">
                                    <p>Invoice Date</p>
                                </div>
                                <div className="invonumdttl">
                                    <p>{orderDetails.invoiceDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inviocrecesndr">
                    <div className="row">
                        <div className="col-6" style={{ paddingRight: 0 }}>
                            <div className="invoicereciver">
                                <div className="invirecehdr">
                                    <h3>Details Of Receiver</h3>
                                </div>
                                <div className="invoicrcrdettail">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="invodat">
                                                <p>Name</p>
                                                <p>Address</p>
                                                <p>Contact</p>
                                                <p>GSTIN</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="invonumdttl">
                                                <p>{orderDetails.client.name}</p>
                                                <p>{`${orderDetails.client.city}, ${orderDetails.client.state}, ${orderDetails.client.nation}`}</p>
                                                <p>{orderDetails.client.phone}</p>
                                                <p>{orderDetails.client.gstNo}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: 0 }}>
                            <div className="invoicereciver">
                                <div className="invirecehdr">
                                    <h3>Details Of Sender</h3>
                                </div>
                                <div className="invoicrcrdettail">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="invodat">
                                                <p>Name</p>
                                                <p>Address</p>
                                                <p>Contact</p>
                                                <p>GSTIN</p>
                                                <p>State</p>
                                                <p>State Code</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="invonumdttl">
                                                <p>: Tixteen Pvt.Ltd.</p>
                                                <p>: SCF-61, BLOCK-F, BHAI RANDHIR SINGH NAGAR, Ludhiana, Punjab 141001</p>
                                                <p>: 9501900577</p>
                                                <p>: 03AAJCT2066K1Z9</p>
                                                <p>: Punjab</p>
                                                <p>: 03</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invocprduammt">
                    <table>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Name Of Product/Service</th>
                                <th>HSN ACS</th>
                                <th>Qty</th>
                                <th>Rate</th>
                                <th>Taxable Amount</th>
                                <th>CGST Rate</th>
                                <th>CGST Amount</th>
                                <th>SGST Rate</th>
                                <th>SGST Amount</th>
                                <th>IGST Rate</th>
                                <th>IGST Amount</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.sno}</td>
                                    <td>{item.name}</td>
                                    <td>{item.hsn}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.rate}</td>
                                    <td>{item.taxableAmount}</td>
                                    <td>{item.cgstRate}%</td>
                                    <td>{item.cgstAmount}</td>
                                    <td>{item.sgstRate}%</td>
                                    <td>{item.sgstAmount}</td>
                                    <td>{item.igstRate}%</td>
                                    <td>{item.igstAmount}</td>
                                    <td>{item.total}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td>TOTAL</td>
                                <td></td>
                                <td>{orderDetails.items.reduce((sum, item) => sum + item.qty, 0)}</td>
                                <td></td>
                                <td>{orderDetails.amt}</td>
                                <td></td>
                                <td>0</td>
                                <td></td>
                                <td>0</td>
                                <td></td>
                                <td>0</td>
                                <td>{orderDetails.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="invoittl">
                    <div className="row">
                        <div className="col-6" style={{ paddingRight: 0 }}>
                            <div className="invoittl1">
                                <p>Total Invoice Amount in Words:</p>
                                <p><b>{amountInWords}</b></p>
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: 0 }}>
                        <div className="incttlamoutdttl">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Total Amount Before Tax</td>
                                            <td>{orderDetails.amt}</td>
                                        </tr>
                                        <tr>
                                            <td>Add CGST</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Add SGST</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>Add IGST</td>
                                            <td>18%</td>
                                        </tr>
                                        <tr>
                                            <td>Total GST</td>
                                            <td>{orderDetails.taxamt}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Amount After Tax</td>
                                            <td>{orderDetails.total}</td>
                                        </tr>
                                        <tr>
                                            <td>Final Amount</td>
                                            <td>{orderDetails.total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="invoittl">
                    <div className="row">
                        <div className="col-8" style={{ paddingRight: 0 }}>
                            <div className="invoicterm">
                                <p><b>PLEASE NOTE: IF THERE WILL BE ANY DELIVERY CHARGES OF PRODUCT FROM AMAZON THE BRAND WILL REFUND THE DELIVERY CHARGES COST.</b></p>
                                <p>Terms and Conditions</p>
                                <p>1. All disputes are subject to Ludhiana jurisdiction.</p>
                                <p>2. In case of Goods, our responsibility ceases once goods either delivered or handed over for transportation, save as otherwise mutually decided.</p>
                                <p>3. Interest will be automatically charged @36% on per annumm basis, if the payment is not made within the 30 Days.</p>
                                <p>4. In case of any clarification or discrepancy, kindly let us know within 15 days of receipt of invoice, in case of no communication invoice shall be considered in order and accepted.</p>
                            </div>
                        </div>
                        <div className="col-4" style={{ paddingLeft: 0 }}>
                            <div className="invoicterm2">
                                <p><b>BANK DETAILS</b></p>
                                <p>BANK NAME: ICICI BANK</p>
                                <p>ACCOUNT NAME: TIXTEEN PRIVATE LIMITED</p>
                                <p>ACCOUNT NUMBER: 064205001254</p>
                                <p>IFSC CODE: ICIC0000642</p>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="invoittl">
                    <div className="invirecehdr">
                        <h3>Certificate</h3>
                    </div>
                    <div className="invoicterm">
                        <p>Certified that the particulars given above are true and correct, and, the amount indicated represents the price, the receiver has actually charged and that there is no flow of additional consideration directly or indirectly in relation to goods or services.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="invoicseign">
                            <div className="image">
                                <img src="../assets/Stamp and Sign.png" alt="Stamp and Sign" />
                            </div>
                            <p>Authorized Signatory</p>
                            <p>This is system generated Invoice, Hence doesn't require physical signature or stamp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
