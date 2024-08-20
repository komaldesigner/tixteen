
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignForm = () => {
 
  const [formState, setFormState] = useState({
    id: '',
    product: '',
    campaignname: '',
    status: '',
    language: '',
    age: '',
    tillage: '',
    gender: '',
    remark: '',
    hashtag: '',
    platforms: '',
    platformlink: '',
    profiletag: '',
    todo: '',
    nottodo: '',
    cat: ''
  });

  const [categories, setCategories] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Mock data for draft form
    const draftData = {
      status: 'Draft',
      product: 'Sample Product',
      campaignname: 'Sample Campaign',
      language: 'English',
      age: '18-34',
      tillage: 'Young',
      gender: 'Male',
      remark: 'Some remarks',
      hashtag: '#sample',
      platforms: 'Twitter, Instagram',
      platformlink: 'https://sample-link.com',
      profiletag: '@sampleuser',
      todo: 'Do this',
      nottodo: 'Avoid that',
      cat: 'Sample Category'
    };

    // Mock data for other endpoints
    const categoriesData = ['Category A', 'Category B', 'Category C'];
    const industriesData = ['Industry X', 'Industry Y', 'Industry Z'];
    const languagesData = ['English', 'Spanish', 'French'];
    const platformsData = ['Twitter', 'Instagram', 'Facebook'];

    // Set state with mock data
    setFormState({
      ...formState,
      ...draftData
    });
    setCategories(categoriesData);
    setIndustries(industriesData);
    setLanguages(languagesData);
    setPlatforms(platformsData);
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting form data to the backend
    console.log('Form data submitted:', formState);
  };
  return (
    <form id="categoryForm" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="influtimelinesum">
        <h3>CATEGORY</h3>
        <div className="prjtmlsumboxx container" style={{ width: 'unset' }}>
          <div className="prjtmlsumboxcntnt admninflulvlprc">
            <div>
              <h4>SELECT CATEGORY</h4>
              <table className="table table-bordered">
                <tr>
                  {categories.map(category => (
                    <td key={category.id}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          id={`contntcat${category.id}`}
                          type="radio"
                          name="cat"
                          value={category.contentname}
                          required
                          checked={formState.cat === category.contentname}
                          onChange={handleChange}
                          style={{ width: 'auto' }}
                        />
                        &nbsp
                        <label htmlFor={`contntcat${category.id}`}>{category.contentname}</label>
                      </div>
                    </td>
                  ))}
                </tr>
              </table>
            </div>
            <input type="hidden" name="CategoryNext" />
          </div>
        </div>
      </div>

      <div className="influtimelinesum">
        <h3>MAKE CAMPAIGN</h3>
        <div className="container">
          <div className="clntmkampgnboxx">
            <div className="newregsecall" id="makecampaign2">
              <h4>PLEASE ENTER THE CAMPAIGN DETAILS</h4>
              <div className="row">
                <div className="campfrm1">
                  <p>CAMPAIGN NAME</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="campaignname" name="campaignname" value={formState.campaignname} required onChange={handleChange} />
                  <input type="hidden" value={formState.status} name="status" id="status" />
                </div>
                <div className="campfrm1">
                  <p>BRAND PRODUCT</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="product" name="product" value={formState.product} required onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>TARGET Industry</p>
                </div>
                <div className="campfrm">
                  <select name="industry" required onChange={handleChange}>
                    {industries.map(industry => (
                      <option key={industry.id} value={industry.name} selected={formState.industry === industry.name}>{industry.name}</option>
                    ))}
                  </select>
                </div>
                <div className="campfrm1">
                  <p>Campaign Language</p>
                </div>
                <div className="campfrm">
                  <select name="language" required onChange={handleChange}>
                    {languages.map(language => (
                      <option key={language.id} value={language.language} selected={formState.language === language.language}>{language.language}</option>
                    ))}
                  </select>
                </div>
                <div className="campfrm1">
                  <p>INFLUENCER'S AGE</p>
                </div>
                <div className="campfrm">
                  <div className="row">
                    <div className="col-6">
                      <input id="age" type="number" name="age" placeholder="From" value={formState.age} required onChange={handleChange} />
                    </div>
                    <div className="col-6">
                      <input id="tillage" type="number" name="tillage" placeholder="To" value={formState.tillage} required onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="campfrm1">
                  <p>INFLUENCER'S GENDER</p>
                </div>
                <div className="campfrm">
                  <select id="gender" name="gender" required onChange={handleChange}>
                    <option value="Male" selected={formState.gender === 'Male'}>Male</option>
                    <option value="Female" selected={formState.gender === 'Female'}>Female</option>
                    <option value="Both" selected={formState.gender === 'Both'}>Both</option>
                    <option value="Other" selected={formState.gender === 'Other'}>Other</option>
                  </select>
                </div>
                <div className="campfrm1">
                  <p>Describe your Product</p>
                </div>
                <div className="campfrm">
                  <textarea id="remark" name="remark" value={formState.remark} onChange={handleChange}></textarea>
                </div>
                <div className="campfrm1">
                  <p>HASHTAGS</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="hashtag" name="hashtag" value={formState.hashtag} onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>Attachments</p>
                </div>
                <div className="campfrm">
                  <input type="file" id="atachment" name="atachment" onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>PLATFORM PREFERENCE</p>
                </div>
                <div className="campfrm">
                  <table className="table table-borderless">
                    <tr>
                      {platforms.map(platform => (
                        <td key={platform.id}>
                          <input
                            type="radio"
                            id={`platform${platform.id}`}
                            name="platforms"
                            value={platform.name}
                            required
                            checked={formState.platforms === platform.name}
                            onChange={handleChange}
                            style={{ width: 'auto' }}
                          />
                          <label htmlFor={`platform${platform.id}`}>{platform.name}</label>
                        </td>
                      ))}
                    </tr>
                  </table>
                </div>
                <div className="campfrm1">
                  <p>PLATFORM LINK</p>
                </div>
                <div className="campfrm">
                  <input type="url" id="platformlink" name="platformlink" value={formState.platformlink} placeholder="Enter your Selected Social Platform Link here" required onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>PROFILES TO TAG</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="profiletag" name="profiletag" placeholder="User name of Profile" value={formState.profiletag} onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>Do</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="todo" name="todo" value={formState.todo} onChange={handleChange} />
                </div>
                <div className="campfrm1">
                  <p>Don't</p>
                </div>
                <div className="campfrm">
                  <input type="text" id="nottodo" name="nottodo" value={formState.nottodo} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div style={{ textAlign: 'right', marginRight: '6%', marginTop: '1%' }}>
            <input type="submit" name="Next" className="btn btn-dark" value="Next" style={{ fontSize: 'calc(1vw + 1.1vh)' }} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CampaignForm;
