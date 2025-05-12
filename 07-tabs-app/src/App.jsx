import { useEffect, useState } from "react";

const url =
  "https://api.allorigins.win/raw?url=" +
  encodeURIComponent("https://course-api.com/react-tabs-project");

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
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
    const singleUser = users[id];
    setUser(singleUser);
  };

  return (
    <>
      <h2>Tab application</h2>

      <section>
        {users.map((user) => (
          <div key={user.id}>
            <button className="btn" onClick={()=>handleUserChange(user.id)}>{user.company}</button>
          </div>
        ))}
      </section>

      <section>
        {user.map((item) => {
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h4>{item.company}</h4>
            <h4>{item.dates}</h4>
            <ul>
              <li>{item.duties}</li>
            </ul>
          </div>;
        })}
      </section>
    </>
  );
}

export default App;
