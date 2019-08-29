import Head from "next/head"

const HeadTag = () => (
  <Head>
    <title>Secure Password Generator</title>
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/static/favicon.ico"
      async
    />
    <link rel="manifest" href="/static/manifest.json" async />
    <meta name="theme-color" content="rgb(159, 209, 105)" />

    <title>Password Kiwi | Secure Password Generator 🔒 🥝</title>
    <meta name="title" content="Password Kiwi | Secure Password Generator 🔒 🥝" />
    <meta
      name="description"
      content="Generate strong, secure, random passwords. 100% open source, beautiful UI and works offline."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://password.kiwi/" />
    <meta
      property="og:title"
      content="Password Kiwi | Secure Password Generator 🔒 🥝"
    />
    <meta
      property="og:description"
      content="Generate strong, secure, random passwords. 100% open source, beautiful UI and works offline."
    />
    <meta property="og:image" content="https://password.kiwi/og-image.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://password.kiwi/" />
    <meta
      property="twitter:title"
      content="Password Kiwi | Secure Password Generator 🔒 🥝"
    />
    <meta
      property="twitter:description"
      content="Generate strong, secure, random passwords. 100% open source, beautiful UI and works offline."
    />
    <meta property="twitter:image" content="https://password.kiwi/og-image.png" />
  </Head>
)

export default HeadTag
