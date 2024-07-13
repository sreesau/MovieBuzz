import { createBrowserRouter } from "react-router-dom" 
import App from "./App";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddMovie from "./components/CRUD/AddMovie";
import AdminRead from "./components/CRUD/AdminRead";
import ViewMovie from "./components/CRUD/ViewMovie";
import UserRead from "./components/CRUD/UserRead";
import AdminUpdateMovie from "./components/CRUD/AdminUpdateMovie";
import BookingForm from "./components/Booking/BookingForm";
import AboutUs from "./components/About Us/AboutUs";
import BookingConfirmation from "./components/Booking/BookingConfirmation";
import MyBookings from "./components/Booking/MyBookings";

const router=createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path: 'addmovie', element:<AddMovie/>},
    { path: 'adminread', element:<AdminRead/>},
    { path: 'viewmovie/:movieId', element:<ViewMovie/>},
    { path: 'userread', element:<UserRead/>},
    { path: 'adminupdatemovie/:movieId/edit', element:<AdminUpdateMovie/>},
    { path:'bookingform/:movieId/:name', element:<BookingForm/>},
    { path: 'aboutus', element:<AboutUs/>},
    { path: 'bookingconfirmation/:userId/:name/:bookingId', element: <BookingConfirmation /> },
    { path: 'mybookings', element:<MyBookings/> },






    



]);
export default router;