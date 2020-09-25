const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/approvals", component: () => import("pages/Approvals.vue") },
      { path: "/search", component: () => import("pages/SearchRelease.vue") },
      { path: "/newRelease", component: () => import("pages/NewRelease.vue") },
      {
        path: "/releaseCalendar",
        component: () => import("pages/ReleaseCalendar.vue")
      },
      { path: "/dashboard", component: () => import("pages/Dashboard.vue") },
      { path: "/contactus", component: () => import("pages/ContactUs.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
