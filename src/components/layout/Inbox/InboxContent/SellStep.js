import Stepper from "react-stepper-horizontal";

function SellStep() {
  return (
    <div>
      <Stepper
        steps={[
          { title: "Message" },
          { title: "Paid" },
          { title: "Shipped" },
          { title: "Receive" },
        ]}
        activeStep={1}
        activeTitleColor={"white"}
        completeTitleColor={"white"}
      />
    </div>
  );
}
export default SellStep;
