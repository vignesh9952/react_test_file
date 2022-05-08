import React from "react"


class NewApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search :"",
            result:[],
            id:"Aokr1LIQACqLnOInn8kL6LHrvfzzZMl5nXUh88a4Jdo"
            
        }
    }

    // componentDidMount(){
    //   fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
    //   {return res.json()}).then((res)=>this.setState({todos:res})).catch((err)=>
    //   console.log("error found"))
    // }

    // callApi= () =>{
    //       fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
    //       {return res.json()}).then((res)=>this.setState({todos:res})).catch((err)=>
    //       console.log("error found"))
        // }
    HandleSearchevent(e){
        console.log(e.target.value)
        this.setState({search:e.target.value})
        console.log(this.state.search)
    }
        // callApi=()=>{
        // fetch("https://hn.algolia.com/api/v1/search?query="+this.state.search).then((res)=>{
        //     return res.json()}).then((res)=>this.setState({result:res.hits})).catch((err)=>console.log(err))
        // }

        callApiSearch=(e)=>{
            // e.preventDefault()
            fetch("https://hn.algolia.com/api/v1/search?query="+this.state.search).then((res)=>
            {console.log(res)})
        }
    render(){
        
        return(
            <div>
                <h1>NewApp</h1>
                <form onSubmit={(e)=>this.callApiSearch(e)}>
                   <input type={"text"} onChange={(e)=>this.HandleSearchevent(e)} ></input>
                <input type="submit"></input>
                 </form>
                 <button onClick={(e)=>this.callApiSearch(e)}>search</button>

                {
                    this.state.result.map((item)=>
                    <div> 
                        
                        <h3>{item.title}</h3>
                       <a href={item.url}></a>
                    </div>)
                }
            </div>
        )
    }
}

export default NewApp