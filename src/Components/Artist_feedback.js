import React, { Component } from "react";
import Artist_Navbar from "./Artist_Navbar";
export class Artist_feedback extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar bg-light fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            <div className="left-components">
              <Artist_Navbar className="nav_artist" />
              <a className="navbar-brand " href="/">
                <span className="text-danger text">
                  {" "}
                  <strong>ekala</strong>
                </span>
                kaar
              </a>
            </div>
            <div className="right-component">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search Opportunities
                    "
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-danger btn-search "
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <p className="h1 textone">How was your experience?</p>
        <p className="h2" style={{ textAlign: "center" }}>
          Let us know by rating the patron !
        </p>

        <div className=" container m-auto">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: " center",
            }}
          >
            <span className="h4 ml-3 mt-3"> Rating : </span>
            {/* <div className="mx-5 " style={{display: "flex", alignItems: "center"}}>
          <i className="fa fa-star fs-2" style={{color: "yellow"}}aria-hidden="true"></i>

          <i className="fa fa-star fs-2"   aria-hidden="true"></i>
          <i className="fa fa-star fs-2" aria-hidden="true"></i>
          <i className="fa fa-star fs-2" aria-hidden="true"></i>
        </div> */}
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
          </div>

          <p className="h4 ml-3 mt-3">Feedback</p>
          <div className="form-group green-border-focus container m-auto ml-3 mr-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea5"
              rows="5"
            ></textarea>
          </div>
          <div style={{ textAlign: " center" }} className="m-5">
            <button className="btn btn-danger btn-lg btn-new" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist_feedback;
