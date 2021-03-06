import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react"

// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";

// Custom Route
import AdminRoute from "./auth/AdminRoute";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgveQvUSIEs8P571sPG5chZAedRFU5trs",
  authDomain: "elearning-cc4eb.firebaseapp.com",
  projectId: "elearning-cc4eb",
  storageBucket: "elearning-cc4eb.appspot.com",
  messagingSenderId: "601217750517",
  appId: "1:601217750517:web:ef760e8fcb800e1342bcbc",
  measurementId: "G-LEMFZBWL2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Sử dụng lazy load không import trực tiếp Page vào
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const AdminAddCourse = lazy(() => import("./pages/AdminCourses"));
const AdminListCourse = lazy(() => import("./pages/AdminListCourse"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const AdminListUser = lazy(() => import("./pages/AdminListUser"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const SearchCourse = lazy(() => import("./pages/SearchCourse"));
const ShoppingCart = lazy(() => import("./pages/Checkout"));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            {/* Route Admin */}
            <Route path="/admin">
              <AdminLayout>
                <Switch>
                  <Redirect exact from="/admin" to="/admin/courses" />

                  <AdminRoute path="/admin/courses">
                    <AdminListCourse />
                  </AdminRoute>

                  <AdminRoute path="/admin/addcourse">
                    <AdminAddCourse />
                  </AdminRoute>

                  <AdminRoute path="/admin/users">
                    <AdminListUser />
                  </AdminRoute>

                  <AdminRoute path="/admin/adduser">
                    <AdminUsers />
                  </AdminRoute>
                </Switch>
              </AdminLayout>
            </Route>

            {/* Route Main */}
            <Route path="/">
              <AppLayout>
                <Switch>

                  <Route path="/" exact>
                    <Home />
                  </Route>

                  <Route path="/courses/:category">
                    <Courses />
                  </Route>

                  <Route path="/course/:courseId">
                    <Course />
                  </Route>

                  <Route path="/search/:name">
                    <SearchCourse />
                  </Route>

                  <Route path="/cart">
                    <ShoppingCart />
                  </Route>

                  {/* <Route path="/user/edit-account">
                    <Profile />
                  </Route> */}

                  <Route path="/login">
                    <LoginPage />
                  </Route>

                  <Route path="/register">
                    <RegisterPage />
                  </Route>
                  
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
