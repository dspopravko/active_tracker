import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ViewWorkout from "../views/ViewWorkout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: "Create",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/workout/:workoutId",
    name: "View-workout",
    component: ViewWorkout,
    meta: {
      title: "Workout",
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

export default router;
