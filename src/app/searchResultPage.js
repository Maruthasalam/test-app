import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../static/searchResultpage.css";
import history from "../helpers/history";
import { ListSearchAction } from "../Components/Action";
function SearchResultPage() {
  useEffect(() => {
    dispatch(ListSearchAction.listsearchdetails());
  }, []);

  const ListResults = useSelector((state) => state.ListResults);
  const responsedata = ListResults.ListData !== undefined ? ListResults.ListData : [];
  console.log("ListResults", responsedata);
  const selectedItem = (items) => {
    console.log("items", items);
    history.push("/detailedviewPage");
    dispatch(ListSearchAction.selectedproperty(items));
  };
  const dispatch = useDispatch();
  return (
    <div>
      {responsedata.length > 0 ? (
        <div>
          <div class="container-fluid bg_color p-3">
            <div className="header_title">Header Section</div>
          </div>
          <div className="p-3">
            <div className="text-center header_subtitle">
              Property for Sales
            </div>
          </div>
          <div className="container-fluid p-3 borderline">
            <div class="row">
              <div class="col">
                All Bedrooms <i class="fa fa-angle-down"></i>
              </div>
              <div class="col">
                Any Neighbourhood <i class="fa fa-angle-down"></i>
              </div>
              <div class="col">
                Min Price <i class="fa fa-angle-down"></i>
              </div>
              <div class="col">
                Max Price <i class="fa fa-angle-down"></i>
              </div>
              <div class="col">
                Sort by <i class="fa fa-angle-down"></i>
              </div>
              <div class="col">50 Results</div>
            </div>
          </div>
          <div class="container-fluid p-3">
            <div class="row">
              {responsedata.length > 0 &&
                responsedata.map(function (item) {
                  return (
                    <div class="col-xs-12 col-md-6 col-lg-4 mb-3">
                      <div class="card overlaycontainer" style={{cursor:'pointer'}} onClick={() => selectedItem(item)}>
                       
                        <img
                          class="card-img-top img_height"
                          src={
                            item.Images.length
                              ? item.Images[0].url
                              : "https://placehold.it/250x150"
                          }
                          alt="Card image cap"
                        />
                        <div class="btn btn-secondary btn"><i class="bi bi-heart-fill"></i></div>
                        {/* <button class="btn">Button</button> */}
                        <div class="card-body">
                          <div className="title">{item.Title}</div>
                          <div
                            className="discrip"
                            dangerouslySetInnerHTML={{
                              __html: item.Description,
                            }}
                          ></div>
                          <div className="price">{item.Price} &euro;</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div class="container-fluid bg_color p-3">
            <div className="header_title">Footer Section</div>
          </div>
        </div>
      ) : (
      <div className="posdiv">
        <div class="loader"></div>
       </div>
      )}
    </div>
  );
}

export default SearchResultPage;
