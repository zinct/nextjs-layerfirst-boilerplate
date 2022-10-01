import NProgress from "nprogress";
import { Router } from "next/dist/client/router";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Nprogress = () => {
  return <></>;
};

export default Nprogress;
