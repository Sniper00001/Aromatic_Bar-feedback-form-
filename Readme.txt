pls download the node_modules

Topic: Aromatic Bar

---------------------------------------------

First step: Use Visual Studio Code to create this single-page website. I used the npx module to generate a React-based app within Visual Studio Code. The command I used was:

npx create-react-app aromaticBar

After that, I modified the files according to our requirements. Within the src directory, I created a components folder. Inside this folder, I created three components: Main.js, Nav_bar.js, and Submissions.js.

------------------------------------------------------------------


 "Second step":

Second step: Within these components, I used function-based components with default exports. I also included basic HTML tags such as <h1> and <p>. Furthermore, I connected these components to the App.css file using the code:
import '../App.css';


----------------------------------------------------------


Third step; coding for Main components ;


1- An object named initialFormData is created with default values for various fields like name, email, phone, etc.

2- After that i created a useState  with code ,const [formData, setFormData] = useState(initialFormData); this state will hold the values of the form fields like name , lastname, email, phonenumber, etc and fucntion setformData is used to update the formData state

3- the handleChange function handles changes in form inputs, in use this code onChange={handleChange} for that . Depending on the type of inputs text, checkbox, radio, number, the function updates the formData state


--------------------------------------------
4th steps ;

the handlesubmit function is start work when the form is submitted, it also checks if all the required fields are filled , if any field is missing it shows an alert.

if all fields are filled, it collects the form data, saves it to the browser's local storage as you mention inside the pdf, then reset the form fields to their initial values

-------------------------------------------

5th steps.

 The form has fields for the user's name, email, phone number, ratings for service, beverage quality, cleanliness, and overall dining experience, along with a comments section.

Each input or option in the form has an associated event listener (onChange) that calls the handleChange function when the value changes.

When the user submits the form, the handleSubmit function is called.
----------------------------------------------------------------------------

6th steps 

JSON.parse(localStorage.getItem("submissions")): This line fetches the "submissions" data from the browser's storage and converts it from a string format back to a usable JavaScript array or object. If there's no "submissions" data, it will return null or undefined.

The code then adds the current formData (which represents the user's recent submission) to this data.

submissions.push(formData); This line adds the new submission 

The updated list of submissions (which now includes the new submission) is converted back into a string using JSON.stringify().

localStorage.setItem("submissions", JSON.stringify(submissions));: This line saves the updated list of submissions back into the browser's storage, replacing any previous data with the new, updated data.



