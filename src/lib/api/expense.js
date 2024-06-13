import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    console.error(err);
    alert("데이터를 로드할 수 없습니다.");
  }
};

export const getExpense = async ({ queryKey }) => {
  const [, id] = queryKey;
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${id}`);
    return response.data || {};
  } catch (err) {
    console.error(err);
    alert("데이터를 로드할 수 없습니다.");
    return {};
  }
};

export const postExpense = async (newExpenses) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpenses
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
    // alert("데이터를 쓸 수 없습니다.");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
