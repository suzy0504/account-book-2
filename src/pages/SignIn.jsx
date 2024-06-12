import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api/auth";

export default function SignIn({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSingIn = async () => {
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });

    alert("로그인이 되었습니다.");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-fushihBlush rounded-xl shadow-lg flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl font-bold mb-10 text-gray-800 text-white">
        로그인
      </h2>
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="id">
            아이디
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="password">
            비밀번호
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-white text-black hover:bg-wind hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSingIn}
          >
            로그인
          </button>
          <button
            className="bg-white text-black hover:bg-wind hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              navigate("/sign_up");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
