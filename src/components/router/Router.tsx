import { ROUTES } from "../../utils/constants/routes";
import { Route, Routes, } from "react-router-dom";
import { CalculateDeliveryPage } from "../pages/calculateDeliveryPage/CalculateDeliveryPage";
import { DeliveryTypePage } from "../pages/deliveryTypePage/DeliveryTypePage";

export const Router =()=>{
    return(
        <Routes>
            <Route path={ROUTES.MAIN} element={<CalculateDeliveryPage/>}/>
            <Route path={ROUTES.DELIVERY_TYPE} element={<DeliveryTypePage/>}/>
        </Routes>
    )
} 