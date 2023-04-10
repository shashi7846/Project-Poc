import store from "../redux/store";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const renderComponent = (component) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};
export const renderComponent1 = (component) => {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    ),
    store,
  };
};
export const renderComponentwithRouterPath = (component, path, routes) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={path} element={component} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </MemoryRouter>
    ),
    store,
  };
};
