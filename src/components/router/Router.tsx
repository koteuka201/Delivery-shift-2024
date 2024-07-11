import { ROUTES } from "../../utils/constants/routes";
import { Route, Routes, } from "react-router-dom";
import { CalculateDeliveryPage } from "../pages/calculateDeliveryPage/CalculateDeliveryPage";
import { DeliveryTypePage } from "../pages/deliveryTypePage/DeliveryTypePage";
import { Header } from "../header/Header";

export const Router =()=>{
    return(
        <Routes>
            <Route path={ROUTES.MAIN} element={
                <>
                <Header/>
                <CalculateDeliveryPage/>
                </>
            }/>
            <Route path={ROUTES.DELIVERY_TYPE} element={
                <>
                <Header/>
                <DeliveryTypePage/>
                </>
                }/>
        </Routes>
    )
} 