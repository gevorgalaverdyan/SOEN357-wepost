import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { object, TypeOf, string } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";

const paymentSchema = object({
  cardNumber: string()
    .min(16, "Card number must be 16 digits")
    .max(16, "Card number must be 16 digits"),
  expiryDate: string().regex(
    /^\d{2}\/\d{2}$/,
    "Expiry date must be in the format MM/YY"
  ),
  cvv: string().min(3, "CVV must be 3 digits").max(3, "CVV must be 3 digits"),
  nameOnCard: string().min(1, "Name on card is required"),
});

type TPaymentSchema = TypeOf<typeof paymentSchema>;

export default function PaymentForm({
  onConfirmation,
}: {
  onConfirmation: (d: any) => void;
}) {
  const navigate = useNavigate();
  const deliveryOrder = useSelector((state: any) => state.deliveryOrder);
  const auth = useSelector((state: any) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: TPaymentSchema) => {
    try {
      const userId = auth.user.user.id;
      const packageDetails = deliveryOrder.packageDetails;
      const deliveryAddress = deliveryOrder.deliveryAddress;
      const response = await fetch(
        `http://localhost:3001/api/delivery/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            package: {
              height: parseFloat(packageDetails.height),
              width: parseFloat(packageDetails.width),
              weight: parseFloat(packageDetails.weight),
              length: parseFloat(packageDetails.length),
            },
            address: {
              street: deliveryAddress.addressLine,
              city: deliveryAddress.city,
              country: deliveryAddress.country,
              postalCode: deliveryAddress.postalCode,
              state: deliveryAddress.state,
            },
            userId,
          }),
        }
      );
      const r = await response.json();
      console.log(r);
      if (r._id) {
        onConfirmation(r);
      }
    } catch (error) {
      alert("Some Error has occurred, pleaes try again!");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={Boolean(errors.cardNumber)}
            helperText={errors.cardNumber?.message}
            {...register("cardNumber")}
            placeholder="Card Number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={Boolean(errors.expiryDate)}
            helperText={errors.expiryDate?.message}
            {...register("expiryDate")}
            placeholder="Expiry Date"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={Boolean(errors.cvv)}
            helperText={errors.cvv?.message}
            {...register("cvv")}
            placeholder="CVV"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={Boolean(errors.nameOnCard)}
            helperText={errors.nameOnCard?.message}
            {...register("nameOnCard")}
            placeholder="Name On Card"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            item
            justifyContent="space-around"
            mb={2}
            mt={4}
            xs={12}
          >
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // onClick={onConfirmation}
            >
              Confirm Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
