

import React, { useState, useEffect } from 'react';

// Dummy data for tickets
const dummyData = [
    { id: 1, TicketType: 'Type1', Subject: 'Subject1', Description: 'Description1', MemberType: 'Member1', CreationDate: '2022-01-01', fname: 'User1', File: 'file1.pdf', status: 'Ticket Created' },
    { id: 2, TicketType: 'Type2', Subject: 'Subject2', Description: 'Description2', MemberType: 'Member2', CreationDate: '2022-02-01', fname: 'User2', File: 'file2.pdf', status: '1' },
    { id: 3, TicketType: 'Type3', Subject: 'Subject3', Description: 'Description3', MemberType: 'Member3', CreationDate: '2022-03-01', fname: 'User3', File: 'file3.pdf', status: '0' },
    // Add more dummy data as needed
];

const TicketDetails = ({ userType, loginId }) => {
    const [newTickets, setNewTickets] = useState([]); // State for new tickets
    const [activeTickets, setActiveTickets] = useState([]); // State for active tickets
    const [closedTickets, setClosedTickets] = useState([]); // State for closed tickets
    const [filteredTickets, setFilteredTickets] = useState(dummyData); // State for filtered tickets
    const [activeFilter, setActiveFilter] = useState('all'); // State for active filter

    useEffect(() => {
        // Filter data based on userType and loginId (simulated)
        const filteredData = dummyData.filter(
            (ticket) => ticket.userId === loginId && ticket.MemberType === userType
        );
        setNewTickets(filteredData.filter((ticket) => ticket.status === 'Ticket Created'));
        setActiveTickets(filteredData.filter((ticket) => ticket.status === '1'));
        setClosedTickets(filteredData.filter((ticket) => ticket.status === '0'));
    }, [userType, loginId]); // Update data on userType or loginId change

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        switch (filter) {
            case 'new':
                setFilteredTickets(newTickets);
                break;
            case 'active':
                setFilteredTickets(activeTickets);
                break;
            case 'closed':
                setFilteredTickets(closedTickets);
                break;
            default:
                setFilteredTickets(dummyData);
                break;
        }
    };

return (
    <div className="influtimelinesum">
        <h3>Ticket Detail</h3>
        <div className="prjtmlsumbox">
            <div className="prjtmlsumboxhdng">
                <div className="row">
                    <div className="col-sm-9 col-12">
                        <div style={{ display: 'flex' }}>
                            {/* Filter buttons */}
                            <div
                                className={`prjtmlnhdingitem filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('all')}
                            >
                                <span>All<div className="prjtmlnbtmdes filter all"></div></span>
                            </div>
                            <div
                                className={`prjtmlnhdingitem filter-button ${activeFilter === 'new' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('new')}
                            >
                                <span>New<div className="prjtmlnbtmdes filter new"></div></span>
                            </div>
                            <div
                                className={`prjtmlnhdingitem filter-button ${activeFilter === 'active' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('active')}
                            >
                                <span>Active<div className="prjtmlnbtmdes filter active"></div></span>
                            </div>
                            <div
                                className={`prjtmlnhdingitem filter-button ${activeFilter === 'closed' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('closed')}
                            >
                                <span>Closed<div className="prjtmlnbtmdes filter closed"></div></span>
                            </div>
                        </div>
                    </div>
                    {/* Generate Ticket Button */}
                    <div className="col-sm-3 col-12">
                        <div style={{ textAlign: 'right', position: 'relative' }}>
                            <a href="Ticket.php" className="btn btn-warning">
                                Generate New Ticket
                            </a>
                        </div>
                    </div>
                </div>
                {/* Ticket sections (conditionally rendered) */}
                <div className="prjtmlsumboxcntnt filter c1" id="allTickets">
                    {renderTickets(filteredTickets)}
                </div>
            </div>
        </div>
    </div>
);
};


const renderTickets = (tickets) => {
    return (
        <div className="prjtmlndtlbox">
            <table className="table">
                <thead className="table-secondary tbl-head">
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Description</th>
                        <th scope="col">Member</th>
                        <th scope="col">Date</th>
                        <th scope="col">User</th>
                        <th scope="col">File</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.TicketType}</td>
                            <td>{ticket.Subject}</td>
                            <td>{ticket.Description}</td>
                            <td>{ticket.MemberType}</td>
                            <td>{ticket.CreationDate}</td>
                            <td>{ticket.fname}</td>
                            <td>
                                <a
                                    href={`../assets/ticketfiles/${ticket.File}`}
                                    className="photo-link"
                                >
                                    View
                                </a>
                            </td>
                            <td>
                                <a
                                    title="Reply"
                                    className="btn btn-success"
                                    href={`chat.php?id=${ticket.id}`}
                                >
                                    OPEN
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketDetails; 