// //export default function OrderConfirmation()
// import { Container, Typography, Paper, Card, Button } from "@mui/material";
// import { store } from "../../state/store";
// import { useNavigate } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import CustomStepper from "./CustomStepper";
import { store } from "@/state/store";
import { LiaCcApplePay } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";
import packageImg from "../../assets/packages.png";
import { toast } from "react-toastify";

interface IConfirmation {
  data?: any;
}

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

export default function Confirmation(props: IConfirmation) {
  const navigate = useNavigate();
  //const { data } = props;
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
        Order Details
      </Label>
      <div className="flex pr-10 pl-20">
        <div className="m-10 " style={{ width: "70%" }}>
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
            <CardHeader className="items-start flex-row gap-10">
              <CardTitle className="text-lg">Delivery info</CardTitle>
              <div className="flex-grow">
                <CustomStepper />
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
                <img
                  src={packageImg}
                  width={200}
                  className="rounded-xl drop-shadow-lg"
                />
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
              <Button
                variant="outline"
                onClick={() => {
                  toast.warning("Order cancelled");
                  navigate("/");
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  toast.success("Order placed successfully");
                  navigate("/");
                }}
              >
                Done
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="m-10 ml-0">
          <CardHeader className="items-start flex-col gap-2">
            <CardTitle>Shipping address</CardTitle>
            <div className="flex ml-5">
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
          <CardHeader className="items-start flex-col gap-2">
            <CardTitle>Payment info</CardTitle>
            <div className="flex">
              <div className="flex content-between">
                <p className="flex items-center ml-5">
                  <LiaCcApplePay size={40} className="mr-3" />
                  Apple Pay
                </p>
                <p className="flex items-center ml-5 text-xs">
                  <IoIosInformationCircleOutline size={17} />
                  CAD ${orderTotal?.toFixed(2) || "50.00"}
                </p>
              </div>
            </div>
            <Card className="bg-gray-100" style={{ width: "100%" }}>
              <div className="flex justify-between p-2">
                <p>1 item</p>
                <p>
                  CAD{" "}
                  {orderTotal
                    ? ((orderTotal as unknown as number) * 0.85).toFixed(2)
                    : "42.50"}
                </p>
              </div>
              <div className="flex justify-between p-2">
                <p>Service fees</p>
                <p>
                  CAD{" "}
                  {orderTotal
                    ? ((orderTotal as unknown as number) * 0.15).toFixed(2)
                    : "7.80"}
                </p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <p>Order total</p>
                <p>CAD {orderTotal?.toFixed(2) || "50.00"}</p>
              </div>
            </Card>

            <p className="text-left">How do you like our order details page?</p>
            <Link to={"feedback"} className="underline">
              Tell us what you think
            </Link>
          </CardHeader>
        </div>
      </div>
    </>
  );
}
