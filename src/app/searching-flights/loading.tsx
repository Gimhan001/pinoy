import { Skeleton } from "antd";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container mx-auto p-4">
        <Skeleton active />
    </div>
  );
}
