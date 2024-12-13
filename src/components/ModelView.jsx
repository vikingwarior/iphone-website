import { PerspectiveCamera, View } from "@react-three/drei";
import { AmbientLight } from "three";
import { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<Loader />}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
