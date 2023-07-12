import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts";
import {
  SimpleForm,
  FormikForm,
  FormikFormYup,
  FormHooks,
  NotFound,
} from "../pages";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <SimpleForm />,
      },
      {
        path: "/formik",
        element: <FormikForm />,
      },
      {
        path: "/formikyup",
        element: <FormikFormYup />,
      },
      {
        path: "/formhooks",
        element: <FormHooks />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
