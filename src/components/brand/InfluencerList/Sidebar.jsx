import React from 'react';

const Sidebar = ({ formData, handleChange, handleSubmit, dummyData }) => {
  return (
    <div className="influncer_list_sidebar_main_div">
      <form id="LevelForm" onSubmit={handleSubmit}>
        <div className="fltrscrl tes">
          <div className="influfltr all_search_box_filter_list">
            <div className="search_box_filter">
              <div>
                <h3 className="mb-3">FILTERS</h3>
                <a href="/">RESET ALL</a>
              </div>
              <div className="infullvl">
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="infullvl">
              <h4>LEVELS</h4>
              {dummyData.influencerlevels.map((level) => (
                <div key={level.id}>
                  <input
                    id={`influfltrlvl${level.id}`}
                    value={level.level}
                    type="checkbox"
                    name="Level"
                    onChange={handleChange}
                  />
                  <label htmlFor={`influfltrlvl${level.id}`}>L{level.level}</label>
                  <br />
                </div>
              ))}
            </div>

          <div className="influgndr">
            <div className="infullvl">
              <h4>GENDER</h4>
              {["Male", "Female", "Other"].map((gender) => (
                <div key={gender}>
                  <input
                    id={gender}
                    value={gender}
                    type="checkbox"
                    name="gender"
                    onChange={handleChange}
                  />
                  <label htmlFor={gender}>{gender}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>INDUSTRY</h4>
              {dummyData.industries.map((industry) => (
                <div key={industry.id}>
                  <input
                    id={`industry${industry.id}`}
                    value={industry.name}
                    type="checkbox"
                    name="Industry"
                    onChange={handleChange}
                  />
                  <label htmlFor={`industry${industry.id}`}>{industry.name}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>CONTENT</h4>
              {["Broadcast", "Image", "Video"].map((content) => (
                <div key={content}>
                  <input
                    id={content}
                    value={content}
                    type="checkbox"
                    name="content"
                    onChange={handleChange}
                  />
                  <label htmlFor={content}>{content}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>PRIMARY PLATFORM</h4>
              {dummyData.platformlist.map((platform) => (
                <div key={platform.id}>
                  <input
                    id={`pltfrm${platform.id}`}
                    value={platform.name}
                    type="checkbox"
                    name="Platform"
                    onChange={handleChange}
                  />
                  <label htmlFor={`pltfrm${platform.id}`}>{platform.name}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>LANGUAGE</h4>
              {dummyData.influencerlanguage.map((lang) => (
                <div key={lang.id}>
                  <input
                    id={`lng${lang.id}`}
                    value={lang.language}
                    type="checkbox"
                    name="language"
                    onChange={handleChange}
                  />
                  <label htmlFor={`lng${lang.id}`}>{lang.language}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>COUNTRY</h4>
              {dummyData.country.map((country) => (
                <div key={country.id}>
                  <input
                    id={`cntry${country.id}`}
                    value={country.name}
                    type="checkbox"
                    name="County"
                    onChange={handleChange}
                  />
                  <label htmlFor={`cntry${country.id}`}>{country.name}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="influgndr">
            <div className="infullvl">
              <h4>STATE</h4>
              {dummyData.states.map((state) => (
                <div key={state.id}>
                  <input
                    id={`state${state.id}`}
                    value={state.name}
                    type="checkbox"
                    name="State"
                    onChange={handleChange}
                  />
                  <label htmlFor={`state${state.id}`}>{state.name}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Sidebar;
