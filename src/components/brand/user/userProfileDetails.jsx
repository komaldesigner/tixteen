import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../../styles/brand/User/userProfileDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCloudUpload, faHeart, faIndustry, faLanguage, faMapMarkerAlt, faPhotoVideo, faVideo } from '@fortawesome/free-solid-svg-icons'
import { makeApi } from '../../../api/callApi.tsx';

const InfluencerDetail = () => {
  const [influencer, setInfluencer] = useState(null);
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchInfluencer = async () => {
      try {
        const _id = id;
        const response = await makeApi(`/v1/influencers`, "POST", { _id });
        const fetchedData = response.data.data;
        const formattedInfluencer = {
          id: fetchedData.id,
          fname: fetchedData.user_name,
          age: fetchedData.age,
          gender: fetchedData.gender,
          industry: fetchedData.industry,
          city: fetchedData.ship_city,
          state: fetchedData.ship_state,
          country: fetchedData.ship_country,
          contenttype: fetchedData.content_type,
          language: fetchedData.language,
          level: fetchedData.level,
          profileimg: `https://tixteen.com/assets/img/profileimg/${fetchedData.profile_img}`,
          introvideo: fetchedData.intro_video_link,
          clientBroadcast: 150,  
          clientImage: 200,      
          clientVideo: 250,      
          content: ['Broadcast', 'Images', 'Videos'],
          socialPlatforms: fetchedData.primary_platforms.map(platform => ({
            name: platform.name,
            followerCount: platform.followers_count,
          })),
          images: [
            // { content: 'https://media.gettyimages.com/id/79110076/photo/arabian-horse-padrons-immage-owned-by-saudi-king-abdullah-bin-abdul-aziz-al-saud-and-sons-takes.jpg?s=612x612&w=gi&k=20&c=LuEjRddcuMatP9MCEoz4DBzYUgrwS1rqaIJ1YnmV9Qc=', postlink: '#' },
            { content: 'https://media.gettyimages.com/id/79110076/photo/arabian-horse-padrons-immage-owned-by-saudi-king-abdullah-bin-abdul-aziz-al-saud-and-sons-takes.jpg?s=612x612&w=gi&k=20&c=LuEjRddcuMatP9MCEoz4DBzYUgrwS1rqaIJ1YnmV9Qc=', postlink: '#' },
            { content: 'image2.jpg', postlink: '#' },
          ],
          videos: [
            { content: 'video1.jpg', postlink: '#' },
            { content: 'video2.jpg', postlink: '#' },
          ],
        };

        setInfluencer(formattedInfluencer);
      } catch (error) {
        console.error('Error fetching influencer:', error);
      }
    };

    fetchInfluencer();
  }, [id]);

  useEffect(() => {
    const dummyRating = 4;
    setRating(dummyRating);
  }, []);

  const handleRatingSubmit = (newRating) => {
    setRating(newRating);
  };

  if (!influencer) return <div>Loading...</div>;

  return (
    <div className="mnprfl">
      <h3>INFLUENCER</h3>
      <p>Home / Influencers / Detail</p>
      <div className="row">
        <div className="col-sm-4">
          <div className="infdp">
            <img src={influencer.profileimg} alt={influencer.fname} />
            <div className="rating">
              <p>RATING</p>
              <form id="starratingform">
                <span className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating"
                      value={i + 1}
                      checked={rating === i + 1}
                      onChange={() => handleRatingSubmit(i + 1)}
                    />
                  ))}
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="influprodtl">
            <h3 style={{ textTransform: 'uppercase' }}>
              TX{influencer.fname[0]}{influencer.id}
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </h3>
            <p>Influencer | {influencer.age} Years {influencer.gender}</p>
            <div className="influintrst">
              <div className="row">
                <div className="col-6">
                  <div className="ctgry">
                    <span className="crtbtr"><FontAwesomeIcon icon={faIndustry} /></span>{influencer.industry}
                  </div>
                </div>
                <div className="col-6">
                  <div className="ctgry">
                    <span className="crtbtr1"> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>{influencer.city}, {influencer.state}, {influencer.country}
                  </div>
                </div>
              </div>
              <h4>
                <span style={{ border: '3px solid #0aaba5', borderRadius: '8px', fontSize: 'calc(0.9vw + 0.9vh)', padding: '0% 1% 0% 1%' }}>
                  <FontAwesomeIcon icon={faPhotoVideo} />
                </span>
                Content: {influencer.contenttype}
                <br />
                <br />
                <span style={{ border: '3px solid #0aaba5', borderRadius: '8px', fontSize: 'calc(0.9vw + 0.9vh)', padding: '0% 1% 0% 1%' }}>
                  <FontAwesomeIcon icon={faLanguage} />
                </span>
                Language: {influencer.language}
              </h4>
            </div>
            <div className="lvlofinflu">
              <div className="row">
                <div className="col-6">
                  <div className="uplvl">
                    <span className="inlvl1">
                      <FontAwesomeIcon icon={faChartLine} />
                    </span> Level: {influencer.level}
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    {influencer.socialPlatforms.map((platform, i) => (
                      <div className="col-3" key={i}>
                        <div className="infscllnk">
                          <span className="sclofinflu">
                            <i className={`fab fa-${platform.name.toLowerCase()}`}></i>
                          </span>
                          {platform.followerCount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {influencer.content.includes("Broadcast") && (
                <div className="col-4" id="clbroadcast">
                  <div className="ylowbxout">
                    <div className="ylowbx">
                      <form method="POST" action="">
                        <span className="symbllogo">
                          <FontAwesomeIcon icon={faCloudUpload} />
                        </span>
                        <p>Broadcast Price</p>
                        <h3><span>₹</span>{influencer.clientBroadcast}/-</h3>
                        <input type="hidden" name="id" value={influencer.id} />
                        <input type="hidden" name="influid" value={influencer.id} />
                        <input type="hidden" name="contentid" value="1" />
                        <input type="submit" name="addtocart" value="Add To Cart" />
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {influencer.content.includes("Images") && (
                <div className="col-4" id="clImage">
                  <div className="ylowbxout">
                    <div className="ylowbx">
                      <form method="POST" action="">
                        <span className="symbllogo">
                          <FontAwesomeIcon icon={faCloudUpload} />
                        </span>
                        <p>Image Creation</p>
                        <h3><span>₹</span>{influencer.clientImage}/-</h3>
                        <input type="hidden" name="id" value={influencer.id} />
                        <input type="hidden" name="influid" value={influencer.id} />
                        <input type="hidden" name="contentid" value="2" />
                        <input type="submit" name="addtocart" value="Add To Cart" />
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {influencer.content.includes("Videos") && (
                <div className="col-4" id="clVideos">
                  <div className="ylowbxout">
                    <div className="ylowbx">
                      <form method="POST" action="">
                        <span className="symbllogo">
                          <FontAwesomeIcon icon={faCloudUpload} />
                        </span>
                        <p>Video Creation</p>
                        <h3><span>₹</span>{influencer.clientVideo}/-</h3>
                        <input type="hidden" name="id" value={influencer.id} />
                        <input type="hidden" name="influid" value={influencer.id} />
                        <input type="hidden" name="contentid" value="3" />
                        <input type="submit" name="addtocart" value="Add To Cart" />
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="videosec pt-5">
              <div className="row">
                <div className="col-5" style={{ textAlign: 'center' }}>
                  <h4>
                    <span style={{ border: '3px solid #0aaba5', borderRadius: '8px', fontSize: 'calc(0.9vw + 0.9vh)', padding: '0% 1% 0% 1%' }}>
                      <FontAwesomeIcon icon={faVideo} />
                    </span>
                    Intro Video
                  </h4>
                </div>
                <div className="col-7">
                  <a href={influencer.introvideo} target="_blank" rel="noopener noreferrer">
                    <img src="video_thumbnail.png" alt="Intro Video Thumbnail" />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio">
              <div className="row">
                <div className="col-6">
                  <h4>Portfolio</h4>
                  <div className="images">
                    {influencer.images.map((image, index) => (
                      <a key={index} href={image.postlink} target="_blank" rel="noopener noreferrer">
                        <img src={image.content} alt={`Image ${index + 1}`} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-6">
                  <h4>Video Portfolio</h4>
                  <div className="videos">
                    {influencer.videos.map((video, index) => (
                      <a key={index} href={video.postlink} target="_blank" rel="noopener noreferrer">
                        <img src={video.content} alt={`Video ${index + 1}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default InfluencerDetail;
