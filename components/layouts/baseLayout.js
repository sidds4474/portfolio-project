
import Header from '../shared/Header'

const baseLayout=(props)=>{

  return(
    <>
    <Header />
    {props.children}
    </>

  )


}


export default baseLayout


// height :small
// footer
// position:relative