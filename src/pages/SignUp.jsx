import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    if (id.length < 4 || id.length > 15) {
      alert("패스워드는 4글자에서 15글자 이내로만 가능합니다!");
      return;
    }
    if (id.length < 1 || id.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/sign_in");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-fushihBlush rounded-xl shadow-lg flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl font-bold mb-10 text-gray-800 text-white">
        회원가입
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
        <div className="mb-2">
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
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="nickname">
            닉네임
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="nickname"
            placeholder="닉네임을 입력하세요"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between space-x-16">
          <button
            className="bg-white text-black hover:bg-wind hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRegister}
          >
            회원가입
          </button>
          <button
            className="bg-white text-black hover:bg-wind hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              navigate("/login");
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
