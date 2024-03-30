export const routePaths = {
  home: "/",
  login: "/login",
  signUp: "/sign-up",
  contact: "/contact",
  quotation: "/quotation",
  package: "/package/:id",
  deliveries: "/deliveries",
  order: "/order",
  deliveryItem: "/deliveries/:id",
};

export const routes = [
  {
    path: routePaths.home,
    title: "Home",
  },
  {
    path: routePaths.deliveries,
    title: "Deliveries",
  },
  {
    path: routePaths.login,
    title: "Login",
  },
  {
    path: routePaths.signUp,
    title: "Sign Up",
  },
  {
    path: routePaths.contact,
    title: "Contact",
  },
  {
    path: routePaths.quotation,
    title: "Find a rate",
  },
  {
    path: routePaths.home,
    title: "Logout",
  },
  {
    path: routePaths.deliveryItem,
    title: "Delivery",
  },
];
