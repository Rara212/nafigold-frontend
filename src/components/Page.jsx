import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

const Page = forwardRef(
  ({ children, title = "Nafi Gold", meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{title}</title>
        {meta}
      </Helmet>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

export default Page;
