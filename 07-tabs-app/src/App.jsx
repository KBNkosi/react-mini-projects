import { useEffect, useState } from "react";

const url =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent("https://course-api.com/react-tabs-project");

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error fetching Data</h2>;

  const handleUserChange = (id) => {
    const singleUser = users.find((user)=>user.id == id);
     setUser(singleUser);
    
    
  };

  return (
    <>
      <section >
<article>
        {users.map((user) => (
          <div key={user.id}>
            <button className="btn" onClick={()=>handleUserChange(user.id)}>{user.company}</button>
          </div>
        ))}
      </article>

      <article>
        
          { <div>
            <h2>{user.title}</h2>
            <h4>{user.company}</h4>
            <h4>{user.dates}</h4>
            <ul>
              {user.duties?.map((duty,index)=>(
               <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>}
    
      </article>
      </section>

      
    </>
  );
}

export default App;
