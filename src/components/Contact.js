
const Contact=()=>{
    return (
        <div>
            <h1> Contact Us Page.</h1>

            <form>
                <input type="text" placeholder="name" className="p-2 m-2 border-black"></input>
                <input type="text" placeholder="Number"></input>
                <input type="text" placeholder="gender"></input>
                <button className="bg-blue-600">Submit</button>
            </form>

        </div>
    )
};

export default Contact;