const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVJXACgJSTe5eHi0GGatNCYWLe__xx8n55XCwY-OaDFgqbLtclr-2GtHkDPCMa5eB3fn-PqEl0uguiO2",
  client_secret: "ECqdOvguz_tt30DCymVMusZJ1b1fXKezwsz3n-i5DPELb1iB27QC50A0i8HCZaz6Y112APMXg_ik2lor",
});

module.exports = paypal;
