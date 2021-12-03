import { ActionTypes } from "../constants/actionTypes";
import logo from '../../assets/img/favicon.png'
import { toast } from "react-toastify";
import { allotCourse, allotPackage, buyPackage } from "../../api";

export const paymentAction =
  (data, { first_name, last_name, email, phone, id }, val) =>
  async (dispatch) => {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await buyPackage(data);
    const options = {
      key: "rzp_test_uyIMOvTtAIVnuN",
      amount: response.data?.response?.amount,
      currency: "INR",
      name: "CyberFrat",
      description: "Test Transaction",
      image: logo,
      order_id: response.data?.response?.id,
      handler: async function (response) {
        console.log(response);
        const data = new FormData();
        data.append("package_id", val?.id);
        data.append("user_id", id);
        data.append("razorpay_order_id", response?.razorpay_order_id);
        data.append("razorpay_payment_id", response?.razorpay_payment_id);
        data.append("razorpay_signature", response.razorpay_signature);
        await allotPackage(data).then((response) => {
          console.log(
            "this is response from allot course api after purchase",
            response
          );
          toast.info(response.data?.message)
        });
      },
      prefill: {
        name: first_name + " " + last_name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "CyberFrat, C315, Eastern Business District, LBS Road, Bhandup West, Mumbai - 400078",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const handlePayment = async () => {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    dispatch({ type: ActionTypes.LOADING, payload: false });
    if (response.data?.status === true) {
      handlePayment();
    } else {
      toast.error(response.data?.response);
    }

    dispatch({
      type: ActionTypes.BUY_PACKAGE,
      payload: response,
    });
  };

export const coursePurchase =
  (data, { first_name, last_name, email, phone, id }, val) =>
  async (dispatch) => {
    dispatch({ type: ActionTypes.LOADING, payload: true });
    const response = await buyPackage(data);
    const options = {
      key: "rzp_test_uyIMOvTtAIVnuN",
      amount: response.data?.response?.amount,
      currency: "INR",
      name: "CyberFrat",
      description: "Test Transaction",
      image: logo,
      order_id: response.data?.response?.id,
      handler: async function (response) {
        console.log(response);
        const data = new FormData();
        data.append("course_id", val?.id);
        data.append("user_id", id);
        data.append("razorpay_order_id", response?.razorpay_order_id);
        data.append("razorpay_payment_id", response?.razorpay_payment_id);
        data.append("razorpay_signature", response.razorpay_signature);
        await allotCourse(data).then((response) => {
          toast.info(response.data?.message)
        });
      },
      prefill: {
        name: first_name + " " + last_name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "CyberFrat, C315, Eastern Business District, LBS Road, Bhandup West, Mumbai - 400078",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const handlePayment = async () => {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };

    dispatch({ type: ActionTypes.LOADING, payload: false });
    if (response.data?.status === true) {
      handlePayment();
    } else {
      toast.error(response.data?.response);
    }

    dispatch({
      type: ActionTypes.BUY_PACKAGE,
      payload: response,
    });
  };
