import { Shimmer,Breathing} from 'react-shimmer';
// import Spinner from './Spinner'

export const CardShimmer = () => {
    return <>
        <div className='card'>
            <Shimmer width={200} height={300} />
        </div>
    </>
}

export const ImageShimmer = () => {
    return <Breathing width={200} height={180} />
}