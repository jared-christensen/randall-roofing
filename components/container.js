import Head from "next/head";
import SiteNav from "./site-nav";

export default class Container extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Randall Roofing</title>
        </Head>
        {/* <SiteNav></SiteNav> */}
        {/* <div className="container mx-auto p-6"> */}
        <main role="main">{this.props.children}</main>
        {/* </div> */}
      </>
    );
  }
}
