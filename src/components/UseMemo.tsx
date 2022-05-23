import { useCallback, useMemo } from "react";
import { MemoizedChild } from "../samples/Child";

const Parent = () => {
  const data = {
    uid: "Some uid",
    email: "some email",
  };

  const memoizedData = useMemo(() => data, [])

  const handler = () => {
    console.log("Handle something");
  };

  const memoizedHandler = useCallback(handler, [])

  return (
    <div>
      <MemoizedChild
        name="some name"
        data={memoizedData}
        handleClick={memoizedHandler}
      />
    </div>
  );
};

export default Parent;
