


import React, { useEffect } from 'react';
import "../../../styles/brand/Campaign/campaignTimeline.css";

const CampaignTimeline = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const statid = urlParams.get('statid') || '1';
    document.querySelector(`#c${statid}`).click();
  }, []);

  return (
    <div className="influtimelinesum">
      <h3>Projects Timeline</h3>
      <div className="prjtmlsumbox">
        <div className="prjtmlsumboxhdng">
          <div className="row">
            <div className="col-sm-8 col-12">
              <div style={{ display: 'flex' }}>
                <div className="prjtmlnhdingitem filter-button" id="c1" data-filter="c1">
                  <span>
                    My Campaigns
                    <div className="prjtmlnbtmdes filter c1"></div>
                  </span>
                </div>
                <div className="prjtmlnhdingitem filter-button" id="c2" data-filter="c2">
                  <span>
                    Completed
                    <div className="prjtmlnbtmdes filter c2"></div>
                  </span>
                </div>
                <div className="prjtmlnhdingitem filter-button" id="c3" data-filter="c3">
                  <span>
                    Rejected
                    <div className="prjtmlnbtmdes filter c3"></div>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12">
              <div className="prjtmcolor">
                <div className="prjtmclrinnr"></div><span>Pending&nbsp;</span>
                <div className="prjtmclrinnr2"></div><span>Reject&nbsp;</span>
                <div className="prjtmclrinnr3"></div><span>In-process&nbsp;</span>
                <div className="prjtmclrinnr4"></div><span>Complete&nbsp;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="prjtmlsumboxcntnt filter c1" id="new">
          <div className="influgllry2">
            <div className="row">
              <span id="ttlsrlnum1" style={{ marginBottom: '-15px' }}>1</span>
              <div className="col-lg-12" style={{ textAlign: 'right' }}>
                <a href="?deletecampaign=123&camprow=1"><span style={{ cursor: 'pointer' }}><i className="fas fa-trash"></i></span></a>
              </div>
              <div className="col-lg-8">
                <div className="bodrboxpjt">
                  <div className="row inrdata">
                    <div className="col-7">
                      <h4>Campaign id :</h4>
                    </div>
                    <div className="col-5">
                      <h4>123</h4>
                    </div>
                    <div className="col-7">
                      <h4>Campaign Name :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Test Campaign</h4>
                    </div>
                    <div className="col-7">
                      <h4>Created Date :</h4>
                    </div>
                    <div className="col-5">
                      <h4>2024-05-28</h4>
                    </div>
                    <div className="col-7">
                      <h4>Influencers :</h4>
                    </div>
                    <div className="col-5">
                      <h4>5</h4>
                    </div>
                    <div className="col-7">
                      <h4>Product :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Test Product</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rgtboxboder">
                  <div className="row otrbder" style={{ borderBottom: 'none' }}>
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Level</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Influencers</h2>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <a href="projectdetaillevel.php?campnum=123&level=1">
                    <div className="row otrbder">
                      <div className="col-6">
                        <div className="rtdata">
                          <h3>Level-1</h3>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="utrbg">
                          <div className="lfdata">
                            <h3>3</h3>
                            <div className="lftxt"><span>Influencers</span></div>
                          </div>
                          <div className="plnbox">
                            <div style={{ backgroundColor: '#c1c1c1', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>50%</div>
                            <div style={{ backgroundColor: '#ffc09f', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                            <div style={{ backgroundColor: '#ffee93', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                            <div style={{ backgroundColor: '#adf7b6', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>10%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <form method="POST" id="frmcampaigncomplete">
                  <input type="hidden" name="_campaignid" value="123" />
                  <input type="submit" value="campaign complete" className="campaigncomplete" onClick={() => alert('Campaign completed')} />
                </form>
              </div>
            </div>
            <br /><hr />
          </div>
        </div>

        <div className="prjtmlsumboxcntnt filter c2" id="new">
          <div className="influgllry2">
            <div className="row">
              <div className="col-md-8">
                <div className="bodrboxpjt">
                  <div className="row inrdata">
                    <div className="col-7">
                      <h2>Campaign id :</h2>
                    </div>
                    <div className="col-5">
                      <h4>124</h4>
                    </div>
                    <div className="col-7">
                      <h4>Campaign Name :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Completed Campaign</h4>
                    </div>
                    <div className="col-7">
                      <h4>Created Date :</h4>
                    </div>
                    <div className="col-5">
                      <h4>2024-05-28</h4>
                    </div>
                    <div className="col-7">
                      <h4>Influencers :</h4>
                    </div>
                    <div className="col-5">
                      <h4>7</h4>
                    </div>
                    <div className="col-7">
                      <h4>Product :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Completed Product</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rgtboxboder">
                  <div className="row">
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Influencers Level</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Influencers Opted</h2>
                      </div>
                    </div>
                    <a href="projectdetaillevel.php?campnum=124&level=2">
                      <div className="row otrbder">
                        <div className="col-6">
                          <div className="rtdata">
                            <h3>Level-2</h3>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="utrbg">
                            <div className="lfdata">
                              <h3>4</h3>
                              <div className="lftxt"><span>Influencers</span></div>
                            </div>
                            <div className="plnbox">
                              <div style={{ backgroundColor: '#c1c1c1', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>50%</div>
                              <div style={{ backgroundColor: '#ffc09f', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                              <div style={{ backgroundColor: '#ffee93', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                              <div style={{ backgroundColor: '#adf7b6', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>10%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="prjtmlsumboxcntnt filter c3" id="new">
          <div className="influgllry2">
            <div className="row">
              <div className="col-md-8">
                <div className="bodrboxpjt">
                  <div className="row inrdata">
                    <div className="col-7">
                      <h2>Campaign id :</h2>
                    </div>
                    <div className="col-5">
                      <h4>125</h4>
                    </div>
                    <div className="col-7">
                      <h4>Campaign Name :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Rejected Campaign</h4>
                    </div>
                    <div className="col-7">
                      <h4>Created Date :</h4>
                    </div>
                    <div className="col-5">
                      <h4>2024-05-28</h4>
                    </div>
                    <div className="col-7">
                      <h4>Influencers :</h4>
                    </div>
                    <div className="col-5">
                      <h4>2</h4>
                    </div>
                    <div className="col-7">
                      <h4>Product :</h4>
                    </div>
                    <div className="col-5">
                      <h4>Rejected Product</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rgtboxboder">
                  <div className="row">
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Influencers Level</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rtdata">
                        <h2>Influencers Opted</h2>
                      </div>
                    </div>
                    <a href="projectdetaillevel.php?campnum=125&level=3">
                      <div className="row otrbder">
                        <div className="col-6">
                          <div className="rtdata">
                            <h3>Level-3</h3>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="utrbg">
                            <div className="lfdata">
                              <h3>1</h3>
                              <div className="lftxt"><span>Influencers</span></div>
                            </div>
                            <div className="plnbox">
                              <div style={{ backgroundColor: '#c1c1c1', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>50%</div>
                              <div style={{ backgroundColor: '#ffc09f', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                              <div style={{ backgroundColor: '#ffee93', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>20%</div>
                              <div style={{ backgroundColor: '#adf7b6', textAlign: 'right', paddingTop: '15px', paddingBottom: '10px' }}>10%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTimeline;
