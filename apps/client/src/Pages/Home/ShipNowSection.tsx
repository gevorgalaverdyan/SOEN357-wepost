import { Box, Typography, Button, Grid, Paper} from "@mui/material";
import Image1 from "../../assets/fy21_apac_96.webp"; // Placeholder icon, replace with your own
import Image2 from "../../assets/image1.jpg"; // Placeholder icon, replace with your own
import Image3 from "../../assets/image2.jpg"; // Placeholder icon, replace with your own
import { useNavigate } from 'react-router-dom';

// ...





const features = [
    {
        title: "Personalized Shipping Made Easy",
        description: "Whether you’re sending a gift to a loved one or returning an online purchase, our personal shipping solutions are designed for convenience. Schedule pickups, track your shipment, and get support every step of the way.",
        buttonText: "Send a Package",
        image: Image1,
        action: () => { /* ... */ },
    },
    {
        title: "Streamline Your Business Shipping",
        description: "From small startups to large corporations, our business shipping services grow with you. Enjoy bulk discounts, flexible pickups, and dedicated account management to optimize your operations.",
        buttonText: "Explore Business Plans",
        image: Image2,
        action: () => { /* ... */ },
    },
    {
        title: "Expand Your E-commerce Reach",
        description: "Connect to new markets and customers with our specialized e-commerce shipping solutions. Integrate seamlessly with your online store for real-time rates, label printing, and hassle-free returns.",
        buttonText: "Boost Your Store",
        image: Image3,
        action: () => { /* ... */ },
    }
];


const ShipNowSection = () => {
    const navigate = useNavigate();

    return (
        <Box className = "ship-now-section" sx={{ flexGrow: 1, mt: 4 }}>
            <Typography className = "title" variant="h2" sx={{ marginBottom: '2rem', paddingBottom:"10px"}}>
                Specialized Solutions for You
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid className = "grid-item" item xs={12} sm={4} key={index}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Box
                                component="img"
                                src={feature.image}
                                alt={feature.title}
                                sx={{ width: '100%', height: 'auto', mb: 2 }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {feature.title}
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                {feature.description}
                            </Typography>
                            <Button variant="contained" onClick={() => navigate("quotation")} sx={{ marginTop: "1rem",marginLeft: '1rem', backgroundColor: '#10142c', padding: '10px 20px' }}>
                                {feature.buttonText}
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <div className="loop-wrapper">
                <div className="mountain"></div>
                <div className="hill"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="rock"></div>
                <div className="truck"></div>
                <div className="wheels"></div>
            </div>

        </Box>
    );
};

export default ShipNowSection;