import Document from "next/document"
import { ServerStyleSheet } from "styled-components"
import { CssBaseline } from "@material-ui/core"
import { HeadTag } from "../components/HeadTag"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            <html lang="en" dir="ltr" />
            {/* <CssBaseline /> */}
            <HeadTag />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
