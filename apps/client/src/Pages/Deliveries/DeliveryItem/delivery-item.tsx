import Leaflet from "@/Components/Map/map";
import { Card, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { store } from "@/state/store";
import HistoryStepper from './HistoryStepper';

const myObject = {
  package: [
    {
      width: 1,
      height: 1,
      length: 1,
      weight: 154,
      _id: "660af92a2d7ba5b37cb85ccc",
    },
  ],
  address: {
    street: "1863 W 63rd Ave",
    city: "Vancouver",
    state: "BC",
    postalCode: "V6P 2H9",
    country: "Canada",
    _id: "660af92a2d7ba5b37cb85ccd",
  },
  userId: "66048e3a94bd3fc47fe996ae",
  trackingId: "9de1817d-5c24-4ce3-a4c1-f82856d9ec91",
  status: "Pending",
  _id: "660af92a2d7ba5b37cb85ccb",
  __v: 0,
};

const dummyUser = {
  id: "66048e3a94bd3fc47fe996ae",
  email: "johndoe@gmail.com",
  name: "john doe",
  role: 2,
};

export default function DeliveryItem() {
  const address = "1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8";
  const navigate = useNavigate();
  const { user } = store.getState().auth;
  const userInfo = user?.user || dummyUser;
  const { deliveryOrder } = store.getState();
  const deliveryAddress = deliveryOrder?.deliveryAddress;
  const packageDetails = deliveryOrder?.packageDetails;
  const orderTotal = deliveryOrder?.orderTotal;
  console.log(deliveryOrder);

  return (
    <>
      <Label
        className="flex items-start text-4xl font-semibold m-10"
        style={{ marginLeft: "7.5rem" }}
      >
      Delivery Status
      </Label>
      <div className="flex pr-10 pl-20">
        <div className="m-10 " style={{ width: "70%", marginTop: "5rem" }}>
          <Card>
            <CardHeader className="items-start flex-row gap-10">
              <CardTitle>Order info</CardTitle>
              <div className="flex">
                <div className="mr-5" style={{ color: "#707070" }}>
                  <p className="flex items-start">Time placed</p>
                  <p className="flex items-start">Order number</p>
                  <p className="flex items-start">Total</p>
                </div>
                <div>
                  <p className="flex items-start">
                    {new Date().toLocaleString()}
                  </p>
                  <p className="flex items-start">
                    {localStorage.getItem("_id") || "660c88e176bf638abd6913e0"}
                  </p>
                  <p className="flex items-start">
                    CAD {orderTotal?.toFixed(2) || "50.00"}$
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardHeader className="items-start flex-row gap-12">
              <CardTitle className="text-lg">Shipping info</CardTitle>
              <div className="flex">
                <div className="mr-5" style={{ color: "#707070" }}>
                  <p className="flex items-start">Name</p>
                  <p className="flex items-start">Shipping Address</p>
                </div>
                <div>
                  <p className="flex flex-row items-start">
                    {userInfo?.name || "David Smith"}
                  </p>
                  <p className="flex flex-row items-start">
                    {deliveryAddress?.addressLine || "1000 W 63rd Ave"}
                  </p>
                  <p className="flex flex-row items-start">
                    {deliveryAddress?.city || "Vancouver"}
                    {", " + (deliveryAddress?.state || "BC")}
                    {", " + (deliveryAddress?.postalCode || "V6P2H9")}
                  </p>
                  <p className="flex flex-row items-start">
                    {deliveryAddress?.country || "Canada"}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardHeader className="items-start flex-row gap-10">
              <CardTitle className="text-lg">Tracking info</CardTitle>
              <div className="flex">
                <div className="mr-5" style={{ color: "#707070" }}>
                  <p className="flex items-start">Number</p>
                </div>
                <div>
                  <p className="flex items-start">
                    {localStorage.getItem("trackingId") ||
                      "9de1817d-5c24-4ce3-a4c1-f82856d9ec91"}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardHeader className="items-start flex-col gap-10">
              <CardTitle className="text-lg">Item info</CardTitle>
              <div className="flex">
                {/* <img
                  src={packageImg}
                  width={200}
                  className="rounded-xl drop-shadow-lg"
                /> */}
                <div className="text-left ml-5">
                  <Label className="text-lg">
                    Thank you for your business.
                  </Label>
                  <p>
                    Please keep your confirmation id for drop off and tracking
                    id to share your shipment information.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between">
            </CardFooter>
          </Card>
        </div>
        <div className="m-10 ml-0" style={{ width: "30%" }}>
          <div style={{ marginTop: "5%"}}>
            <CardHeader className="items-start flex-col gap-10 ">
              <CardTitle className="text-lg">History</CardTitle>
              <div className="flex-grow" >
                <HistoryStepper />
              </div>
            </CardHeader>
          </div>


          {/* <div className="flex-grow" style={{ marginTop: "5%"}}>
            <Card>
            <CardHeader className="items-start flex-col gap-10 justify-center items-center">
               <CardTitle className="text-lg">Live item location</CardTitle>
              <Leaflet address={address} />
            </CardHeader>
            </Card>
          </div> */}
          
        </div>

      </div>
      <div className="flex justify-center">
        <div className="m-10 ml-0" style={{ width: "80%" }}>  
            <CardHeader className="items-start flex-col gap-10 justify-center items-center">
              <CardTitle className="text-lg">Live item location</CardTitle>
              <Leaflet address={address} />
            </CardHeader>
        </div>
      </div>
      
    </>
  );
}
