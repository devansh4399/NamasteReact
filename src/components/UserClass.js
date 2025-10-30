import React from "react";
class UserClass extends React.Component
{
    constructor(props){
    super(props);
    

    this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
            avatar:"photo",
        }
    };
}


    async componentDidMount()
    {
        const data= await fetch("https://api.github.com/users/devansh4399");
        const json= await data.json();
        this.setState({
            userInfo:json,
        });


    }

    render()
    {
       
        const{count,count2}=this.state;
         return (
        <div className="user-card">

            <h1>Name:{this.state.userInfo.login}</h1>
    
            <img src={this.state.userInfo.avatar_url}></img>
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