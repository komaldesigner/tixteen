import React from 'react';
import "../../../styles/brand/invoice/InvoiceSummary.css";
const InvoiceSummary = () => {
  return (
    <div className="cartbanner1" style={{ padding: '8% 1% 8% 1%' }}>
      <div className="container">
        <div className="row" style={{ background: '#fff', padding: '0% 1%' }}>
          <div className="col-sm-10" style={{ paddingLeft: '0%' }}>
            <h4 style={{ fontSize: '23px', color: '#693110' }}>
              INVOICE SUMMARY &nbsp
            </h4>
          </div>
          <div className="col-sm-2" style={{ paddingLeft: '0%' }}>
            <a href="invoicedetprint.php?orderid=12345" target="blank">
              <div className="btn btn-warning">Print / Save</div>
            </a>
          </div>
        </div>

        <div className="ivoice">
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
                    <div className="row">
                      <div className="col-6">
                        <div className="invodat">
                          <p>Invoice No</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="invonumdttl">
                          <p>TXT222306</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="invoinum">
                    <div className="row">
                      <div className="col-6">
                        <div className="invodat">
                          <p>Invoice Date</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="invonumdttl">
                          <p>31-JULY-2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inviocrecesndr">
              <div className="row">
                <div className="col-6" style={{ paddingRight: '0%' }}>
                  <div className="invoicereciver">
                    <div className="invirecehdr">
                      <h3>Details Of Receiver</h3>
                    </div>
                    <div className="invoicrcrdettail">
                      <div className="row">
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Name</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:Kisra Beauty Co</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Address</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:04, Bhati Compound, Opp. Rehmatnagar Duplex, Near New Moti Bakery, Sikandar Market Road, Behrampura, Ahmedabad, 380028</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Contact</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:7096366202</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>GSTIN</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:24AVUPP9404A1ZH</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>State</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:Gujarat</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>State Code</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:24</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ paddingLeft: '0%' }}>
                  <div className="invoicereciver">
                    <div className="invirecehdr">
                      <h3>Details Of Sender</h3>
                    </div>
                    <div className="invoicrcrdettail">
                      <div className="row">
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Name</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>: Tixteen Pvt.Ltd.</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Address</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>: SCF-61,BLOCK-F,BHAI RANDHIR SINGH NAGAR,Ludhiana, Punjab 141001</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>Contact</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:9501900577</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>GSTIN</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:03AAJCT2066K1Z9</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>State</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:Punjab</h4>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="invodat">
                            <h4>State Code</h4>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="invonumdttl">
                            <h4>:03</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="invocprduammt">
              <table className="table table-bordered">
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
                  <tr>
                    <td>1</td>
                    <td>Service Handling Cost</td>
                    <td></td>
                    <td>10</td>
                    <td>84.7</td>
                    <td>847</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>18%</td>
                    <td>153</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="invoittl">
              <div className="row">
                <div className="col-6" style={{ paddingRight: '0%' }}>
                  <div className="invoittl1">
                    <p>Total Invoice Amount in Words:</p>
                    <p><b>ONE THOUSAND ONLY</b></p>
                  </div>
                </div>
                <div className="col-6" style={{ paddingLeft: '0%' }}>
                  <div className="incttlamoutdttl">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Total Amount Before Tax</td>
                          <td>847</td>
                        </tr>
                        <tr>
                          <td>CGST</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>SGST</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>IGST</td>
                          <td>153</td>
                        </tr>
                        <tr>
                          <td>Total GST</td>
                          <td>153</td>
                        </tr>
                        <tr>
                          <td>Final Amount</td>
                          <td>1000</td>
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
                <div className="col-8" style={{ paddingRight: '0%' }}>
                  <div className="invoicterm">
                    <p>Terms and Conditions</p>
                    <p>1. All disputes are subject to Ludhiana jurisdiction.</p>
                    <p>2. In case of Goods, our responsibility ceases once goods either delivered or handed over for
                      transportation, save as otherwise mutually decided.</p>
                    <p>3. Interest will be automatically charged @36% on per annum basis, if the payment is not made
                      within the 30 Days.</p>
                    <p>4. In case of any clarification or discrepancy, kindly let us know within 15 days of receipt of invoice, in
                      case of no communication invoice shall be considered in order and accepted.</p>
                  </div>
                </div>
                <div className="col-4" style={{ paddingLeft: '0%' }}>
                  <div className="invoicterm2">
                    <p><b>BANK DETAILS</b></p>
                    <p>BANK NAME: ICICI BANK</p>
                    <p>ACCOUNT NAME: TIXTEEN PRIVATE LIMITED</p>
                    <p>ACCOUNT NUMBER:064205001254</p>
                    <p>IFSC CODE:ICIC0000642</p>
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
                <p>Certified that the particulars given above are true and correct, and, the amount indicated represents the price, the receiver has actually charged and that there is no flow of
                  additional consideration directly or indirectly in relation to goods or services.</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="invoicseign">
                  <div className="image">
                    <img src="../assets/Stamp and Sign.png" alt="Signature" />
                  </div>
                  <p>Authorized Signatory</p>
                  <p>This is system generated Invoice, Hence doesn't require physical signature or stamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
