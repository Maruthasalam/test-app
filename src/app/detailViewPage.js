import React from "react";
import { useSelector } from "react-redux";
function DetailViewPage() {
  const ListResults = useSelector((state) => state.ListResults);
  const details =
    ListResults.detailsview !== undefined ? ListResults.detailsview : [];
  console.log("details", details);
  return (
    <div>
      {
        Object.keys(details).length>0?(
          <div>
             <div class="container-fluid bg_color p-3">
        <div className="header_title">Header Section</div>
      </div>
      <div class="container p-3">
        <div class="row">
          <div class="col-md-6">
            <div class="card text-white">
              <img
                class="card-img"
                src={details.Images[0].url}
                alt="Card image"
              />
            </div>
            <div class="card-deck mt-2">
              <div class="card">
                <img
                  class="card-img-top imagehight"
                  src={details.Images[1].url}
                  alt="Card image cap"
                />
              </div>
              <div class="card">
                <img
                  class="card-img-top imagehight"
                  src={details.Images[2].url}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="likediv">
                <i class="bi bi-share-fill likeic"></i>
                <i class="bi bi-heart likeic"></i>
            </div>
            <br />
            <hr />
            <div className="property_price"> &euro; {details.Price}</div>
            <div className="text-left">one bedroom apartment for sale</div>
            <div className="text-left">
              <a>
                <i class="bi bi-house homeic"></i>
                <span className="px-2 colr">Please contact us</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                type="button"
                class="btn btn-dark"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  textTransform: "uppercase",
                }}
              >
                Contact Agent
              </button>
            </div>
            <div className="pt-3">
              <div className="text-left head2">FACTS & FEATURES</div>
              <hr />
            </div>
            <table class="table table-borderless text-left">
              <tbody>
                <tr>
                  <td className="font-weight-bold">Neighbourhood:</td>
                  <td>Fontvillie</td>
                </tr>
                <tr>
                <td className="font-weight-bold">Price per sqm:</td>
                  <td>&euro;{details.Price_Per_Sqm}</td>
                </tr>
                <tr>
                    <td className="font-weight-bold">Brochure:</td>
                    <td><a href={details.Brochure.length>0&&details.Brochure[0].url} download><span className="textdecor">Download Brochure</span></a></td>
                </tr>
                <tr>
                    <td className="font-weight-bold">Floor plan:</td>
                    <td><a><span className="textdecor">View Floorplan</span></a></td>
                </tr>
              </tbody>
            </table>
            <div>
                 <div className="text-left detail_dicr">{details.Description}</div>
            </div>
            <div className="text-left pt-2">
                 <div className="profilediv">
                        <img src={details.Negotiator.Image.url!=""?details.Negotiator.Image.url:""}  alt="userprofile" className="userprof"/>
                 </div>
                 <div className="userinfodiv">
                       <div className="font-weight-bold">Reka Demeter</div>
                       <div>{details.Negotiator.Designation}</div>
                       <div><span>+{details.Negotiator.Phone}</span> | <span>Email</span></div>
                 </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg_color p-3">
        <div className="header_title">Footer Section</div>
      </div>
    </div>   
        ):(
          <div className="text-center">No data font for the request!.</div>
        )
      }
     </div>
  );
}

export default DetailViewPage;
