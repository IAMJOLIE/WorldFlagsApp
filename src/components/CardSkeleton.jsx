import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import './CardSkeleton.css';

const CardSkeleton = () => {
    return ( 
       
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            <div className="box">
               <div className="box-land"> 
                <Skeleton className='image'/> 
                <div className='details'>
                <h1><Skeleton className="name" width={210} height={20}/></h1>                     
                <p> Population: <Skeleton className="it1" width={100} height={20}/></p>
                <p> Region: <Skeleton className="it2" width={130} height={20}/></p>
                <p> Capital: <Skeleton className="it3" width={150} height={20}/></p>
                </div>
                </div> 
            </div>              
        </SkeletonTheme>    
            
        

     );
}
 
export default CardSkeleton;