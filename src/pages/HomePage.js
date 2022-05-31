import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../actions/userAction";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
        </tr>
        {users.map((user, i) => {
          return (
            <tr key={i}>
              <td>
                {user.name} {user.id}
              </td>
              <td>{user.email}</td>
              <td>{user.address?.city}</td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <button>
                  <Link
                    to={`user/${user.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Detail
                  </Link>
                </button>

                <button>Edit</button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default HomePage;
