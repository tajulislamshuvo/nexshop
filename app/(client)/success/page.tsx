import SuccessContent from "@/components/SuccessContent";
import { Suspense } from "react";


const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent></SuccessContent>
    </Suspense>
  );
};

export default SuccessPage;