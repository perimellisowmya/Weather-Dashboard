import React from 'react'

function Error({error}) {
    const status = error.request.status

    const ErrorMessages = ()=>{
        switch (status) {
            case 400:
                return (
                <h1>Can't Fetch the details on city name with "{error.config.params.q}"</h1>
                )
            case 401:
                return <>
                <h1>{error.message}</h1>   
                <h1>{error.response.data.error.message}</h1>
                <h1>You are not authorized to use this site</h1>
               </> 
            case 403:
                return <>
                        <h1>{error.message}</h1>   
                        <h1>{error.response.data.error.message}</h1>
                       </> 

            default:
                return <h1>Problem while fething data, please try again later</h1>
        }
    }
  return (
    <div className='error_holder'>
        {ErrorMessages()}
    </div>
    )
}

export default Error