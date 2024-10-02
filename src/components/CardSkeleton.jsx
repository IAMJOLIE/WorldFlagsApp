import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      <div className="box">
        
        <div className="box-land"> 
          <div className="img">
          <Skeleton className="image"  width="100%" height={140} style={{margin: 0, padding: 0}}/></div>
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
