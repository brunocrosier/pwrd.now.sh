import styled from "styled-components"
import SVGIllustration from "./SVGIllustration"
import WaveSVG from "../components/WaveSVG"

const BelowFoldContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -9vh;

  #sitting-on-lock {
    fill: #292a36;
  }

  #below-fold-root {
    background: linear-gradient( 180deg, rgb(185,228,139), rgb(131,189,70) );
    padding: 10vh 10vw;
    display: flex;
    flex-direction: column;
  }

  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2%;
  }

  .right {
    margin-top: 10vh;
  }

  p {
    color: white;
    width: 100%;
  }

  h4 a {
    color: white;
  }

  h1 {
    color: white;
    font-size: 3rem;
    margin: 0%;
  }

  /* desktop-specific */

  @media (min-width: 768px) {
    margin-top: 0vh;

    .col {
      width: 50%;
    }
    #below-fold-root {
      flex-direction: row;
    }

    .left {
      padding-right: 4%;
    }

    .right {
      padding-left: 4%;
      margin-top: 0;
    }
  }
`

const BelowFold = () => (
  <BelowFoldContainerDiv>
    <WaveSVG />
    <div id="below-fold-root">
      <div className="col left">
        <h4>
            <a href="https://github.com/brunocrosier/password.kiwi">FULLY OPEN SOURCE</a>
            </h4>
        <h1>100% secure</h1>
        <p>
          Every password on this page is created securely, randomly and
          on-demand by your own device.
        </p>
        <p>
          None of your data ever touches our server. No cookies. No tracking
          pixels. No sweat.
        </p>
      </div>
      <div className="col right">
        <SVGIllustration />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center"
      }}
    >
      <p style={{ color: "#8ac24f" }}>
        built with ❤ by
          <a href="https://twitter.com/bruno_crosier" style={{ color: "#8ac24f" }}> Bruno</a>
      </p>
    </div>
  </BelowFoldContainerDiv>
)

export default BelowFold
