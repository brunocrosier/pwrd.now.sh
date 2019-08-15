import styled from "styled-components"
import Link from "next/link"
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
    background: linear-gradient(180deg, #282935, #202025);
    padding: 10vh 10vw;
    display: flex;
    flex-direction: column;
    /* transform: skew(0deg,3deg); */
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

  h4 {
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
        <Link href="https://github.com/brunocrosier/password.kiwi"><h4><a>FULLY OPEN SOURCE</a></h4></Link>
        <h1>100% secure</h1>
        <p>
          Every password on this page is created securely, randomly and
          on-demand by your own device.
        </p>
        <p>
          None of your data ever touches our server. No cookies. No tracking
          pixels.
        </p>
        {/* <p>
          No sweat.
        </p> */}
        {/* <h3>Nothing</h3>
        <p>
          For good practice, you should open this page in an Incognito tab, turn
          on Airplane mode, and then generate a secure password above. You can
          then close this page and turn back on the internet - secure in the
          knowledge that it would have been physically impossible for any of
          your data to have been sent anywhere.
        </p> */}
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
      <p style={{ color: "white" }}>
        built with ❤ by
        <Link href="https://twitter.com/bruno_crosier">
          <a style={{ color: "white" }}> Bruno</a>
        </Link>
      </p>
    </div>
  </BelowFoldContainerDiv>
)

export default BelowFold
