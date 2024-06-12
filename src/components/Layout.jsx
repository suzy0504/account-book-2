import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../lib/api/auth";

export default function Layout({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/sign_in");
    localStorage.clear();
  };

  return (
    <>
      <header className="bg-wind text-white p-2 shadow-md rounded-xl">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">
                HOME
              </a>
              <a href="/profile" className="ml-4 text-xl">
                내 프로필
              </a>
            </div>
            <div className="flex justify-center items-center flex-grow">
              {user && (
                <div className="flex items-center">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-3">{user.nickname}</span>
                </div>
              )}
            </div>{" "}
            <button
              onClick={handleLogout}
              className="bg-oatMile hover:bg-orchidDust text-black font-bold py-1 px-4 rounded mr-1"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
