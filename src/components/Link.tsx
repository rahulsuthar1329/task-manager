import { Link as Route } from "react-router-dom";

interface LinkProps {
  routeTo: string;
  children: string;
}

const Link: React.FC<LinkProps> = ({ routeTo, children }) => {
  return (
    <Route
      className="font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
      to={routeTo}
    >
      {children}
    </Route>
  );
};

export default Link;
