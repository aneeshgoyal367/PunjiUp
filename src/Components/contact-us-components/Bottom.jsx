import {React} from 'react'
function Bottom() {
  function sayHello() {
    alert('Submitted Successfully');
  }
    return (
        <div>
            <h3 className="center44">Contact Us</h3>
        

<div className="container">
  {/* <form action="/action_page.php"> */}
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="india">INDIA</option>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}/>
    {/* <input type="submit" value="Submit" /> */}
    <button  onClick={sayHello}>Submit</button>
  </form>
</div>
        </div>
    )
}
export default Bottom