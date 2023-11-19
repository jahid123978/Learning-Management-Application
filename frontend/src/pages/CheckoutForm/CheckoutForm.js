import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({propsData, user}) => {
  const navigate = useNavigate();
  const publishableKey = "pk_test_51HUEyCDOfBXcEuEsVmMIMEMQrIYISOFotjKzya4LE7mX7P7XxeZjO2wxwK0JTCKhRnMI4xqq4BsTi7Ywalju0Hmz00ockhzAbW";
   console.log("props: ", propsData)
  const onToken = async(token) => {
 
    const Course = {
        name: user.name,
        email: user.email,
        token: token,
        payment: true
    }
    console.log("formData: ", Course);
    const response = await fetch(`http://localhost:4000/api/chapters/${propsData._id}`, {
        method: "POST",
        body: JSON.stringify(Course),
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type':"application/json"
        },
      });
      const json = await response.json();
      console.log("json: ", json);
      if(json.name){
        navigate("/purchasedCourses")
      }
    // axios
    //   .post(`http://localhost:4000/api/chapters/${propsData._id}`, {
    //   method: "POST",
    //   body: paymentCourse,
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    //   })
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log("Payment Error: ", error);
    //   });
  };

  return (
    <StripeCheckout
      label="Buy the Course" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go payment" //Submit button in modal
      amount={propsData?.price} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default CheckoutForm;