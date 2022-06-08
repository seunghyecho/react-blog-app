import { sampleUserData } from "../../../utils/user";

const handler = (_req, res) => {
  // 아래 내용 실행, 실패시 에러 감지후 catch에게 보냄
  try {
    // sampleUserData가 Array가 아닐때 에러 메시지 출력
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }

    // sampleUserData가 Array 일때 정상코드(200) 응답(res)하고, json형식으로 유저 데이터 출력
    res.status(200).json(sampleUserData);
  } catch (err) {
    // try 실패시, 에러코드(500) 응답(res)하고, json형식으로 에러 메시지 출력
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
