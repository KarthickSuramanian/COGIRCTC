import React,{useState}from 'react'
const InitialPassengerDetails = {
    name :"",
    age :"",
    gener:"",
    birth : "",
    coach :"",
    start :"",
    dest :""
}

// let cars = ["volvo",,"saab","mercedes","audi"]
const PassengerCheckin = () => {
    const Stations = ['Book','Mobile','Electrical','Furniture','Cloth','Home Decor'];

        console.log(Stations)
        let newStations = Stations;
        newStations.shift()
        console.log(newStations)
    const [PassengerDetail,SetPassengerDetail] = useState(InitialPassengerDetails);
    const HandleChange = (e) => {
        const { name, value } = e.target;
        SetPassengerDetail({
          ...PassengerDetail,
          [name]: value,
        });
      };

const Handleformcreation =(e) =>{
    e.preventDefault();

    console.log(PassengerDetail)
    
}
const HandleSelection =(e) =>{
    let selected = e.target.selectedIndex;

        if(selected <= 0){
            alert(selected)
        }
        else{
            alert(selected)
        }

}
    return(
        <div>
            <form>
                    <label for="name">Please Enter your name</label>
                    <input id="name" name = "name" type='text' value = {PassengerDetail.name} placeholder='Type your name heres' onChange={HandleChange}></input>
                    <br></br>
                    <label for="age">Please Enter your Age</label>
                    <input id="age" name = "age" type='number' value = {PassengerDetail.age}  placeholder='Type your Age heres' onChange={HandleChange}></input>
                    <br></br>
                    <label for="gener">Please Enter your Gener</label>
                    <input id="gener"  name="gener"type='text' value = {PassengerDetail.gener}  placeholder='Type your Gener heres' onChange={HandleChange}></input> 
                    <br></br>
                    <label for="birth">Please Select your prefered Birth*<pre>subject to change </pre></label>
                    <input id="birth" name="birth" type='text' value = {PassengerDetail.birth} placeholder='Type your Birth heres' onChange={HandleChange}></input> 
                    <br></br>
                    <label for="coach">Please Select your prefered coach</label>
                    <input id="coach" name="coach" type='text' value = {PassengerDetail.coach} placeholder='Type your coach heres' onChange={HandleChange}></input>  
                    <br></br>
                    <label for="start">Please Select your start location </label>
                    
                    <br></br><select name="cars" id="cars" onChange={HandleSelection}>
                    {
                    Stations.map((cat,idx)=>(
                        <option key={idx} value={cat}>{cat}</option>
                    ))
                }
                    </select>
                    <br></br>
                    <label for="dest">Please Select your destination location </label>
                    <select name="cars" id="cars" onChange={HandleSelection}>
                    {
                    Stations.map((cat,idx)=>(
                        <option key={idx} value={cat}>{cat}</option>
                    ))
                }
                    </select>
                    
                    <br></br>
                    <button onClick={Handleformcreation}>Submit</button>            

            </form>
        </div>
    )
}
export default PassengerCheckin