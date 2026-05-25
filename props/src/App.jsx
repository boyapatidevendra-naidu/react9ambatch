import ClassBasedComponentProps from "./components/ClassBasedComponentProps";
import DisplayName from "./components/DisplayName";
import FunctionBasedComponentProps from "./components/FunctionBasedComponentProps";

let App = () => {
  let names = [
    "Ram",
    "Ravi",
    "Raghu",
    "Siri",
    "Vivak",
    "Ramya",
    "Shrvya",
    "Kumari",
  ];
  return (
    <>
      {/* <ClassBasedComponentProps
        name="Ram"
        age={65}
        arr={[1, 2, 3, 4, 5, 6]}
        demo={() => "I am a demo Function"}
      />
      <FunctionBasedComponentProps
        name="Ram"
        age={65}
        arr={[1, 2, 3, 4, 5, 6]}
        demo={() => "I am a demo Function"}
      /> */}

      {/* <DisplayName name="Ram" />
      <DisplayName name="Ravi" />
      <DisplayName name="Siri" />
      <DisplayName name="Vivak" />
      <DisplayName name="Shrvya" /> */}

      {names.map((value) => {
        return <DisplayName name={value} />;
      })}
    </>
  );
};
export default App;
