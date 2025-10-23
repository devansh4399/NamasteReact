import React from "react";
class UserClass extends React.Component
{
    constructor(props){
    super(props);
    

    this.state={
        count:1,
        count2:0,
    };
}


    render()
    {
       
        const{count,count2}=this.state;
         return (
        <div className="user-card">

            <h1>Name:Devansh</h1>
            <h2>Place:bangalore</h2>
            <h3>count:{count}</h3>
           <button onClick={()=>
            {
                this.setState({
                    count:this.state.count+1
                });
            }
           }>COunt Increase</button>
            </div>
        );

    }
}

export default UserClass;