// import "../../../styles/brand/slectinfulmobi.css"
// import React, { useState } from 'react';

// function SelectMobiInflu() {
//     const [checkedItems, setCheckedItems] = useState({});

//     const handleCheckboxChange = (e) => {
//         const { name, checked } = e.target;
//         setCheckedItems({ ...checkedItems, [name]: checked });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//     };

//     const checkboxes = [
//         {
//             category: 'level',
//             options: [
//                 { id: 'influfltrlvl1', name: 'LEVEL 1', value: '1', label: 'LEVEL 1' },
//                 // Add similar objects for other LEVELS checkboxes
//             ]
//         },
//         {
//             category: 'gender',
//             options: [
//                 { id: 'MALE', name: 'MALE', value: 'MALE', label: 'MALE' },
//                 // Add similar objects for other GENDER checkboxes
//             ]
//         },
//         {
//             category: 'industry',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other INDUSTRY checkboxes
//             ]
//         },
//         {
//             category: 'content',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other CONTENT checkboxes
//             ]
//         },
//         {
//             category: 'platform',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other PLATFORM checkboxes
//             ]
//         },
//         {
//             category: 'language',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other LANGUAGE checkboxes
//                 ]}
//         ,
//         {
//             category: 'country',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other COUNTRY checkboxes
//             ]
//         },
//         {
//             category: 'state',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other STATE checkboxes
//             ]
//         },
//         {
//             category: 'deliverables',
//             options: [
//                 { id: 'INFLUENCER', name: 'INFLUENCER', value: 'INFLUENCER', label: 'INFLUENCER' },
//                 // Add similar objects for other DELIVERABLES checkboxes
//             ]
//         }
//     ];

//     return (
//         <div className="inflmbilvw" id="inflmbilvw">
//             <div className="clintinfhdr">
//                 <div className="clintiffltrhdr">
//                     <div className="row" style={{ alignItems: 'center' }}>
//                         <div className="col-6">
//                             <div className="clintinffltrname">FILTER</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <form id="LevelForm" onSubmit={handleSubmit}>
//                 <div className="clietinfluc1">
//                     <div className="row">
//                         <div className="col-lg-4 col-6">
//                             <div className="clietinffltrcatgry">
//                                 {checkboxes.map((category) => (
//                                     <div key={category.category} className="clientinfltcat category">
//                                         {category.category.toUpperCase()}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="col-lg-7 col-6">
//                             <div className="cletinfflter shop">
//                                 {checkboxes.map((category) => (
//                                     <div key={category.category} className={`clitntflterlevel products ${category.category}`}>
//                                         {category.options.map((option) => (
//                                             <div key={option.value} className="clirinffltlvl product">
//                                                 <input
//                                                     id={option.id}
//                                                     name={option.name}
//                                                     value={option.value}
//                                                     type="checkbox"
//                                                     onChange={handleCheckboxChange}
//                                                     checked={checkedItems[option.name]}
//                                                 />
//                                                 <label htmlFor={option.id}>{option.label}</label><br />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="clintinfhdr2">
//                     <div className="clintiffltrhdr">
//                         <div className="row" style={{ alignItems: 'center' }}>
//                             <div className="col-6">
//                                 <div className="clintinffltrname">
//                                     CLOSE
//                                 </div>
//                             </div>
//                             <div className="col-6">
//                                 <button type="submit" name="Search">
//                                     Search
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default SelectMobiInflu;

import "../../../styles/brand/slectinfulmobi.css";
import React, { useState } from 'react';

function SelectMobiInflu() {
    const [checkedItems, setCheckedItems] = useState({});
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckedItems({ ...checkedItems, [id]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    const checkboxes = [
        {
            category: 'level',
            options: [
                { id: 'influfltrlvl1', name: 'LEVEL 1', value: '1', label: 'LEVEL 1' },
                { id: 'influfltrlvl2', name: 'LEVEL 2', value: '2', label: 'LEVEL 2' },
                { id: 'influfltrlvl3', name: 'LEVEL 3', value: '3', label: 'LEVEL 3' },
                { id: 'influfltrlvl4', name: 'LEVEL 4', value: '4', label: 'LEVEL 4' }
            ]
        },
        {
            category: 'gender',
            options: [
                { id: 'MALE', name: 'MALE', value: 'MALE', label: 'MALE' },
                { id: 'FEMALE', name: 'FEMALE', value: 'FEMALE', label: 'FEMALE' }
            ]
        },
        {
            category: 'industry',
            options: [
                { id: 'INDUSTRY1', name: 'INDUSTRY 1', value: 'INDUSTRY1', label: 'INDUSTRY 1' },
                { id: 'INDUSTRY2', name: 'INDUSTRY 2', value: 'INDUSTRY2', label: 'INDUSTRY 2' }
            ]
        },
        {
            category: 'content',
            options: [
                { id: 'CONTENT1', name: 'CONTENT 1', value: 'CONTENT1', label: 'CONTENT 1' },
                { id: 'CONTENT2', name: 'CONTENT 2', value: 'CONTENT2', label: 'CONTENT 2' }
            ]
        },
        {
            category: 'platform',
            options: [
                { id: 'PLATFORM1', name: 'PLATFORM 1', value: 'PLATFORM1', label: 'PLATFORM 1' },
                { id: 'PLATFORM2', name: 'PLATFORM 2', value: 'PLATFORM2', label: 'PLATFORM 2' }
            ]
        },
        {
            category: 'language',
            options: [
                { id: 'LANGUAGE1', name: 'LANGUAGE 1', value: 'LANGUAGE1', label: 'LANGUAGE 1' },
                { id: 'LANGUAGE2', name: 'LANGUAGE 2', value: 'LANGUAGE2', label: 'LANGUAGE 2' }
            ]
        },
        {
            category: 'country',
            options: [
                { id: 'COUNTRY1', name: 'COUNTRY 1', value: 'COUNTRY1', label: 'COUNTRY 1' },
                { id: 'COUNTRY2', name: 'COUNTRY 2', value: 'COUNTRY2', label: 'COUNTRY 2' }
            ]
        },
        {
            category: 'state',
            options: [
                { id: 'STATE1', name: 'STATE 1', value: 'STATE1', label: 'STATE 1' },
                { id: 'STATE2', name: 'STATE 2', value: 'STATE2', label: 'STATE 2' }
            ]
        },
        {
            category: 'deliverables',
            options: [
                { id: 'DELIVERABLE1', name: 'DELIVERABLE 1', value: 'DELIVERABLE1', label: 'DELIVERABLE  1' },
                { id: 'DELIVERABLE2', name: 'DELIVERABLE 2', value: 'DELIVERABLE2', label: 'DELIVERABLE  2' }
            ]
        }
    ];

    return (
        <div className="inflmbilvw" id="inflmbilvw">
            <div className="clintinfhdr">
                <div className="clintiffltrhdr">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-6">
                            <div className="clintinffltrname">FILTER</div>
                        </div>
                    </div>
                </div>
            </div>
            <form id="LevelForm" onSubmit={handleSubmit}>
                <div className="clietinfluc1">
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="clietinffltrcatgry">
                                {checkboxes.map((category) => (
                                    <div 
                                        key={category.category} 
                                        className={`clientinfltcat category ${activeCategory === category.category ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(category.category)}
                                    >
                                        {category.category.toUpperCase()}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7 col-6">
                            <div className="cletinfflter shop">
                                {checkboxes.map((category) => (
                                    <div 
                                        key={category.category} 
                                        className={`clitntflterlevel products ${category.category}`}
                                        style={{ display: activeCategory === category.category ? 'block' : 'none' }}
                                    >
                                        {category.options.map((option) => (
                                            <div key={option.value} className="clirinffltlvl product">
                                                <input
                                                    id={option.id}
                                                    name={option.id}
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={handleCheckboxChange}
                                                    checked={!!checkedItems[option.id]}
                                                />
                                                <label htmlFor={option.id}>{option.label}</label><br />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clintinfhdr2">
                    <div className="clintiffltrhdr">
                        <div className="row" style={{ alignItems: 'center' }}>
                            <div className="col-6">
                                <div className="clintinffltrname">
                                    CLOSE
                                </div>
                            </div>
                            <div className="col-6">
                                <button type="submit" name="Search">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SelectMobiInflu;
