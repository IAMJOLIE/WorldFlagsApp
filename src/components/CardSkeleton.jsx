import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./CardSkeleton.css";
import { useSkeletonTheme } from "./SkeletonThemecontext";

const CardSkeleton = () => {

const skeletonTheme = useSkeletonTheme();
  return (
    <SkeletonTheme baseColor={skeletonTheme.color} highlightColor={skeletonTheme.highlightColor}  >
      <div className="box">
        
        <div className="box-land"> 
          <div className="img" >
          <Skeleton className="image" width={'100%'} height={140}  /></div>
          <div className="details">
            <h1>
              <Skeleton className="name" width={200} height={20} />
            </h1>
            <p>
              {" "}
              Population: <Skeleton className="it1" width={100} height={17} />
            </p>
            <p>
              {" "}
              Region: <Skeleton className="it2" width={130} height={17} />
            </p>
            <p>
              {" "}
              Capital: <Skeleton className="it3" width={150} height={17} />
            </p>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
