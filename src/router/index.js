import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ViewWorkout from "../views/ViewWorkout.vue";
import { supabase } from "../supabase/init";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: "Create",
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      auth: false,
    },
  },
  {
    path: "/workout/:workoutId",
    name: "View-workout",
    component: ViewWorkout,
    meta: {
      title: "Workout",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles
router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Active Tracker`;
  next();
});
// Route guard for auth routes
router.beforeEach((to, _, next) => {
  const user = supabase.auth.user();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({
      name: "Login",
    });
  } else {
    next();
  }
});

export default router;
