import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
  return (
   <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{height: '100vh',display:'flex',justifyContent: 'center', alignItems: 'center'}}
      wrapperClass=""
      />
    
  )
}

export default Loader
