import React from 'react';

function ProjectDetailComponent() {
    // Dummy data
    const projectDetail = [
        { optdate: '2024-05-26', influencerId: 'TX123', level: 1, content: 'Content 1', status: 'Listed to OPT' },
        { optdate: '2024-05-27', influencerId: 'TX456', level: 2, content: 'Content 2', status: 'In Process' },
        { optdate: '2024-05-28', influencerId: 'TX789', level: 3, content: 'Content 3', status: 'In Process' }
    ];

    return (
        <div className="influtimelinesum">
            <h3>PROJECT DETAIL LEVELWISE</h3>
            <div className="prjtmlsumbox">
                <div className="prjtmlsumboxcntnt admninflulvlprc">
                    <h5>Campaign Id : 3232</h5>
                    <br />
                    <div className="pdtl">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">OPT DATE</th>
                                    <th className="text-center">Influencer ID</th>
                                    <th className="text-center">LEVEL</th>
                                    <th className="text-center">CONTENT</th>
                                    <th className="text-center">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectDetail.map((detail, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{detail.optdate}</td>
                                        <td className="text-center">{detail.influencerId}</td>
                                        <td className="text-center">L{detail.level}</td>
                                        <td className="text-center">{detail.content}</td>
                                        <td className="text-center">{detail.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailComponent;
