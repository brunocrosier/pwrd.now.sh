export const AppContainer = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-content: center;
      min-height: 100vh;

      #main-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-self: center;
        justify-content: center;
        justify-items: center;
        width: 100%;
        background: linear-gradient(
          223deg,
          rgb(139, 228, 170),
          rgb(99, 181, 16)
        );
      }

      button#generated-password-input {
        border-radius: 15px;
        font-size: 30px;
        text-align: center;
        letter-spacing: 5px;
        border: 0px solid transparent;
        box-shadow: 0px 2px 10px #44444442;
        padding: 40px;
        font-weight: 700;
        color: #5d5d5d;
        -webkit-tap-highlight-color: transparent;
        justify-self: center;
        align-self: center;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        text-overflow: ellipsis;
      }

      button#generated-password-input:focus {
        outline: 1px transparent solid;
      }
      button#generated-password-input:hover {
        cursor: pointer;
      }

      p {
        -webkit-tap-highlight-color: transparent;
        font-size: 1.05rem;
      }

      * {
        font-family: "Google Sans", sans-serif!important;
      }

      a {
        color: #8ac24f;
        text-decoration: none;
        font-weight: bold;
      }

      button.header-buttons {
        background: linear-gradient(23deg, #1e1e1e, #393939);
        box-shadow: 0px 2px 5px #04040463;
        border-radius: 30px;
        justify-content: center;
        border: none;
        margin-top: 20px;
        width: max-content;
        padding: 0px 30px;
        align-self: center;
      }

      button.header-buttons:hover {
        cursor: pointer;
      }

      h4#click-to-copy {
        color: white;
        text-transform: uppercase;
        letter-spacing: 7px;
        opacity: 0.8;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      .text-container {
        display: flex;
        padding: 2vh 8vw;
        border-radius: 20px;
        font-family: "Colfax";
        align-self: center;
        max-width: 100%;
      }

      #input-component {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        padding: 5vh;
        align-self: center;
      }

      #input-component h1 {
        font-size: 2em;
      }

      .gradient-bg {
        background: linear-gradient(26deg, #ffffff 0%, #afafaf 100%);
      }

      .input-gradient-bg {
        background: linear-gradient(23deg, white, #eaeaea);
      }


      .MuiFormControlLabel-label {
        color: white;
        text-transform: lowercase;
        font-weight: 800;
      }

      .css-suomlp-Slider {
        cursor: pointer;
      }

      *:focus {
        outline: none;
      }

      @media (min-width: 768px) {
        #input-component {
          width: 67vw;
        }

        #input-component h1 {
          font-size: 3em;
        }
      }

      @media (orientation: landscape) {
        #generated-password-input {
          max-width: 50vw;
        }
      }
    `}
  >
    {children}
  </div>
)
