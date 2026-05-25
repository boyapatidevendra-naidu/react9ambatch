// let FunctionBasedComponentProps = (props) => {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <div>
//         {props.arr.map((value) => {
//           return <p>{value}</p>;
//         })}
//       </div>
//       <p>{props.demo()}</p>
//     </>
//   );
// };

import ChildFunction from "./ChildFunction";

// export default FunctionBasedComponentProps;
let FunctionBasedComponentProps = (props) => {
  return (
    <>
      {/* <h1>{name}</h1>
      <h1>{age}</h1>
      <div>
        {arr.map((value) => {
          return <p>{value}</p>;
        })}
      </div>
      <p>{demo()}</p> */}
      <ChildFunction props={props} />
    </>
  );
};
export default FunctionBasedComponentProps;
