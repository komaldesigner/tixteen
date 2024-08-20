import React, { useState } from 'react';
// import './style.css';

function PlansComponent() {
    const [contentCategories, setContentCategories] = useState([
        { id: 1, contentname: 'Category 1' },
        { id: 2, contentname: 'Category 2' },
        { id: 3, contentname: 'Category 3' }
    ]);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (categoryId) => {
        setActiveTab(categoryId);
    };

    return (
        <div className="bgimg">
            <div className="minhed">
                <h2>PLANS</h2>
                <h3>Select a best suitable plan for your ad campaign</h3>
            </div>

            <ul className="tabs plancontentcattabscontnr" data-tabgroup="first-tab-group">
                {contentCategories.map((category) => (
                    <li key={category.id} style={{ listStyle: 'none', position: 'relative', marginTop: '15px' }}>
                        <a href={`#tab${category.id}`} className={`mentab ${activeTab === category.id ? 'active' : ''}`} onClick={() => handleTabClick(category.id)}>
                            <div className="planactvarrow"><i className="fas fa-arrow-down"></i></div>
                            <div className="btn btn-danger prclsttabsbtndes">
                                <span className="plancontentcattabs"><b>{category.contentname}</b></span>
                            </div>
                        </a> &nbsp; &nbsp;
                    </li>
                ))}
            </ul>

            <div id="first-tab-group" className="tabgroup">
                {contentCategories.map((category) => (
                    <div key={category.id} id={`tab${category.id}`} style={{ display: activeTab === category.id ? 'block' : 'none' }}>
                        <div className="hedbar">
                            <span>Plan Category Name</span>
                        </div>

                        <div className="matimg">
                            <div className="owl-carousel owl-theme" style={{ width: '100%' }}>
                                {/* Dummy plans for each category */}
                                {[1, 2, 3].map((planId) => (
                                    <div key={planId} className="mtara">
                                        <div className="confnt">
                                            <h2>Plan Name {planId}</h2>
                                            <h3><b>₹100</b>/-</h3>
                                            <form method="POST">
                                                <input type="hidden" name="planid" value={planId} />
                                                <input type="submit" name="addtocart" value="Add To Cart" style={{ padding: '0%' }} />
                                            </form>
                                        </div>
                                        <div className="row gap">
                                            <div className="col-8">
                                                <div className="smlimg">
                                                    <h2><img src="..\assets\img\person.png" alt="person" />Total Influencers</h2>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="lftno">
                                                    <h2>10</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row gap">
                                            <div className="col-8">
                                                <div className="smlimg">
                                                    <h3>10 Influencers</h3>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="smlimg">
                                                    <h3>Level 1 (100)</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row gap">
                                            <div className="col-8">
                                                <div className="smlimg">
                                                    <h3>10 Influencers</h3>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="smlimg">
                                                    <h3>Level 1 (100)</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row gap">
                                            <div className="col-8">
                                                <div className="smlimg">
                                                    <h3><b>Average Followers Base</b></h3>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="smlimg">
                                                    <h3><b>1000</b></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlansComponent;
