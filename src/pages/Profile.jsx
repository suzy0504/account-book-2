import { useState } from "react";
import { updateProfile } from "../lib/api/auth";

export default function Profile({ user, setUser }) {
  const [nickName, setNickName] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickName);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickName: response.nickName,
        avatar: response.avatar,
      });
      navigator("/");
    }
  };

  return (
    <div class="max-w-lg mx-auto p-6 bg-orchidDust rounded shadow-md rounded-xl mt-2">
      <h2 class="text-2xl font-semibold mb-6">프로필 수정</h2>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="nickname">
          닉네임
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nickname"
          type="text"
          placeholder="닉네임"
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-bold mb-2" for="avatarImage">
          아바타 이미지
        </label>
        <input
          class="h-10 bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="avatarImage"
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </div>
      <button
        class="bg-oatMile hover:bg-wind hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleUpdateProfile}
      >
        프로필 업데이트
      </button>
    </div>
  );
}
