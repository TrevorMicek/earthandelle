import React from 'react';
const CreateComponent = (props) => {
    return (
      <>
       {Object.entries(props.data).map(([key, value]) => {
         return <props.component {...value} key={key} />
       })}

      </>
    )
   }
   export default CreateComponent