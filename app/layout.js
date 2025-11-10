import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "next type shi",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
