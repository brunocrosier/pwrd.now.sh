export const Footer = () => (
  <footer
    css={css`
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: -60px;
    `}
  >
    <p>
      designed & built with 🥐 by
      <a
        href="https://twitter.com/bruno_crosier"
        css={css`
          color: #5dd26d;
        `}
      >
        {" "}
        Bruno
      </a>
    </p>
  </footer>
)
