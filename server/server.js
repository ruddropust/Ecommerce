const express = require("express");
const mongoose = require("mongoose");
const Stripe = require("stripe");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

const stripe = new Stripe(`sk_test_51QctjePnIZYcA6ij7h2z1ywpOFOiX6PeAz6XKuTFjOmHZj7tuhqVGqUfQglxJPqXj2kS3gwlDVK2eiS7oNTYW18W00eJCZFe5f`);

mongoose
  .connect("mongodb+srv://habibulislamruddro:CR4HWiU9Db2RXz9y@cluster-habib.n4epc.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    
    origin: ["http://localhost:5173","*"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);


app.post("/api/stripe-checkout-session", async (req, res) => {
  const { items } = req.body;

 // console.log(items);

  const lineItems = items?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          // images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/shop/payment-success",
    cancel_url: "http://localhost:5173/shop/payment-return",
  });

  res.json({ id: session.id });
});
//extra add

//


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
