import { memo } from "react";

type Props = {
  data: {
    uid: string;
    email: string;
  },
  handleClick: () => void,
  name: string,
}

const Child = ({ name }: Props) => {
  return (
    <div>
      This is the child component with an unchanging prop called name {name}
    </div>
  );
}
export const MemoizedChild = memo(Child)