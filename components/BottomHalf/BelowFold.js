import { Footer } from "./Footer"

const BelowFold = () => (
  <>
    <section
      css={css`
        display: flex;
        flex-direction: column;
        background: linear-gradient(180deg, white, #eaeaea);

        p {
          color: #4a4646;
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          padding: 10vh 10vw 13vh 10vw;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
          `}
        >
          <a
            href="https://github.com/brunocrosier/password.kiwi"
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <h4>FULLY OPEN SOURCE</h4>
            <img
              src="/github-logo.svg"
              alt="GitHub logo"
              css={css`
                height: 15px;
                padding: 0px 15px;
              `}
            />
          </a>
          <h1
            css={css`
              color: #5dd26d;
              font-size: 3rem;
              margin: 0%;
            `}
          >
            100% secure
          </h1>
          <p>
            Every password on this page is created securely, randomly and
            on-demand by your own device.
          </p>
          <p>
            None of your data ever touches our server. No cookies. No tracking
            pixels. No sweat.
          </p>
          <p>
            In fact, this website even works while your device is offline. Go
            ahead and turn on Airplane Mode on, and see for yourself!
          </p>
        </div>

        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            src="/password-kiwi-logo.svg"
            alt="Password Kiwi logo"
            css={css`
              max-width: 50%;
            `}
          />
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default BelowFold
