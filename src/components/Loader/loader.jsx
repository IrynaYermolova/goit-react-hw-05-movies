import { InfinitySpin } from 'react-loader-spinner';
// import { Spiner } from './Loader.styled';

function Loader() {
  return (
    // <Spiner>
      <div>
      <InfinitySpin width="400" color="#4fa94d" />
    {/* // </Spiner> */}
      </div>
  );
}

export default Loader;